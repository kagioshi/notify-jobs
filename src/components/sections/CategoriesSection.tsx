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
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl brutal-heading mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-bold">
            Find jobs in your preferred industry or field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id} 
                className="brutal-box-colored cursor-pointer group animate-fade-in p-6 text-center bg-gradient-to-br from-primary/20 to-accent/20 hover:rotate-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 brutal-box bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="w-10 h-10 text-accent-foreground" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-2 uppercase tracking-tight">
                  {category.title}
                </h3>
                <p className="text-foreground/80 text-sm font-bold mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-center text-foreground font-black uppercase text-xs group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">View Jobs</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={3} />
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