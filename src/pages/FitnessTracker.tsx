
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Activity, Droplets, Flame, Heart } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import ProgressLink from "@/components/ProgressLink";

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

// Define chart configuration
const chartConfig = {
  value: {
    label: "Activity"
  }
};

const FitnessTracker = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Good Morning</p>
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <span>Notifications</span>
              <span className="bg-white text-gray-900 rounded-full w-4 h-4 flex items-center justify-center text-xs">0</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-full border flex items-center justify-center">
              <span className="text-gray-500">⏰</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="md:col-span-12 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Steps Card */}
              <Card className="bg-gray-800 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Activity size={16} />
                        <span className="text-sm font-medium">Steps</span>
                      </div>
                      <div className="text-2xl font-bold mb-1">2,500</div>
                    </div>
                    <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-sm">👣</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">55% of your goal</div>
                  <Progress value={55} className="h-1 mt-2 bg-gray-700" />
                </CardContent>
              </Card>

              {/* Water Card */}
              <Card className="bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets size={16} />
                      <span className="text-sm font-medium">Water</span>
                    </div>
                    <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-sm">💧</span>
                    </div>
                  </div>
                  <div className="flex justify-center mb-1">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="#e6e6e6" strokeWidth="3" />
                        <circle 
                          cx="18" cy="18" r="15" 
                          fill="none" 
                          stroke="#3b82f6" 
                          strokeWidth="3" 
                          strokeDasharray="70 30" 
                          strokeDashoffset="0"
                        />
                        <text x="18" y="20" textAnchor="middle" fontSize="5" fill="#333" fontWeight="bold">70%</text>
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Calories Card */}
              <Card className="bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 mb-2">
                      <Flame size={16} />
                      <span className="text-sm font-medium">Calories</span>
                    </div>
                    <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-sm">🔥</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 relative">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="#e6e6e6" strokeWidth="3" />
                        <circle 
                          cx="18" cy="18" r="15" 
                          fill="none" 
                          stroke="#ef4444" 
                          strokeWidth="3" 
                          strokeDasharray="45 55" 
                          strokeDashoffset="0"
                        />
                        <text x="18" y="20" textAnchor="middle" fontSize="5" fill="#333" fontWeight="bold">45%</text>
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Heart Rate Card */}
              <Card className="bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 mb-1">
                      <Heart size={16} />
                      <span className="text-sm font-medium">Heart Rate</span>
                    </div>
                    <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-sm">❤️</span>
                    </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Activity Section */}
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
                    <ChartContainer config={chartConfig}>
                      <BarChart data={activityData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis hide={true} />
                        <Bar dataKey="value" fill="#1f2937" radius={[4, 4, 0, 0]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </BarChart>
                    </ChartContainer>
                  </ResponsiveContainer>
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
                      <text x="18" y="17" textAnchor="middle" fontSize="5" fill="#333" fontWeight="bold">40hrs</text>
                      <text x="18" y="22" textAnchor="middle" fontSize="3" fill="#666">Total</text>
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
                <div className="flex justify-center mt-6">
                  <ProgressLink className="text-blue-500 text-sm">View detailed progress</ProgressLink>
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
