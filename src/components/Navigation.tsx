
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold no-underline">
          <img 
            src="/lovable-uploads/df906440-d231-47be-89a4-65242c5c47de.png" 
            alt="Mya's World Logo" 
            className="h-12" 
          />
        </Link>
        <div className="space-x-6">
          <Link to="/" className="no-underline text-sm font-medium">HOME</Link>
          <Link to="/ebook" className="no-underline text-sm font-medium">THE EBOOK</Link>
          <Link to="/testimonials" className="no-underline text-sm font-medium">TESTIMONIALS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
