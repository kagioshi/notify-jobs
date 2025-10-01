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
      {/* Brutal Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-foreground bg-accent rotate-12"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-4 border-foreground bg-secondary -rotate-6"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-foreground bg-primary rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-4 border-foreground bg-background"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="animate-fade-in mb-12">
          <h1 className="brutal-heading text-5xl md:text-7xl text-background mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            FIND YOUR DREAM JOB
          </h1>
          <p className="text-xl md:text-2xl text-background/90 font-bold max-w-2xl mx-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
            Search thousands of opportunities. Your next career starts here!
          </p>
        </div>

        {/* Brutal Search Bar */}
        <div className="brutal-box bg-background p-2 flex flex-col md:flex-row items-stretch gap-2 max-w-2xl mx-auto mb-12 animate-slide-up">
          <Input
            type="text"
            placeholder="Job title, keywords..."
            className="flex-1 border-4 border-foreground bg-background focus-visible:ring-0 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg px-6 py-3 font-bold"
          />
          <Button size="lg" variant="brutal" className="px-8">
            <Search className="w-5 h-5 mr-2" />
            SEARCH
          </Button>
        </div>

        {/* Popular Searches */}
        <div className="animate-bounce-in">
          <div className="flex items-center justify-center mb-6">
            <div className="brutal-box bg-background px-4 py-2 inline-flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-black uppercase tracking-wide">Hot Searches</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSearches.map((search, index) => (
              <Button
                key={search}
                variant="outline"
                size="sm"
                className={`font-bold uppercase ${
                  index % 3 === 0 ? 'shadow-[4px_4px_0px_0px] shadow-primary' :
                  index % 3 === 1 ? 'shadow-[4px_4px_0px_0px] shadow-secondary' :
                  'shadow-[4px_4px_0px_0px] shadow-accent'
                } hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px]`}
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