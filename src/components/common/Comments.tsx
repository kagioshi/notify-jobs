'use client'

import React, { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, Loader2 } from 'lucide-react'

// Dynamic import of Cusdis to avoid SSR issues
const ReactCusdis = dynamic(
  () => import('react-cusdis').then((mod) => mod.ReactCusdis),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin" />
        <span className="ml-2">Loading comments...</span>
      </div>
    )
  }
)

interface CommentsProps {
  pageId: string
  pageTitle: string
  className?: string
}

const Comments: React.FC<CommentsProps> = ({ pageId, pageTitle, className }) => {
  const [showComments, setShowComments] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cusdisAppId = process.env.NEXT_PUBLIC_CUSDIS_APP_ID
  const cusdisHost = process.env.NEXT_PUBLIC_CUSDIS_HOST || 'https://cusdis.com'

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const commentsElement = document.getElementById('comments-section')
    if (commentsElement) {
      observer.observe(commentsElement)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-load comments when they become visible
  useEffect(() => {
    if (isVisible && cusdisAppId) {
      setShowComments(true)
    }
  }, [isVisible, cusdisAppId])

  if (!cusdisAppId) {
    return (
      <Card className={`mt-8 ${className}`} id="comments-section">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            Comments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Comments Integration Ready</h3>
            <p className="text-sm text-muted-foreground mb-4">
              To enable comments, set up Cusdis and add your APP_ID to environment variables.
            </p>
            <div className="bg-background p-4 rounded border text-left text-xs font-mono">
              <div className="text-muted-foreground">// .env.local</div>
              <div>NEXT_PUBLIC_CUSDIS_APP_ID=your_app_id_here</div>
              <div>NEXT_PUBLIC_CUSDIS_HOST=https://cusdis.com</div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`mt-8 ${className}`} id="comments-section">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="h-5 w-5 mr-2" />
          Comments
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!showComments ? (
          <div className="text-center py-8">
            <Button 
              onClick={() => setShowComments(true)}
              className="focus-ring"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Load Comments
            </Button>
          </div>
        ) : (
          <Suspense fallback={
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span className="ml-2">Loading comments...</span>
            </div>
          }>
            <div className="min-h-[200px]">
              <ReactCusdis
                attrs={{
                  host: cusdisHost,
                  appId: cusdisAppId,
                  pageId: pageId,
                  pageTitle: pageTitle,
                  pageUrl: typeof window !== 'undefined' ? window.location.href : ''
                }}
              />
            </div>
          </Suspense>
        )}
      </CardContent>
    </Card>
  )
}

export default Comments;