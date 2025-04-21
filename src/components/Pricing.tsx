import React, { useState } from 'react';
import { Check, X, Zap } from 'lucide-react';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  oneTimePrice: string;
  monthlyPrice: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  cta?: string;
}

const PricingCard = ({ 
  title, 
  oneTimePrice,
  monthlyPrice,
  description, 
  features, 
  popular = false,
  cta = "Get Started" 
}: PricingCardProps) => {
  return (
    <div className={`relative flex flex-col h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden transition-all ${
      popular ? 'border-2 border-purple-500 shadow-lg shadow-purple-500/25' : 'border border-white/10 hover:border-purple-500/30'
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="mt-4 mb-6">
          <div className="mb-2">
            <span className="text-4xl font-bold text-white">£{oneTimePrice}</span>
            <span className="text-gray-400 ml-1">one-time setup</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-purple-400">£{monthlyPrice}</span>
            <span className="text-gray-400 ml-1">/month</span>
          </div>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature: Feature, index: number) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-6 pb-6">
        <a 
          href="#contact" 
          className={`block w-full text-center py-3 px-4 rounded-lg transition-colors ${
            popular 
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white shadow-lg hover:shadow-purple-500/25' 
              : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      oneTimePrice: "300",
      monthlyPrice: "50",
      description: "Perfect for new car detailers looking to establish their online presence.",
      features: [
        { text: "Custom single-page website", included: true },
        { text: "Mobile responsive design", included: true },
        { text: "Basic SEO optimization", included: true },
        { text: "Contact form integration", included: true },
        { text: "Social media links", included: true },
        { text: "Email notifications", included: true },
        { text: "Appointment scheduling", included: false },
        { text: "Payment processing", included: false },
        { text: "Customer management portal", included: false },
        { text: "Advanced features", included: false }
      ],
      popular: false
    },
    {
      title: "Professional",
      oneTimePrice: "500",
      monthlyPrice: "100",
      description: "Our most popular option for established mobile detailers.",
      features: [
        { text: "Multi-page custom website", included: true },
        { text: "Advanced appointment scheduling", included: true },
        { text: "Mobile responsive design", included: true },
        { text: "Advanced SEO optimization", included: true },
        { text: "Service package configurator", included: true },
        { text: "Client testimonials section", included: true },
        { text: "Email & SMS notifications", included: true },
        { text: "Online payment processing", included: true },
        { text: "Basic customer management", included: true },
        { text: "Google Maps integration", included: true }
      ],
      popular: true
    },
    {
      title: "Premium",
      oneTimePrice: "950",
      monthlyPrice: "180",
      description: "For serious detailers looking to scale their business.",
      features: [
        { text: "Enterprise custom website", included: true },
        { text: "AI-optimized scheduling system", included: true },
        { text: "Mobile responsive design", included: true },
        { text: "Complete SEO package", included: true },
        { text: "Dynamic service configurator", included: true },
        { text: "Before & after gallery", included: true },
        { text: "Advanced notification system", included: true },
        { text: "Full payment processing", included: true },
        { text: "Complete customer management", included: true },
        { text: "Employee management", included: true }
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black">
          <div className="absolute top-0 inset-x-0 h-[70%] opacity-30">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black via-black to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Affordable Website Packages</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get started with a one-time setup fee and a simple monthly subscription that covers hosting, maintenance, and continuous improvements.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                oneTimePrice={plan.oneTimePrice}
                monthlyPrice={plan.monthlyPrice}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center text-white">
                <Zap className="h-8 w-8 mr-3 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Need something more specific?</h3>
                  <p className="text-gray-400">We can create a custom solution tailored to your business needs.</p>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="whitespace-nowrap bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-purple-500/25"
              >
                Contact for Custom Quote
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center text-gray-400">
            <p className="mb-4">Monthly subscription includes:</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Website hosting", 
                "SSL certificate", 
                "Regular updates", 
                "Technical support",
                "Security monitoring",
                "Performance optimization"
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <Check className="h-4 w-4 text-purple-400 mr-2" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;