import React from 'react';
import { Clock, DollarSign, Calendar, Smile, Layers, Zap, PoundSterlingIcon } from 'lucide-react';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
    <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-3 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Rapid Development",
      description: "Websites built in days instead of weeks or months. Our AI technology accelerates the design and development process."
    },
    {
      icon: <PoundSterlingIcon className="h-6 w-6" />,
      title: "Cost Effective",
      description: "Save up to 60% compared to traditional web development agencies with our AI-powered design and coding."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Built-in Scheduling",
      description: "Integrated booking system designed specifically for mobile car detailers. Manage appointments effortlessly."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Custom Design",
      description: "Every website is uniquely designed to match your brand identity and business needs, not templated."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Continuous Improvement",
      description: "AI learns from user interactions to suggest improvements to your website over time."
    },
    {
      icon: <Smile className="h-6 w-6" />,
      title: "Client Satisfaction",
      description: "Higher customer satisfaction with easy-to-use booking and a professionally designed experience."
    }
  ];

  return (
    <section id="benefits" className="py-20 pb-20 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        {/* Main background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black">
          <div className="absolute top-0 inset-x-0 h-[70%] opacity-30">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        {/* Bottom fade to black */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why AI-Built Websites Are Better</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform creates custom websites for car detailers that outperform traditionally-built sites in every way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        {/* CTA Card - now positioned absolutely */}
        <div className="relative w-full max-w-4xl mx-auto my-16 z-30">

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-xl shadow-lg shadow-purple-500/25 mx-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Ready to transform your car detailing business?</h3>
                <p className="text-purple-200">Get a website that works as hard as you do at a fraction of the cost.</p>
              </div>
              <a 
                href="#contact" 
                className="whitespace-nowrap bg-white text-purple-700 hover:bg-purple-50 font-bold px-6 py-3 rounded-full transition-colors"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;