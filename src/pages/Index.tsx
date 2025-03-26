
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import LeGymSection from '../components/LeGymSection';
import OnlineFitnessSection from '../components/OnlineFitnessSection';
import TrainersSection from '../components/TrainersSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FooterSection from '../components/FooterSection';

const Index = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('section');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('animate-slide-in');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <LeGymSection />
      <OnlineFitnessSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      
      {/* Call Us Now Section */}
      <section className="bg-black text-white py-12 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Call Us Now</h2>
          <p className="text-3xl font-bold">+1 4385350876</p>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default Index;
