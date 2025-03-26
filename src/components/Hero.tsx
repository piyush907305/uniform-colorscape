
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen bg-fitness-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/fe065ebb-3212-49eb-80e0-fb878be22731.png" 
          alt="Woman exercising in gym" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fitness-dark/90 to-fitness-dark/70"></div>
      </div>
      
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Fitness Journey at <span className="text-fitness-red">CONCORDIA</span> Starts Here!
            </h1>
            <Button className="primary-button">Start</Button>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-white">
                <p className="stat-number text-white">500+</p>
                <p className="stat-label text-gray-300">Members Joined This Month</p>
              </div>
              <div className="text-white">
                <p className="stat-number text-white">10+</p>
                <p className="stat-label text-gray-300">Certified Trainers</p>
              </div>
              <div className="text-white">
                <p className="stat-number text-white">76%+</p>
                <p className="stat-label text-gray-300">Success Rate</p>
              </div>
              <div className="text-white">
                <p className="stat-number text-white">95%</p>
                <p className="stat-label text-gray-300">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
