'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, Square, Volume2, VolumeX } from 'lucide-react'
import { useTTS } from '@/hooks/useTTS'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface TTSControlsProps {
  text: string
  title?: string
  className?: string
  autoExtractText?: boolean
  contentSelector?: string
}

const TTSControls: React.FC<TTSControlsProps> = ({
  text,
  title = '',
  className,
  autoExtractText = false,
  contentSelector = '.content-scalable'
}) => {
  const { speak, pause, resume, stop, isSpeaking, isPaused, isSupported } = useTTS()

  const getTextToSpeak = () => {
    if (autoExtractText && typeof document !== 'undefined') {
      const contentElement = document.querySelector(contentSelector)
      if (contentElement) {
        // Extract clean text content
        const textContent = (contentElement as HTMLElement).innerText || contentElement.textContent || ''
        return title ? `${title}. ${textContent}` : textContent
      }
    }
    return title ? `${title}. ${text}` : text
  }

  const handlePlay = () => {
    if (!isSupported) return
    
    if (isSpeaking && isPaused) {
      resume()
    } else if (!isSpeaking) {
      const textToSpeak = getTextToSpeak()
      if (textToSpeak.trim()) {
        speak(textToSpeak.slice(0, 500)) // Limit to 500 chars for performance
      }
    }
  }

  const handlePause = () => {
    if (isSpeaking && !isPaused) {
      pause()
    }
  }

  const handleStop = () => {
    stop()
  }

  if (!isSupported) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn('opacity-50', className)}>
            <VolumeX className="h-4 w-4 text-muted-foreground" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Text-to-speech not supported in your browser</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Neo-Brutalistic TTS Controls */}
      <div className="flex items-center gap-1 brutal-box p-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePlay}
              disabled={!getTextToSpeak().trim()}
              className="h-8 w-8 p-0 focus-ring brutal-btn"
              aria-label={isSpeaking && isPaused ? "Resume reading" : "Start reading"}
            >
              <Play className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isSpeaking && isPaused ? "Resume reading" : "Start reading"}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePause}
              disabled={!isSpeaking || isPaused}
              className="h-8 w-8 p-0 focus-ring brutal-btn"
              aria-label="Pause reading"
            >
              <Pause className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Pause reading</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleStop}
              disabled={!isSpeaking}
              className="h-8 w-8 p-0 focus-ring brutal-btn"
              aria-label="Stop reading"
            >
              <Square className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Stop reading</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center text-xs font-bold text-foreground bg-secondary px-2 py-1 border-2 border-foreground">
        <Volume2 className="h-3 w-3 mr-1" />
        <span className="uppercase">
          {isSpeaking ? (isPaused ? 'PAUSED' : 'SPEAKING') : 'TTS'}
        </span>
      </div>
    </div>
  )
}

export default TTSControls