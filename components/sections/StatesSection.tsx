import React from 'react';
import { Button } from '@/components/ui/button';

const StatesSection = () => {
  const states = [
    'AP', 'AS', 'BR', 'CG', 'GA', 'GJ', 'HR', 'HP', 'JH', 'KA',
    'KL', 'MP', 'MH', 'MN', 'ML', 'MZ', 'NL', 'OR', 'PB', 'RJ',
    'SK', 'TN', 'TS', 'TR', 'UP', 'UK', 'WB', 'AN', 'CH', 'DH',
    'DD', 'DL', 'JK', 'LA', 'LD', 'PY'
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-6">States</h2>
        
        <div className="grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-3">
          {states.map((state, index) => (
            <Button
              key={state}
              variant="outline"
              size="sm"
              className="state-button text-xs font-medium h-10 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {state}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;