import React from 'react';
import { Smartphone, Bell, Star, Zap, TrendingUp, Award } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="relative overflow-hidden bg-background border-y-4 border-foreground">
      {/* Brutal Gradient Background with Geometric Shapes */}
      <div className="hero-gradient py-16 px-4 relative">
        {/* Geometric Shapes - Brutal Style */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-[hsl(var(--accent))] border-4 border-foreground shadow-[8px_8px_0px_hsl(var(--foreground))] rotate-12 hidden md:block"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-[hsl(var(--secondary))] border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] -rotate-12 hidden md:block"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[hsl(var(--brutal-orange))] border-4 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-[hsl(var(--brutal-green))] border-4 border-foreground shadow-[8px_8px_0px_hsl(var(--foreground))] -rotate-6 hidden lg:block"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading - Brutal */}
            <div className="animate-fade-in">
              <h2 className="brutal-heading text-3xl md:text-5xl text-foreground mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                Get ₹200K Worth of Premium Features Free!
              </h2>
              <p className="text-xl font-bold text-foreground mb-8 uppercase tracking-tight">
                Join 2M+ Job Seekers • Instant Notifications • Premium Resources
              </p>
            </div>

            {/* Feature Boxes - Brutal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 animate-slide-up">
              {[
                { icon: Zap, label: 'Instant Alerts', color: 'bg-[hsl(var(--primary))]' },
                { icon: TrendingUp, label: 'Top Jobs', color: 'bg-[hsl(var(--secondary))]' },
                { icon: Award, label: 'Premium Access', color: 'bg-[hsl(var(--accent))]' },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className={`${feature.color} brutal-box p-6 animate-bounce-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-8 h-8 text-white mx-auto mb-2" />
                    <span className="text-white font-black text-sm uppercase">{feature.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons - Brutal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-8">
              <button className="brutal-btn px-8 py-4 text-lg flex items-center gap-2">
                <Star className="w-5 h-5" />
                Apply Now - It's Free
              </button>
              
              <button className="brutal-btn-accent px-8 py-4 text-lg flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Download App
              </button>
            </div>

            {/* Notification Badge - Brutal */}
            <div className="inline-flex items-center gap-3 bg-white px-6 py-4 border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] animate-bounce-in">
              <Bell className="w-6 h-6 text-foreground animate-pulse" />
              <span className="text-sm font-black text-foreground uppercase">
                Join 2M+ Job Seekers Getting Instant Notifications
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;