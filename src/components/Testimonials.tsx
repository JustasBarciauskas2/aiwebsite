import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      business: "Pristine Mobile Detailing",
      location: "Los Angeles, CA",
      quote: "My appointments increased by 43% in the first month after launching my AI-built website. The scheduling system is a game-changer for my mobile detailing business.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      business: "Shine & Sparkle Auto Care",
      location: "Miami, FL",
      quote: "I was skeptical about AI building my website, but I'm blown away by the results. It looks better than sites my competitors paid thousands for, and it only took 4 days to build!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      name: "David Chen",
      business: "Elite Mobile Detailing",
      location: "Seattle, WA",
      quote: "The AI understood exactly what my business needed. The online scheduling has eliminated phone tag with clients and saved me at least 5 hours per week on administration.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((activeIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories from Car Detailers</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from car detailing business owners who transformed their operations with our AI-built websites.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-1">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 relative border border-white/10">
                      <Quote className="absolute top-6 left-6 h-12 w-12 text-purple-500/20" />
                      
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-purple-500/20 mx-auto">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-purple-400 fill-current" />
                            ))}
                          </div>
                          
                          <blockquote className="text-lg md:text-xl mb-4 italic text-gray-300">
                            "{testimonial.quote}"
                          </blockquote>
                          
                          <div>
                            <p className="font-bold text-lg text-white">{testimonial.name}</p>
                            <p className="text-purple-400">{testimonial.business}</p>
                            <p className="text-gray-400 text-sm">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-2 shadow-lg hover:bg-purple-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-2 shadow-lg hover:bg-purple-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-purple-500' : 'bg-purple-500/30 hover:bg-purple-500/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-300 mb-4">Join these successful car detailing businesses</p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-500 hover:to-purple-600 font-bold px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-purple-500/25"
          >
            Get Your AI-Built Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;