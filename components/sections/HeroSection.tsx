'use client';

import React, { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const popularSearches = [
    { label: 'SSC', color: 'bg-[hsl(var(--primary))]' },
    { label: 'Railway', color: 'bg-[hsl(var(--secondary))]' },
    { label: 'Bank', color: 'bg-[hsl(var(--accent))]' },
    { label: 'UPSC', color: 'bg-[hsl(var(--brutal-orange))]' },
    { label: 'Police', color: 'bg-[hsl(var(--brutal-green))]' },
    { label: 'Teaching', color: 'bg-[hsl(var(--hot-pink))]' },
  ];

  return (
    <section className="relative overflow-hidden bg-background border-b-4 border-foreground">
      {/* Brutal Gradient Background with Geometric Shapes */}
      <div className="hero-gradient py-16 md:py-24 px-4 relative">
        {/* Geometric Shapes - Brutal Style */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[hsl(var(--accent))] border-4 border-foreground shadow-[8px_8px_0px_hsl(var(--foreground))] rotate-12 hidden md:block"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[hsl(var(--secondary))] border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] -rotate-12 hidden md:block"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[hsl(var(--brutal-orange))] border-4 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-[hsl(var(--brutal-green))] border-4 border-foreground shadow-[8px_8px_0px_hsl(var(--foreground))] -rotate-6 hidden lg:block"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading - Brutal Typography */}
            <h1 className="brutal-heading text-4xl md:text-6xl lg:text-7xl mb-6 text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)] animate-fade-in">
              Find Your Dream Government Job
            </h1>
            
            <p className="text-lg md:text-xl font-bold text-foreground mb-8 uppercase tracking-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Latest Notifications • Results • Admit Cards • All in One Place
            </p>

            {/* Search Bar - Brutal Style */}
            <div className="search-input bg-background p-2 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-background border-3 border-foreground">
                  <Search className="w-5 h-5 text-foreground" />
                  <input
                    type="text"
                    placeholder="SEARCH JOBS, RESULTS, ADMIT CARDS..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-bold uppercase text-sm"
                  />
                </div>
                <button className="brutal-btn whitespace-nowrap px-6 py-3">
                  Search Now
                </button>
              </div>
            </div>

            {/* Popular Searches - Brutal Tags */}
            <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-2 font-black text-foreground uppercase text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Popular:</span>
              </div>
              {popularSearches.map((search, index) => (
                <button
                  key={search.label}
                  className={`${search.color} text-white px-4 py-2 border-3 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-black text-xs uppercase tracking-tight`}
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  {search.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Brutal Boxes */}
      <div className="bg-background py-8 border-t-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Active Jobs', value: '5000+', color: 'bg-[hsl(var(--primary))]' },
              { label: 'Results', value: '2000+', color: 'bg-[hsl(var(--secondary))]' },
              { label: 'Admit Cards', value: '1500+', color: 'bg-[hsl(var(--accent))]' },
              { label: 'Happy Users', value: '100K+', color: 'bg-[hsl(var(--brutal-green))]' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`${stat.color} brutal-box p-6 text-center animate-bounce-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-white uppercase tracking-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;