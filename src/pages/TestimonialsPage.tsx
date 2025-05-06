
import React from 'react';
import EbookLayout from '../components/EbookLayout';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      text: "I was struggling to make ends meet before I found this guide. The strategies for content creation and audience building have completely changed my financial situation.",
      name: "Alexis M.",
      rating: 5
    },
    {
      id: 2,
      text: "The section on building your personal brand was worth the price of the whole guide. I've been able to stand out in a crowded market and attract higher-paying subscribers.",
      name: "Taylor R.",
      rating: 5
    },
    {
      id: 3,
      text: "As someone new to the industry, I was overwhelmed with where to start. This guide gave me a clear roadmap and helped me avoid costly mistakes.",
      name: "Jamie K.",
      rating: 5
    },
    {
      id: 4,
      text: "The safety and privacy section alone is worth every penny. I feel much more confident about protecting myself while growing my business online.",
      name: "Morgan P.",
      rating: 5
    }
  ];

  return (
    <EbookLayout>
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-semibold mb-4">Customer Testimonials</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from readers who have transformed their online presence and income
              using the strategies in The Internet Hoe guide.
            </p>
          </div>
          
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-600 mb-6 text-lg">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium">{testimonial.name}</p>
                  <div className="text-yellow-400">
                    {"★".repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl mb-6">Ready to transform your online presence?</p>
            <a href="https://buy.stripe.com/6oE9Eg77PaAN3Is3cc" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3.5 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all text-sm font-medium">
                Get Your Copy Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </EbookLayout>
  );
};

export default TestimonialsPage;
