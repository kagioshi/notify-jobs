'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Smartphone } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', color: 'bg-[hsl(var(--primary))]' },
    { label: 'Latest Jobs', href: '/jobs', color: 'bg-[hsl(var(--secondary))]' },
    { label: 'Admit Cards', href: '/admit-cards', color: 'bg-[hsl(var(--accent))]' },
    { label: 'Results', href: '/results', color: 'bg-[hsl(var(--brutal-orange))]' },
    { label: 'Education', href: '/education', color: 'bg-[hsl(var(--brutal-green))]' },
  ];

  return (
    <header className="bg-background sticky top-0 z-50 border-b-4 border-foreground">
      {/* Top Bar - Brutal Style */}
      <div className="bg-[hsl(var(--primary))] text-primary-foreground py-3 border-b-4 border-foreground">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <span className="font-black uppercase tracking-tight text-center sm:text-left">
            🔥 Latest Update: Government Job Alert - New Notifications Available
          </span>
          <button className="brutal-btn-accent text-xs px-4 py-2 flex items-center gap-2 whitespace-nowrap">
            <Smartphone className="w-4 h-4" />
            Download App
          </button>
        </div>
      </div>

      {/* Main Navigation - Brutal Style */}
      <nav className="container mx-auto px-4 py-4 bg-background">
        <div className="flex items-center justify-between">
          {/* Logo - Brutal Box */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-[hsl(var(--primary))] border-4 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] group-hover:shadow-[6px_6px_0px_hsl(var(--foreground))] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all flex items-center justify-center">
              <span className="text-primary-foreground font-black text-2xl">J</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">JobAlert</h1>
              <p className="text-xs font-bold text-muted-foreground uppercase">Find Your Dream Job</p>
            </div>
          </Link>

          {/* Desktop Navigation - Brutal Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.color} text-white px-4 py-2 border-3 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-black text-sm uppercase tracking-tight`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Brutal */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden brutal-btn px-3 py-3"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu - Brutal Style */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 brutal-box p-4 bg-background animate-fade-in">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${item.color} text-white px-4 py-3 border-3 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-black text-sm uppercase tracking-tight text-center`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;