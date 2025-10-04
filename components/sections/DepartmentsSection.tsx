import React from 'react';

const DepartmentsSection = () => {
  const departments = [
    'LIC', 'UPSC', 'IBPS', 'Bank Jobs', 'SBI', 'NPCIL', 'WCL',
    'IOCL', 'SAIL', 'DRDO', 'FCI', 'ISRO', 'BEL', 'NTPC',
    'ONGC', 'HAL', 'BARC', 'BHEL', 'Coal India', 'ECIL',
    'GAIL', 'NHB', 'NMDC', 'NLC', 'Indian Railways', 'PSU',
    'CIL', 'AAI', 'Airport Authority', 'Banking Sector',
    'Defence', 'Medical', 'Engineering', 'Teaching',
    'Agriculture', 'Forest', 'Police', 'Judicial',
    'Administrative', 'Technical', 'Clerical', 'Group A',
    'Group B', 'Group C', 'Group D', 'State Govt',
    'Central Govt', 'Public Sector'
  ];

  const gameNotifications = [
    'RPSC Pre Computer Instructor (IT)',
    'LDC Rajasthan Pre Computer Instructor (IT)',
    'BSPHCL JE Electrical Recruitment',
    'WB Sub Inspector Recruitment',
    'Police Sub Inspector Recruitment',
    'Forest Guard Recruitment',
    'View All'
  ];

  const answerKeys = [
    'UP Scholarship Online Form 2024',
    'UP Scholarship Online Form Date Extended',
    'UP Scholarship Form Link 2024',
    'UP Scholarship List 2024',
    'UP Scholarship Renewal 2024',
    'PFMS Scholarship Renewal Process',
    'NSP-2.0 Portal Scholarship',
    'UP Scholarship Merit List 2024',
    'View All'
  ];

  const syllabus = [
    'UP SI Recruitment 2024',
    'UP SI Recruitment Bharti 2024',
    'UP Forest Guard Recruitment 2024',
    'Rajasthan BSTC 2024 Counseling Date',
    'Rajasthan BSTC 2024 Seat Allotment',
    'MP Scholarship 2024 Online Form',
    'MP Scholarship Merit List 2024',
    'PFMS Scholarship Portal',
    'View All'
  ];

  return (
    <section className="py-12 px-4 bg-background border-y-4 border-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Departments - Brutal Box */}
          <div className="brutal-box bg-[hsl(var(--primary))] p-6">
            <h2 className="brutal-heading text-xl mb-4 text-white">Departments</h2>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept, index) => (
                <button
                  key={dept}
                  className="bg-white text-foreground px-3 py-2 border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] hover:shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all text-xs font-black uppercase animate-fade-in"
                  style={{ animationDelay: `${index * 20}ms` }}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Game Job Notifications - Brutal Box */}
          <div className="brutal-box bg-[hsl(var(--secondary))] p-6">
            <h3 className="brutal-heading text-lg mb-4 text-white">Latest Jobs</h3>
            <div className="space-y-2">
              {gameNotifications.map((notification, index) => (
                <div 
                  key={index}
                  className="bg-white text-foreground p-3 border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] hover:shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all text-sm font-bold cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  → {notification}
                </div>
              ))}
            </div>
          </div>

          {/* Answer Keys - Brutal Box */}
          <div className="brutal-box bg-[hsl(var(--accent))] p-6">
            <h3 className="brutal-heading text-lg mb-4 text-foreground">Answer Keys</h3>
            <div className="space-y-2">
              {answerKeys.map((key, index) => (
                <div 
                  key={index}
                  className="bg-white text-foreground p-3 border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] hover:shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all text-sm font-bold cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  → {key}
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus - Brutal Box */}
          <div className="brutal-box bg-[hsl(var(--brutal-green))] p-6">
            <h3 className="brutal-heading text-lg mb-4 text-white">Syllabus</h3>
            <div className="space-y-2">
              {syllabus.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white text-foreground p-3 border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--foreground))] hover:shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all text-sm font-bold cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  → {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;