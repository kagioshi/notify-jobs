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
    <footer className="bg-card border-t border-border">
      {/* Ad Slot - Footer */}
      <div className="container mx-auto px-4 py-6">
        <AdSlot name="footer" />
      </div>

      {/* Main Footer Content */}
      <div className="bg-muted">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">J</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">JobAlert</h3>
                  <p className="text-xs text-muted-foreground">Find Your Dream Job</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your trusted source for government job notifications, results, and admit cards. 
                Stay updated with the latest opportunities across India.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>📧 info@jobalert.com</p>
                <p>📱 +91 9876543210</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                 {quickLinks.map((link) => (
                   <li key={link.href}>
                     <Link 
                       href={link.href}
                       className="text-sm text-muted-foreground hover:text-primary transition-colors"
                     >
                       {link.label}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
 
             {/* Categories */}
             <div>
               <h4 className="text-lg font-semibold text-foreground mb-4">Categories</h4>
               <ul className="space-y-2">
                 {categories.map((category) => (
                   <li key={category.href}>
                     <Link 
                       href={category.href}
                       className="text-sm text-muted-foreground hover:text-primary transition-colors"
                     >
                       {category.label}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
 
             {/* Resources */}
             <div>
               <h4 className="text-lg font-semibold text-foreground mb-4">Resources</h4>
               <ul className="space-y-2">
                 {resources.map((resource) => (
                   <li key={resource.href}>
                     <Link 
                       href={resource.href}
                       className="text-sm text-muted-foreground hover:text-primary transition-colors"
                     >
                       {resource.label}
                     </Link>
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2024 JobAlert. All rights reserved.
            </div>
             <div className="flex space-x-6 text-sm">
               <Link href="/privacy" className="hover:text-muted-foreground transition-colors">
                 Privacy Policy
               </Link>
               <Link href="/terms" className="hover:text-muted-foreground transition-colors">
                 Terms of Service
               </Link>
               <Link href="/contact" className="hover:text-muted-foreground transition-colors">
                 Contact Us
               </Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;