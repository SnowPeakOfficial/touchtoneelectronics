'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ReadyToGetStarted = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      
      {/* Light Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 via-transparent to-red-600/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          
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
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-red-700 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 hover:bg-red-800 hover:shadow-2xl hover:shadow-red-700/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Free Quote
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
