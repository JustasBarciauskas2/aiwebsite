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

const RadarChart = () => {
  const metrics = [
    { label: 'Development Speed', traditional: 30, ai: 90 },
    { label: 'Cost Efficiency', traditional: 40, ai: 85 },
    { label: 'Customization', traditional: 80, ai: 75 },
    { label: 'Performance', traditional: 75, ai: 90 },
    { label: 'Maintenance', traditional: 50, ai: 85 },
    { label: 'Scalability', traditional: 70, ai: 80 }
  ];

  const size = 400;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.35;
  const angleStep = (2 * Math.PI) / metrics.length;

  const getPoint = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const distance = (value / 100) * radius;
    return {
      x: centerX + distance * Math.cos(angle),
      y: centerY + distance * Math.sin(angle)
    };
  };

  const getLabelPoint = (index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const distance = radius * 1.3;
    return {
      x: centerX + distance * Math.cos(angle),
      y: centerY + distance * Math.sin(angle)
    };
  };

  const createPath = (values: number[]) => {
    return values.map((value, index) => {
      const point = getPoint(value, index);
      return `${index === 0 ? 'M' : 'L'} ${point.x},${point.y}`;
    }).join(' ') + ' Z';
  };

  const traditionalPath = createPath(metrics.map(m => m.traditional));
  const aiPath = createPath(metrics.map(m => m.ai));

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12 mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-700/20 rounded-xl filter blur-xl animate-pulse"></div>
      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Traditional vs AI-Powered Development</h3>
        
        <div className="relative">
          <svg width={size} height={size} viewBox={`-40 -40 ${size + 80} ${size + 80}`} className="mx-auto">
            {/* Background lines with animation */}
            {[20, 40, 60, 80, 100].map((level, index) => (
              <path
                key={level}
                d={createPath(Array(metrics.length).fill(level))}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                className="animate-radar-line"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}

            {/* Axis lines with animation */}
            {metrics.map((_, index) => {
              const point = getPoint(100, index);
              return (
                <line
                  key={index}
                  x1={centerX}
                  y1={centerY}
                  x2={point.x}
                  y2={point.y}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  className="animate-radar-line"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              );
            })}

            {/* Traditional path with animation */}
            <path
              d={traditionalPath}
              fill="rgba(255,255,255,0.1)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              className="animate-radar-path"
            />

            {/* AI path with animation and glow effect */}
            <path
              d={aiPath}
              fill="rgba(147,51,234,0.2)"
              stroke="rgb(147,51,234)"
              strokeWidth="2"
              className="animate-radar-path"
              filter="url(#glow)"
            />

            {/* Glow filter */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feFlood floodColor="rgb(147,51,234)" floodOpacity="0.5" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Labels */}
            {metrics.map((metric, index) => {
              const point = getLabelPoint(index);
              const angle = (index * angleStep * 180) / Math.PI - 90;

              let anchor = "middle";
              let xOffset = 0;

              if (metric.label === "Performance") {
                return (
                  <text
                    key={index}
                    x={point.x}
                    y={point.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="14"
                    className="font-medium animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {metric.label}
                  </text>
                );
              }

              if (angle > 45 && angle < 135) {
                anchor = "start";
                xOffset = 10;
              } else if (angle > 225 && angle < 315) {
                anchor = "end";
                xOffset = -10;
              }

              return (
                <text
                  key={index}
                  x={point.x + xOffset}
                  y={point.y}
                  textAnchor={anchor}
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="14"
                  className="font-medium animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {metric.label}
                </text>
              );
            })}
          </svg>

          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-2 animate-pulse"></div>
              <span className="text-white">AI-Powered</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white/30 rounded-full mr-2"></div>
              <span className="text-white">Traditional</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
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

        <RadarChart />

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

        {/* CTA Card */}
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