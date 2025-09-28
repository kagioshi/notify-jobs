import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Calendar, ExternalLink } from 'lucide-react';

const EducationSection = () => {
  const educationUpdates = [
    {
      id: 1,
      title: 'Free Job Updates',
      description: 'Get daily government job notifications directly in your inbox',
      category: 'Newsletter',
      subscribers: '500K+',
      isPopular: true,
    },
    {
      id: 2,
      title: 'UPSC Civil Services 2024 Guide',
      description: 'Complete preparation strategy and study material for UPSC CSE',
      category: 'Study Guide',
      downloads: '50K+',
    },
    {
      id: 3,
      title: 'IBPS Bank PO Preparation 2024',
      description: 'Banking sector job preparation with mock tests and previous papers',
      category: 'Banking',
      downloads: '75K+',
      isPopular: true,
    },
    {
      id: 4,
      title: 'SSC CGL Complete Course 2024',
      description: 'Staff Selection Commission Combined Graduate Level preparation',
      category: 'SSC',
      downloads: '100K+',
    },
    {
      id: 5,
      title: 'Railway Group D & ALP Study Material',
      description: 'Comprehensive study material for Railway recruitment exams',
      category: 'Railway',
      downloads: '80K+',
    },
    {
      id: 6,
      title: 'State PSC Preparation Guide',
      description: 'State Public Service Commission exam preparation for all states',
      category: 'State PSC',
      downloads: '60K+',
    },
    {
      id: 7,
      title: 'Defence Jobs Preparation 2024',
      description: 'Complete guide for Army, Navy, and Air Force recruitment',
      category: 'Defence',
      downloads: '45K+',
    },
    {
      id: 8,
      title: 'Teaching Jobs & TET Preparation',
      description: 'Teacher Eligibility Test and teaching job preparation material',
      category: 'Teaching',
      downloads: '70K+',
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Preparation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access free study material, preparation guides, and resources for government job exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationUpdates.map((item, index) => (
            <Card 
              key={item.id} 
              className="card-gradient hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant={item.isPopular ? "default" : "outline"} 
                    className="text-xs"
                  >
                    {item.category}
                  </Badge>
                  {item.isPopular && (
                    <Badge variant="destructive" className="text-xs">POPULAR</Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-muted-foreground text-xs">
                    {item.subscribers ? (
                      <>
                        <Users className="w-4 h-4 mr-1" />
                        <span>{item.subscribers} subscribers</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span>{item.downloads} downloads</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Updated</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="mr-2">
                    {item.subscribers ? 'Subscribe' : 'Download'}
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Education Resources
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;