'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Laptop, Smartphone, Headphones, Monitor } from 'lucide-react';

const ShopElectronics = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[0.9]">
            <span className="block">Shop</span>
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Electronics
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Visit us in store to view our wide variety of products ranging from computers, electronics, accessories, cellular phones, appliances, hardware, and other general merchandise.
          </p>
        </motion.div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Computers & Laptops */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl group cursor-pointer text-center"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-red-200 transition-colors duration-300">
              <Laptop className="text-red-700" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Computers & Laptops
            </h3>
            <p className="text-sm text-gray-600">
              Desktop computers, laptops, and accessories
            </p>
          </motion.div>

          {/* Smartphones & Tablets */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl group cursor-pointer text-center"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-red-200 transition-colors duration-300">
              <Smartphone className="text-red-700" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Smartphones & Tablets
            </h3>
            <p className="text-sm text-gray-600">
              Latest mobile devices and accessories
            </p>
          </motion.div>

          {/* Electronics & Accessories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl group cursor-pointer text-center"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-red-200 transition-colors duration-300">
              <Headphones className="text-red-700" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Electronics & Accessories
            </h3>
            <p className="text-sm text-gray-600">
              Headphones, chargers, cases, and more
            </p>
          </motion.div>

          {/* Appliances & Hardware */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl group cursor-pointer text-center"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-red-200 transition-colors duration-300">
              <Monitor className="text-red-700" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Appliances & Hardware
            </h3>
            <p className="text-sm text-gray-600">
              Home appliances and electronic hardware
            </p>
          </motion.div>
        </div>

        {/* Main Product Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Wide Selection of Quality Products
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From the latest smartphones to essential home appliances, we carry a comprehensive range of electronics and accessories. Visit our store to see our full inventory and get expert advice on the best products for your needs.
            </p>
            
            {/* Product Image */}
            <div className="w-full h-64 rounded-2xl mb-8 overflow-hidden">
              <img 
                src="/images/electronics.jpg" 
                alt="Electronics showcase - laptops, smartphones, and tablets display"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-red-800 hover:shadow-2xl hover:shadow-red-700/25"
              >
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  Visit Our Store
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:border-red-300 hover:shadow-xl transition-all duration-300 justify-center"
              >
                Browse Products
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopElectronics;
