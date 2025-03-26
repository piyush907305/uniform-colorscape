
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [receiveNotifications, setReceiveNotifications] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would call an authentication service
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Welcome back to Concordia Fitness!",
      });
      navigate('/fitness-tracker');
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter both email and password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <img 
          src="/lovable-uploads/9bbe48cc-b71d-4f12-baba-3ead205ec5fe.png" 
          alt="Fitness Training" 
          className="h-full w-full object-cover" 
        />
        <div className="absolute top-6 left-6">
          <img 
            src="/lovable-uploads/798813f4-cfef-493e-bcfd-d629448f5364.png" 
            alt="Concordia Logo" 
            className="h-12"
          />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo - only visible on mobile */}
          <div className="mb-8 flex justify-center md:hidden">
            <img 
              src="/lovable-uploads/798813f4-cfef-493e-bcfd-d629448f5364.png" 
              alt="Concordia Logo" 
              className="h-12"
            />
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">Account Login</h1>
          
          <p className="text-center text-gray-600 mb-8">
            If you are already a member you can login with your email address or
            Concordia's username and password.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="notifications" 
                  checked={receiveNotifications}
                  onCheckedChange={(checked) => setReceiveNotifications(checked as boolean)}
                />
                <label
                  htmlFor="notifications"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Receive reminders and notifications
                </label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-fitness-dark text-white hover:bg-black"
            >
              Login
            </Button>
            
            <div className="text-center text-sm">
              Don't have an account? <Link to="/signup" className="text-fitness-red font-medium hover:underline">Sign up here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
