import React from 'react';

const StatesSection = () => {
  const states = [
    { code: 'AP', name: 'Andhra Pradesh', color: 'bg-[hsl(var(--primary))]' },
    { code: 'AS', name: 'Assam', color: 'bg-[hsl(var(--secondary))]' },
    { code: 'BR', name: 'Bihar', color: 'bg-[hsl(var(--accent))]' },
    { code: 'CG', name: 'Chhattisgarh', color: 'bg-[hsl(var(--brutal-orange))]' },
    { code: 'GA', name: 'Goa', color: 'bg-[hsl(var(--brutal-green))]' },
    { code: 'GJ', name: 'Gujarat', color: 'bg-[hsl(var(--hot-pink))]' },
    { code: 'HR', name: 'Haryana', color: 'bg-[hsl(var(--primary))]' },
    { code: 'HP', name: 'Himachal Pradesh', color: 'bg-[hsl(var(--secondary))]' },
    { code: 'JH', name: 'Jharkhand', color: 'bg-[hsl(var(--accent))]' },
    { code: 'KA', name: 'Karnataka', color: 'bg-[hsl(var(--brutal-orange))]' },
    { code: 'KL', name: 'Kerala', color: 'bg-[hsl(var(--brutal-green))]' },
    { code: 'MP', name: 'Madhya Pradesh', color: 'bg-[hsl(var(--hot-pink))]' },
    { code: 'MH', name: 'Maharashtra', color: 'bg-[hsl(var(--primary))]' },
    { code: 'MN', name: 'Manipur', color: 'bg-[hsl(var(--secondary))]' },
    { code: 'ML', name: 'Meghalaya', color: 'bg-[hsl(var(--accent))]' },
    { code: 'MZ', name: 'Mizoram', color: 'bg-[hsl(var(--brutal-orange))]' },
    { code: 'NL', name: 'Nagaland', color: 'bg-[hsl(var(--brutal-green))]' },
    { code: 'OR', name: 'Odisha', color: 'bg-[hsl(var(--hot-pink))]' },
    { code: 'PB', name: 'Punjab', color: 'bg-[hsl(var(--primary))]' },
    { code: 'RJ', name: 'Rajasthan', color: 'bg-[hsl(var(--secondary))]' },
    { code: 'SK', name: 'Sikkim', color: 'bg-[hsl(var(--accent))]' },
    { code: 'TN', name: 'Tamil Nadu', color: 'bg-[hsl(var(--brutal-orange))]' },
    { code: 'TS', name: 'Telangana', color: 'bg-[hsl(var(--brutal-green))]' },
    { code: 'TR', name: 'Tripura', color: 'bg-[hsl(var(--hot-pink))]' },
    { code: 'UP', name: 'Uttar Pradesh', color: 'bg-[hsl(var(--primary))]' },
    { code: 'UK', name: 'Uttarakhand', color: 'bg-[hsl(var(--secondary))]' },
    { code: 'WB', name: 'West Bengal', color: 'bg-[hsl(var(--accent))]' },
    { code: 'AN', name: 'Andaman & Nicobar', color: 'bg-[hsl(var(--brutal-orange))]' },
    { code: 'CH', name: 'Chandigarh', color: 'bg-[hsl(var(--brutal-green))]' },
    { code: 'DH', name: 'Dadra & Nagar Haveli', color: 'bg-[hsl(var(--hot-pink))]' },
    { code: 'DD', name: 'Daman & Diu', color: 'bg-[hsl(var(--primary))]' },
    { code: 'DL', name: 'Delhi', color: 'bg-[hsl(var(--secondary))]' },
    { code: 'JK', name: 'Jammu & Kashmir', color: 'bg-[hsl(var(--accent))]' },
    { code: 'LA', name: 'Ladakh', color: 'bg-[hsl(var(--brutal-orange))]' },
    { code: 'LD', name: 'Lakshadweep', color: 'bg-[hsl(var(--brutal-green))]' },
    { code: 'PY', name: 'Puducherry', color: 'bg-[hsl(var(--hot-pink))]' }
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header - Brutal */}
        <div className="mb-8">
          <h2 className="brutal-heading text-3xl md:text-4xl mb-3">
            Browse by State
          </h2>
          <p className="text-lg font-bold text-muted-foreground uppercase tracking-tight">
            Find Jobs in Your State
          </p>
        </div>
        
        {/* States Grid - Brutal Buttons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
          {states.map((state, index) => (
            <button
              key={state.code}
              className={`${state.color} state-button text-white px-3 py-4 border-3 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-fade-in`}
              style={{ animationDelay: `${index * 20}ms` }}
              title={state.name}
            >
              <span className="font-black text-sm">{state.code}</span>
            </button>
          ))}
        </div>

        {/* All India Button - Special Brutal */}
        <div className="mt-8 text-center">
          <button className="brutal-btn-secondary px-8 py-4 text-base">
            View All India Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatesSection;