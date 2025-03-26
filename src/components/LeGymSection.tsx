
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Calendar, X, BarChart } from "lucide-react";

const LeGymSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-6">LeGym: Fitness Companion for Campus Life</h2>
        <p className="text-center text-fitness-textGray max-w-3xl mx-auto mb-12">
          Discover a gym experience tailored to Concordia students. Book your sessions, track your progress, and optimize your fitness goals effortlessly!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="feature-item">
              <div className="feature-icon">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Book Fitness Class</h3>
                <p className="text-sm text-fitness-textGray">
                  Browse open gym sessions and classes with trainers to optimize your campus fitness journey.
                </p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <X className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Cancel Booking</h3>
                <p className="text-sm text-fitness-textGray">
                  Can't make your session? Cancel or reschedule quickly to give others the opportunity.
                </p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">View Training Schedule</h3>
                <p className="text-sm text-fitness-textGray">
                  Access campus gym calendars with availability and instructors to sync your workouts with class.
                </p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <BarChart className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Track your progress</h3>
                <p className="text-sm text-fitness-textGray">
                  View insights into your training patterns, weekly progress metrics, and personal bests.
                </p>
              </div>
            </div>
            
            <Button className="primary-button w-full mt-4">Get Started</Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Students exercising in campus gym" 
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeGymSection;
