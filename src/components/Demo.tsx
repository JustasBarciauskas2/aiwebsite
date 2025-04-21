import React, { useState } from 'react';
import { Calendar, Check, Clock, Car, MapPin } from 'lucide-react';

const Demo = () => {
  const [selectedService, setSelectedService] = useState('basic');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  const services = {
    basic: { name: 'Basic Wash', duration: '1 hour', price: '£49.99' },
    premium: { name: 'Premium Detail', duration: '2 hours', price: '£89.99' },
    deluxe: { name: 'Deluxe Package', duration: '3 hours', price: '£149.99' }
  };
  
  const availableTimes = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];
  
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See the Scheduling System in Action</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience how easy it is for your customers to book appointments with your AI-built website.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-br from-purple-600/20 to-purple-700/20 p-8 border-r border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">How It Works</h3>
              
              <div className="space-y-6">
                {[
                  { icon: <Car className="h-6 w-6" />, title: "Select Service", description: "Customers choose the detailing package that fits their needs." },
                  { icon: <Calendar className="h-6 w-6" />, title: "Pick a Date", description: "They select from available dates on your calendar." },
                  { icon: <Clock className="h-6 w-6" />, title: "Choose Time", description: "Time slots automatically adjust based on your availability." },
                  { icon: <MapPin className="h-6 w-6" />, title: "Add Location", description: "Enter their address for mobile service." },
                  { icon: <Check className="h-6 w-6" />, title: "Confirmation", description: "Instant booking confirmation and reminders." }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                <p className="text-sm text-gray-300">
                  <strong className="text-purple-400">Pro tip:</strong> The scheduling system integrates with your calendar and automatically handles time zone differences, travel time between appointments, and service duration.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Book a Car Detailing</h3>
              
              <div className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Select Service</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.entries(services).map(([id, service]) => (
                      <button
                        key={id}
                        onClick={() => setSelectedService(id)}
                        className={`border rounded-lg p-3 text-left transition-colors ${
                          selectedService === id 
                            ? 'border-purple-500 bg-purple-500/20 text-white' 
                            : 'border-white/10 hover:border-purple-500/30 text-gray-300'
                        }`}
                      >
                        <div className="font-bold">{service.name}</div>
                        <div className="text-sm text-gray-400">{service.duration}</div>
                        <div className="mt-1 font-medium text-purple-400">{service.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Date Selection */}
                <div>
                  <label htmlFor="date" className="block text-gray-300 font-medium mb-2">Select Date</label>
                  <input
                    type="date"
                    id="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                  />
                </div>
                
                {/* Time Selection */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Select Time</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 border rounded-md transition-colors ${
                          selectedTime === time
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'border-white/10 text-gray-300 hover:border-purple-500/30'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  className={`w-full font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center ${
                    !selectedService || !selectedDate || !selectedTime
                      ? 'bg-purple-600/50 text-white/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-500 hover:to-purple-600 shadow-lg hover:shadow-purple-500/25'
                  }`}
                  disabled={!selectedService || !selectedDate || !selectedTime}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </button>
                
                <p className="text-sm text-center text-gray-400">
                  This is just a demo. Your actual booking system will be customized to your specific service offerings and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;