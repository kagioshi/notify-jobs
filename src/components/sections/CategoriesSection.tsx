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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find jobs in your preferred industry or field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`category-card ${category.className} cursor-pointer group animate-fade-in border-0`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium mr-2">View Jobs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;