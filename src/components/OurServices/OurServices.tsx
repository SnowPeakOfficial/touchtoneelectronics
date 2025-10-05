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

const OurServices = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-red-50/30 via-transparent to-red-100/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Apple-Style Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-8 leading-[0.8]">
            <span className="block">Our</span>
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional repair solutions with vibrant results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const colorScheme = colorSchemes[index % colorSchemes.length];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -16 }}
                className="group relative h-[28rem]"
              >
                {/* Service Card */}
                <div className={`
                  relative bg-gradient-to-br ${colorScheme.bg}
                  rounded-3xl p-8 h-full 
                  hover:shadow-2xl ${colorScheme.shadow} cursor-pointer
                  overflow-hidden
                `}>
                  
                  {/* Background Geometric Patterns */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white/30 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    
                    {/* Large Icon */}
                    <div className="w-20 h-20 bg-white/25 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-5 group-hover:bg-white/35 shadow-lg">
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
                    <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-2xl p-3">
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
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
