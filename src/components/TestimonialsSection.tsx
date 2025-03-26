
import React from 'react';
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex, Engineering Student",
      rating: 5,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      text: "The LeGym has completely transformed my university experience. The trainers are knowledgeable, and the facilities are top-notch!"
    },
    {
      id: 2,
      name: "Sarah, Business Student",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      text: "As a busy student, the flexible hours and online booking system make it so easy to fit workouts into my packed schedule. Highly recommend!"
    }
  ];

  return (
    <section className="py-16 bg-fitness-gray">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Hear From Our Students</h2>
        <p className="text-center text-fitness-textGray max-w-3xl mx-auto mb-12">
          Real feedback from our community members who've transformed their fitness journey with Concordia's LeGym facilities and trainers.
        </p>
        
        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-fitness-red' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="flex justify-between mb-4">
                  <div className="flex gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-fitness-textGray">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
