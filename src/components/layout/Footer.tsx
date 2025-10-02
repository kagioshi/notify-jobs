import React from 'react';
import Link from 'next/link';
import BrutalAdSlot from '@/components/enhanced/BrutalAdSlot';

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
    <footer className="bg-background border-t-8 border-foreground">
      {/* Ad Slot - Footer */}
      <div className="container mx-auto px-4 py-6">
        <BrutalAdSlot name="footer" variant="colored" />
      </div>

      {/* Main Footer Content */}
      <div className="bg-muted/50 border-y-4 border-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary border-4 border-foreground flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-primary-foreground font-black text-xl">J</span>
                </div>
                <div>
                  <h3 className="text-xl brutal-heading">JobAlert</h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Find Your Dream Job</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 font-bold mb-4">
                Your trusted source for government job notifications, results, and admit cards. 
                Stay updated with the latest opportunities across India.
              </p>
              <div className="text-sm font-bold text-foreground space-y-1">
                <p>📧 info@jobalert.com</p>
                <p>📱 +91 9876543210</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg brutal-heading mb-4">Quick Links</h4>
               <ul className="space-y-2">
                 {quickLinks.map((link) => (
                   <li key={link.href}>
                     <Link 
                       href={link.href}
                       className="text-sm font-bold text-foreground/80 hover:text-primary hover:translate-x-1 inline-block transition-all"
                     >
                       → {link.label}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
 
             {/* Categories */}
             <div>
               <h4 className="text-lg brutal-heading mb-4">Categories</h4>
               <ul className="space-y-2">
                 {categories.map((category) => (
                   <li key={category.href}>
                     <Link 
                       href={category.href}
                       className="text-sm font-bold text-foreground/80 hover:text-secondary hover:translate-x-1 inline-block transition-all"
                     >
                       → {category.label}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
 
             {/* Resources */}
             <div>
               <h4 className="text-lg brutal-heading mb-4">Resources</h4>
               <ul className="space-y-2">
                 {resources.map((resource) => (
                   <li key={resource.href}>
                     <Link 
                       href={resource.href}
                       className="text-sm font-bold text-foreground/80 hover:text-accent hover:translate-x-1 inline-block transition-all"
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

      {/* Bottom Footer */}
      <div className="bg-foreground text-background border-t-4 border-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm font-black mb-4 md:mb-0 uppercase tracking-wide">
              © 2024 JobAlert. All rights reserved.
            </div>
             <div className="flex space-x-6 text-sm font-bold">
               <Link href="/privacy" className="hover:text-accent transition-colors uppercase">
                 Privacy Policy
               </Link>
               <Link href="/terms" className="hover:text-accent transition-colors uppercase">
                 Terms of Service
               </Link>
               <Link href="/contact" className="hover:text-accent transition-colors uppercase">
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