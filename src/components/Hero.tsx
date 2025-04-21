import React from 'react';
import { Sparkles, Clock, PoundSterlingIcon, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="h-screen bg-black flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
          <span className="text-sm font-medium text-gray-300">AI-Powered Websites for Car Detailers</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-inter">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            Custom Websites Built by AI
          </span>
          <br />
          <span className="text-white">
            for Car Detailers
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Custom websites with integrated appointment scheduling for your mobile detailing business – built in days, at a fraction of the cost.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium flex items-center justify-center hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg hover:shadow-purple-500/25 group"
          >
            Get Started
          </a>
          <a 
            href="#pricing" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-gray-300 bg-white/5 backdrop-blur-sm font-semibold border border-white/10 hover:border-purple-500/30 hover:scale-105 hover:text-white transform transition-all duration-200"
          >
            View Pricing
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <Clock className="h-10 w-10 text-purple-400 mr-4" />
            <div className="text-left">
              <p className="text-purple-400 font-bold text-2xl">3-5 Days</p>
              <p className="text-gray-400">From concept to launch</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <PoundSterlingIcon className="h-10 w-10 text-purple-400 mr-4" />
            <div className="text-left">
              <p className="text-purple-400 font-bold text-2xl">60% Lower</p>
              <p className="text-gray-400">Than traditional costs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;