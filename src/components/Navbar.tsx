import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Car } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      } py-4`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-purple-500 mr-2" />
            <span className="text-xl font-bold text-white">DetailAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-300 hover:text-white font-medium transition-colors">Benefits</a>
            <a href="#features" className="text-gray-300 hover:text-white font-medium transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white font-medium transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-300 hover:text-white font-medium transition-colors">Pricing</a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full font-medium hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg hover:shadow-purple-500/25 flex items-center"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book a Call
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-4 py-3 space-y-3">
            <a 
              href="#benefits" 
              className="block text-gray-300 hover:text-white font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#features" 
              className="block text-gray-300 hover:text-white font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-300 hover:text-white font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="block text-gray-300 hover:text-white font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full font-medium hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg hover:shadow-purple-500/25 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;