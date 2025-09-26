import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import StatesSection from '@/components/sections/StatesSection';
import JobNotificationsSection from '@/components/sections/JobNotificationsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import DepartmentsSection from '@/components/sections/DepartmentsSection';
import EducationSection from '@/components/sections/EducationSection';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import { AdSlot } from '@/components/common/AdSlot';

const Index = () => {
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
  );
};

export default Index;
