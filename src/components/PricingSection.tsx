
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, CircleCheck } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-medium">Pricing Plan</h3>
          <div className="bg-gray-100 rounded-full p-1">
            <ToggleGroup 
              type="single" 
              value={billingCycle}
              onValueChange={(value) => {
                if (value) setBillingCycle(value as "monthly" | "yearly");
              }}
              className="rounded-full"
            >
              <ToggleGroupItem 
                value="monthly" 
                className={`text-xs rounded-full px-4 py-1 ${billingCycle === "monthly" ? "bg-white text-black shadow-sm" : "text-gray-500"}`}
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="yearly" 
                className={`text-xs rounded-full px-4 py-1 ${billingCycle === "yearly" ? "bg-white text-black shadow-sm" : "text-gray-500"}`}
              >
                Yearly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        
        <h2 className="text-center text-3xl font-bold mb-12">EXCLUSIVE MEMBERSHIP PLANS</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <Card className="border border-gray-200 rounded-xl overflow-hidden">
            <CardHeader className="pb-0">
              <p className="text-sm font-medium mb-1">Basic Student Plan</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">${billingCycle === "monthly" ? "45" : "405"}</span>
                <span className="text-sm text-gray-500 ml-1">/ {billingCycle === "monthly" ? "Month" : "Year"}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Perfect for students looking to gain access on a budget!</p>
            </CardHeader>
            
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Access to gym facilities during off-peak hours</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Participation in 2 group fitness classes per week</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Basic equipment orientation through the app</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Access to fitness blogs and tips for beginners</span>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4">
              <Button className="w-full bg-white border border-black text-black hover:bg-gray-100">Choose Plan</Button>
            </CardFooter>
          </Card>
          
          {/* Advanced Plan */}
          <Card className="border-2 border-fitness-red rounded-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-fitness-red text-white text-xs py-1 px-3 rounded-bl-lg">
              Most Popular Plan
            </div>
            <CardHeader className="pb-0">
              <p className="text-sm font-medium mb-1">Advanced Training Plan</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">${billingCycle === "monthly" ? "60" : "540"}</span>
                <span className="text-sm text-gray-500 ml-1">/ {billingCycle === "monthly" ? "Month" : "Year"}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Ideal for those who want flexibility and personalized guidance.</p>
            </CardHeader>
            
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Full access to gym facilities during all operating hours</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Unlimited group fitness classes</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Personalized training and nutrition by trainers</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Access to online fitness sessions and live virtual coaching</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Real-time tracking and visualization options</span>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4">
              <Button className="w-full bg-fitness-red text-white hover:bg-red-600">Choose Plan</Button>
            </CardFooter>
          </Card>
          
          {/* All-Inclusive Plan */}
          <Card className="border border-gray-200 rounded-xl overflow-hidden">
            <CardHeader className="pb-0">
              <p className="text-sm font-medium mb-1">All-Inclusive Plan</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">${billingCycle === "monthly" ? "70" : "630"}</span>
                <span className="text-sm text-gray-500 ml-1">/ {billingCycle === "monthly" ? "Month" : "Year"}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Get everything you need for a complete fitness experience.</p>
            </CardHeader>
            
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Full access to gym facilities during all operating hours</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Unlimited group fitness classes</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Priority booking for gym slots and classes</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Access to VIP specialty fitness classes</span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="h-5 w-5 text-fitness-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">One-on-one exclusive fitness sessions</span>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4">
              <Button className="w-full bg-white border border-black text-black hover:bg-gray-100">Choose Plan</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
