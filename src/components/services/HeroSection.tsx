'use client';

import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/services.jpg" 
          alt="Professional handshake in office" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Our Services
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
              Your Career, Our Commitment — From resume building to interview scheduling, we connect you with the right opportunities and guide you till you get placed.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              
              {/* Post Job Order Button */}
              <button className="group bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[200px] cursor-pointer">
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  Post Job Order
                </span>
              </button>
              
              {/* Apply Now Button */}
              <button className="group border-2 border-white bg-white text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 min-w-[200px] cursor-pointer">
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  Apply Now
                </span>
              </button>
            </div>
          </div>

          {/* Animated Elements */}
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/60 rounded-full animate-ping hidden lg:block"></div>
          <div className="absolute top-1/3 right-16 w-3 h-3 bg-white/40 rounded-full animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/50 rounded-full animate-bounce hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;