'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Unlock, Music, Shield, Watch, Printer } from 'lucide-react';
import { SERVICES } from '@/data/constants';

const iconMap = {
  Wrench,
  Unlock,
  Music,
  Shield,
  Watch,
  Printer
};

// Apple-style consistent red color schemes
const colorSchemes = [
  {
    bg: 'from-red-600 to-red-700',
    text: 'text-white',
    shadow: 'shadow-red-500/30'
  },
  {
    bg: 'from-red-700 to-red-800',
    text: 'text-white',
    shadow: 'shadow-red-600/30'
  },
  {
    bg: 'from-red-500 to-red-600',
    text: 'text-white',
    shadow: 'shadow-red-500/30'
  },
  {
    bg: 'from-red-600 to-red-800',
    text: 'text-white',
    shadow: 'shadow-red-600/30'
  },
  {
    bg: 'from-red-700 to-red-900',
    text: 'text-white',
    shadow: 'shadow-red-700/30'
  },
  {
    bg: 'from-red-500 to-red-700',
    text: 'text-white',
    shadow: 'shadow-red-500/30'
  }
];

const ServicesPreview = () => {
  console.log('ServicesPreview component rendering with new design');
  return (
    <>
      {/* Apple-Style Design - Consistent with HeroSection */}
      <section className="py-32 bg-gray-50 overflow-hidden relative">
        
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Apple-Style Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-8 leading-[0.8]">
              <span className="block">Our</span>
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional repair solutions with vibrant results
            </p>
          </div>

          {/* Temha-Style Massive Colorful Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const colorScheme = colorSchemes[index % colorSchemes.length];
              
              return (
                <div
                  key={service.id}
                  className="group relative h-[28rem]"
                >
                  {/* Temha-Style Large Colorful Card */}
                  <div className={`
                    relative bg-gradient-to-br ${colorScheme.bg}
                    rounded-3xl p-8 h-full transition-all duration-500 
                    hover:shadow-2xl ${colorScheme.shadow} cursor-pointer
                    overflow-hidden hover:scale-105 hover:-translate-y-4
                  `}>
                    
                    {/* Background Geometric Patterns */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                      <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full blur-xl"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white/30 rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      
                      {/* Large Icon - Improved Design */}
                      <div className="w-20 h-20 bg-white/25 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-5 group-hover:bg-white/35 transition-all duration-300 shadow-lg">
                        <IconComponent className={`${colorScheme.text} drop-shadow-lg`} size={40} />
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl md:text-2xl font-black ${colorScheme.text} mb-3 leading-tight`}>
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className={`${colorScheme.text} opacity-90 mb-5 leading-relaxed flex-grow text-sm`}>
                        {service.description}
                      </p>

                      {/* Stats Row */}
                      <div className="flex justify-between items-center mb-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                        <div className="text-center">
                          <div className={`text-base font-black ${colorScheme.text}`}>
                            {service.estimatedTime}
                          </div>
                          <div className={`text-xs ${colorScheme.text} opacity-75 font-medium`}>
                            Turnaround
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`text-base font-black ${colorScheme.text}`}>
                            {service.warranty}
                          </div>
                          <div className={`text-xs ${colorScheme.text} opacity-75 font-medium`}>
                            Warranty
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <button className={`group/btn flex items-center gap-3 ${colorScheme.text} font-bold text-base hover:opacity-80 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 hover:bg-white/20`}>
                        Learn More
                        <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apple-Style Light CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        
        {/* Light Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 via-transparent to-red-600/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            
            {/* Apple-Style Typography */}
            <div className="max-w-5xl mx-auto mb-12">
              <h3 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 mb-8 leading-[0.8] tracking-tighter">
                <span className="block">READY TO</span>
                <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  GET STARTED?
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Bring your device in today. Our experts are ready to transform your electronics.
              </p>
            </div>
            
            {/* Apple-Style CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-red-700 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 hover:bg-red-800 hover:shadow-2xl hover:shadow-red-700/25 hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-3">
                  View All Services
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
                </span>
              </button>
              
              <button className="bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-900 px-12 py-6 rounded-full text-xl font-bold hover:bg-white hover:border-red-300 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPreview;
