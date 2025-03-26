
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OnlineFitnessSection = () => {
  return (
    <section className="py-16 bg-fitness-gray">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Find Your Perfect Online Fitness Mentor</h2>
        <p className="text-center text-fitness-textGray max-w-3xl mx-auto mb-12">
          Connect with certified trainers and join live classes. Schedule personalized demo sessions to achieve your fitness goals from anywhere!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" 
              alt="Online fitness training" 
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Explore Our Online Fitness Features</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-fitness-red mt-1"><Check className="w-4 h-4" /></span>
                <span>View List of Online Activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fitness-red mt-1"><Check className="w-4 h-4" /></span>
                <span>Book Online Classes with Trainers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fitness-red mt-1"><Check className="w-4 h-4" /></span>
                <span>Access On-Demand Fitness Videos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fitness-red mt-1"><Check className="w-4 h-4" /></span>
                <span>Join Live Streaming Exercise Areas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fitness-red mt-1"><Check className="w-4 h-4" /></span>
                <span>Track Your Progress Online</span>
              </li>
            </ul>
            
            <Button className="primary-button mt-8">Join Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineFitnessSection;
