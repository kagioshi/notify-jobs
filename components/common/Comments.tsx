'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

interface CommentsProps {
  pageId: string
  pageTitle: string
  className?: string
}

const Comments: React.FC<CommentsProps> = ({ pageId, pageTitle, className = "" }) => {
  const [showComments, setShowComments] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
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
          <h3 className="font-semibold mb-2">Comments Coming Soon</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Comments functionality will be available soon. Stay tuned for updates!
          </p>
          <Button 
            onClick={() => setShowComments(!showComments)}
            className="focus-ring"
            disabled
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Comments (Coming Soon)
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Comments;