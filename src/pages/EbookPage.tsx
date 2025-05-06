
import React from 'react';
import EbookLayout from '../components/EbookLayout';
import { Link } from 'react-router-dom';

const EbookPage = () => {
  return (
    <EbookLayout>
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Ebook Cover */}
            <div className="md:w-2/5">
              <img 
                src="/lovable-uploads/d69a68df-a4a0-44e5-894e-a79e1acfbf7f.png" 
                alt="The Internet Hoe Cover" 
                className="rounded-lg shadow-xl mx-auto" 
              />
            </div>
            
            {/* Ebook Info */}
            <div className="md:w-3/5">
              <h1 className="text-4xl font-semibold mb-2">THE INTERNET HOE</h1>
              <p className="text-xl mb-8 text-gray-600">COMPLETE GUIDE</p>
              
              <p className="mb-8 text-gray-600">
                Learn how to thrive in the world of online adult entertainment and content creation.
                This comprehensive guide covers everything from getting started to scaling your business
                and protecting your well-being along the way.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">What You'll Learn</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    How to build an engaged online audience
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Strategies for monetizing different platforms
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Safety and privacy protection techniques
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Financial management for content creators
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-100">
                <p className="font-medium mb-2">Ebook Details</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Format: PDF (digital download)</p>
                  <p>Pages: 31</p>
                  <p>Includes: Bonus resources and templates</p>
                </div>
              </div>
              
              <Link to="/buy" className="inline-block">
                <button className="w-full md:w-auto px-8 py-3.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-all text-sm font-medium">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </EbookLayout>
  );
};

export default EbookPage;
