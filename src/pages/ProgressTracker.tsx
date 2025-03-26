
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { Activity, ArrowLeft, ArrowUpRight, Calendar, ChartBarIcon, ChevronLeft, Dumbbell, Flame, LineChart, Timer, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, LineChart as RechartsLineChart, Line } from 'recharts';

// Sample data for weekly progress
const weeklyProgressData = [
  { day: 'Mon', calories: 320, steps: 7500, duration: 35 },
  { day: 'Tue', calories: 450, steps: 9200, duration: 45 },
  { day: 'Wed', calories: 280, steps: 6100, duration: 25 },
  { day: 'Thu', calories: 520, steps: 12500, duration: 60 },
  { day: 'Fri', calories: 380, steps: 8800, duration: 40 },
  { day: 'Sat', calories: 220, steps: 5100, duration: 20 },
  { day: 'Sun', calories: 300, steps: 6800, duration: 30 },
];

// Sample data for monthly trends
const monthlyTrendData = [
  { name: 'Week 1', weight: 76, cardio: 95, strength: 80 },
  { name: 'Week 2', weight: 75.3, cardio: 100, strength: 85 },
  { name: 'Week 3', weight: 74.8, cardio: 90, strength: 95 },
  { name: 'Week 4', weight: 74.2, cardio: 105, strength: 90 },
];

// Chart configurations
const chartConfig: ChartConfig = {
  calories: {
    label: "Calories Burned"
  },
  steps: {
    label: "Steps"
  },
  duration: {
    label: "Duration (min)"
  }
};

const lineChartConfig: ChartConfig = {
  weight: {
    label: "Weight (kg)"
  },
  cardio: {
    label: "Cardio Performance"
  },
  strength: {
    label: "Strength Performance"
  }
};

const ProgressTracker = () => {
  const [activeMetric, setActiveMetric] = useState('calories');
  
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/fitness-tracker" className="flex items-center text-gray-600 hover:text-gray-900">
              <ChevronLeft size={20} />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <h1 className="text-2xl font-bold mt-2">Your Progress</h1>
          <p className="text-gray-500">Stay motivated with personalized insights</p>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Content Column */}
          <div className="md:col-span-8 space-y-6">
            {/* Weekly Summary */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Weekly Progress Summary</CardTitle>
                  <div className="flex text-sm space-x-3">
                    <button 
                      className={`px-3 py-1 rounded-full ${activeMetric === 'calories' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
                      onClick={() => setActiveMetric('calories')}
                    >
                      Calories
                    </button>
                    <button 
                      className={`px-3 py-1 rounded-full ${activeMetric === 'steps' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
                      onClick={() => setActiveMetric('steps')}
                    >
                      Steps
                    </button>
                    <button 
                      className={`px-3 py-1 rounded-full ${activeMetric === 'duration' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
                      onClick={() => setActiveMetric('duration')}
                    >
                      Duration
                    </button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ChartContainer config={chartConfig}>
                      <BarChart data={weeklyProgressData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis hide={true} />
                        <Bar dataKey={activeMetric} fill="#1f2937" radius={[4, 4, 0, 0]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </BarChart>
                    </ChartContainer>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-red-100 rounded-full">
                          <Flame size={16} className="text-red-500" />
                        </div>
                        <span className="text-sm font-medium">Calories</span>
                      </div>
                      <span className="text-xs">2,470 kcal</span>
                    </div>
                    <Progress value={75} className="h-1.5 mt-2" />
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100 rounded-full">
                          <Activity size={16} className="text-blue-500" />
                        </div>
                        <span className="text-sm font-medium">Steps</span>
                      </div>
                      <span className="text-xs">56,000</span>
                    </div>
                    <Progress value={65} className="h-1.5 mt-2" />
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-green-100 rounded-full">
                          <Timer size={16} className="text-green-500" />
                        </div>
                        <span className="text-sm font-medium">Duration</span>
                      </div>
                      <span className="text-xs">255 min</span>
                    </div>
                    <Progress value={80} className="h-1.5 mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Trends */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Monthly Trends</CardTitle>
                  <div className="flex text-sm text-gray-500 items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>April 2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ChartContainer config={lineChartConfig}>
                      <RechartsLineChart data={monthlyTrendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis hide={true} />
                        <Line type="monotone" dataKey="weight" stroke="#1f2937" strokeWidth={2} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="cardio" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="strength" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </RechartsLineChart>
                    </ChartContainer>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    <span className="text-xs">Weight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-xs">Cardio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs">Strength</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workout History */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Workouts</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Calories</TableHead>
                      <TableHead>Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>May 2, 2023</TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Dumbbell size={14} />
                        <span>Strength</span>
                      </TableCell>
                      <TableCell>45 min</TableCell>
                      <TableCell>320 kcal</TableCell>
                      <TableCell className="flex items-center">
                        <span className="text-green-500 flex items-center">+5% <ArrowUpRight size={12} /></span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>May 1, 2023</TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Activity size={14} />
                        <span>Running</span>
                      </TableCell>
                      <TableCell>30 min</TableCell>
                      <TableCell>280 kcal</TableCell>
                      <TableCell>
                        <span className="text-green-500 flex items-center">+3% <ArrowUpRight size={12} /></span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Apr 30, 2023</TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Activity size={14} />
                        <span>Cycling</span>
                      </TableCell>
                      <TableCell>60 min</TableCell>
                      <TableCell>450 kcal</TableCell>
                      <TableCell>
                        <span className="text-green-500 flex items-center">+8% <ArrowUpRight size={12} /></span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Column */}
          <div className="md:col-span-4 space-y-6">
            {/* Achievement Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <Trophy size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">10K Steps</div>
                    <div className="text-xs text-gray-500">Completed 3 days ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <Trophy size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">5 Workouts Week</div>
                    <div className="text-xs text-gray-500">Completed last week</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <Trophy size={18} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Weight Goal -2kg</div>
                    <div className="text-xs text-gray-500">Completed this month</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Goals Progress Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Goals Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Weight Loss</span>
                    <span className="text-xs text-gray-500">4.2/5kg</span>
                  </div>
                  <Progress value={84} className="h-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Workout Frequency</span>
                    <span className="text-xs text-gray-500">4/5 weekly</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Daily Steps</span>
                    <span className="text-xs text-gray-500">8k/10k steps</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-sm transition-colors">
                      Set New Goal
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className="py-6">
                      <h3 className="text-lg font-semibold mb-4">Set a New Goal</h3>
                      <p className="text-sm text-gray-500 mb-6">Define a new goal to track your progress and stay motivated.</p>
                      <div className="space-y-4">
                        {/* Goal type selector would go here */}
                        <div className="pt-4 text-center">
                          <p className="text-xs text-gray-500">
                            Your goals help personalize your fitness journey
                          </p>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
            
            {/* Tips Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Health Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    <span className="font-semibold block mb-1">Stay Hydrated</span>
                    Based on your workout intensity, aim for at least 8-10 glasses of water daily.
                  </p>
                  <p>
                    <span className="font-semibold block mb-1">Rest Days Matter</span>
                    Your body needs time to recover. Include at least 2 rest days in your weekly plan.
                  </p>
                  <p>
                    <span className="font-semibold block mb-1">Balanced Nutrition</span>
                    Focus on protein intake after strength training sessions to maximize muscle recovery.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressTracker;
