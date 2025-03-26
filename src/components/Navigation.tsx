
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="py-4 px-6 flex items-center justify-between bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/798813f4-cfef-493e-bcfd-d629448f5364.png" 
            alt="Concordia Logo" 
            className="h-12"
          />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-sm font-medium text-white hover:text-fitness-red transition-colors">Home</Link>
        <Link to="/contact" className="text-sm font-medium text-white hover:text-fitness-red transition-colors">Contact</Link>
        <Link to="#" className="text-sm font-medium text-white hover:text-fitness-red transition-colors">FAQ</Link>
        <Link to="/login">
          <Button variant="outline" className="text-sm font-medium bg-white text-fitness-dark border-white hover:bg-white hover:text-fitness-red transition-colors">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
