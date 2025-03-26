
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen bg-fitness-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/7b4eb1b0-1dee-487a-a181-f985ce7f5654.png" 
          alt="Woman exercising in gym" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fitness-dark/70 to-transparent"></div>
      </div>
      
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Fitness Journey at<br /> 
              <span className="text-white">CONCORDIA</span> Starts<br />
              Here!
            </h1>
            
            <Button className="bg-white text-fitness-dark hover:bg-white hover:text-black transition-colors mt-4">Sign Up</Button>
            
            <div className="mt-16 grid grid-cols-4 gap-4">
              <div className="text-center">
                <p className="stat-number text-white">500+</p>
                <p className="text-xs text-white">Students Joined Weekly</p>
              </div>
              <div className="text-center">
                <p className="stat-number text-white">10+</p>
                <p className="text-xs text-white">Certified Trainers</p>
              </div>
              <div className="text-center">
                <p className="stat-number text-white">786+</p>
                <p className="text-xs text-white">Happy Members</p>
              </div>
              <div className="text-center">
                <p className="stat-number text-white">95%</p>
                <p className="text-xs text-white">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
