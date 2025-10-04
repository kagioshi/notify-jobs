import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from '../../../prismicio'
import { PrismicRichText } from '@prismicio/react'
import { format, isValid } from 'date-fns'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { AdSlot } from '@/components/common/AdSlot'
import Comments from '@/components/common/Comments'
import { AccessibilityControls } from '@/components/accessibility/AccessibilityControls'
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Accessibility Controls - Brutal Style */}
              <AccessibilityControls
                text={fullText}
                title={page.data.title}
                autoExtractText={true}
                contentSelector=".content-scalable"
              />

              {/* Header Ad - Brutal */}
              <div className="brutal-box p-4 bg-muted">
                <AdSlot name="header" />
              </div>

              {/* Job Details Card - Brutal Style */}
              <div className="brutal-card bg-background content-scalable">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="space-y-3 flex-1">
                      <h1 className="brutal-heading text-3xl md:text-4xl text-balance">
                        {page.data.title}
                      </h1>
                      {page.data.organization && (
                        <div className="flex items-center gap-2">
                          <div className="bg-[hsl(var(--primary))] p-2 border-2 border-foreground">
                            <Building className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-black text-foreground uppercase">{page.data.organization}</span>
                        </div>
                      )}
                    </div>
                    {page.data.is_featured && (
                      <div className="brutal-btn-accent text-xs px-4 py-2 border-2">
                        ⭐ FEATURED
                      </div>
                    )}
                  </div>

                  {/* Key Information Grid - Brutal Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {page.data.location && (
                      <div className="brutal-box bg-[hsl(var(--primary))] p-4">
                        <div className="flex items-center gap-2 text-white">
                          <MapPin className="h-5 w-5" />
                          <div>
                            <div className="text-xs font-bold uppercase opacity-80">Location</div>
                            <div className="font-black">{page.data.location}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {page.data.vacancies && (
                      <div className="brutal-box bg-[hsl(var(--secondary))] p-4">
                        <div className="flex items-center gap-2 text-white">
                          <Users className="h-5 w-5" />
                          <div>
                            <div className="text-xs font-bold uppercase opacity-80">Vacancies</div>
                            <div className="font-black">{page.data.vacancies}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {publishedDate && (
                      <div className="brutal-box bg-[hsl(var(--accent))] p-4">
                        <div className="flex items-center gap-2 text-foreground">
                          <Calendar className="h-5 w-5" />
                          <div>
                            <div className="text-xs font-bold uppercase opacity-80">Published</div>
                            <div className="font-black">{publishedDate}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {lastDate && (
                      <div className="brutal-box bg-[hsl(var(--brutal-orange))] p-4">
                        <div className="flex items-center gap-2 text-white">
                          <Clock className="h-5 w-5" />
                          <div>
                            <div className="text-xs font-bold uppercase opacity-80">Last Date</div>
                            <div className="font-black">{lastDate}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {page.data.education_level && (
                      <div className="brutal-box bg-[hsl(var(--brutal-green))] p-4">
                        <div className="flex items-center gap-2 text-white">
                          <GraduationCap className="h-5 w-5" />
                          <div>
                            <div className="text-xs font-bold uppercase opacity-80">Education</div>
                            <div className="font-black">{page.data.education_level}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {page.data.category && (
                      <div className="brutal-box bg-[hsl(var(--hot-pink))] p-4">
                        <div className="flex items-center gap-2 text-white">
                          <div className="text-xs font-bold uppercase opacity-80">Category</div>
                          <div className="font-black">{page.data.category}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Summary - Brutal */}
                  {page.data.short_summary && (
                    <div className="space-y-3 pt-4 border-t-4 border-foreground">
                      <h2 className="brutal-heading text-2xl">Summary</h2>
                      <div className="prose prose-gray max-w-none font-bold">
                        <PrismicRichText field={page.data.short_summary} />
                      </div>
                    </div>
                  )}

                  {/* Mid Content Ad - Brutal */}
                  <div className="brutal-box p-4 bg-muted my-6">
                    <AdSlot name="content-inline" />
                  </div>

                  {/* Full Details - Brutal */}
                  {page.data.body && (
                    <div className="space-y-3 pt-4 border-t-4 border-foreground">
                      <h2 className="brutal-heading text-2xl">Full Details</h2>
                      <div className="prose prose-gray max-w-none font-bold">
                        <PrismicRichText field={page.data.body} />
                      </div>
                    </div>
                  )}

                  {/* Action Buttons - Brutal */}
                  <div className="flex flex-wrap gap-3 pt-6 border-t-4 border-foreground">
                    {page.data.apply_url?.url && (
                      <button className="brutal-btn px-6 py-3 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Apply Now
                      </button>
                    )}
                    
                    {page.data.pdf_attachment?.url && (
                      <button className="brutal-btn-secondary px-6 py-3 flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download PDF
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Comments Section - Brutal */}
              <div className="brutal-card bg-background">
                <h3 className="brutal-heading text-2xl mb-4">Comments & Discussion</h3>
                <Comments 
                  pageId={params.uid}
                  pageTitle={page.data.title}
                />
              </div>

              {/* Bottom Ad - Brutal */}
              <div className="brutal-box p-4 bg-muted">
                <AdSlot name="footer" />
              </div>
            </div>

            {/* Sidebar - Brutal */}
            <div className="space-y-6">
              <div className="brutal-box p-4 bg-muted">
                <AdSlot name="sidebar-top" />
              </div>
              
              <div className="brutal-card bg-[hsl(var(--accent))]">
                <h3 className="brutal-heading text-xl mb-4 text-foreground">Job Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-3 border-2 border-foreground">
                    <strong className="font-black uppercase">Category:</strong>
                    <div className="font-bold">{page.data.category || 'Not specified'}</div>
                  </div>
                  {page.data.state && (
                    <div className="bg-white p-3 border-2 border-foreground">
                      <strong className="font-black uppercase">State:</strong>
                      <div className="font-bold">{page.data.state}</div>
                    </div>
                  )}
                  {page.data.tags && page.data.tags.length > 0 && (
                    <div className="bg-white p-3 border-2 border-foreground">
                      <strong className="font-black uppercase">Tags:</strong>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {page.data.tags.map((tag: any, index: number) => (
                          <span key={index} className="bg-foreground text-background px-2 py-1 text-xs font-black uppercase">
                            {tag.tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="brutal-box p-4 bg-muted">
                <AdSlot name="sidebar-mid" />
              </div>
              
              <div className="brutal-box p-4 bg-muted">
                <AdSlot name="sidebar-bottom" />
              </div>
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