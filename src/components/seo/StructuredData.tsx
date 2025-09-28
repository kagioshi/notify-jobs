import React from 'react';

interface JobPostingData {
  title: string;
  organization: string;
  location: string;
  publishedDate: string;
  lastDate: string;
  description: string;
  url: string;
}

interface StructuredDataProps {
  type: 'jobPosting' | 'organization' | 'website';
  data?: JobPostingData;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let structuredData = {};

  switch (type) {
    case 'website':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "JobAlert",
        "description": "Latest government job notifications, results, and admit cards across India",
        "url": "https://jobalert.lovable.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://jobalert.lovable.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "JobAlert",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jobalert.lovable.app/logo.png"
          }
        }
      };
      break;

    case 'organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "JobAlert",
        "description": "Trusted platform for government job notifications and career guidance",
        "url": "https://jobalert.lovable.app",
        "logo": "https://jobalert.lovable.app/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9876543210",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
          "https://twitter.com/jobalert",
          "https://facebook.com/jobalert",
          "https://linkedin.com/company/jobalert"
        ]
      };
      break;

    case 'jobPosting':
      if (data) {
        structuredData = {
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": data.title,
          "description": data.description,
          "datePosted": data.publishedDate,
          "validThrough": data.lastDate,
          "employmentType": "FULL_TIME",
          "hiringOrganization": {
            "@type": "Organization",
            "name": data.organization,
            "sameAs": data.url
          },
          "jobLocation": {
            "@type": "Place",
            "addressLocality": data.location,
            "addressCountry": "IN"
          },
          "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
              "@type": "QuantitativeValue",
              "minValue": 20000,
              "maxValue": 200000,
              "unitText": "MONTH"
            }
          }
        };
      }
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;