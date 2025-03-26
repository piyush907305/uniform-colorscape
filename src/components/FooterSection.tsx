
import React from 'react';
import { Facebook, Twitter, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <span className="text-fitness-red font-bold text-xl">C</span>
              <span className="font-semibold text-lg">oncordia</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Empowering students to achieve their fitness goals.
            </p>
            <div className="text-sm text-gray-600">
              <p className="mb-1"><strong>Operating Hours:</strong> Open: Mon–Fri 6 AM - 10 PM | Sat-Sun 8 AM - 8 PM</p>
              <p className="mb-1"><strong>Location:</strong> LE 2.315 (Hall Building), Concordia University, QC H3G 1M8</p>
              <p className="mb-3"><strong>Email:</strong> legym@concordia.ca</p>
              <p className="mb-3">Follow us for Updates</p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-600 hover:text-fitness-red">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-fitness-red">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-fitness-red">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Home</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Services</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Trainers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Articles</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Events</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Calendar</a></li>
            </ul>
          </div>
          
          {/* Careers */}
          <div>
            <h4 className="font-semibold mb-4">Careers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Jobs</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Internships</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Why Work With Us</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="md:hidden lg:block">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Terms and Conditions</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Code of Conduct</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-fitness-red">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
