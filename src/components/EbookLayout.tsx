
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const EbookLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-8 bg-gray-50">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mya's World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EbookLayout;
