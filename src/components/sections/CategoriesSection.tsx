import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Heart, 
  DollarSign, 
  GraduationCap, 
  Megaphone, 
  Palette,
  ArrowRight 
} from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      id: 'technology',
      title: 'Technology',
      description: 'Software development, IT and tech roles',
      icon: Code,
      className: 'category-tech',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Medical, nursing, and healthcare positions',
      icon: Heart,
      className: 'category-healthcare',
    },
    {
      id: 'finance',
      title: 'Finance',
      description: 'Banking, accounting, and financial services',
      icon: DollarSign,
      className: 'category-finance',
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Teaching, administration and educational roles',
      icon: GraduationCap,
      className: 'category-education',
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: 'Digital marketing, advertising and PR',
      icon: Megaphone,
      className: 'category-marketing',
    },
    {
      id: 'design',
      title: 'Design',
      description: 'UI/UX, graphic design and creative roles',
      icon: Palette,
      className: 'category-design',
    },
  ];

  return (
    <section className="py-16 px-4 bg-background bg-pattern-dots relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block brutal-box-tritone bg-gradient-to-r from-primary via-accent to-secondary p-6 mb-4 rotate-[-1deg] animate-rotate-in">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-background text-glitch">
              Browse by Category
            </h2>
          </div>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-black uppercase tracking-wide">
            Find jobs in your preferred industry or field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-3'];
            const bgColors = [
              'from-primary/30 to-accent/30',
              'from-secondary/30 to-primary/30',
              'from-accent/30 to-secondary/30',
              'from-[hsl(var(--lime-green))/0.3] to-[hsl(var(--cyber-purple))/0.3]',
              'from-[hsl(var(--toxic-orange))/0.3] to-[hsl(var(--neon-cyan))/0.3]',
              'from-[hsl(var(--electric-pink))/0.3] to-accent/30',
            ];
            return (
              <div
                key={category.id} 
                className={`brutal-box-tritone cursor-pointer group animate-rotate-in p-6 text-center bg-gradient-to-br ${bgColors[index]} hover:rotate-0 hover:scale-105 transition-all duration-200 ${rotations[index]} hover-wobble`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 border-6 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <IconComponent className="w-12 h-12 text-foreground" strokeWidth={4} />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-2 uppercase tracking-tighter brutal-stamped">
                  {category.title}
                </h3>
                <p className="text-foreground text-sm font-black mb-4 uppercase">
                  {category.description}
                </p>
                <div className="inline-flex items-center justify-center text-foreground font-black uppercase text-xs border-4 border-foreground bg-accent px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all">
                  <span className="mr-2">View Jobs</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={4} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;