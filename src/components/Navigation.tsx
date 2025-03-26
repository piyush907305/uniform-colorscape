
import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="py-4 px-6 flex items-center justify-between bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/7b4eb1b0-1dee-487a-a181-f985ce7f5654.png" 
            alt="Concordia Logo" 
            className="h-12"
          />
        </a>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-sm font-medium text-white hover:text-fitness-red transition-colors">Home</a>
        <a href="#" className="text-sm font-medium text-white hover:text-fitness-red transition-colors">Blog</a>
        <a href="#" className="text-sm font-medium text-white hover:text-fitness-red transition-colors">FAQ</a>
        <Button variant="outline" className="text-sm font-medium bg-white text-fitness-dark border-white hover:bg-white hover:text-fitness-red transition-colors">
          Reach Out
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
