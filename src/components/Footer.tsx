import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Car className="h-7 w-7 text-purple-400 mr-2" />
              <span className="text-xl font-bold text-white">DetailAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered websites with built-in scheduling for mobile car detailers. Faster builds, lower costs, better results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Appointment Scheduling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Business Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Marketing Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Customer Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Detailing Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Marketing Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Support Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">Email:</span>
                <a href="mailto:hello@detailai.com" className="text-purple-400 hover:text-purple-300 transition-colors">hello@detailai.com</a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">Phone:</span>
                <a href="tel:+15551234567" className="text-purple-400 hover:text-purple-300 transition-colors">(555) 123-4567</a>
              </li>
              <li>
                <a href="#contact" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-4 py-2 rounded-md mt-2 inline-block transition-colors shadow-lg hover:shadow-purple-500/25">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DetailAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;