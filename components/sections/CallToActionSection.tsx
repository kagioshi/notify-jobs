import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Bell, Star } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="hero-gradient py-16 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Up to ₹200K on us for startups
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get free credits to hire top talent through our premium job notification service and recruitment platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold"
            >
              <Star className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20 border border-white/30 px-8 py-3"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center text-white/80 animate-bounce-in">
            <Bell className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Join 2M+ job seekers getting instant notifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;