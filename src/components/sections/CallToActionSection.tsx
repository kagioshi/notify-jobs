import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Bell, Star } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-accent border-y-8 border-foreground">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,.05)_10px,rgba(0,0,0,.05)_20px)]"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl brutal-heading mb-6 text-accent-foreground">
              Up to ₹200K on us for startups
            </h2>
            <p className="text-xl text-accent-foreground/90 mb-8 font-bold">
              Get free credits to hire top talent through our premium job notification service and recruitment platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              variant="brutal"
              className="bg-primary text-primary-foreground px-10 py-6 text-lg"
            >
              <Star className="w-6 h-6 mr-2" strokeWidth={3} />
              Apply Now
            </Button>
            
            <Button 
              size="lg" 
              variant="brutal"
              className="bg-secondary text-secondary-foreground px-10 py-6 text-lg"
            >
              <Smartphone className="w-6 h-6 mr-2" strokeWidth={3} />
              Download App
            </Button>
          </div>

          <div className="mt-10 inline-flex items-center px-6 py-3 border-4 border-foreground bg-background animate-bounce-in">
            <Bell className="w-6 h-6 mr-3 text-foreground" strokeWidth={3} />
            <span className="text-sm font-black text-foreground uppercase tracking-wide">Join 2M+ job seekers getting instant notifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;