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
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl brutal-heading mb-4">
            Education & Preparation
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-bold">
            Access free study material, preparation guides, and resources for government job exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationUpdates.map((item, index) => (
            <div 
              key={item.id} 
              className="brutal-box bg-background hover:-rotate-1 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 border-b-4 border-foreground bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant={item.isPopular ? "default" : "outline"} 
                    className="text-xs font-black"
                  >
                    {item.category}
                  </Badge>
                  {item.isPopular && (
                    <Badge variant="default" className="text-xs bg-destructive border-2 border-foreground">POPULAR</Badge>
                  )}
                </div>
                <h3 className="text-lg leading-tight font-black text-foreground">
                  {item.title}
                </h3>
              </div>
              
              <div className="p-4">
                <p className="text-foreground/70 text-sm font-bold mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-xs font-bold">
                  <div className="flex items-center text-foreground/70">
                    {item.subscribers ? (
                      <>
                        <Users className="w-4 h-4 mr-1" strokeWidth={3} />
                        <span>{item.subscribers}</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-4 h-4 mr-1" strokeWidth={3} />
                        <span>{item.downloads}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Calendar className="w-4 h-4 mr-1" strokeWidth={3} />
                    <span>Updated</span>
                  </div>
                </div>
                
                <Button 
                  variant="brutal" 
                  size="sm" 
                  className="w-full group"
                >
                  <span className="mr-2">
                    {item.subscribers ? 'Subscribe' : 'Download'}
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="brutal" className="px-8">
            View All Education Resources
            <ExternalLink className="w-5 h-5 ml-2" strokeWidth={3} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;