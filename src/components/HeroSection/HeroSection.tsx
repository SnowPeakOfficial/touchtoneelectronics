'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';

const HeroSection = () => {
  return (
    <>
      {/* True Apple-Style Seamless Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Apple-Style Headline - Single Line */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tighter mb-6"
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span className="text-gray-900">Your Device. </span>
            <span 
              className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text text-transparent"
              style={{
                textShadow: '0 4px 20px rgba(185, 28, 28, 0.3), 0 2px 8px rgba(153, 27, 27, 0.2)'
              }}
            >
              Perfected.
            </span>
          </motion.h1>
          
          {/* Apple-style Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto mb-6"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
            }}
          >
            Expert repair services that bring your electronics back to life.
            <span 
              className="block font-medium text-gray-800 mt-1"
              style={{
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
              }}
            >
              Same-day service. 90-day warranty.
            </span>
          </motion.p>

          {/* Apple-Style CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-red-800 hover:shadow-2xl hover:shadow-red-700/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </motion.a>

            <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:border-red-300 hover:shadow-xl transition-all duration-300 justify-center"
            >
              <Phone className="group-hover:rotate-12 transition-transform duration-300" size={20} />
              Call Now
            </motion.a>
          </motion.div>

          {/* Larger iPhone Image - Closer to Buttons */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <img
              src="/images/iphone-17.png"
              alt="iPhone 17"
              className="w-96 h-auto md:w-[480px] lg:w-[560px] xl:w-[640px] object-contain drop-shadow-2xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Apple-Style Electronics Repair Showcase */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[0.9]">
              <span className="block">Expert</span>
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Repair
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every device tells a story. We&apos;re here to make sure it continues.
            </p>
          </motion.div>

          {/* Apple-Style 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
            
            {/* Smartphone Repair Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl group cursor-pointer text-center"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Smartphone Repair
              </h3>
              <p className="text-base text-gray-600 mb-4 leading-relaxed max-w-sm mx-auto">
                iPhone, Samsung, Google Pixel - we fix them all. From cracked screens to water damage.
              </p>
              <div className="text-sm font-medium text-red-700 mb-6">
                All major brands supported
              </div>
              <div className="flex gap-3 justify-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-800 transition-colors duration-300"
                >
                  Get Quote
                </motion.a>
              </div>
              {/* Smartphone Repair Image - 25% Bigger */}
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img
                  src="/images/samsung-galaxy.png"
                  alt="Smartphone Repair"
                  className="w-full h-full object-contain p-4 scale-125"
                />
              </div>
            </motion.div>

            {/* Computer Repair Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl group cursor-pointer text-center"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Computer Repair
              </h3>
              <p className="text-base text-gray-600 mb-4 leading-relaxed max-w-sm mx-auto">
                Laptops, desktops, tablets. Hardware and software solutions for all your computing needs.
              </p>
              <div className="text-sm font-medium text-red-700 mb-6">
                Same-day diagnostics
              </div>
              <div className="flex gap-3 justify-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-800 transition-colors duration-300"
                >
                  Get Quote
                </motion.a>
              </div>
              {/* Computer Repair Image */}
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <img
                  src="/images/laptop.png"
                  alt="Computer Repair"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </motion.div>

            {/* Gaming & Entertainment Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl group cursor-pointer text-center"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Gaming & Entertainment
              </h3>
              <p className="text-base text-gray-600 mb-4 leading-relaxed max-w-sm mx-auto">
                PlayStation, Xbox, Nintendo, TVs, DVD players. Keep your entertainment running smoothly.
              </p>
              <div className="text-sm font-medium text-red-700 mb-6">
                Quick turnaround
              </div>
              <div className="flex gap-3 justify-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-800 transition-colors duration-300"
                >
                  Get Quote
                </motion.a>
              </div>
              {/* Gaming & Entertainment Image - 25% Bigger */}
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img
                  src="/images/ps5.png"
                  alt="Gaming & Entertainment Repair"
                  className="w-full h-full object-contain p-4 scale-125"
                />
              </div>
            </motion.div>

            {/* Specialty Repairs Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl group cursor-pointer text-center"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Specialty Repairs
              </h3>
              <p className="text-base text-gray-600 mb-4 leading-relaxed max-w-sm mx-auto">
                Sewing machines, vintage electronics, unique devices. If it&apos;s electronic, we can fix it.
              </p>
              <div className="text-sm font-medium text-red-700 mb-6">
                15+ years experience
              </div>
              <div className="flex gap-3 justify-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-800 transition-colors duration-300"
                >
                  Get Quote
                </motion.a>
              </div>
              {/* Specialty Repairs Image */}
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <img
                  src="/images/dvd-player.png"
                  alt="Specialty Repairs"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Devices Repaired" },
              { number: "100%", label: "Success Rate" },
              { number: "15+", label: "Years Experience" },
              { number: "24hr", label: "Average Turnaround" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="bg-gray-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-red-600/10 transition-all duration-500 border border-gray-200">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-red-700 mb-3 group-hover:text-red-800 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
