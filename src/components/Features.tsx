import React, { useState } from 'react';
import { Calendar, Clock, Users, Settings, Smartphone, Globe, Palette, MessageSquare } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('scheduling');

  const tabContent = {
    scheduling: {
      title: "Smart Appointment Scheduling",
      description: "AI-powered scheduling that optimizes your availability and manages bookings automatically.",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "24/7 online booking for customers",
        "Automated SMS/email reminders",
        "Smart scheduling to optimize your route",
        "Easy rescheduling and cancellations",
        "Buffer time management between appointments"
      ]
    },
    design: {
      title: "Custom Design & Branding",
      description: "Beautiful, conversion-focused websites tailored to your car detailing brand.",
      image: "https://images.pexels.com/photos/3826679/pexels-photo-3826679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Custom color schemes matching your brand",
        "Professional photography integration",
        "Before/after galleries for your work",
        "Service package displays with pricing",
        "Mobile-first responsive design"
      ]
    },
    management: {
      title: "Client & Business Management",
      description: "Comprehensive tools to manage your clients, services, and business operations.",
      image: "https://images.pexels.com/photos/7709292/pexels-photo-7709292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Customer profiles with service history",
        "Integrated payments and invoicing",
        "Business performance analytics",
        "Service package management",
        "Customer feedback and reviews system"
      ]
    }
  };

  const tabs = [
    { id: 'scheduling', label: 'Scheduling', icon: <Calendar className="h-5 w-5" /> },
    { id: 'design', label: 'Design', icon: <Palette className="h-5 w-5" /> },
    { id: 'management', label: 'Management', icon: <Settings className="h-5 w-5" /> }
  ];

  return (
    <section id="features" className="pt-5 pb-20 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        {/* Main background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black">
          <div className="absolute inset-x-0 bottom-0 h-[70%] opacity-30">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        {/* Top fade from black */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black via-black to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features Built for Car Detailers</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our AI doesn't just build websites—it creates complete business solutions tailored specifically for mobile car detailing businesses.
          </p>
        </div>

        {/* Feature tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`flex items-center px-5 py-2 rounded-full transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="ml-2 font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {tabContent[activeTab as keyof typeof tabContent].title}
            </h3>
            <p className="text-gray-400 mb-8">
              {tabContent[activeTab as keyof typeof tabContent].description}
            </p>

            <ul className="space-y-4">
              {tabContent[activeTab as keyof typeof tabContent].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg transform translate-x-3 translate-y-3"></div>
              <img 
                src={tabContent[activeTab as keyof typeof tabContent].image} 
                alt={tabContent[activeTab as keyof typeof tabContent].title}
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-80 lg:h-96"
              />
            </div>
          </div>
        </div>

        {/* Additional features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Smartphone className="h-6 w-6" />, title: "Mobile Responsive", description: "Perfectly optimized for all devices, especially phones that customers use to book on the go." },
            { icon: <Clock className="h-6 w-6" />, title: "Fast Loading", description: "Lightning-fast websites that load quickly, reducing bounce rates and improving conversion." },
            { icon: <Globe className="h-6 w-6" />, title: "SEO Optimized", description: "Built with search engines in mind to help local customers find your detailing business." },
            { icon: <MessageSquare className="h-6 w-6" />, title: "Live Chat Integration", description: "Connect with potential customers instantly through integrated messaging." }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full text-purple-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;