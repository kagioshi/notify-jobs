'use client'

import { useQuery } from '@tanstack/react-query'
import { createClient } from '../../prismicio'
import * as prismic from '@prismicio/client'

export const usePrismic = () => {
  const client = createClient()
  return client
}

export const useJobNotifications = () => {
  const client = usePrismic()
  
  return useQuery({
    queryKey: ['job-notifications'],
    queryFn: async () => {
      try {
        const response = await client.getAllByType('job_notification', {
          limit: 10,
          orderings: [
            { field: 'document.first_publication_date', direction: 'desc' }
          ]
        })
        return response
      } catch (error) {
        console.log('Prismic data not available, using mock data')
        return []
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useCategories = () => {
  const client = usePrismic()
  
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const response = await client.getAllByType('categories')
        return response
      } catch (error) {
        console.log('Prismic categories not available, using mock data')
        return []
      }
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

export const useResults = () => {
  const client = usePrismic()
  
  return useQuery({
    queryKey: ['results'],
    queryFn: async () => {
      try {
        const response = await client.getAllByType('result', {
          limit: 5,
          orderings: [
            { field: 'document.first_publication_date', direction: 'desc' }
          ]
        })
        return response
      } catch (error) {
        console.log('Prismic results not available, using mock data')
        return []
      }
    },
    staleTime: 5 * 60 * 1000,
  })
}

export const useAdmitCards = () => {
  const client = usePrismic()
  
  return useQuery({
    queryKey: ['admit-cards'],
    queryFn: async () => {
      try {
        const response = await client.getAllByType('admit_card', {
          limit: 5,
          orderings: [
            { field: 'document.first_publication_date', direction: 'desc' }
          ]
        })
        return response
      } catch (error) {
        console.log('Prismic admit cards not available, using mock data')
        return []
      }
    },
    staleTime: 5 * 60 * 1000,
  })
}

export const useSiteSettings = () => {
  const client = usePrismic()
  
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      try {
        const response = await client.getSingle('site_settings')
        return response
      } catch (error) {
        console.log('Prismic site settings not available, using defaults')
        return null
      }
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
  })
}