import React from 'react';
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
      description: 'Software, IT & Tech Roles',
      icon: Code,
      color: 'bg-[hsl(var(--primary))]',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Medical & Nursing Jobs',
      icon: Heart,
      color: 'bg-[hsl(var(--secondary))]',
    },
    {
      id: 'finance',
      title: 'Finance',
      description: 'Banking & Accounting',
      icon: DollarSign,
      color: 'bg-[hsl(var(--accent))]',
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Teaching & Admin Roles',
      icon: GraduationCap,
      color: 'bg-[hsl(var(--brutal-orange))]',
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: 'Digital Marketing & PR',
      icon: Megaphone,
      color: 'bg-[hsl(var(--brutal-green))]',
    },
    {
      id: 'design',
      title: 'Design',
      description: 'UI/UX & Creative Roles',
      icon: Palette,
      color: 'bg-[hsl(var(--hot-pink))]',
    },
  ];

  return (
    <section className="py-16 px-4 bg-background border-y-4 border-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="brutal-heading text-3xl md:text-4xl mb-4">
            Browse by Category
          </h2>
          <p className="text-lg font-bold text-muted-foreground uppercase tracking-tight">
            Find Jobs in Your Preferred Industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`${category.color} category-card cursor-pointer p-8 text-center animate-fade-in group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-white border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] group-hover:shadow-[8px_8px_0px_hsl(var(--foreground))] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">
                  {category.title}
                </h3>
                <p className="text-white font-bold text-sm mb-6 uppercase tracking-tight">
                  {category.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-white group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-black uppercase">View Jobs</span>
                  <ArrowRight className="w-5 h-5" />
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