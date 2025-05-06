
import React from 'react';
import EbookLayout from '../components/EbookLayout';

const TestimonialsPage = () => {
  return (
    <EbookLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">CUSTOMER TESTIMONIALS</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Hear from readers who have transformed their online presence and income
          using the strategies in The Internet Hoe guide.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="testimonial-card">
            <p className="italic mb-4">
              "I was struggling to make ends meet before I found this guide. The strategies for content creation
              and audience building have completely changed my financial situation."
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-bold">Alexis M.</p>
                <div className="flex text-yellow-500">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="italic mb-4">
              "The section on building your personal brand was worth the price of the whole guide. 
              I've been able to stand out in a crowded market and attract higher-paying subscribers."
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-bold">Taylor R.</p>
                <div className="flex text-yellow-500">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="italic mb-4">
              "As someone new to the industry, I was overwhelmed with where to start. This guide gave me 
              a clear roadmap and helped me avoid costly mistakes."
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-bold">Jamie K.</p>
                <div className="flex text-yellow-500">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="italic mb-4">
              "The safety and privacy section alone is worth every penny. I feel much more confident
              about protecting myself while growing my business online."
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-bold">Morgan P.</p>
                <div className="flex text-yellow-500">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-xl mb-8">Ready to transform your online presence?</p>
          <a href="https://buy.stripe.com/6oE9Eg77PaAN3Is3cc" target="_blank" rel="noopener noreferrer">
            <button className="buy-button">
              GET YOUR COPY TODAY
            </button>
          </a>
        </div>
      </div>
    </EbookLayout>
  );
};

export default TestimonialsPage;
