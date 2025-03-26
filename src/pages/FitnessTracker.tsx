
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer } from "@/components/ui/chart";
import { Activity, Droplets, Flame, Heart } from "lucide-react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import ProgressLink from "@/components/ProgressLink";
import { Link } from "react-router-dom";

const activityData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 25 },
  { name: 'Thu', value: 70 },
  { name: 'Fri', value: 35 },
  { name: 'Sat', value: 30 },
  { name: 'Sun', value: 25 },
];

const chartConfig = {
  value: {
    label: "Activity"
  }
};

const FitnessTracker = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-16 bg-gray-800 flex flex-col items-center py-6 gap-8">
        <div className="p-2 rounded-full bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        
        <div className="p-2 bg-gray-700 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        
        <div className="p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        
        <div className="p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        
        <div className="p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="mb-8">
          <p className="text-gray-400 text-sm">Good Morning</p>
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Stats Cards Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Steps Card */}
              <Card className="bg-gray-800 border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">Steps</span>
                  </div>
                  <div className="text-3xl font-bold mb-2">2,500</div>
                  <div className="text-xs text-gray-400 mb-1">55% of your goal</div>
                  <Progress value={55} className="h-1 bg-gray-700" />
                </CardContent>
              </Card>

              {/* Water Card */}
              <Card className="bg-gray-800 border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">Water</span>
                  </div>
                  <div className="flex justify-center mb-1">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="#4B5563" strokeWidth="3" />
                        <circle 
                          cx="18" cy="18" r="15" 
                          fill="none" 
                          stroke="#3b82f6" 
                          strokeWidth="3" 
                          strokeDasharray="70 30" 
                          strokeDashoffset="0"
                        />
                        <text x="18" y="20" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">70%</text>
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activity Section */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Activity</h2>
                <div className="flex items-center text-xs bg-gray-700 px-2 py-1 rounded">
                  <span className="text-gray-300">Weekly</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <ChartContainer config={chartConfig}>
                    <BarChart data={activityData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                      <Bar dataKey="value" fill="#4B5563" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Calories and Heart Rate Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Calories Card */}
              <Card className="bg-gray-800 border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">Calories</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 relative">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="#4B5563" strokeWidth="3" />
                        <circle 
                          cx="18" cy="18" r="15" 
                          fill="none" 
                          stroke="#ef4444" 
                          strokeWidth="3" 
                          strokeDasharray="45 55" 
                          strokeDashoffset="0"
                        />
                        <text x="18" y="20" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">45%</text>
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Heart Rate Card */}
              <Card className="bg-gray-800 border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">Heart Rate</span>
                  </div>
                  <div className="text-2xl font-bold mb-2">110 <span className="text-sm font-normal">bpm</span></div>
                  <div className="h-6">
                    <svg viewBox="0 0 100 20" className="w-full">
                      <path 
                        d="M0,10 L10,8 L20,12 L30,7 L40,13 L50,5 L60,15 L70,10 L80,8 L90,12 L100,10" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Section */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Progress</h2>
                <div className="flex items-center text-xs bg-gray-700 px-2 py-1 rounded">
                  <span className="text-gray-300">Weekly</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="#4B5563" strokeWidth="3" />
                    <circle 
                      cx="18" cy="18" r="15" 
                      fill="none" 
                      stroke="#9ca3af" 
                      strokeWidth="3" 
                      strokeDasharray="70 30" 
                      strokeDashoffset="25"
                      transform="rotate(-90 18 18)"
                    />
                    <text x="18" y="18" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="bold">40hrs</text>
                    <text x="18" y="24" textAnchor="middle" fontSize="4" fill="#9ca3af">Total</text>
                  </svg>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Cardio</span>
                  </div>
                  <span className="text-sm text-gray-400">15 hrs</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Strength</span>
                  </div>
                  <span className="text-sm text-gray-400">15 hrs</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-sm">Yoga</span>
                  </div>
                  <span className="text-sm text-gray-400">10 hrs</span>
                </div>
              </div>
              
              <div className="flex justify-center mt-4">
                <ProgressLink className="text-blue-400 text-sm">View detailed progress</ProgressLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessTracker;
