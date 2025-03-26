
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Calendar, X, BarChart } from "lucide-react";

const LeGymSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="section-title text-center text-3xl font-bold mb-4">LeGym: Fitness Companion for Campus Life</h2>
        <p className="text-center text-fitness-textGray max-w-3xl mx-auto mb-12">
          Discover a gym experience tailored to Concordia students. Book your sessions, track your progress, and achieve your fitness goals effortlessly!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="feature-item flex flex-col items-start gap-3 p-4">
              <div className="feature-icon bg-gray-800 mb-1">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-base mb-1">Book Fitness Class</h3>
              <p className="text-sm text-fitness-textGray">
                Secure your spot instantly and enjoy your favorite fitness classes hassle-free.
              </p>
            </div>
            
            <div className="feature-item flex flex-col items-start gap-3 p-4">
              <div className="feature-icon bg-gray-800 mb-1">
                <X className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-base mb-1">Cancel Booking</h3>
              <p className="text-sm text-fitness-textGray">
                Effortlessly adjust or cancel your bookings to match your changing schedule.
              </p>
            </div>
            
            <div className="feature-item flex flex-col items-start gap-3 p-4">
              <div className="feature-icon bg-gray-800 mb-1">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-base mb-1">View Training Schedule</h3>
              <p className="text-sm text-fitness-textGray">
                Quickly access class schedules and calendar details to plan your workouts with ease.
              </p>
            </div>
            
            <div className="feature-item flex flex-col items-start gap-3 p-4">
              <div className="feature-icon bg-gray-800 mb-1">
                <BarChart className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-base mb-1">Track your progress</h3>
              <p className="text-sm text-fitness-textGray">
                Stay motivated by tracking your fitness results with tailored insights and progress updates.
              </p>
            </div>
            
            <div className="col-span-2 mt-4 flex justify-center">
              <Button className="bg-gray-800 text-white hover:bg-gray-700 transition-colors">Get Started</Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/798813f4-cfef-493e-bcfd-d629448f5364.png" 
              alt="Students exercising in campus gym" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeGymSection;
