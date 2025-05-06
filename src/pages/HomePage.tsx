
import React from 'react';
import { Link } from 'react-router-dom';
import EbookLayout from '../components/EbookLayout';

const HomePage = () => {
  return (
    <EbookLayout>
      {/* Hero Section */}
      <section className="hero-bg py-20 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">THE INTERNET HOE</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">COMPLETE GUIDE</p>
          <p className="mb-8 max-w-2xl mx-auto">Your comprehensive guide to thriving in the digital space and unlocking financial independence</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/ebook">
              <button className="buy-button">
                LEARN MORE
              </button>
            </Link>
            <a href="https://buy.stripe.com/6oE9Eg77PaAN3Is3cc" target="_blank" rel="noopener noreferrer">
              <button className="buy-button">
                BUY NOW
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/lovable-uploads/943e0858-77e5-431f-b2e1-558be3b06cf8.png" 
                alt="The Internet Hoe Author" 
                className="rounded-full w-64 h-64 object-cover mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About The Guide</h2>
              <p className="mb-4">
                The Internet Hoe is your comprehensive guide to navigating the digital landscape
                of adult entertainment and online entrepreneurship. Based on real experiences and practical advice,
                this ebook will help you unlock your potential for financial independence.
              </p>
              <p className="mb-6">
                Learn how to embrace your seductive power, reclaim your narrative, 
                and build a sustainable income from the comfort of your home.
              </p>
              <a href="https://buy.stripe.com/6oE9Eg77PaAN3Is3cc" target="_blank" rel="noopener noreferrer">
                <button className="buy-button">
                  GET YOUR COPY
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Readers Say</h2>
          
          <div className="testimonial-card">
            <p className="italic mb-4">
              "This guide changed my perspective on how to build an online presence. I've doubled my income within just 3 months of implementing these strategies!"
            </p>
            <p className="font-bold">— Jessica T.</p>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                SEE ALL TESTIMONIALS
              </button>
            </Link>
          </div>
        </div>
      </section>
    </EbookLayout>
  );
};

export default HomePage;
