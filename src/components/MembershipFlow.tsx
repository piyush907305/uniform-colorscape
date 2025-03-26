
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface MembershipFlowProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
  price?: string;
}

const MembershipFlow = ({ isOpen, onClose, selectedPlan, price }: MembershipFlowProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    file: null as File | null,
    gender: "",
    age: "",
    height: "",
    weight: "",
    plan: selectedPlan || "",
    duration: "",
    startDate: "",
    endDate: "",
    selectedGoals: [] as string[]
  });
  
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };
  
  const toggleGoal = (goal: string) => {
    if (formData.selectedGoals.includes(goal)) {
      setFormData({
        ...formData,
        selectedGoals: formData.selectedGoals.filter(g => g !== goal)
      });
    } else {
      setFormData({
        ...formData,
        selectedGoals: [...formData.selectedGoals, goal]
      });
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle form submission here
      toast({
        title: "Membership Activated!",
        description: "Your membership has been successfully activated.",
      });
      onClose();
      // Reset the form
      setStep(1);
      setFormData({
        name: "",
        phone: "",
        email: "",
        file: null,
        gender: "",
        age: "",
        height: "",
        weight: "",
        plan: selectedPlan || "",
        duration: "",
        startDate: "",
        endDate: "",
        selectedGoals: []
      });
    }
  };

  const handleSubmitFeedback = () => {
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback!",
    });
    onClose();
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-black text-white' : 'bg-gray-200'}`}>
            <span>1</span>
          </div>
          <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-black' : 'bg-gray-200'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-black text-white' : 'bg-gray-200'}`}>
            <span>2</span>
          </div>
          <div className={`w-16 h-0.5 ${step >= 3 ? 'bg-black' : 'bg-gray-200'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-black text-white' : 'bg-gray-200'}`}>
            <span>3</span>
          </div>
        </div>
      </div>
    );
  };

  const renderStep1 = () => {
    return (
      <>
        <h2 className="text-xl font-bold mb-4">Basic Details</h2>
        <div className="space-y-4">
          <Input 
            placeholder="Enter name" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange}
            className="bg-gray-100"
          />
          <Input 
            placeholder="Enter phone no" 
            name="phone" 
            value={formData.phone} 
            onChange={handleInputChange}
            className="bg-gray-100"
          />
          
          <div className="file-upload-container">
            <div className="relative border border-gray-200 rounded-md p-2 flex items-center justify-between bg-gray-100">
              <span className="text-gray-500 text-sm">
                {formData.file ? formData.file.name : "Drop your file here or browse"}
              </span>
              <label htmlFor="file-upload" className="cursor-pointer bg-gray-200 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          
          <Input 
            placeholder="Enter email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleInputChange}
            className="bg-gray-100"
          />
          
          <div className="grid grid-cols-3 gap-2">
            <select 
              name="gender" 
              value={formData.gender} 
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
              className="rounded-md border border-input bg-gray-100 px-3 py-2 text-sm"
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            
            <Input 
              placeholder="Enter age" 
              name="age" 
              value={formData.age} 
              onChange={handleInputChange}
              className="bg-gray-100"
            />
            
            <Input 
              placeholder="Enter height" 
              name="height" 
              value={formData.height} 
              onChange={handleInputChange}
              className="bg-gray-100"
            />
            
            <Input 
              placeholder="Enter weight"
              name="weight" 
              value={formData.weight} 
              onChange={handleInputChange}
              className="bg-gray-100 col-span-3"
            />
          </div>
        </div>

        <Button 
          onClick={handleNext}
          className="w-full bg-black text-white mt-4"
        >
          Next
        </Button>
      </>
    );
  };

  const renderStep2 = () => {
    return (
      <>
        <h2 className="text-xl font-bold mb-4">Membership Details</h2>
        <div className="space-y-4">
          <select 
            name="plan" 
            value={formData.plan} 
            onChange={(e) => setFormData({...formData, plan: e.target.value})}
            className="w-full rounded-md border border-input bg-gray-100 px-3 py-2 text-sm"
          >
            <option value="" disabled>Select Plan</option>
            <option value="basic">Basic Student Plan</option>
            <option value="advanced">Advanced Training Plan</option>
            <option value="all-inclusive">All-Inclusive Plan</option>
          </select>
          
          <div className="grid grid-cols-2 gap-2">
            <select 
              name="duration" 
              value={formData.duration} 
              onChange={(e) => setFormData({...formData, duration: e.target.value})}
              className="rounded-md border border-input bg-gray-100 px-3 py-2 text-sm"
            >
              <option value="" disabled>Plan Duration</option>
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
            </select>
            
            <Input 
              placeholder="Month" 
              name="month" 
              className="bg-gray-100"
              readOnly
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Input 
              placeholder="Start Date" 
              name="startDate" 
              type="date"
              value={formData.startDate} 
              onChange={handleInputChange}
              className="bg-gray-100"
            />
            
            <Input 
              placeholder="End Date" 
              name="endDate" 
              type="date"
              value={formData.endDate} 
              onChange={handleInputChange}
              className="bg-gray-100"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {['Goal 1', 'Goal 2', 'Goal 3', 'Goal 4', 'Goal 5', 'Goal 6', 'Goal 7', 'Goal 8', 'Goal 9'].map((goal) => (
              <Button
                key={goal}
                type="button"
                variant={formData.selectedGoals.includes(goal) ? "default" : "outline"}
                className={`${formData.selectedGoals.includes(goal) ? 'bg-gray-700 text-white' : 'bg-white border-gray-300'}`}
                onClick={() => toggleGoal(goal)}
              >
                {goal}
              </Button>
            ))}
          </div>
        </div>

        <Button 
          onClick={handleNext}
          className="w-full bg-black text-white mt-4"
        >
          Next
        </Button>
      </>
    );
  };

  const renderStep3 = () => {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-3xl font-bold mb-4">Thank you !!</h2>
        <Button 
          onClick={() => setStep(4)}
          className="w-full bg-black text-white mt-4"
        >
          Back To Home
        </Button>
      </div>
    );
  };

  const renderFeedback = () => {
    return (
      <>
        <h2 className="text-xl font-bold mb-2 text-center">How Are you feeling?</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Your input is valuable in helping us better understand your need and tailor our services accordingly.
        </p>
        
        <div className="flex justify-center space-x-4 mb-6">
          {[
            "public/lovable-uploads/444b88be-2a89-4ca5-9a31-da443bde957a.png", // 😮
            "public/lovable-uploads/0d2dfd0f-89de-4d17-a0b3-3d94e267e1f7.png", // 😪
            "public/lovable-uploads/fad4b91b-f158-4bf1-879d-e3a4e35c4d73.png", // 😐
            "public/lovable-uploads/821e6aa2-1f1e-487d-8a19-b394d5c300b3.png", // 🙂
            // Fifth emoji is missing in the upload, I'll use a placeholder
            "/lovable-uploads/444b88be-2a89-4ca5-9a31-da443bde957a.png", // 😍
          ].map((emoji, index) => (
            <div 
              key={index} 
              className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${selectedEmoji === index ? 'bg-gray-800 p-1' : ''}`}
              onClick={() => setSelectedEmoji(index)}
            >
              <img src={emoji} alt={`emoji-${index}`} className="w-10 h-10" />
            </div>
          ))}
        </div>
        
        <textarea 
          placeholder="Add a comment..." 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 rounded-md mb-4 resize-none"
        />
        
        <Button 
          onClick={handleSubmitFeedback}
          className="w-full bg-black text-white"
        >
          Submit Now
        </Button>
      </>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              {step === 3 ? "✓" : "🏋️"}
            </div>
            <span className="font-bold">Join us Now!!</span>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full flex items-center justify-center"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {step !== 3 && step !== 4 && renderStepIndicator()}
        
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderFeedback()}
      </DialogContent>
    </Dialog>
  );
};

export default MembershipFlow;
