import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from '../../../prismicio'
import { PrismicRichText } from '@prismicio/react'
import { format, isValid } from 'date-fns'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { AdSlot } from '@/components/enhanced/EnhancedAdSlot'
import Comments from '@/components/common/Comments'
import AccessibilityControls from '@/components/accessibility/AccessibilityControls'
import StructuredData from '@/components/seo/StructuredData'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Calendar, 
  MapPin, 
  Building, 
  Users, 
  ExternalLink, 
  Download,
  Clock,
  GraduationCap
} from 'lucide-react'

interface PageProps {
  params: { uid: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const client = createClient()
  
  try {
    const page = await client.getByUID('job_notification', params.uid)
    
    return {
      title: page.data.meta_title || page.data.title,
      description: page.data.meta_description || page.data.short_summary?.[0]?.text,
      openGraph: {
        title: page.data.meta_title || page.data.title,
        description: page.data.meta_description || page.data.short_summary?.[0]?.text,
        type: 'article',
        publishedTime: page.data.published_date,
        authors: [page.data.organization || 'JobAlert'],
      },
      twitter: {
        card: 'summary_large_image',
        title: page.data.meta_title || page.data.title,
        description: page.data.meta_description || page.data.short_summary?.[0]?.text,
      }
    }
  } catch {
    return {
      title: 'Job Notification Not Found',
      description: 'The requested job notification could not be found.'
    }
  }
}

export default async function JobNotificationPage({ params }: PageProps) {
  const client = createClient()
  
  try {
    const page = await client.getByUID('job_notification', params.uid)
    
    const formatDate = (date: string) => {
      if (!date) return null
      const parsedDate = new Date(date)
      return isValid(parsedDate) ? format(parsedDate, 'MMM dd, yyyy') : null
    }

    const publishedDate = formatDate(page.data.published_date)
    const lastDate = formatDate(page.data.last_date_to_apply)
    
    // Prepare text for accessibility controls
    const summaryText = page.data.short_summary?.map((block: any) => block.text).join(' ') || ''
    const bodyText = page.data.body?.map((block: any) => block.text).join(' ') || ''
    const fullText = `${summaryText} ${bodyText}`.trim()

    return (
      <div className="min-h-screen bg-background">
        {/* Structured Data */}
        <StructuredData 
          type="jobPosting" 
          data={{
            title: page.data.title,
            organization: page.data.organization,
            location: page.data.location,
            publishedDate: page.data.published_date,
            lastDate: page.data.last_date_to_apply,
            description: summaryText,
            url: page.data.apply_url?.url || ''
          }} 
        />

        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Accessibility Controls */}
              <AccessibilityControls
                text={fullText}
                title={page.data.title}
                autoExtractText={true}
                contentSelector=".content-scalable"
                className="mb-6"
              />

              {/* Header Ad */}
              <AdSlot name="inline_top" />

              {/* Job Details Card */}
              <Card className="content-scalable">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold leading-tight text-balance">
                        {page.data.title}
                      </h1>
                      {page.data.organization && (
                        <div className="flex items-center text-muted-foreground">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{page.data.organization}</span>
                        </div>
                      )}
                    </div>
                    {page.data.is_featured && (
                      <Badge variant="default" className="ml-4">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Information Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                    {page.data.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">{page.data.location}</span>
                      </div>
                    )}
                    
                    {page.data.vacancies && (
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">{page.data.vacancies} Vacancies</span>
                      </div>
                    )}
                    
                    {publishedDate && (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">Published: {publishedDate}</span>
                      </div>
                    )}
                    
                    {lastDate && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-destructive" />
                        <span className="text-sm font-medium text-destructive">
                          Last Date: {lastDate}
                        </span>
                      </div>
                    )}
                    
                    {page.data.education_level && (
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">{page.data.education_level}</span>
                      </div>
                    )}
                    
                    {page.data.category && (
                      <div className="flex items-center">
                        <Badge variant="outline">{page.data.category}</Badge>
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  {page.data.short_summary && (
                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold">Summary</h2>
                      <div className="prose prose-gray max-w-none">
                        <PrismicRichText field={page.data.short_summary} />
                      </div>
                    </div>
                  )}

                  {/* Mid Content Ad */}
                  <AdSlot name="inline_mid" />

                  {/* Full Details */}
                  {page.data.body && (
                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold">Full Details</h2>
                      <div className="prose prose-gray max-w-none">
                        <PrismicRichText field={page.data.body} />
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    {page.data.apply_url?.url && (
                      <Button asChild className="focus-ring">
                        <a 
                          href={page.data.apply_url.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Apply Now
                        </a>
                      </Button>
                    )}
                    
                    {page.data.pdf_attachment?.url && (
                      <Button variant="outline" asChild className="focus-ring">
                        <a 
                          href={page.data.pdf_attachment.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          download
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Comments 
                pageId={params.uid}
                pageTitle={page.data.title}
              />

              {/* Bottom Ad */}
              <AdSlot name="inline_bottom" />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AdSlot name="sidebar_top" />
              
              <Card>
                <CardHeader>
                  <CardTitle>Related Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <strong>Category:</strong> {page.data.category || 'Not specified'}
                    </div>
                    {page.data.state && (
                      <div>
                        <strong>State:</strong> {page.data.state}
                      </div>
                    )}
                    {page.data.tags && page.data.tags.length > 0 && (
                      <div>
                        <strong>Tags:</strong>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {page.data.tags.map((tag: any, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag.tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <AdSlot name="sidebar_mid" />
              <AdSlot name="sidebar_bottom" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  } catch (error) {
    notFound()
  }
}