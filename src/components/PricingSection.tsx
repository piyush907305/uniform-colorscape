
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center uppercase">Exclusive Membership Plans</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Basic Plan */}
          <div className="pricing-card">
            <div className="mb-6">
              <p className="pricing-title">Basic Student Plan</p>
              <div className="pricing-price">
                <span>$45</span>
                <span className="pricing-period">/month</span>
              </div>
              <p className="text-xs text-fitness-textGray mt-1">Access to standard gym areas and basic equipment</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Access to gym facilities from 9 AM until 5 PM</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Use of cardio machines</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Access to group fitness classes</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Free fitness assessment</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Locker access during sessions</span>
              </div>
            </div>
            
            <Button className="secondary-button w-full">Choose Plan</Button>
          </div>
          
          {/* Standard Plan */}
          <div className="pricing-card relative border-fitness-red">
            <div className="absolute top-0 right-0 bg-fitness-red text-white text-xs py-1 px-3 rounded-bl-lg">
              Most Popular
            </div>
            
            <div className="mb-6">
              <p className="pricing-title">Standard Training Plan</p>
              <div className="pricing-price">
                <span>$60</span>
                <span className="pricing-period">/month</span>
              </div>
              <p className="text-xs text-fitness-textGray mt-1">Get the benefits of both flexibility and dedicated support</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>All Basic plan features</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Full access to gym facilities during all operating hours</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Two personal training sessions per month</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Advanced fitness assessments monthly</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Nutrition consultation once per semester</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Free towel service</span>
              </div>
            </div>
            
            <Button className="primary-button w-full">Choose Plan</Button>
          </div>
          
          {/* Premium Plan */}
          <div className="pricing-card">
            <div className="mb-6">
              <p className="pricing-title">All Inclusive Plan</p>
              <div className="pricing-price">
                <span>$70</span>
                <span className="pricing-period">/month</span>
              </div>
              <p className="text-xs text-fitness-textGray mt-1">Premium access with more extensive support</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>All Standard plan features</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Four personal training sessions per month</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Unlimited group fitness classes</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Priority booking for group classes</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Monthly nutrition and wellness review</span>
              </div>
              <div className="pricing-feature">
                <Check className="w-4 h-4 text-fitness-red" />
                <span>Access to premium facilities</span>
              </div>
            </div>
            
            <Button className="secondary-button w-full">Choose Plan</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
