# JobAlert - Jobs Notification Website

A modern, fast, and SEO-optimized jobs notification website built with React, TypeScript, and Tailwind CSS. This platform displays job notifications, results, admit cards, and educational resources for government jobs across India.

## 🚀 Features

- **Job Notifications**: Latest government job notifications with detailed information
- **Results & Admit Cards**: Quick access to exam results and admit cards
- **Category-wise Organization**: Browse jobs by sector (Banking, Railway, SSC, etc.)
- **State-wise Navigation**: Find jobs specific to your state
- **Educational Resources**: Study materials, guides, and preparation resources
- **Advertisement Integration**: Multiple ad slots for monetization
- **Comments System**: Cusdis integration for user engagement
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **CMS Ready**: Prismic integration structure
- **Comments**: Cusdis (React)
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (AdSlot, Comments)
│   ├── layout/          # Layout components (Header, Footer)
│   ├── sections/        # Page sections (Hero, Categories, etc.)
│   └── ui/              # shadcn/ui components
├── pages/               # Route pages
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
└── index.css           # Global styles and design system
```

## 🎨 Design System

The project uses a comprehensive design system with:
- **Purple gradient brand colors** matching government job sites
- **Category-specific colors** for different job types
- **Smooth animations** for enhanced UX
- **Responsive typography** scale
- **Consistent spacing** and shadows

## 🔧 Setup & Development

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-git-url>
cd jobalert-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Add your environment variables:
```bash
# Cusdis Comments
NEXT_PUBLIC_CUSDIS_APP_ID=your_cusdis_app_id

# Analytics (optional)
NEXT_PUBLIC_GTM_ID=your_gtm_id
NEXT_PUBLIC_GA_ID=your_ga_id

# Prismic CMS (when ready)
PRISMIC_REPO_NAME=your_repo_name
PRISMIC_ACCESS_TOKEN=your_access_token
```

5. Start development server:
```bash
npm run dev
```

## 🗄 Content Management (Prismic Integration)

### Custom Types Structure

#### 1. Job Notification (`job_notification`)
```json
{
  "title": "Text",
  "slug": "UID",
  "short_summary": "Rich Text",
  "body": "Rich Text",
  "published_date": "Date",
  "last_date_to_apply": "Date",
  "organization": "Text",
  "location": "Text",
  "vacancies": "Number",
  "apply_url": "Link",
  "pdf_attachment": "Link to Media",
  "category": "Select",
  "state": "Select",
  "education_level": "Select",
  "is_featured": "Boolean",
  "meta_title": "Text",
  "meta_description": "Text"
}
```

#### 2. Result (`result`)
```json
{
  "title": "Text",
  "slug": "UID", 
  "published_date": "Date",
  "body": "Rich Text",
  "organization": "Text",
  "result_pdf": "Link to Media",
  "category": "Select",
  "meta_title": "Text",
  "meta_description": "Text"
}
```

#### 3. Admit Card (`admit_card`)
```json
{
  "title": "Text",
  "slug": "UID",
  "published_date": "Date", 
  "body": "Rich Text",
  "download_link": "Link",
  "organization": "Text",
  "exam_date": "Date",
  "category": "Select",
  "meta_title": "Text",
  "meta_description": "Text"
}
```

#### 4. Site Settings (`site_settings`) - Singleton
```json
{
  "header_logo": "Image",
  "social_links": "Group",
  "ad_slots": "Group Repeatable",
  "cusdis_config": "Group",
  "default_meta": "Group"
}
```

## 📱 Advertisement Integration

### Ad Slot Management

The website includes multiple strategic ad placement zones:

1. **Header**: Top banner ad
2. **Sidebar Top/Mid/Bottom**: Right sidebar ads
3. **Content Inline**: Within content sections
4. **Footer**: Bottom banner
5. **Mobile Sticky**: Fixed mobile ad

### Implementation

```tsx
import { AdSlot } from '@/components/common/AdSlot';

// Usage
<AdSlot name="sidebar-top" />
```

### Ad Snippet Management

Ad snippets are stored in Prismic CMS under `site_settings.ad_slots`:
- Each slot has a name, ID, and HTML/JS snippet
- Snippets are safely injected client-side only
- Supports Google AdSense, Media.net, and other ad networks

### Security Notes

⚠️ **Important**: Ad snippets are treated as trusted admin content. Only allow trusted administrators to modify ad snippets to prevent XSS attacks.

## 💬 Comments Integration

The website supports Cusdis for comments:

1. Sign up at [cusdis.com](https://cusdis.com)
2. Get your App ID
3. Add to environment variables:
```bash
NEXT_PUBLIC_CUSDIS_APP_ID=your_app_id
```

4. Use the Comments component:
```tsx
import Comments from '@/components/common/Comments';

<Comments pageId="job-123" pageTitle="IBPS Clerk 2024" />
```

## 🔍 SEO Implementation

### Features Included:
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap.xml generation
- RSS feed support
- Canonical URLs
- Image optimization
- Mobile-first responsive design

### Performance:
- SSR/SSG ready structure
- Lazy loading for images
- Code splitting
- Optimized bundle size

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Environment Variables Setup:
Add all environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

## 📊 Analytics & Tracking

Add Google Analytics/Tag Manager:
```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🔒 Security Best Practices

1. **No hardcoded secrets** in the repository
2. **Environment variables** for all API keys
3. **Sanitized inputs** for user-generated content
4. **Trusted admin content** for ad snippets
5. **HTTPS only** in production
6. **CSP headers** for additional security

## 🧪 Testing

Run tests:
```bash
npm run test
```

Build and preview:
```bash
npm run build
npm run preview
```

## 📝 Content Guidelines

### Job Notifications:
- Clear, descriptive titles
- Complete organization details
- Accurate dates and deadlines
- Proper categorization
- SEO-optimized descriptions

### Results & Admit Cards:
- Official organization names
- Direct download links
- Proper date formatting
- Category classification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions:
- Create an issue in the repository
- Contact: dev@jobalert.com

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

---

**Built with ❤️ for job seekers across India**