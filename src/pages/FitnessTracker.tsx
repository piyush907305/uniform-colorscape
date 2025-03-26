
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Activity, Dumbbell, Droplets, Flame, Heart, Timer, Trophy } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

const activityData = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 40 },
  { name: 'Wed', value: 20 },
  { name: 'Thu', value: 180 },
  { name: 'Fri', value: 40 },
  { name: 'Sat', value: 30 },
  { name: 'Sun', value: 50 },
];

const heartRateData = [
  { name: '1', value: 100 },
  { name: '2', value: 110 },
  { name: '3', value: 105 },
  { name: '4', value: 115 },
  { name: '5', value: 108 },
  { name: '6', value: 120 },
  { name: '7', value: 110 },
];

const FitnessTracker = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Good Morning</p>
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
              Notifications
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">?</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                <img src={`/lovable-uploads/19eaec57-a0c6-4ea3-a5c1-18718a7843ba.png`} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <span className="font-medium">Alex</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="md:col-span-8 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Steps Card */}
              <Card className="bg-gray-800 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity size={16} />
                    <span className="text-sm font-medium">Steps</span>
                  </div>
                  <div className="text-2xl font-bold mb-1">2,500</div>
                  <div className="text-xs text-gray-400">55% of your goal</div>
                </CardContent>
              </Card>

              {/* Water Card */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets size={16} />
                    <span className="text-sm font-medium">Water</span>
                  </div>
                  <div className="flex justify-center mb-1">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="#e6e6e6" strokeWidth="3" />
                        <circle 
                          cx="18" cy="18" r="15" 
                          fill="none" 
                          stroke="#3b82f6" 
                          strokeWidth="3" 
                          strokeDasharray="70 30" 
                          strokeDashoffset="25"
                          transform="rotate(-90 18 18)"
                        />
                        <text x="18" y="20" textAnchor="middle" fontSize="8" fill="#333">70%</text>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center text-xs text-gray-500">Good</div>
                </CardContent>
              </Card>

              {/* Calories Card */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame size={16} />
                    <span className="text-sm font-medium">Calories</span>
                  </div>
                  <div className="flex justify-center mb-1">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="#e6e6e6" strokeWidth="3" />
                        <circle 
                          cx="18" cy="18" r="15" 
                          fill="none" 
                          stroke="#ec4899" 
                          strokeWidth="3" 
                          strokeDasharray="45 55" 
                          strokeDashoffset="25"
                          transform="rotate(-90 18 18)"
                        />
                        <text x="18" y="20" textAnchor="middle" fontSize="8" fill="#333">45%</text>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center text-xs text-gray-500">Good</div>
                </CardContent>
              </Card>

              {/* Heart Rate Card */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart size={16} />
                    <span className="text-sm font-medium">Heart Rate</span>
                  </div>
                  <div className="text-2xl font-bold mb-1">110 <span className="text-sm font-normal">bpm</span></div>
                  <div className="h-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={heartRateData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <Area type="monotone" dataKey="value" stroke="#ef4444" fill="#fecaca" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activity Section */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold">Activity</h2>
                  <div className="flex items-center text-xs">
                    <span className="text-gray-500">Weekly</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis hide={true} />
                      <Bar dataKey="value" fill="#1f2937" radius={[4, 4, 0, 0]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold">Progress</h2>
                <div className="flex items-center text-xs">
                  <span className="text-gray-500">Weekly</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="relative w-36 h-36">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="#e6e6e6" strokeWidth="3" />
                    <circle 
                      cx="18" cy="18" r="15" 
                      fill="none" 
                      stroke="#1f2937" 
                      strokeWidth="3" 
                      strokeDasharray="70 30" 
                      strokeDashoffset="25"
                      transform="rotate(-90 18 18)"
                    />
                    <text x="18" y="19" textAnchor="middle" fontSize="5" fill="#333" fontWeight="bold">40hrs</text>
                  </svg>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <span className="text-sm">Treadmill</span>
                  </div>
                  <span className="text-sm text-gray-500">25 hrs</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-sm">Strength</span>
                  </div>
                  <span className="text-sm text-gray-500">15 hrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 space-y-6">
            {/* Personal Stats */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="grid grid-cols-3 text-center gap-4 mb-6">
                <div>
                  <div className="text-xl font-bold">75<span className="text-sm font-normal">kg</span></div>
                  <div className="text-xs text-gray-500">Weight</div>
                </div>
                <div>
                  <div className="text-xl font-bold">5.9</div>
                  <div className="text-xs text-gray-500">Height</div>
                </div>
                <div>
                  <div className="text-xl font-bold">25</div>
                  <div className="text-xs text-gray-500">Age</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-4">Your Goals</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-200 rounded-full p-1">
                          <Trophy size={14} className="text-gray-700" />
                        </div>
                        <span className="text-sm">Running</span>
                      </div>
                      <span className="text-xs text-gray-500">45%</span>
                    </div>
                    <Progress value={45} className="h-2 bg-gray-200" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-200 rounded-full p-1">
                          <Dumbbell size={14} className="text-gray-700" />
                        </div>
                        <span className="text-sm">Strength</span>
                      </div>
                      <span className="text-xs text-gray-500">60%</span>
                    </div>
                    <Progress value={60} className="h-2 bg-gray-200" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-200 rounded-full p-1">
                          <Activity size={14} className="text-gray-700" />
                        </div>
                        <span className="text-sm">Weight Loss</span>
                      </div>
                      <span className="text-xs text-gray-500">70%</span>
                    </div>
                    <Progress value={70} className="h-2 bg-gray-200" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-4">Monthly Progress</h3>
                <div className="flex justify-center mb-1">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#e6e6e6" strokeWidth="3" />
                      <circle 
                        cx="18" cy="18" r="15" 
                        fill="none" 
                        stroke="#1f2937" 
                        strokeWidth="3" 
                        strokeDasharray="80 20" 
                        strokeDashoffset="0"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">80%</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-2">You have achieved <span className="font-bold">80%</span> of your goals this month!</p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Scheduled</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                    <div className="bg-gray-200 rounded-full p-2">
                      <Dumbbell size={16} className="text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Training - High Class</div>
                      <div className="text-xs text-gray-500">Monday</div>
                    </div>
                    <div className="text-xs text-gray-500">23 Min</div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                    <div className="bg-gray-200 rounded-full p-2">
                      <Droplets size={16} className="text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Training - Swimming</div>
                      <div className="text-xs text-gray-500">Tuesday</div>
                    </div>
                    <div className="text-xs text-gray-500">23 Min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FitnessTracker;
