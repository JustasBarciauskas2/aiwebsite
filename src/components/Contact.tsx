import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    contactPreference: 'email'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    alert('Thank you for your interest! We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/15 via-black to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_225deg_at_50%_30%,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Schedule a free consultation to see how our AI-powered websites can help your mobile car detailing business grow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-purple-600/20 to-purple-700/20 p-8 border-r border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Call us</p>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Email us</p>
                    <p className="text-gray-400">hello@detailai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 mr-4 mt-1 text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Live chat</p>
                    <p className="text-gray-400">Available 9am-5pm ET</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/10 p-5 rounded-lg border border-purple-500/20">
                <h4 className="font-bold mb-2 text-white">What happens next?</h4>
                <ol className="space-y-3 text-sm">
                  <li className="flex">
                    <span className="bg-purple-500/20 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 text-purple-400">1</span>
                    <p className="text-gray-300">We'll schedule a 30-minute discovery call to understand your business needs</p>
                  </li>
                  <li className="flex">
                    <span className="bg-purple-500/20 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 text-purple-400">2</span>
                    <p className="text-gray-300">Our AI will generate a custom proposal and demo for your review</p>
                  </li>
                  <li className="flex">
                    <span className="bg-purple-500/20 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 text-purple-400">3</span>
                    <p className="text-gray-300">Once approved, we'll build and launch your website in 3-5 days</p>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Book a Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="+44 7123 456789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-gray-300 font-medium mb-2">Business Name</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="Pristine Auto Detailing"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                    placeholder="Tell us a bit about your business and what you're looking for..."
                  ></textarea>
                </div>
                
                <div>
                  <span className="block text-gray-300 font-medium mb-2">Preferred contact method</span>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === 'email'}
                        onChange={handleChange}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 bg-white/5 border-white/10"
                      />
                      <span className="ml-2 text-gray-300">Email</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === 'phone'}
                        onChange={handleChange}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 bg-white/5 border-white/10"
                      />
                      <span className="ml-2 text-gray-300">Phone</span>
                    </label>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;