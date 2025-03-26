
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('general');
  const [comment, setComment] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !comment) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send the form data to a server
    toast({
      title: "Form Submitted",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setReason('general');
    setComment('');
  };

  return (
    <div className="min-h-screen bg-white pt-20 px-4 md:px-0">
      <div className="max-w-md mx-auto py-12">
        <h1 className="text-2xl font-bold mb-2">LeGym Contact Form</h1>
        <p className="text-gray-600 mb-8">
          Please fill out this form to get in touch with us for any inquiries or membership-related questions.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <p className="text-xs text-gray-500">
              Concordia username or email address
            </p>
          </div>
          
          <div className="space-y-3">
            <Label>Reason for Contact</Label>
            <RadioGroup value={reason} onValueChange={setReason}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="membership" id="membership" />
                <Label htmlFor="membership" className="cursor-pointer">Membership Inquiry</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="general" id="general" />
                <Label htmlFor="general" className="cursor-pointer">General Inquiry</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="cursor-pointer">Other</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="comment">Comments</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Typing..."
              className={comment.length > 0 ? "border-red-500" : ""}
            />
            <p className="text-xs text-red-500">
              {comment.length > 0 && "Error message informing me of a problem"}
            </p>
          </div>
          
          <div className="flex justify-between">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" className="bg-black text-white hover:bg-gray-800">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
