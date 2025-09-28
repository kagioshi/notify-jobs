import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Departments */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Departments</h2>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept, index) => (
                <Button
                  key={dept}
                  variant="outline"
                  size="sm"
                  className="text-xs mb-2 animate-fade-in hover:bg-primary hover:text-primary-foreground"
                  style={{ animationDelay: `${index * 20}ms` }}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          {/* Game Job Notifications */}
          <div>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Game Job Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {gameNotifications.map((notification, index) => (
                  <div 
                    key={index}
                    className="job-item p-2 rounded text-sm hover:text-primary cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    • {notification}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Answer Keys */}
          <div>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Answer Keys</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {answerKeys.map((key, index) => (
                  <div 
                    key={index}
                    className="job-item p-2 rounded text-sm hover:text-primary cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    • {key}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Syllabus */}
          <div>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Syllabus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {syllabus.map((item, index) => (
                  <div 
                    key={index}
                    className="job-item p-2 rounded text-sm hover:text-primary cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    • {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;