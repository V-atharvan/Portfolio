import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md bg-white p-8 rounded-2xl border border-portfolio-border shadow-card space-y-4">
        <span className="text-4xl font-mono font-bold text-portfolio-forest">404</span>
        <h1 className="text-xl font-bold text-portfolio-charcoal">Page Not Found</h1>
        <p className="text-sm text-portfolio-muted">
          The requested page or route does not exist. Return to the developer portfolio overview.
        </p>
        <div className="pt-2">
          <Button variant="primary" to="/" icon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};
