import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Search, Smartphone } from 'lucide-react';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Latest Jobs', href: '/jobs' },
    { label: 'Admit Cards', href: '/admit-cards' },
    { label: 'Results', href: '/results' },
    { label: 'Education', href: '/education' },
  ];

  return (
    <header className="border-b-4 border-foreground sticky top-0 z-50 bg-background">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-background py-3 border-b-4 border-foreground">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm font-bold">
          <span className="drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">⚡ NEW JOBS POSTED! CHECK NOW!</span>
          <Button variant="ghost" size="sm" className="text-background hover:bg-background/20 border-2 border-background font-black">
            <Smartphone className="w-4 h-4 mr-2" />
            GET APP
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 bg-background">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 border-4 border-foreground bg-primary flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all">
              <span className="text-primary-foreground font-black text-2xl">J</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-foreground tracking-tight">JOBALERT</h1>
              <p className="text-xs text-foreground font-bold uppercase tracking-wide">Your Career Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 border-4 border-foreground font-black uppercase text-sm transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] ${
                  index % 3 === 0 ? 'bg-primary text-primary-foreground' :
                  index % 3 === 1 ? 'bg-secondary text-secondary-foreground' :
                  'bg-accent text-accent-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="icon" className="md:hidden font-black border-4">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;