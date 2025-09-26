import { Metadata } from 'next'
import { createClient } from '@/prismicio'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import CategoriesSection from '@/components/sections/CategoriesSection'
import StatesSection from '@/components/sections/StatesSection'
import JobNotificationsSection from '@/components/sections/JobNotificationsSection'
import CallToActionSection from '@/components/sections/CallToActionSection'
import DepartmentsSection from '@/components/sections/DepartmentsSection'
import EducationSection from '@/components/sections/EducationSection'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/seo/StructuredData'
import { AdSlot } from '@/components/common/AdSlot'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  
  try {
    const settings = await client.getSingle('site_settings')
    
    return {
      title: settings.data.default_meta_title || 'JobAlert - Latest Government Job Notifications',
      description: settings.data.default_meta_description || 'Latest government job notifications, results, and admit cards across India',
      openGraph: {
        title: settings.data.default_meta_title || 'JobAlert - Latest Government Job Notifications',
        description: settings.data.default_meta_description || 'Latest government job notifications, results, and admit cards across India',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        siteName: settings.data.site_name || 'JobAlert',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: settings.data.default_meta_title || 'JobAlert - Latest Government Job Notifications',
        description: settings.data.default_meta_description || 'Latest government job notifications, results, and admit cards across India',
      }
    }
  } catch (error) {
    return {
      title: 'JobAlert - Latest Government Job Notifications',
      description: 'Latest government job notifications, results, and admit cards across India'
    }
  }
}

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Structured Data */}
      <StructuredData type="website" />
      <StructuredData type="organization" />
      
      {/* Header Ad Slot */}
      <div className="container mx-auto px-4 py-2">
        <AdSlot name="header" />
      </div>
      
      <Header />
      <HeroSection />
      <CategoriesSection />
      <StatesSection />
      <JobNotificationsSection />
      <CallToActionSection />
      <DepartmentsSection />
      <EducationSection />
      <Footer />
      
      {/* Mobile Sticky Ad */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <AdSlot name="mobile-sticky" />
      </div>
    </div>
  )
}