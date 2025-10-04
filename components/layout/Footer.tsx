import React from 'react';
import Link from 'next/link';
import { AdSlot } from '@/components/common/AdSlot';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Latest Jobs', href: '/jobs' },
    { label: 'Admit Cards', href: '/admit-cards' },
    { label: 'Results', href: '/results' },
    { label: 'Education', href: '/education' },
  ];

  const categories = [
    { label: 'Central Jobs', href: '/central-jobs' },
    { label: 'State Jobs', href: '/state-jobs' },
    { label: 'Bank Jobs', href: '/bank-jobs' },
    { label: 'Railway Jobs', href: '/railway-jobs' },
    { label: 'Police Jobs', href: '/police-jobs' },
  ];

  const resources = [
    { label: 'Syllabus', href: '/syllabus' },
    { label: 'Answer Keys', href: '/answer-keys' },
    { label: 'Previous Papers', href: '/previous-papers' },
    { label: 'Study Material', href: '/study-material' },
    { label: 'Online Tests', href: '/online-tests' },
  ];

  return (
    <footer className="bg-background border-t-4 border-foreground">
      {/* Ad Slot - Footer - Brutal Style */}
      <div className="container mx-auto px-4 py-6">
        <div className="brutal-box p-4 bg-muted">
          <AdSlot name="footer" />
        </div>
      </div>

      {/* Main Footer Content - Brutal Grid */}
      <div className="bg-[hsl(var(--primary))] border-y-4 border-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Info - Brutal Box */}
            <div className="brutal-box bg-background p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[hsl(var(--accent))] border-3 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] flex items-center justify-center">
                  <span className="text-foreground font-black text-xl">J</span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-foreground uppercase">JobAlert</h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Dream Job</p>
                </div>
              </div>
              <p className="text-sm font-bold text-foreground mb-4 leading-relaxed">
                Your trusted source for government job notifications, results, and admit cards.
              </p>
              <div className="text-sm font-bold text-foreground space-y-1">
                <p>📧 info@jobalert.com</p>
                <p>📱 +91 9876543210</p>
              </div>
            </div>

            {/* Quick Links - Brutal Box */}
            <div className="brutal-box bg-[hsl(var(--secondary))] p-6">
              <h4 className="text-lg font-black text-white mb-4 uppercase tracking-tight">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm font-bold text-white hover:text-[hsl(var(--accent))] transition-colors uppercase tracking-tight block hover:translate-x-1 transition-transform"
                    >
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories - Brutal Box */}
            <div className="brutal-box bg-[hsl(var(--accent))] p-6">
              <h4 className="text-lg font-black text-foreground mb-4 uppercase tracking-tight">Categories</h4>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.href}>
                    <Link 
                      href={category.href}
                      className="text-sm font-bold text-foreground hover:text-[hsl(var(--primary))] transition-colors uppercase tracking-tight block hover:translate-x-1 transition-transform"
                    >
                      → {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Brutal Box */}
            <div className="brutal-box bg-[hsl(var(--brutal-green))] p-6">
              <h4 className="text-lg font-black text-white mb-4 uppercase tracking-tight">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.href}>
                    <Link 
                      href={resource.href}
                      className="text-sm font-bold text-white hover:text-[hsl(var(--accent))] transition-colors uppercase tracking-tight block hover:translate-x-1 transition-transform"
                    >
                      → {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Brutal Style */}
      <div className="bg-foreground text-background border-t-4 border-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm font-black uppercase tracking-tight">
              © 2024 JobAlert. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase">
              <Link href="/privacy" className="hover:text-[hsl(var(--accent))] transition-colors">
                Privacy
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-[hsl(var(--accent))] transition-colors">
                Terms
              </Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-[hsl(var(--accent))] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;