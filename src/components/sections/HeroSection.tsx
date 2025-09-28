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
    <section className="hero-gradient py-20 px-4 text-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Search through thousands of job listings and find the perfect opportunity for you.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-input bg-white rounded-full p-2 flex items-center max-w-2xl mx-auto mb-8 animate-slide-up">
          <Input
            type="text"
            placeholder="Job title, keywords, or company"
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-lg px-6"
          />
          <Button size="lg" className="rounded-full px-8">
            <Search className="w-5 h-5 mr-2" />
            Search Jobs
          </Button>
        </div>

        {/* Popular Searches */}
        <div className="animate-bounce-in">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5 text-white/80 mr-2" />
            <span className="text-white/80 font-medium">Popular Searches:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSearches.map((search) => (
              <Button
                key={search}
                variant="ghost"
                size="sm"
                className="text-white/90 hover:bg-white/20 hover:text-white rounded-full border border-white/30"
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