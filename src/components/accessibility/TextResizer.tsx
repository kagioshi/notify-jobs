'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TextResizerProps {
  className?: string
  contentSelector?: string
}

const TextResizer: React.FC<TextResizerProps> = ({ 
  className,
  contentSelector = '.content-scalable'
}) => {
  const [scale, setScale] = useState(1)
  const [announcement, setAnnouncement] = useState('')
  
  const minScale = 0.8
  const maxScale = 1.5
  const scaleStep = 0.1

  useEffect(() => {
    // Load saved preference
    const savedScale = localStorage.getItem('content-font-scale')
    if (savedScale) {
      const parsedScale = parseFloat(savedScale)
      if (parsedScale >= minScale && parsedScale <= maxScale) {
        setScale(parsedScale)
        updateContentScale(parsedScale)
      }
    }
  }, [])

  const updateContentScale = (newScale: number) => {
    document.documentElement.style.setProperty('--content-font-scale', newScale.toString())
  }

  const increaseSize = () => {
    const newScale = Math.min(scale + scaleStep, maxScale)
    if (newScale !== scale) {
      setScale(newScale)
      updateContentScale(newScale)
      localStorage.setItem('content-font-scale', newScale.toString())
      
      const percentage = Math.round((newScale - 1) * 100)
      const message = percentage > 0 
        ? `Text size increased to ${percentage}% larger`
        : `Text size at normal size`
      setAnnouncement(message)
      
      // Clear announcement after screen reader reads it
      setTimeout(() => setAnnouncement(''), 1000)
    }
  }

  const decreaseSize = () => {
    const newScale = Math.max(scale - scaleStep, minScale)
    if (newScale !== scale) {
      setScale(newScale)
      updateContentScale(newScale)
      localStorage.setItem('content-font-scale', newScale.toString())
      
      const percentage = Math.round((1 - newScale) * 100)
      const message = percentage > 0 
        ? `Text size decreased to ${percentage}% smaller`
        : `Text size at normal size`
      setAnnouncement(message)
      
      setTimeout(() => setAnnouncement(''), 1000)
    }
  }

  const resetSize = () => {
    if (scale !== 1) {
      setScale(1)
      updateContentScale(1)
      localStorage.setItem('content-font-scale', '1')
      setAnnouncement('Text size reset to normal')
      setTimeout(() => setAnnouncement(''), 1000)
    }
  }

  const getPercentage = () => {
    const percentage = Math.round((scale - 1) * 100)
    if (percentage > 0) return `+${percentage}%`
    if (percentage < 0) return `${percentage}%`
    return 'Normal'
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center gap-1 border rounded-md p-1 bg-background">
        <Button
          variant="ghost"
          size="sm"
          onClick={decreaseSize}
          disabled={scale <= minScale}
          className="h-8 w-8 p-0 focus-ring"
          title="Decrease text size"
          aria-label="Decrease text size"
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={resetSize}
          disabled={scale === 1}
          className="h-8 px-2 text-xs font-medium focus-ring"
          title="Reset text size to normal"
          aria-label="Reset text size to normal"
        >
          <RotateCcw className="h-3 w-3 mr-1" />
          A
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={increaseSize}
          disabled={scale >= maxScale}
          className="h-8 w-8 p-0 focus-ring"
          title="Increase text size"
          aria-label="Increase text size"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      
      <span className="text-xs text-muted-foreground ml-2 min-w-[3rem]">
        {getPercentage()}
      </span>

      {/* Screen reader announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {announcement}
      </div>
    </div>
  )
}

export default TextResizer