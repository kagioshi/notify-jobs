'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface TTSOptions {
  lang?: string
  rate?: number
  pitch?: number
  volume?: number
}

interface UseTTSReturn {
  speak: (text: string, options?: TTSOptions) => void
  pause: () => void
  resume: () => void
  stop: () => void
  isSpeaking: boolean
  isPaused: boolean
  isSupported: boolean
  voices: SpeechSynthesisVoice[]
}

export const useTTS = (): UseTTSReturn => {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true)
      
      // Load voices
      const loadVoices = () => {
        const availableVoices = speechSynthesis.getVoices()
        setVoices(availableVoices)
      }
      
      loadVoices()
      speechSynthesis.addEventListener('voiceschanged', loadVoices)
      
      return () => {
        speechSynthesis.removeEventListener('voiceschanged', loadVoices)
        if (utteranceRef.current) {
          speechSynthesis.cancel()
        }
      }
    }
  }, [])

  const speak = useCallback((text: string, options: TTSOptions = {}) => {
    if (!isSupported || !text.trim()) return

    // Cancel any ongoing speech
    speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    
    // Set options
    utterance.lang = options.lang || 'en-IN'
    utterance.rate = options.rate || 0.9
    utterance.pitch = options.pitch || 1
    utterance.volume = options.volume || 1

    // Find appropriate voice
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith(utterance.lang) || 
      voice.lang.startsWith('en')
    )
    if (preferredVoice) {
      utterance.voice = preferredVoice
    }

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true)
      setIsPaused(false)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
    }

    utterance.onerror = () => {
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
    }

    utterance.onpause = () => {
      setIsPaused(true)
    }

    utterance.onresume = () => {
      setIsPaused(false)
    }

    utteranceRef.current = utterance
    speechSynthesis.speak(utterance)
  }, [isSupported, voices])

  const pause = useCallback(() => {
    if (isSupported && isSpeaking && !isPaused) {
      speechSynthesis.pause()
    }
  }, [isSupported, isSpeaking, isPaused])

  const resume = useCallback(() => {
    if (isSupported && isSpeaking && isPaused) {
      speechSynthesis.resume()
    }
  }, [isSupported, isSpeaking, isPaused])

  const stop = useCallback(() => {
    if (isSupported) {
      speechSynthesis.cancel()
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
    }
  }, [isSupported])

  return {
    speak,
    pause,
    resume,
    stop,
    isSpeaking,
    isPaused,
    isSupported,
    voices
  }
}