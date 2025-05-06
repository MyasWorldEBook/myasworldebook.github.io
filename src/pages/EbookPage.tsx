
import React from 'react';
import EbookLayout from '../components/EbookLayout';

const EbookPage = () => {
  return (
    <EbookLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Ebook Cover */}
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/d69a68df-a4a0-44e5-894e-a79e1acfbf7f.png" 
              alt="The Internet Hoe Cover" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg" 
            />
          </div>
          
          {/* Ebook Info */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">THE INTERNET HOE</h1>
            <h2 className="text-2xl mb-6">COMPLETE GUIDE</h2>
            
            <p className="mb-6">
              Learn how to thrive in the world of online adult entertainment and content creation.
              This comprehensive guide covers everything from getting started to scaling your business
              and protecting your well-being along the way.
            </p>
            
            <h3 className="text-xl font-bold mb-4">What You'll Learn:</h3>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li>How to build an engaged online audience</li>
              <li>Strategies for monetizing different platforms</li>
              <li>Safety and privacy protection techniques</li>
              <li>Building your personal brand</li>
              <li>Financial management for content creators</li>
              <li>Avoiding common industry pitfalls</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="font-bold mb-2">Ebook Details:</p>
              <p>Format: PDF (digital download)</p>
              <p>Pages: 120+</p>
              <p>Includes: Bonus resources and templates</p>
            </div>
            
            <a href="https://buy.stripe.com/6oE9Eg77PaAN3Is3cc" target="_blank" rel="noopener noreferrer" className="block w-full text-center">
              <button className="buy-button w-full md:w-auto">
                BUY NOW - $19.99
              </button>
            </a>
          </div>
        </div>
      </div>
    </EbookLayout>
  );
};

export default EbookPage;
