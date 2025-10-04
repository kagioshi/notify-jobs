'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ArrowRight, Briefcase, Loader2 } from 'lucide-react';
import { AdSlot } from '@/components/common/AdSlot';
import { useJobNotifications, useResults, useAdmitCards } from '@/src/hooks/usePrismic';

const JobNotificationsSection = () => {
  // Fetch data from Prismic CMS
  const { data: prismicJobs, isLoading, isError } = useJobNotifications();
  const { data: prismicResults } = useResults();
  const { data: prismicAdmitCards } = useAdmitCards();

  // Mock data as fallback
  const mockJobs = [
    {
      id: '1',
      title: 'SSC CGL 2024 Notification',
      organization: 'Staff Selection Commission',
      posts: '17727',
      lastDate: '2024-02-15',
      category: 'Central Govt',
      state: 'All India',
      isNew: true,
      color: 'bg-[hsl(var(--primary))]',
    },
    {
      id: '2',
      title: 'Railway Group D Recruitment',
      organization: 'Indian Railways',
      posts: '103769',
      lastDate: '2024-02-20',
      category: 'Railway',
      state: 'All India',
      isNew: true,
      color: 'bg-[hsl(var(--secondary))]',
    },
    {
      id: '3',
      title: 'IBPS PO 2024',
      organization: 'Institute of Banking Personnel Selection',
      posts: '4135',
      lastDate: '2024-02-10',
      category: 'Banking',
      state: 'All India',
      isNew: false,
      color: 'bg-[hsl(var(--accent))]',
    },
    {
      id: '4',
      title: 'UPSC Civil Services Exam',
      organization: 'Union Public Service Commission',
      posts: '1000',
      lastDate: '2024-03-01',
      category: 'UPSC',
      state: 'All India',
      isNew: true,
      color: 'bg-[hsl(var(--brutal-orange))]',
    },
    {
      id: '5',
      title: 'State Police Constable Recruitment',
      organization: 'State Police Department',
      posts: '5000',
      lastDate: '2024-02-25',
      category: 'Police',
      state: 'Multiple States',
      isNew: false,
      color: 'bg-[hsl(var(--brutal-green))]',
    },
  ];

  // Use Prismic data if available, otherwise use mock data
  const jobs = prismicJobs && prismicJobs.length > 0 
    ? prismicJobs.map((job: any, index: number) => ({
        id: job.id,
        title: job.data?.title || 'Job Title',
        organization: job.data?.organization || 'Organization',
        posts: job.data?.posts || 'N/A',
        lastDate: job.data?.last_date || 'TBA',
        category: job.data?.category || 'General',
        state: job.data?.state || 'All India',
        isNew: job.data?.is_new || false,
        color: ['bg-[hsl(var(--primary))]', 'bg-[hsl(var(--secondary))]', 'bg-[hsl(var(--accent))]', 'bg-[hsl(var(--brutal-orange))]', 'bg-[hsl(var(--brutal-green))]'][index % 5],
      }))
    : mockJobs;

  const quickLinks = [
    { label: 'Latest Jobs', count: jobs.length.toString(), icon: Briefcase, color: 'bg-[hsl(var(--primary))]' },
    { label: 'Results', count: prismicResults?.length.toString() || '200+', icon: Calendar, color: 'bg-[hsl(var(--secondary))]' },
    { label: 'Admit Cards', count: prismicAdmitCards?.length.toString() || '150+', icon: MapPin, color: 'bg-[hsl(var(--accent))]' },
    { label: 'Answer Keys', count: '100+', icon: Users, color: 'bg-[hsl(var(--brutal-orange))]' },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header - Brutal Style */}
        <div className="mb-8">
          <h2 className="brutal-heading text-3xl md:text-4xl mb-3">
            Latest Job Notifications
          </h2>
          <p className="text-lg font-bold text-muted-foreground uppercase tracking-tight">
            Don't Miss Out on These Opportunities
            {prismicJobs && prismicJobs.length > 0 && (
              <span className="ml-2 text-[hsl(var(--primary))]">• Live from Prismic CMS</span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Job Listings */}
          <div className="lg:col-span-2 space-y-4">
            {/* Loading State */}
            {isLoading && (
              <div className="brutal-box bg-background p-12 text-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                <p className="font-black text-foreground uppercase">Loading Jobs from Prismic...</p>
              </div>
            )}

            {/* Error State */}
            {isError && !isLoading && (
              <div className="brutal-box bg-[hsl(var(--accent))] p-6 text-center">
                <p className="font-black text-foreground uppercase mb-2">⚠️ Prismic Connection Issue</p>
                <p className="font-bold text-foreground text-sm">Showing mock data as fallback</p>
              </div>
            )}

            {/* Job Cards */}
            {!isLoading && jobs.map((job, index) => (
              <div key={job.id}>
                <Card className="job-item bg-background hover:bg-[hsl(var(--accent))]/10 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Job Title - Brutal */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h3 className="text-xl font-black text-foreground uppercase tracking-tight">
                            {job.title}
                          </h3>
                          {job.isNew && (
                            <Badge className="brutal-btn-accent text-xs px-2 py-1 border-2">
                              NEW
                            </Badge>
                          )}
                        </div>

                        {/* Organization */}
                        <p className="text-sm font-bold text-muted-foreground mb-4 uppercase">
                          {job.organization}
                        </p>

                        {/* Job Details - Brutal Icons */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="flex items-center gap-2">
                            <div className={`${job.color} p-2 border-2 border-foreground`}>
                              <Users className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-muted-foreground uppercase">Posts</p>
                              <p className="text-sm font-black text-foreground">{job.posts}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className={`${job.color} p-2 border-2 border-foreground`}>
                              <Calendar className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-muted-foreground uppercase">Last Date</p>
                              <p className="text-sm font-black text-foreground">{job.lastDate}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className={`${job.color} p-2 border-2 border-foreground`}>
                              <MapPin className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-muted-foreground uppercase">Location</p>
                              <p className="text-sm font-black text-foreground">{job.state}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Button - Brutal */}
                      <button className={`${job.color} text-white px-6 py-3 border-3 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-black text-sm uppercase tracking-tight whitespace-nowrap flex items-center gap-2`}>
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Ad Slot after every 3rd job - Brutal Style */}
                {(index + 1) % 3 === 0 && index !== jobs.length - 1 && (
                  <div className="my-4 brutal-box p-4 bg-muted">
                    <AdSlot name={`job-list-${index}`} />
                  </div>
                )}
              </div>
            ))}

            {/* Load More Button - Brutal */}
            <div className="text-center pt-4">
              <button className="brutal-btn-secondary px-8 py-4 text-base">
                Load More Jobs
              </button>
            </div>
          </div>

          {/* Sidebar - Brutal Boxes */}
          <div className="space-y-6">
            {/* Quick Links - Brutal Cards */}
            <div className="brutal-box bg-background p-6">
              <h3 className="brutal-heading text-xl mb-4">Quick Access</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <button
                      key={link.label}
                      className={`${link.color} w-full text-white p-4 border-3 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all text-left animate-fade-in`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5" />
                          <span className="font-black uppercase text-sm">{link.label}</span>
                        </div>
                        <span className="font-black text-lg">{link.count}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ad Slot - Sidebar - Brutal */}
            <div className="brutal-box p-4 bg-muted">
              <AdSlot name="sidebar" />
            </div>

            {/* Categories - Brutal */}
            <div className="brutal-box bg-[hsl(var(--accent))] p-6">
              <h3 className="brutal-heading text-xl mb-4 text-foreground">Top Categories</h3>
              <div className="space-y-2">
                {['Central Govt', 'State Govt', 'Banking', 'Railway', 'Police', 'Teaching'].map((category, index) => (
                  <button
                    key={category}
                    className="w-full bg-background text-foreground px-4 py-3 border-3 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] hover:shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-black text-sm uppercase text-left animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    → {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobNotificationsSection;