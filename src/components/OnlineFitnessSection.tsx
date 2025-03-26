
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OnlineFitnessSection = () => {
  return (
    <section className="py-16 bg-fitness-gray">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="section-title text-center text-3xl font-bold mb-4">Find Your Perfect Online Fitness Mentor</h2>
        <p className="text-center text-fitness-textGray max-w-3xl mx-auto mb-12">
          Connect with certified trainers and join live classes. Schedule personalized demo sessions to achieve your fitness goals from anywhere!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Explore Our Online Fitness Features</h3>
              
              <ul className="space-y-3">
                <li className="text-sm">View List of Online Activities</li>
                <li className="text-sm">Book Online Classes with Trainers</li>
                <li className="text-sm">Access On-Demand Fitness Videos</li>
                <li className="text-sm">Chat with Trainers for Personalized Advice</li>
                <li className="text-sm">Track Your Progress Online</li>
              </ul>
              
              <Button className="bg-gray-800 text-white hover:bg-gray-700 transition-colors mt-8">Join Now!</Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/798813f4-cfef-493e-bcfd-d629448f5364.png" 
              alt="Online fitness training" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineFitnessSection;
