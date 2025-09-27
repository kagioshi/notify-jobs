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
  Building2
} from 'lucide-react';
import { AdSlot } from '@/components/common/AdSlot';

const JobNotificationsSection = () => {
  const jobNotifications = [
    {
      id: 1,
      title: 'IBPS Clerk Recruitment 2024',
      organization: 'Institute of Banking Personnel Selection',
      location: 'All India',
      vacancies: 10000,
      publishedDate: '2024-01-15',
      lastDate: '2024-02-15',
      category: 'Banking',
      isNew: true,
      isFeatured: true,
    },
    {
      id: 2,
      title: 'SSC CHSL Notification 2024',
      organization: 'Staff Selection Commission',
      location: 'All India',
      vacancies: 4500,
      publishedDate: '2024-01-12',
      lastDate: '2024-02-12',
      category: 'Government',
      isNew: true,
    },
    {
      id: 3,
      title: 'Railway Group D Recruitment',
      organization: 'Indian Railways',
      location: 'Pan India',
      vacancies: 62000,
      publishedDate: '2024-01-10',
      lastDate: '2024-02-20',
      category: 'Railway',
      isNew: false,
    },
    {
      id: 4,
      title: 'UPSC Civil Services 2024',
      organization: 'Union Public Service Commission',
      location: 'All India',
      vacancies: 1000,
      publishedDate: '2024-01-08',
      lastDate: '2024-03-01',
      category: 'UPSC',
      isFeatured: true,
    },
    {
      id: 5,
      title: 'Police Constable Recruitment',
      organization: 'State Police Department',
      location: 'Multiple States',
      vacancies: 8000,
      publishedDate: '2024-01-05',
      lastDate: '2024-02-05',
      category: 'Police',
    },
  ];

  const results = [
    {
      id: 1,
      title: 'SBI PO Result 2023',
      organization: 'State Bank of India',
      publishedDate: '2024-01-14',
      category: 'Banking',
    },
    {
      id: 2,
      title: 'NEET UG Result 2023',
      organization: 'National Testing Agency',
      publishedDate: '2024-01-12',
      category: 'Medical',
    },
    {
      id: 3,
      title: 'JEE Main Result 2024',
      organization: 'National Testing Agency',
      publishedDate: '2024-01-10',
      category: 'Engineering',
    },
  ];

  const admitCards = [
    {
      id: 1,
      title: 'IBPS Clerk Admit Card 2024',
      organization: 'IBPS',
      examDate: '2024-02-20',
      category: 'Banking',
    },
    {
      id: 2,
      title: 'SSC MTS Admit Card',
      organization: 'Staff Selection Commission',
      examDate: '2024-02-25',
      category: 'Government',
    },
  ];

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Latest Job Notifications */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Latest Job Notifications</h2>
                <Button variant="outline" size="sm">
                  View All
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="space-y-4">
                {jobNotifications.map((job, index) => (
                  <Card 
                    key={job.id} 
                    className="job-item animate-fade-in hover:shadow-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer">
                              {job.title}
                            </h3>
                            {job.isNew && (
                              <Badge variant="destructive" className="text-xs">NEW</Badge>
                            )}
                            {job.isFeatured && (
                              <Badge variant="secondary" className="text-xs">FEATURED</Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center text-muted-foreground text-sm mb-2">
                            <Building2 className="w-4 h-4 mr-1" />
                            <span className="mr-4">{job.organization}</span>
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="mr-4">{job.location}</span>
                            <Users className="w-4 h-4 mr-1" />
                            <span>{job.vacancies.toLocaleString()} vacancies</span>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="mr-4">Published: {new Date(job.publishedDate).toLocaleDateString()}</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-destructive font-medium">
                              Last Date: {new Date(job.lastDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{job.category}</Badge>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                          <Button size="sm">Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ad Slot - Inline Content */}
            <AdSlot name="content-inline" />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ad Slot - Sidebar Top */}
            <AdSlot name="sidebar-top" />

            {/* Recent Results */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Latest Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {results.map((result) => (
                  <div key={result.id} className="job-item p-3 rounded-lg">
                    <h4 className="font-medium text-foreground text-sm hover:text-primary cursor-pointer">
                      {result.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      {result.organization}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <Badge variant="outline" className="text-xs">{result.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(result.publishedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Results
                </Button>
              </CardContent>
            </Card>

            {/* Ad Slot - Sidebar Mid */}
            <AdSlot name="sidebar-mid" />

            {/* Admit Cards */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Admit Cards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {admitCards.map((admit) => (
                  <div key={admit.id} className="job-item p-3 rounded-lg">
                    <h4 className="font-medium text-foreground text-sm hover:text-primary cursor-pointer">
                      {admit.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      {admit.organization}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <Badge variant="outline" className="text-xs">{admit.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        Exam: {new Date(admit.examDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Admit Cards
                </Button>
              </CardContent>
            </Card>

            {/* Ad Slot - Sidebar Bottom */}
            <AdSlot name="sidebar-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobNotificationsSection;