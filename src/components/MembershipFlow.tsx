import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, ArrowRight, CreditCard, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
    selectedGoals: [] as string[],
    // Payment information
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "credit"
  });
  
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
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
    if (step < 4) {
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
        selectedGoals: [],
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
        paymentMethod: "credit"
      });
    }
  };
  
  const handleProcessPayment = () => {
    setIsProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      handleNext(); // Move to success screen
    }, 1500);
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
          <div className={`w-16 h-0.5 ${step >= 4 ? 'bg-black' : 'bg-gray-200'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-black text-white' : 'bg-gray-200'}`}>
            <span>4</span>
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
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name"
              placeholder="Enter name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange}
              className="bg-gray-100"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone"
              placeholder="Enter phone no" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange}
              className="bg-gray-100"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email"
              placeholder="Enter email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange}
              className="bg-gray-100"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="file-upload">Profile Photo</Label>
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
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <select 
                id="gender"
                name="gender" 
                value={formData.gender} 
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                className="w-full rounded-md border border-input bg-gray-100 px-3 py-2 text-sm"
              >
                <option value="" disabled>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age"
                placeholder="Enter age" 
                name="age" 
                value={formData.age} 
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="height">Height</Label>
              <Input 
                id="height"
                placeholder="Enter height" 
                name="height" 
                value={formData.height} 
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight">Weight</Label>
            <Input 
              id="weight"
              placeholder="Enter weight"
              name="weight" 
              value={formData.weight} 
              onChange={handleInputChange}
              className="bg-gray-100"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button 
            onClick={handleNext}
            className="bg-black text-white px-6"
          >
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </>
    );
  };

  const renderStep2 = () => {
    return (
      <>
        <h2 className="text-xl font-bold mb-4">Membership Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="plan">Membership Plan</Label>
            <select 
              id="plan"
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
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="duration">Plan Duration</Label>
              <select 
                id="duration"
                name="duration" 
                value={formData.duration} 
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="w-full rounded-md border border-input bg-gray-100 px-3 py-2 text-sm"
              >
                <option value="" disabled>Select</option>
                <option value="1">1 Month</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="month">Period</Label>
              <Input 
                id="month"
                placeholder="Month" 
                name="month" 
                className="bg-gray-100"
                readOnly
                value={`${formData.duration || '0'} Month${formData.duration === '1' ? '' : 's'}`}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input 
                id="startDate"
                placeholder="Start Date" 
                name="startDate" 
                type="date"
                value={formData.startDate} 
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input 
                id="endDate"
                placeholder="End Date" 
                name="endDate" 
                type="date"
                value={formData.endDate} 
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm font-medium mb-2">Select your fitness goals</div>
            <div className="grid grid-cols-3 gap-2">
              {['Weight Loss', 'Muscle Gain', 'Flexibility', 'Endurance', 'Strength', 'Better Health', 'Toning', 'Rehabilitation', 'Sport Training'].map((goal) => (
                <Button
                  key={goal}
                  type="button"
                  variant={formData.selectedGoals.includes(goal) ? "default" : "outline"}
                  className={`${formData.selectedGoals.includes(goal) ? 'bg-gray-700 text-white' : 'bg-white border-gray-300'} text-xs py-1 px-2 h-auto`}
                  onClick={() => toggleGoal(goal)}
                >
                  {goal}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button 
            onClick={handleNext}
            className="bg-black text-white px-6"
          >
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </>
    );
  };

  const renderStep3 = () => {
    return (
      <>
        <h2 className="text-xl font-bold mb-4">Payment Details</h2>
        <div className="space-y-4">
          <RadioGroup 
            defaultValue={formData.paymentMethod}
            onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
            className="flex space-x-4 mb-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit" id="credit" />
              <Label htmlFor="credit" className="flex items-center space-x-1">
                <span>Credit/Debit Card</span>
                <CreditCard className="h-4 w-4" />
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
          </RadioGroup>
          
          <div className="space-y-2">
            <Label htmlFor="cardName">Cardholder Name</Label>
            <Input
              id="cardName"
              name="cardName"
              placeholder="Full name on card"
              value={formData.cardName}
              onChange={handleInputChange}
              className="bg-gray-100"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="bg-gray-100"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleInputChange}
                className="bg-gray-100"
                type="password"
                maxLength={3}
              />
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Plan Price</span>
              <span>${price}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Taxes</span>
              <span>${(parseFloat(price || "0") * 0.05).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold border-t border-gray-200 pt-2">
              <span>Total</span>
              <span>${(parseFloat(price || "0") * 1.05).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button 
            onClick={handleProcessPayment}
            className="bg-black text-white px-6"
            disabled={isProcessingPayment}
          >
            {isProcessingPayment ? "Processing..." : "Make Payment"} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </>
    );
  };

  const renderStep4 = () => {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mb-6">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Thank you !!</h2>
        <p className="text-gray-500 text-center mb-6">
          Your payment has been successful and your membership has been activated. Get ready to embark on your fitness journey!
        </p>
        <div className="bg-gray-50 w-full p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Order ID:</span>
            <span className="font-medium">{`ORD-${Math.floor(Math.random() * 1000000)}`}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Plan:</span>
            <span className="font-medium">{formData.plan}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Amount paid:</span>
            <span className="font-medium">${(parseFloat(price || "0") * 1.05).toFixed(2)}</span>
          </div>
        </div>
        <Button 
          onClick={() => setStep(5)}
          className="w-full bg-black text-white mt-4"
        >
          Give Feedback
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
            "public/lovable-uploads/9bbe48cc-b71d-4f12-baba-3ead205ec5fe.png", // 😍
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
        <DialogTitle className="sr-only">Membership Flow</DialogTitle>
        <DialogDescription className="sr-only">Complete your membership registration</DialogDescription>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              {step === 4 ? "✓" : "🏋️"}
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
        
        {step !== 4 && step !== 5 && renderStepIndicator()}
        
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
        {step === 5 && renderFeedback()}
      </DialogContent>
    </Dialog>
  );
};

export default MembershipFlow;
