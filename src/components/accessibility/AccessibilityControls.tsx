'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import TextResizer from './TextResizer'
import TTSControls from './TTSControls'
import { Separator } from '@/components/ui/separator'

interface AccessibilityControlsProps {
  text: string
  title?: string
  className?: string
  showTextResizer?: boolean
  showTTS?: boolean
  autoExtractText?: boolean
  contentSelector?: string
}

const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({
  text,
  title,
  className,
  showTextResizer = true,
  showTTS = true,
  autoExtractText = false,
  contentSelector = '.content-scalable'
}) => {
  if (!showTextResizer && !showTTS) {
    return null
  }

  return (
    <div className={cn(
      'flex flex-wrap items-center gap-4 py-4 px-6 brutal-box bg-accent/10',
      'animate-fade-in sticky top-0 z-50',
      className
    )}>
      <div className="flex items-center gap-2 text-sm font-black text-foreground uppercase tracking-wider">
        <span className="bg-primary text-primary-foreground px-2 py-1 border-2 border-foreground">
          ACCESSIBILITY
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {showTextResizer && (
          <TextResizer 
            contentSelector={contentSelector}
            className="flex-shrink-0"
          />
        )}

        {showTTS && (
          <TTSControls
            text={text}
            title={title}
            autoExtractText={autoExtractText}
            contentSelector={contentSelector}
            className="flex-shrink-0"
          />
        )}
      </div>

      <div className="text-xs font-bold text-foreground ml-auto hidden sm:block bg-muted px-2 py-1 border-2 border-foreground">
        USE TAB + ENTER TO NAVIGATE
      </div>
    </div>
  )
}

export default AccessibilityControls