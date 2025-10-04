import HeroSection from '@/components/sections/HeroSection';
import JobNotificationsSection from '@/components/sections/JobNotificationsSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import StatesSection from '@/components/sections/StatesSection';
import DepartmentsSection from '@/components/sections/DepartmentsSection';
import EducationSection from '@/components/sections/EducationSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AccessibilityControls } from '@/components/accessibility/AccessibilityControls';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Accessibility Controls - Fixed Position */}
      <div className="fixed bottom-4 right-4 z-50 hidden lg:block">
        <AccessibilityControls />
      </div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section with Search */}
        <HeroSection />
        
        {/* Latest Job Notifications with Prismic Integration */}
        <JobNotificationsSection />
        
        {/* Browse by Category */}
        <CategoriesSection />
        
        {/* Browse by State */}
        <StatesSection />
        
        {/* Departments & Resources */}
        <DepartmentsSection />
        
        {/* Education & Preparation */}
        <EducationSection />
        
        {/* Call to Action */}
        <CallToActionSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}