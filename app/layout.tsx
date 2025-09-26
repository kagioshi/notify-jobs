import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createClient } from '@/prismicio'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  
  try {
    const settings = await client.getSingle('site_settings')
    
    return {
      title: {
        default: settings.data.default_meta_title || 'JobAlert - Latest Government Job Notifications',
        template: '%s | JobAlert'
      },
      description: settings.data.default_meta_description || 'Latest government job notifications, results, and admit cards across India',
      keywords: 'government jobs, job notifications, sarkari naukri, govt jobs, job alerts, exam results, admit cards',
      authors: [{ name: 'JobAlert Team' }],
      creator: 'JobAlert',
      publisher: 'JobAlert',
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        siteName: settings.data.site_name || 'JobAlert',
        title: settings.data.default_meta_title || 'JobAlert - Latest Government Job Notifications',
        description: settings.data.default_meta_description || 'Latest government job notifications, results, and admit cards across India',
      },
      twitter: {
        card: 'summary_large_image',
        title: settings.data.default_meta_title || 'JobAlert - Latest Government Job Notifications',
        description: settings.data.default_meta_description || 'Latest government job notifications, results, and admit cards across India',
      },
      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      },
    }
  } catch (error) {
    // Fallback metadata if Prismic is not available
    return {
      title: {
        default: 'JobAlert - Latest Government Job Notifications',
        template: '%s | JobAlert'
      },
      description: 'Latest government job notifications, results, and admit cards across India'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}