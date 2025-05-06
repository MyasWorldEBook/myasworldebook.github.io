
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const EbookLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mya's World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EbookLayout;
