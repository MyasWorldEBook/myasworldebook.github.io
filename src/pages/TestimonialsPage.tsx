
import React from 'react';
import EbookLayout from '../components/EbookLayout';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      text: "This guide taught me how to monetize my personality while setting healthy boundaries. I've earned enough to pay off my student loans in just 6 months!",
      name: "MistressVixen",
      rating: 5
    },
    {
      id: 2,
      text: "The section on building your personal brand was *chef's kiss*. I went from amateur to having a waiting list of clients who respect my boundaries and pay premium rates.",
      name: "DominantDiva",
      rating: 5
    },
    {
      id: 3,
      text: "As someone new to the industry, I was overwhelmed with where to start. This guide gave me the confidence to assert my worth and the tools to protect my identity online.",
      name: "KinkyKitten",
      rating: 5
    },
    {
      id: 4,
      text: "The safety protocols alone saved me from countless headaches. Now I run my side hustle with complete confidence while keeping my personal life separate.",
      name: "PleasurePrincess",
      rating: 5
    },
    {
      id: 5,
      text: "I've tripled my income since implementing these strategies. The content creation schedule templates are worth every penny!",
      name: "WhipMistress",
      rating: 5
    },
    {
      id: 6,
      text: "Learning how to price my services based on value rather than time has been revolutionary. This guide gave me the confidence to charge what I'm worth.",
      name: "LeatherLady",
      rating: 5
    },
    {
      id: 7,
      text: "The section on navigating difficult conversations with subscribers was exactly what I needed. Now I can maintain healthy boundaries without losing clients.",
      name: "SassyDomme",
      rating: 5
    }
  ];

  return (
    <EbookLayout>
      <div className="py-24 bg-gradient-to-b from-white to-purple-50">
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
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
                <p className="text-gray-600 mb-6 text-lg">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-pink-700">{testimonial.name}</p>
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
              <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-600 hover:to-pink-600 transition-all text-sm font-medium">
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
