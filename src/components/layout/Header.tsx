import React from 'react';
import { Link } from 'react-router-dom';
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
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>Latest Update: Government Job Alert - New Notifications Available</span>
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-light">
            <Smartphone className="w-4 h-4 mr-2" />
            Download Mobile App
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">J</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">JobAlert</h1>
              <p className="text-xs text-muted-foreground">Find Your Dream Job</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;