
import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 border-b">
        <div className="container flex justify-between items-center">
          <Link to="/" className="text-xl font-bold no-underline">
            WEB_HOARDER
          </Link>
          <nav className="space-x-4">
            <Link to="/" className="text-sm">HOME</Link>
            <Link to="/archive" className="text-sm">ARCHIVE</Link>
            <Link to="/about" className="text-sm">ABOUT</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container py-8">
        {children}
      </main>
      <footer className="py-4 border-t text-center text-sm text-muted-foreground">
        <div className="container">
          Web Hoarder Archive Kit © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
