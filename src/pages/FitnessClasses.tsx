
import React, { useState } from 'react';
import { Search, ArrowLeft, Check, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

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
    description: 'Dance-based cardio workout that\'s fun, effective, and easy to follow.',
    image: '/lovable-uploads/9d5412fc-e950-484d-ab9b-772bf193b051.png',
  },
  {
    id: 4,
    name: 'Cardio',
    description: 'Burn calories and improve heart health with high-energy workouts.',
    image: '/lovable-uploads/9d5412fc-e950-484d-ab9b-772bf193b051.png',
  }
];

// Focus areas
const focusAreas = [
  { id: 'strength', label: 'Build Strength' },
  { id: 'flexibility', label: 'Increase Flexibility' },
  { id: 'energy', label: 'Boost Energy Levels' },
  { id: 'pain', label: 'Reduce Aches and Pain' },
  { id: 'stress', label: 'Stress Relief' },
  { id: 'weight', label: 'Lose Weight' },
];

// Time slots for different days
const timeSlots = [
  {
    day: 'Mon, 24th March',
    period: 'Late Evening',
    times: ['9:00 PM', '10:30 PM', '11:00 PM']
  },
  {
    day: 'Tue, 25th March',
    period: 'Early Morning',
    times: ['6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM']
  },
  {
    day: 'Tue, 25th March',
    period: 'Morning',
    times: ['9:30 AM', '11:30 AM']
  }
];

// Coach data
const coaches = [
  {
    id: 1,
    name: 'Riddhi',
    image: '/lovable-uploads/f0f28413-1af4-4a79-a54b-0d395bfc8ce0.png',
    experience: '4 years of experience helping clients build strength, increase flexibility and manage stress. Master\'s in Yoga and 200 hours of yoga teacher training',
    rating: '5',
    reviews: '25'
  }
];

const FitnessClasses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [bookingStep, setBookingStep] = useState(0); // 0: class selection, 1: focus areas, 2: time selection, 3: coach selection
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  
  const filteredClasses = fitnessClasses.filter(
    (fitnessClass) => fitnessClass.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClassSelect = (classId: number) => {
    setSelectedClass(classId);
    setBookingStep(1);
  };

  const handleFocusToggle = (focusId: string) => {
    setSelectedFocus(prev => 
      prev.includes(focusId) 
        ? prev.filter(id => id !== focusId) 
        : [...prev, focusId]
    );
  };

  const handleTimeSelect = (day: string, time: string) => {
    setSelectedDay(day);
    setSelectedTime(time);
  };

  const handleBack = () => {
    if (bookingStep > 0) {
      setBookingStep(bookingStep - 1);
    }
  };

  const handleContinue = () => {
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    }
  };

  const handleConfirm = () => {
    alert('Your fitness class has been booked!');
    // Reset everything
    setSelectedClass(null);
    setBookingStep(0);
    setSelectedFocus([]);
    setSelectedTime(null);
    setSelectedDay(null);
  };

  // Class Selection View
  if (bookingStep === 0) {
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
              <Card className="overflow-hidden border-0 rounded-xl shadow-md cursor-pointer" onClick={() => handleClassSelect(fitnessClass.id)}>
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
              <Button 
                className="mt-2 w-full bg-green-600 hover:bg-green-700" 
                onClick={() => handleClassSelect(fitnessClass.id)}
              >
                Book Class
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Focus Areas Selection
  if (bookingStep === 1) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={handleBack} className="mr-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="ml-1">Back</span>
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">What would you like to focus on?</h1>
        <p className="text-gray-500 mb-6">You can select multiple</p>
        
        <div className="space-y-2">
          {focusAreas.map((focus) => (
            <div 
              key={focus.id} 
              className="flex items-center space-x-3 p-4 bg-gray-50 rounded-md"
            >
              <Checkbox 
                id={focus.id} 
                checked={selectedFocus.includes(focus.id)}
                onCheckedChange={() => handleFocusToggle(focus.id)}
              />
              <Label htmlFor={focus.id} className="flex-1 cursor-pointer">
                {focus.label}
              </Label>
            </div>
          ))}
        </div>
        
        <Button 
          className="w-full mt-8 bg-black text-white" 
          onClick={handleContinue}
          disabled={selectedFocus.length === 0}
        >
          Continue
        </Button>
      </div>
    );
  }

  // Time Selection
  if (bookingStep === 2) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={handleBack} className="mr-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="ml-1">Back</span>
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-2">Pick a time to schedule your fitness class at Concordia gym</h1>
        <div className="flex items-center justify-center gap-2 mb-8 text-green-600">
          <Check className="h-5 w-5" />
          <p>We have expert coaches for your goals</p>
        </div>
        
        <div className="space-y-8">
          {timeSlots.map((slot, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-lg font-medium">{slot.day} - {slot.period}</h2>
              <div className="flex flex-wrap gap-2">
                {slot.times.map((time, timeIndex) => (
                  <button
                    key={timeIndex}
                    className={`px-4 py-3 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 ${
                      selectedTime === time && selectedDay === slot.day ? 'bg-black text-white hover:bg-black' : ''
                    }`}
                    onClick={() => handleTimeSelect(slot.day, time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          className="w-full mt-8 bg-black text-white" 
          onClick={handleContinue}
          disabled={!selectedTime}
        >
          Continue
        </Button>
      </div>
    );
  }

  // Coach Selection
  if (bookingStep === 3) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={handleBack} className="mr-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="ml-1">Back</span>
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-8">Meet your coach</h1>
        
        <div className="border rounded-lg p-4 shadow-sm mb-8">
          {coaches.map((coach) => (
            <div key={coach.id} className="flex flex-col md:flex-row gap-4 items-start">
              <img 
                src={coach.image} 
                alt={coach.name} 
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{coach.name}</h3>
                <p className="text-gray-700 text-sm mb-2">{coach.experience}</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm ml-1">{coach.rating} from {coach.reviews} reviews</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="mt-2 md:mt-0"
                onClick={() => alert('Coach selected!')}
              >
                Select coach
              </Button>
            </div>
          ))}
        </div>
        
        <Button 
          className="w-full bg-black text-white" 
          onClick={handleConfirm}
        >
          Confirm and Continue
        </Button>
      </div>
    );
  }

  // Fallback (shouldn't reach here)
  return null;
};

export default FitnessClasses;
