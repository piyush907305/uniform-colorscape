
import React from 'react';
import { Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer>
      <div className="bg-fitness-dark py-4 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="text-sm">Call Us Now: </span>
            <a href="tel:+1438555076" className="text-sm font-medium hover:text-fitness-red transition-colors">+1 438.555.076</a>
          </div>
        </div>
      </div>
      
      <div className="bg-fitness-darkGray py-12 text-gray-400">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-fitness-red font-bold text-xl">C</span>
                <span className="text-white font-semibold text-lg">oncordia</span>
              </div>
              <p className="text-sm mb-4">
                Supporting students to achieve their fitness goals.
              </p>
              <p className="text-sm">
                <strong>Opening Hours:</strong> Mon-Fri: 6AM to 9 PM, Sat-Sun: 8AM to 6PM
              </p>
              <p className="text-sm mt-2">
                <strong>Location:</strong> 1515 St. Catherine Street West, Montreal, QC H3G 2W1
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Classes</a></li>
                <li><a href="#" className="footer-link">Schedule</a></li>
                <li><a href="#" className="footer-link">Membership</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">FAQs</a></li>
                <li><a href="#" className="footer-link">Contact</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Careers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">Join Our Team</a></li>
                <li><a href="#" className="footer-link">Trainer Positions</a></li>
                <li><a href="#" className="footer-link">Admin Jobs</a></li>
                <li><a href="#" className="footer-link">Student Jobs</a></li>
                <li><a href="#" className="footer-link">Contact HR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-6 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Concordia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
