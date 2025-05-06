
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-medium no-underline">
            <img 
              src="/lovable-uploads/a05f34f5-6f88-4373-a567-1fd03e128a97.png" 
              alt="Mya's World Logo" 
              className="h-16 rounded-full" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="no-underline text-sm font-normal text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/ebook" className="no-underline text-sm font-normal text-gray-600 hover:text-gray-900">The Ebook</Link>
            <Link to="/buy" className="no-underline text-sm font-normal text-gray-600 hover:text-gray-900">Buy Now</Link>
            <Link to="/testimonials" className="no-underline text-sm font-normal text-gray-600 hover:text-gray-900">Testimonials</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link 
              to="/" 
              className="block no-underline text-sm font-normal text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/ebook" 
              className="block no-underline text-sm font-normal text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Ebook
            </Link>
            <Link 
              to="/buy" 
              className="block no-underline text-sm font-normal text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy Now
            </Link>
            <Link 
              to="/testimonials" 
              className="block no-underline text-sm font-normal text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
