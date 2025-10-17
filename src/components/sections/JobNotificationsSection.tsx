import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  ExternalLink, 
  Download,
  Clock,
  Building2,
  Zap
} from 'lucide-react';
import BrutalAdSlot from '@/components/enhanced/BrutalAdSlot';
import { useJobNotifications, useResults, useAdmitCards } from '@/hooks/usePrismic';

const JobNotificationsSection = () => {
  const { data: jobNotifications = [] } = useJobNotifications();
  const { data: results = [] } = useResults();
  const { data: admitCards = [] } = useAdmitCards();

  return (
    <section className="py-16 px-4 bg-muted/30 bg-pattern-stripes relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Latest Jobs Section */}
            <div>
              <div className="brutal-box-tritone bg-gradient-to-r from-primary via-accent to-secondary p-6 mb-6 inline-block rotate-[-1deg] animate-rotate-in">
                <h2 className="text-2xl md:text-3xl font-black text-background uppercase tracking-tighter flex items-center gap-2 text-glitch">
                  <Zap className="w-8 h-8 animate-pulse" strokeWidth={4} />
                  LATEST JOB ALERTS
                </h2>
              </div>

              <div className="space-y-6">
                {jobNotifications.slice(0, 10).map((job: any, index: number) => {
                  const cardRotations = ['rotate-[-0.5deg]', 'rotate-[0.5deg]', 'rotate-[-1deg]', 'rotate-[1deg]'];
                  return (
                    <React.Fragment key={job.id}>
                      <Card className={`hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-all ${cardRotations[index % 4]}`}>
                      <CardHeader>
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {job.data?.is_featured && (
                                <Badge variant="neon" className="animate-pulse">
                                  🔥 HOT!
                                </Badge>
                              )}
                              {job.data?.category && (
                                <Badge variant="sticker" className="rotate-[-2deg]">
                                  {job.data.category}
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-xl font-black uppercase tracking-tight hover:text-primary transition-colors">
                              {job.data?.title || 'Job Title'}
                            </CardTitle>
                            <p className="text-sm font-bold text-muted-foreground mt-2 flex items-center gap-2">
                              <Building2 className="w-4 h-4" />
                              {job.data?.organization || 'Organization'}
                            </p>
                          </div>
                          <Button variant="brutal" size="sm" className="shrink-0">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            APPLY
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 font-bold">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{job.data?.location || 'Location'}</span>
                          </div>
                          <div className="flex items-center gap-2 font-bold">
                            <Users className="w-4 h-4 text-secondary" />
                            <span>{job.data?.vacancies || '0'} Vacancies</span>
                          </div>
                          <div className="flex items-center gap-2 font-bold">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>Published: {job.data?.published_date || 'Date'}</span>
                          </div>
                          <div className="flex items-center gap-2 font-bold text-destructive">
                            <Clock className="w-4 h-4" />
                            <span>Last Date: {job.data?.last_date_to_apply || 'Date'}</span>
                          </div>
                        </div>
                        {job.data?.short_summary && (
                          <p className="mt-4 text-sm text-muted-foreground font-medium">
                            {job.data.short_summary}
                          </p>
                        )}
                      </CardContent>
                      </Card>

                      {/* Insert Ad After Every 3rd Job */}
                      {(index + 1) % 3 === 0 && (
                        <BrutalAdSlot 
                          name={`between_posts_${Math.floor((index + 1) / 3)}`}
                          variant="colored"
                          className="my-6"
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Content Middle Ad */}
            <BrutalAdSlot 
              name="content_middle"
              variant="colored"
              className="my-8"
            />

            {/* Results Section */}
            <div>
              <div className="brutal-box-neon bg-secondary p-6 mb-6 inline-block rotate-[1deg] animate-wobble">
                <h2 className="text-2xl font-black text-secondary-foreground uppercase tracking-tighter brutal-stamped">
                  ⭐ LATEST RESULTS
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.slice(0, 4).map((result: any, idx: number) => (
                  <Card key={result.id} className={`hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 ${idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}>
                    <CardHeader>
                      <CardTitle className="text-lg font-black uppercase">
                        {result.data?.title || 'Result Title'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full font-bold">
                        <Download className="w-4 h-4 mr-2" />
                        CHECK RESULT
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Admit Cards Section */}
            <div>
              <div className="brutal-box-tritone bg-accent p-6 mb-6 inline-block rotate-[-1deg] hover-wobble">
                <h2 className="text-2xl font-black text-accent-foreground uppercase tracking-tighter brutal-stamped">
                  🎫 ADMIT CARDS
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {admitCards.slice(0, 4).map((card: any, idx: number) => (
                  <Card key={card.id} className={`hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 ${idx % 2 === 0 ? 'rotate-[1deg]' : 'rotate-[-1deg]'}`}>
                    <CardHeader>
                      <CardTitle className="text-lg font-black uppercase">
                        {card.data?.title || 'Admit Card Title'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button variant="brutal" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        DOWNLOAD
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Bottom Content Ad */}
            <BrutalAdSlot 
              name="content_bottom"
              variant="default"
              className="my-8"
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sidebar Top Ad */}
            <BrutalAdSlot 
              name="sidebar_top"
              variant="colored"
              className="sticky top-20"
            />

            {/* Quick Links */}
            <Card className="brutal-card">
              <CardHeader>
                <CardTitle className="font-black uppercase text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['Banking Jobs', 'Railway Jobs', 'SSC Jobs', 'UPSC Jobs', 'State Govt Jobs'].map((link) => (
                    <Button 
                      key={link} 
                      variant="outline" 
                      className="w-full justify-start font-bold"
                    >
                      → {link}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sidebar Middle Ad */}
            <BrutalAdSlot 
              name="sidebar_mid"
              variant="default"
            />

            {/* Popular Categories */}
            <Card className="brutal-card">
              <CardHeader>
                <CardTitle className="font-black uppercase text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Banking', 'Railway', 'SSC', 'Defense', 'Teaching'].map((cat, index) => (
                    <Badge 
                      key={cat} 
                      className={`font-bold border-2 border-foreground ${
                        index % 3 === 0 ? 'bg-primary text-primary-foreground' :
                        index % 3 === 1 ? 'bg-secondary text-secondary-foreground' :
                        'bg-accent text-accent-foreground'
                      }`}
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sidebar Bottom Ad */}
            <BrutalAdSlot 
              name="sidebar_bottom"
              variant="colored"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobNotificationsSection;
