import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import CategoriesSection from '@/components/sections/CategoriesSection'
import JobNotificationsSection from '@/components/sections/JobNotificationsSection'
import StatesSection from '@/components/sections/StatesSection'
import DepartmentsSection from '@/components/sections/DepartmentsSection'
import EducationSection from '@/components/sections/EducationSection'
import CallToActionSection from '@/components/sections/CallToActionSection'
import StructuredData from '@/components/seo/StructuredData'
import { AdSlot } from '@/components/common/AdSlot'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData type="website" />
      
      {/* Header Ad Slot */}
      <div className="hidden md:block">
        <AdSlot 
          name="header" 
          className="w-full max-w-4xl mx-auto my-4"
        />
      </div>

      {/* Mobile Sticky Ad */}
      <div className="md:hidden sticky top-0 z-40 bg-background border-b">
        <AdSlot 
          name="mobile-sticky" 
          className="w-full"
        />
      </div>

      <Header />
      
      <main className="flex-1">
        <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]">Loading...</div>}>
          <HeroSection />
          <CategoriesSection />
          <JobNotificationsSection />
          <StatesSection />
          <DepartmentsSection />
          <EducationSection />
          <CallToActionSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}