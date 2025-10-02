import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BrutalAdSlot from '@/components/enhanced/BrutalAdSlot';

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
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="mb-8">
          <BrutalAdSlot name="departments-top" variant="colored" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Departments */}
          <div>
            <h2 className="text-2xl brutal-heading mb-6">Departments</h2>
            <div className="flex flex-wrap gap-3">
              {departments.map((dept, index) => (
                <Button
                  key={dept}
                  variant="brutal"
                  size="sm"
                  className="text-xs animate-fade-in"
                  style={{ animationDelay: `${index * 20}ms` }}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          {/* Game Job Notifications */}
          <div>
            <div className="brutal-box bg-background">
              <div className="p-4 border-b-4 border-foreground">
                <h3 className="text-lg brutal-heading">Game Job Notifications</h3>
              </div>
              <div className="p-4 space-y-2">
                {gameNotifications.map((notification, index) => (
                  <div 
                    key={index}
                    className="p-3 border-2 border-foreground bg-accent/10 text-sm font-bold hover:bg-accent hover:translate-x-1 cursor-pointer animate-fade-in transition-all"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    • {notification}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Answer Keys */}
          <div>
            <div className="brutal-box bg-background">
              <div className="p-4 border-b-4 border-foreground">
                <h3 className="text-lg brutal-heading">Answer Keys</h3>
              </div>
              <div className="p-4 space-y-2">
                {answerKeys.map((key, index) => (
                  <div 
                    key={index}
                    className="p-3 border-2 border-foreground bg-secondary/10 text-sm font-bold hover:bg-secondary hover:translate-x-1 cursor-pointer animate-fade-in transition-all"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    • {key}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Syllabus */}
          <div>
            <div className="brutal-box bg-background">
              <div className="p-4 border-b-4 border-foreground">
                <h3 className="text-lg brutal-heading">Syllabus</h3>
              </div>
              <div className="p-4 space-y-2">
                {syllabus.map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 border-2 border-foreground bg-primary/10 text-sm font-bold hover:bg-primary hover:translate-x-1 cursor-pointer animate-fade-in transition-all"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;