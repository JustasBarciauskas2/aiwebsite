import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="relative overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-3/4 flex flex-col gap-0.5">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
          </div>
          <Benefits />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-3/4 flex flex-col gap-0.5">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
          </div>
          <Features />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-3/4 flex flex-col gap-0.5">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
          </div>
          <Testimonials />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-3/4 flex flex-col gap-0.5">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
          </div>
          <Demo />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-3/4 flex flex-col gap-0.5">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
          </div>
          <Pricing />
        </div>
        
        {/* Decorative separator */}
        <div className="relative py-12">
          <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full"></div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center relative">
                  <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                  <div className="absolute inset-0 rounded-full border border-purple-500/20"></div>
                </div>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 w-3/4 flex flex-col gap-0.5">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;