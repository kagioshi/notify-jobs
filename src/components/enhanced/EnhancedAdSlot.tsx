'use client'

import React, { useRef, useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import { cn } from '@/lib/utils'
import { createClient } from '../../../prismicio'

interface AdSlotProps {
  name: string
  className?: string
  htmlSnippet?: string
  lazy?: boolean
}

interface AdSlotData {
  slot_name: string
  slot_key: string
  snippet: any
  is_active: boolean
}

const EnhancedAdSlot: React.FC<AdSlotProps> = ({ 
  name, 
  className,
  htmlSnippet, 
  lazy = true 
}) => {
  const adRef = useRef<HTMLDivElement>(null)
  const [adContent, setAdContent] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(!lazy)

  // Fetch ad content from Prismic
  useEffect(() => {
    if (htmlSnippet) {
      setAdContent(htmlSnippet)
    } else {
      const fetchAdContent = async () => {
        try {
          const client = createClient()
          const settings = await client.getSingle('site_settings')
          
          if (settings?.data?.ad_slots) {
            const adSlot = settings.data.ad_slots.find(
              (slot: AdSlotData) => slot.slot_name === name && slot.is_active
            )
            
            if (adSlot?.snippet) {
              // Convert rich text to plain text/HTML if needed
              const snippetText = Array.isArray(adSlot.snippet) 
                ? adSlot.snippet.map((block: any) => block.text).join('\n')
                : adSlot.snippet
              setAdContent(snippetText)
            }
          }
        } catch (error) {
          console.warn('Failed to fetch ad content:', error)
        }
      }

      fetchAdContent()
    }
  }, [name, htmlSnippet])

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isVisible) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px' // Load 50px before coming into view
      }
    )

    if (adRef.current) {
      observer.observe(adRef.current)
    }

    return () => observer.disconnect()
  }, [lazy, isVisible])

  // Inject ad content safely
  useEffect(() => {
    if (!isVisible || !adContent || isLoaded) return

    const container = adRef.current
    if (!container) return

    try {
      // Sanitize HTML to prevent XSS attacks
      const cleanHTML = DOMPurify.sanitize(adContent, {
        ALLOWED_TAGS: ['div', 'span', 'img', 'a', 'p', 'br', 'strong', 'em', 'iframe', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'id', 'style', 'target', 'rel', 'width', 'height'],
        ALLOW_DATA_ATTR: false,
        FORBID_TAGS: ['script', 'style'],
        FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onmouseout', 'oninput', 'onchange']
      });

      container.innerHTML = cleanHTML;
      setIsLoaded(true)
      container.classList.add('loaded')
    } catch (error) {
      console.error('Error injecting ad content:', error)
    }
  }, [isVisible, adContent, isLoaded])

  if (!adContent) {
    return null
  }

  return (
    <div 
      ref={adRef}
      className={cn(
        'ad-slot',
        !isLoaded && 'min-h-[90px] bg-muted border-2 border-dashed border-border rounded-lg flex items-center justify-center',
        className
      )}
      data-ad-name={name}
      role="banner"
      aria-label={`Advertisement slot: ${name}`}
    >
      {!isVisible && lazy && (
        <div className="text-sm text-muted-foreground">Loading ad...</div>
      )}
    </div>
  )
}

export { EnhancedAdSlot as AdSlot }