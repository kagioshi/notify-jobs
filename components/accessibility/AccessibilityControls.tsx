'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import TextResizer from './TextResizer'
import TTSControls from './TTSControls'
import { Separator } from '@/components/ui/separator'

interface AccessibilityControlsProps {
  text?: string
  title?: string
  className?: string
  showTextResizer?: boolean
  showTTS?: boolean
  autoExtractText?: boolean
  contentSelector?: string
}

export const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({
  text = '',
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
      'brutal-box bg-background p-4 animate-fade-in',
      className
    )}>
      <div className="flex items-center gap-1 text-xs font-black text-foreground uppercase mb-3">
        <span>♿ Accessibility Tools</span>
      </div>

      <div className="flex flex-wrap items-center gap-4">
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

      <div className="text-xs font-bold text-muted-foreground mt-2 hidden sm:block uppercase">
        Use Tab + Enter to navigate
      </div>
    </div>
  )
}

export default AccessibilityControls