'use client';

import { Briefcase, Clock, MessageCircle, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Show the widget after a delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Stop pulsing after first interaction
  useEffect(() => {
    if (isOpen) {
      setPulse(false);
    }
  }, [isOpen]);

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "+918791318483"; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    {
      icon: <Briefcase className="w-4 h-4" />,
      title: "Job Opportunities",
      message: "Hi! I'm interested in exploring job opportunities with Savior Hires. Can you help me?"
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "Hire Talent",
      message: "Hello! I'm looking to hire talented professionals through Savior Hires. Can we discuss?"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: "General Inquiry",
      message: "Hi! I'd like to know more about Savior Hires services. Can you provide more information?"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 ease-out animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Savior Hires</h3>
                  <p className="text-green-100 text-sm">Your Career Partner</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 w-80">
            <div className="mb-4">
              <div className="bg-gray-50 rounded-xl p-3 mb-3 relative">
                <div className="absolute -top-2 left-4 w-4 h-4 bg-gray-50 transform rotate-45"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  👋 Welcome to <span className="font-semibold text-green-600">Savior Hires</span>! 
                  How can we help you today?
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(item.message)}
                  className="w-full p-3 text-left rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-green-600 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs">Click to start conversation</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-center text-xs text-gray-500">
                We typically reply within a few minutes
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl 
          hover:shadow-green-500/25 transition-all duration-300 group overflow-hidden
          ${pulse && !isOpen ? 'animate-pulse' : ''}
          ${isOpen ? 'rotate-45' : 'hover:scale-110'}
        `}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Ripple Effect */}
        {pulse && !isOpen && (
          <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-30"></div>
        )}
        
        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>

        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        )}
      </button>

      {/* Status Indicator */}
      {!isOpen && (
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
      )}
    </div>
  );
}