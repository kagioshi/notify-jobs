'use client'

import React, { useEffect, useRef } from 'react';

interface AdSlotProps {
  name: string;
  className?: string;
  htmlSnippet?: string; // In real implementation, this would come from Prismic CMS
}

export const AdSlot: React.FC<AdSlotProps> = ({ 
  name, 
  className = '', 
  htmlSnippet 
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Mock ad snippets for demonstration
  const mockAdSnippets: Record<string, string> = {
    'header': `
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; text-align: center; color: white;">
        <h3 style="margin: 0 0 10px 0; font-size: 18px;">Premium Job Alerts</h3>
        <p style="margin: 0 0 15px 0; font-size: 14px;">Get instant notifications for govt jobs</p>
        <button style="background: white; color: #667eea; border: none; padding: 8px 16px; border-radius: 4px; font-weight: bold;">Subscribe Now</button>
      </div>
    `,
    'sidebar-top': `
      <div style="background: #f8f9fa; border: 2px dashed #e9ecef; padding: 30px 20px; text-align: center; border-radius: 8px;">
        <div style="color: #6c757d; font-size: 14px; margin-bottom: 10px;">Advertisement</div>
        <div style="background: linear-gradient(45deg, #ff6b6b, #feca57); color: white; padding: 15px; border-radius: 6px;">
          <div style="font-weight: bold; margin-bottom: 5px;">Exam Preparation</div>
          <div style="font-size: 12px; margin-bottom: 10px;">Best coaching for govt exams</div>
          <div style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 3px; font-size: 11px;">Learn More</div>
        </div>
      </div>
    `,
    'sidebar-mid': `
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 8px; text-align: center; color: white;">
        <h4 style="margin: 0 0 10px 0; font-size: 16px;">Test Series</h4>
        <p style="margin: 0 0 15px 0; font-size: 12px; opacity: 0.9;">Practice with mock tests</p>
        <div style="background: rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 4px; font-size: 12px; display: inline-block;">Start Free Trial</div>
      </div>
    `,
    'sidebar-bottom': `
      <div style="background: #fff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px; text-align: center;">
        <div style="color: #28a745; font-weight: bold; margin-bottom: 8px; font-size: 16px;">Job Updates</div>
        <div style="color: #6c757d; font-size: 13px; margin-bottom: 12px;">Get daily job notifications on WhatsApp</div>
        <div style="background: #25d366; color: white; padding: 8px 16px; border-radius: 4px; font-size: 12px; display: inline-block;">Join WhatsApp</div>
      </div>
    `,
    'content-inline': `
      <div style="background: linear-gradient(90deg, #ffeaa7 0%, #fab1a0 100%); padding: 30px; border-radius: 12px; text-align: center; margin: 20px 0;">
        <h3 style="margin: 0 0 10px 0; color: #2d3436; font-size: 20px;">Special Offer - Limited Time!</h3>
        <p style="margin: 0 0 20px 0; color: #636e72; font-size: 14px;">Get premium access to all government job notifications and study materials</p>
        <div style="background: #e17055; color: white; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">Claim Offer - 50% OFF</div>
      </div>
    `,
    'footer': `
      <div style="background: #2d3436; color: #ddd; padding: 20px; border-radius: 8px; text-align: center;">
        <div style="font-size: 14px; margin-bottom: 10px;">Stay Updated with Latest Jobs</div>
        <div style="background: #00b894; color: white; padding: 8px 16px; border-radius: 4px; font-size: 12px; display: inline-block;">Subscribe Newsletter</div>
      </div>
    `,
    'mobile-sticky': `
      <div style="background: #fd79a8; color: white; padding: 12px; text-align: center; border-radius: 8px;">
        <div style="font-size: 12px; font-weight: bold;">📱 Download App for Instant Alerts</div>
      </div>
    `
  };

  // Get the ad snippet (in real app, this would come from Prismic CMS)
  const adContent = htmlSnippet || mockAdSnippets[name];

  useEffect(() => {
    const container = ref.current;
    if (!container || !adContent) return;

    // Insert the HTML content
    container.innerHTML = adContent;

    // Execute any scripts in the ad content (be careful - only trust admin content)
    const scripts = Array.from(container.querySelectorAll('script'));
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      // Copy attributes
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      document.head.appendChild(newScript);
      document.head.removeChild(newScript);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adContent]);

  if (!adContent) {
    return null;
  }

  return (
    <div 
      ref={ref} 
      className={`ad-slot ${className}`} 
      data-ad-name={name}
      aria-label={`Advertisement - ${name}`}
    />
  );
};