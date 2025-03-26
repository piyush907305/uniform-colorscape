
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Card, CardContent } from '@/components/ui/card';

// Fitness class data
const fitnessClasses = [
  {
    id: 1,
    name: 'Yoga',
    description: 'Improve flexibility, balance and mental focus with our yoga classes.',
    image: '/lovable-uploads/9d5412fc-e950-484d-ab9b-772bf193b051.png',
  },
  {
    id: 2,
    name: 'Strength',
    description: 'Build muscle, increase strength and boost your metabolism.',
    image: '/lovable-uploads/9d5412fc-e950-484d-ab9b-772bf193b051.png',
  },
  {
    id: 3,
    name: 'Zumba',
    description: 'Dance-based cardio workout that's fun, effective, and easy to follow.',
    image: '/lovable-uploads/9d5412fc-e950-484d-ab9b-772bf193b051.png',
  },
  {
    id: 4,
    name: 'Cardio',
    description: 'Burn calories and improve heart health with high-energy workouts.',
    image: '/lovable-uploads/9d5412fc-e950-484d-ab9b-772bf193b051.png',
  }
];

const FitnessClasses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredClasses = fitnessClasses.filter(
    (fitnessClass) => fitnessClass.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-6">Select Fitness Classes</h1>
      
      <div className="relative w-full max-w-md mx-auto mb-8">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search for classes"
          className="pl-10 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredClasses.map((fitnessClass) => (
          <div key={fitnessClass.id} className="flex flex-col">
            <Card className="overflow-hidden border-0 rounded-xl shadow-md">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <img
                    src={fitnessClass.image}
                    alt={fitnessClass.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="mt-2 py-2 px-4 bg-black text-white rounded-md w-full flex items-center justify-between">
                  <span>{fitnessClass.name}</span>
                  <span className="text-gray-300">Description</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[220px]">
                <div className="p-3 text-sm">
                  {fitnessClass.description}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessClasses;
