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
      'flex items-center gap-4 py-3 px-4 bg-muted/30 rounded-lg border',
      'animate-fade-in',
      className
    )}>
      <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
        <span>Accessibility:</span>
      </div>

      <div className="flex items-center gap-4">
        {showTextResizer && (
          <TextResizer 
            contentSelector={contentSelector}
            className="flex-shrink-0"
          />
        )}

        {showTextResizer && showTTS && (
          <Separator orientation="vertical" className="h-6" />
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

      <div className="text-xs text-muted-foreground ml-auto hidden sm:block">
        Use keyboard Tab + Enter to navigate controls
      </div>
    </div>
  )
}

export default AccessibilityControls