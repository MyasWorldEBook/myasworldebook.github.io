
import React from 'react';
import { Link } from 'react-router-dom';
import EbookLayout from '../components/EbookLayout';

const HomePage = () => {
  return (
    <EbookLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-semibold mb-4 tracking-tight">THE INTERNET HOE</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-600 font-light">Your complete guide to thriving online</p>
          <p className="mb-12 text-gray-600 max-w-2xl mx-auto">
            Learn strategies for building your digital presence, monetization techniques, and protecting your wellbeing in the online space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ebook">
              <button className="px-8 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all text-sm">
                Learn More
              </button>
            </Link>
            <Link to="/buy">
              <button className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all text-sm">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-6">Unlock Your Digital Potential</h2>
              <p className="text-gray-600 mb-6 text-lg">
                The Internet Hoe is your comprehensive guide to navigating the digital landscape
                of adult entertainment and online entrepreneurship.
              </p>
              <p className="text-gray-600 mb-10">
                Based on real experiences and practical advice, this guide will help you unlock 
                your potential for financial independence while protecting your wellbeing.
              </p>
              <Link to="/buy">
                <button className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all text-sm">
                  Get Your Copy
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/d69a68df-a4a0-44e5-894e-a79e1acfbf7f.png" 
                alt="The Internet Hoe Cover" 
                className="rounded-lg shadow-lg max-w-sm mx-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-12">What Readers Say</h2>
          
          <div className="bg-white p-10 rounded-xl shadow-sm mb-10 max-w-2xl mx-auto">
            <p className="text-xl mb-6 text-gray-600">
              "This guide changed my perspective on how to build an online presence. I've doubled my income within just 3 months of implementing these strategies!"
            </p>
            <p className="font-medium">Jessica T.</p>
          </div>
          
          <Link to="/testimonials">
            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 text-sm">
              See All Testimonials
            </button>
          </Link>
        </div>
      </section>
    </EbookLayout>
  );
};

export default HomePage;
