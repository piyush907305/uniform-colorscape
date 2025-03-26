
import React from 'react';
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";

const OnlineFitnessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-center text-3xl font-bold mb-2">Find Your Perfect Online Fitness Mentor</h2>
        <p className="text-center text-fitness-textGray max-w-3xl mx-auto mb-12">
          Connect with certified trainers and join live classes. Schedule personalized demo sessions to achieve your fitness goals from anywhere!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex gap-3 items-start mb-6">
              <div className="bg-black rounded-full p-2">
                <List className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-xl pt-1">Explore Our Online Fitness Features</h3>
            </div>
            
            <ul className="space-y-2 ml-2 mb-8">
              <li className="text-sm">View List of Online Activities</li>
              <li className="text-sm">Book Online Classes with Trainers</li>
              <li className="text-sm">Access On-Demand Fitness Videos</li>
              <li className="text-sm">Chat with Trainers for Personalized Advice</li>
              <li className="text-sm">Track Your Progress Online</li>
            </ul>
            
            <Button className="bg-black text-white hover:bg-gray-800 transition-colors">Join Now!</Button>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/798813f4-cfef-493e-bcfd-d629448f5364.png" 
              alt="Online fitness training" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineFitnessSection;
