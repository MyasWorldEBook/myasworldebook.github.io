
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface TestimonialProps {
  text: string;
  name: string;
  rating: number;
  className?: string;
}

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
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ text, name, rating, className }) => {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-sm border border-purple-100 ${className}`}>
      <p className="text-gray-600 mb-6 text-lg">"{text}"</p>
      <div className="flex items-center justify-between">
        <p className="font-medium text-pink-700">{name}</p>
        <div className="text-yellow-400">
          {"★".repeat(rating)}
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">What Our Community Says</h2>
      
      <Carousel className="max-w-4xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/1">
              <div className="p-2">
                <Testimonial
                  text={testimonial.text}
                  name={testimonial.name}
                  rating={testimonial.rating}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-2">
          <CarouselPrevious className="relative static h-10 w-10" />
          <CarouselNext className="relative static h-10 w-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
