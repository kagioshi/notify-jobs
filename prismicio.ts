import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import { enableAutoPreviews } from '@prismicio/next'

export const repositoryName = process.env.PRISMIC_REPOSITORY_NAME || 'jobs-notification'

const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'job_notification',
    path: '/jobs/:uid',
  },
  {
    type: 'result',
    path: '/results/:uid',
  },
  {
    type: 'admit_card',
    path: '/admit-cards/:uid',
  },
  {
    type: 'categories',
    path: '/category/:uid',
  }
]

export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions: process.env.NODE_ENV === 'production' 
      ? { next: { revalidate: 3600 } } 
      : { next: { revalidate: 5 } },
    ...config,
  })

  prismicNext.enableAutoPreviews({ client, previewData: config.previewData, req: config.req })

  return client
}