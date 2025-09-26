import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const popularPages = [
    { label: 'Latest Jobs', href: '/jobs', description: 'Recent government job notifications' },
    { label: 'Results', href: '/results', description: 'Exam results and merit lists' },
    { label: 'Admit Cards', href: '/admit-cards', description: 'Download hall tickets' },
    { label: 'Education', href: '/education', description: 'Study materials and guides' },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="container max-w-2xl mx-auto text-center">
        {/* Error Animation */}
        <div className="mb-8 animate-bounce-in">
          <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <FileQuestion className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for might have been moved, deleted, or doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button asChild size="lg" className="px-8">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="px-8" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
          
          <Button variant="outline" size="lg" className="px-8">
            <Search className="w-5 h-5 mr-2" />
            Search Jobs
          </Button>
        </div>

        {/* Popular Pages */}
        <div className="animate-slide-up">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Or try these popular pages:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularPages.map((page, index) => (
              <Card 
                key={page.href} 
                className="card-gradient hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <Link 
                    to={page.href}
                    className="block text-left hover:text-primary transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {page.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {page.description}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg animate-fade-in">
          <p className="text-sm text-muted-foreground">
            If you believe this is an error, please{' '}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              contact our support team
            </Link>{' '}
            or report the broken link.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;