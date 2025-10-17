import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const popularSearches = [
    'Banking Jobs',
    'Government',
    'Teaching',
    'Railway Jobs',
    'Police',
    'Engineering'
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-primary via-accent to-secondary">
      {/* EXTREME CHAOTIC GEOMETRIC BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border-8 border-foreground bg-accent rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-slide-shadow"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-6 border-foreground bg-secondary -rotate-6 animate-wobble"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-8 border-foreground bg-primary rotate-45 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-6 border-foreground bg-background rotate-12"></div>
        
        {/* Medium shapes */}
        <div className="absolute top-1/3 left-1/3 w-20 h-20 border-6 border-foreground bg-[hsl(var(--lime-green))] -rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border-6 border-foreground bg-[hsl(var(--cyber-purple))] rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border-4 border-foreground bg-[hsl(var(--toxic-orange))] -rotate-6"></div>
        <div className="absolute top-1/4 right-1/2 w-20 h-20 border-6 border-foreground bg-[hsl(var(--neon-cyan))] rotate-12"></div>
        
        {/* Small chaotic shapes */}
        <div className="absolute top-32 left-1/2 w-12 h-12 border-4 border-foreground bg-accent -rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-14 h-14 border-4 border-foreground bg-secondary rotate-90"></div>
        <div className="absolute top-1/2 left-20 w-10 h-10 border-4 border-foreground bg-primary -rotate-12"></div>
        <div className="absolute bottom-32 right-1/3 w-16 h-16 border-4 border-foreground bg-[hsl(var(--electric-pink))] rotate-45"></div>
        
        {/* Tiny accent shapes */}
        <div className="absolute top-40 right-40 w-8 h-8 border-4 border-foreground bg-accent rotate-6"></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 border-4 border-foreground bg-secondary -rotate-6"></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-6 border-2 border-foreground bg-primary rotate-45"></div>
        <div className="absolute bottom-1/2 right-20 w-6 h-6 border-2 border-foreground bg-accent -rotate-45"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-foreground/20 rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-2 h-full bg-foreground/20 -rotate-12"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="animate-fade-in mb-12">
          <h1 className="brutal-heading text-5xl md:text-7xl text-background mb-6 text-glitch brutal-stamped animate-rotate-in">
            FIND YOUR DREAM JOB
          </h1>
          <p className="text-xl md:text-2xl text-background font-black max-w-2xl mx-auto drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
            Search thousands of opportunities. Your next career starts here!
          </p>
        </div>

        {/* MEGA BRUTAL Search Bar */}
        <div className="brutal-box-tritone bg-background p-2 flex flex-col md:flex-row items-stretch gap-2 max-w-2xl mx-auto mb-12 animate-rotate-in">
          <Input
            type="text"
            placeholder="Job title, keywords..."
            className="flex-1 border-6 border-foreground bg-background focus-visible:ring-0 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-lg px-6 py-3 font-black uppercase"
          />
          <Button size="lg" variant="brutal" className="px-8 border-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Search className="w-5 h-5 mr-2" />
            SEARCH
          </Button>
        </div>

        {/* Popular Searches */}
        <div className="animate-bounce-in">
          <div className="flex items-center justify-center mb-6">
            <div className="brutal-box-tritone bg-accent px-6 py-3 inline-flex items-center gap-2 animate-wobble">
              <TrendingUp className="w-6 h-6" strokeWidth={3} />
              <span className="font-black uppercase tracking-wider text-lg">Hot Searches</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSearches.map((search, index) => (
              <Button
                key={search}
                variant="outline"
                size="sm"
                className={`font-black uppercase border-4 hover-wobble ${
                  index % 3 === 0 ? 'shadow-[4px_4px_0px_0px] shadow-primary hover:shadow-[6px_6px_0px_0px] hover:shadow-primary' :
                  index % 3 === 1 ? 'shadow-[4px_4px_0px_0px] shadow-secondary hover:shadow-[6px_6px_0px_0px] hover:shadow-secondary' :
                  'shadow-[4px_4px_0px_0px] shadow-accent hover:shadow-[6px_6px_0px_0px] hover:shadow-accent'
                } hover:translate-x-[-2px] hover:translate-y-[-2px] hover:rotate-1`}
              >
                {search}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;