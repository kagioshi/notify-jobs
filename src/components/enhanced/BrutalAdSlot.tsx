import React, { useEffect, useRef, useState } from 'react';
import { createClient } from '../../../prismicio';

interface BrutalAdSlotProps {
  name: string;
  className?: string;
  htmlSnippet?: string;
  variant?: 'default' | 'colored' | 'minimal';
  enableRefresh?: boolean;
  refreshInterval?: number;
}

interface AdSlotData {
  slot_name: string;
  slot_key: string;
  snippet: any;
  is_active: boolean;
}

const BrutalAdSlot: React.FC<BrutalAdSlotProps> = ({ 
  name, 
  className = '', 
  htmlSnippet,
  variant = 'default',
  enableRefresh = false,
  refreshInterval = 30000
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [adContent, setAdContent] = useState<string | null>(htmlSnippet || null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!htmlSnippet) {
      const fetchAdContent = async () => {
        try {
          const client = createClient();
          const siteSettings = await client.getSingle('site_settings');
          
          if (siteSettings.data.ad_slots) {
            const adSlots = siteSettings.data.ad_slots as AdSlotData[];
            const matchingSlot = adSlots.find(
              (slot: AdSlotData) => slot.slot_name === name && slot.is_active
            );
            
            if (matchingSlot?.snippet) {
              const htmlContent = matchingSlot.snippet
                .map((block: any) => {
                  if (block.type === 'paragraph') {
                    return block.text;
                  }
                  return '';
                })
                .join('');
              
              setAdContent(htmlContent);
            }
          }
        } catch (error) {
          console.log('Could not fetch ad content from Prismic');
        }
      };

      fetchAdContent();
    }
  }, [name, htmlSnippet]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      if (adRef.current) {
        observer.unobserve(adRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (adContent && adRef.current && isVisible) {
      adRef.current.innerHTML = adContent;

      const scripts = adRef.current.querySelectorAll('script');
      scripts.forEach((script) => {
        const newScript = document.createElement('script');
        Array.from(script.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });
        newScript.textContent = script.textContent;
        document.head.appendChild(newScript);
      });
    }
  }, [adContent, isVisible]);

  // Auto-refresh functionality
  useEffect(() => {
    if (enableRefresh && refreshInterval > 0 && isVisible) {
      const interval = setInterval(() => {
        if (adRef.current) {
          adRef.current.classList.add('animate-fade-out');
          setTimeout(() => {
            adRef.current?.classList.remove('animate-fade-out');
            adRef.current?.classList.add('animate-fade-in');
          }, 300);
        }
      }, refreshInterval);

      return () => clearInterval(interval);
    }
  }, [enableRefresh, refreshInterval, isVisible]);

  if (!adContent) {
    return null;
  }

  const variantClasses = {
    default: 'brutal-box bg-muted/50',
    colored: 'brutal-box-colored bg-gradient-to-br from-primary/10 to-accent/10',
    minimal: 'border-4 border-foreground bg-background'
  };

  return (
    <div
      ref={adRef}
      className={`${variantClasses[variant]} p-4 transition-all duration-150 ${className}`}
      data-ad-name={name}
      data-ad-variant={variant}
      aria-label={`Advertisement: ${name}`}
    />
  );
};

export default BrutalAdSlot;
