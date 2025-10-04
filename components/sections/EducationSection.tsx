import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Calendar, ArrowRight } from 'lucide-react';

const EducationSection = () => {
  const educationUpdates = [
    {
      id: 1,
      title: 'Free Job Updates',
      description: 'Get daily government job notifications directly in your inbox',
      category: 'Newsletter',
      subscribers: '500K+',
      isPopular: true,
      color: 'bg-[hsl(var(--primary))]',
    },
    {
      id: 2,
      title: 'UPSC Civil Services 2024 Guide',
      description: 'Complete preparation strategy and study material for UPSC CSE',
      category: 'Study Guide',
      downloads: '50K+',
      color: 'bg-[hsl(var(--secondary))]',
    },
    {
      id: 3,
      title: 'IBPS Bank PO Preparation 2024',
      description: 'Banking sector job preparation with mock tests and previous papers',
      category: 'Banking',
      downloads: '75K+',
      isPopular: true,
      color: 'bg-[hsl(var(--accent))]',
    },
    {
      id: 4,
      title: 'SSC CGL Complete Course 2024',
      description: 'Staff Selection Commission Combined Graduate Level preparation',
      category: 'SSC',
      downloads: '100K+',
      color: 'bg-[hsl(var(--brutal-orange))]',
    },
    {
      id: 5,
      title: 'Railway Group D & ALP Study Material',
      description: 'Comprehensive study material for Railway recruitment exams',
      category: 'Railway',
      downloads: '80K+',
      color: 'bg-[hsl(var(--brutal-green))]',
    },
    {
      id: 6,
      title: 'State PSC Preparation Guide',
      description: 'State Public Service Commission exam preparation for all states',
      category: 'State PSC',
      downloads: '60K+',
      color: 'bg-[hsl(var(--hot-pink))]',
    },
    {
      id: 7,
      title: 'Defence Jobs Preparation 2024',
      description: 'Complete guide for Army, Navy, and Air Force recruitment',
      category: 'Defence',
      downloads: '45K+',
      color: 'bg-[hsl(var(--primary))]',
    },
    {
      id: 8,
      title: 'Teaching Jobs & TET Preparation',
      description: 'Teacher Eligibility Test and teaching job preparation material',
      category: 'Teaching',
      downloads: '70K+',
      color: 'bg-[hsl(var(--secondary))]',
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header - Brutal */}
        <div className="text-center mb-12">
          <h2 className="brutal-heading text-3xl md:text-4xl mb-4">
            Education & Preparation
          </h2>
          <p className="text-lg font-bold text-muted-foreground uppercase tracking-tight">
            Free Study Material & Preparation Guides
          </p>
        </div>

        {/* Education Cards - Brutal Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationUpdates.map((item, index) => (
            <div 
              key={item.id} 
              className={`${item.color} brutal-card cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header with Badges */}
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white px-3 py-1 border-2 border-foreground">
                  <span className="text-xs font-black text-foreground uppercase">{item.category}</span>
                </div>
                {item.isPopular && (
                  <div className="bg-[hsl(var(--accent))] px-3 py-1 border-2 border-foreground">
                    <span className="text-xs font-black text-foreground uppercase">HOT</span>
                  </div>
                )}
              </div>

              {/* Title - Brutal Typography */}
              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white font-bold text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Stats - Brutal Icons */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-white/30">
                <div className="flex items-center gap-2 text-white">
                  {item.subscribers ? (
                    <>
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-bold">{item.subscribers}</span>
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-4 h-4" />
                      <span className="text-xs font-bold">{item.downloads}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold">UPDATED</span>
                </div>
              </div>

              {/* CTA Button - Brutal */}
              <button className="w-full bg-white text-foreground px-4 py-3 border-3 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-black text-sm uppercase flex items-center justify-center gap-2">
                {item.subscribers ? 'Subscribe' : 'Download'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* View All Button - Brutal */}
        <div className="text-center mt-12">
          <button className="brutal-btn-secondary px-8 py-4 text-base">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;