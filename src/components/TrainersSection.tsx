
import React from 'react';
import { Button } from "@/components/ui/button";

const TrainersSection = () => {
  const trainers = [
    {
      id: 1,
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      specialty: "Strength Training"
    },
    {
      id: 2,
      name: "Team Training",
      image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
      specialty: "Group Fitness"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      specialty: "Yoga & Pilates"
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
      specialty: "HIIT Training"
    },
    {
      id: 5,
      name: "Lisa Chang",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      specialty: "Nutrition Coach"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Meet Your Fitness Experts</h2>
        <p className="text-center text-fitness-textGray max-w-3xl mx-auto mb-8">
          Our certified trainers provide personalized support to help you achieve your fitness goals, whether you're a beginner or a seasoned gym enthusiast!
        </p>
        
        <div className="flex justify-center mb-12">
          <Button className="secondary-button">View Trainers</Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trainers.map(trainer => (
            <div key={trainer.id} className="trainer-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fitness-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 w-full">
                    <p className="text-white font-medium text-sm">{trainer.name}</p>
                    <p className="text-gray-300 text-xs">{trainer.specialty}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
