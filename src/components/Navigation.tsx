
import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="py-4 px-6 flex items-center justify-between bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <span className="text-fitness-red font-bold text-xl">C</span>
          <span className="text-fitness-dark font-semibold text-lg">oncordia</span>
        </a>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-sm font-medium hover:text-fitness-red transition-colors">Home</a>
        <a href="#" className="text-sm font-medium hover:text-fitness-red transition-colors">Blog</a>
        <a href="#" className="text-sm font-medium hover:text-fitness-red transition-colors">FAQ</a>
      </div>
      
      <div>
        <Button className="primary-button animate-fade-in">Sign up</Button>
      </div>
    </nav>
  );
};

export default Navigation;
