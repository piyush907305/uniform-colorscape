import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Calendar, X, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
const LeGymSection = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="section-title text-center text-3xl font-bold mb-4">LeGym: Fitness Companion for Campus Life</h2>
        <p className="text-center text-fitness-textGray max-w-3xl mx-auto mb-12">
          Discover a gym experience tailored to Concordia students. Book your sessions, track your progress, and achieve your fitness goals effortlessly!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-start">
                  <div className="feature-icon mb-1 mt-1 bg-zinc-800">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Book Fitness Class</h3>
                    <p className="text-sm text-fitness-textGray">
                      Secure your spot instantly and enjoy your favorite fitness classes hassle-free.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-start">
                  <div className="feature-icon mb-1 mt-1 bg-zinc-900">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Cancel Booking</h3>
                    <p className="text-sm text-fitness-textGray">
                      Effortlessly adjust or cancel your bookings to match your changing schedule.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-start">
                  <div className="feature-icon mb-1 mt-1 bg-zinc-800">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">View Training Schedule</h3>
                    <p className="text-sm text-fitness-textGray">
                      Quickly access class schedules and calendar details to plan your workouts with ease.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-start">
                  <div className="feature-icon mb-1 mt-1 bg-zinc-800">
                    <BarChart className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Track your progress</h3>
                    <p className="text-sm text-fitness-textGray">
                      Stay motivated by tracking your fitness results with tailored insights and progress updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4 justify-start">
              <Link to="/fitness-tracker">
                <Button className="text-white transition-colors bg-zinc-900 hover:bg-zinc-800">Get Started</Button>
              </Link>
              <Link to="/fitness-classes">
                <Button className="bg-black text-white hover:bg-black/90 transition-colors">Book Fitness Class</Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img alt="Students exercising in campus gym" className="rounded-lg shadow-lg w-full h-auto object-cover" src="/lovable-uploads/5e1571aa-359b-466e-8007-89c46766c981.jpg" />
          </div>
        </div>
      </div>
    </section>;
};
export default LeGymSection;