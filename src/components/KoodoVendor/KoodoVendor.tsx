'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, CreditCard, Zap, CheckCircle } from 'lucide-react';

const KoodoVendor = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-red-50/30 via-transparent to-red-100/20"></div>
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
          <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <CheckCircle size={20} />
            Authorized Koodo Vendor
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[0.9]">
            <span className="block">Koodo</span>
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Setup prepaid phone plans, activate SIM cards, and get top-up services from an authorized Koodo vendor.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Phone Plan Setup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
              <Smartphone className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Phone Plan Setup
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              We can assist with Koodo phone plan selection and activation right from our store. Get expert advice on the best plan for your needs.
            </p>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle size={16} />
              <span>Expert plan consultation</span>
            </div>
          </motion.div>

          {/* SIM Card Activation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors duration-300">
              <CreditCard className="text-red-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              SIM Card Activation
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide official Koodo SIM cards and can activate them for you right from our store. Quick and hassle-free setup.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <CheckCircle size={16} />
              <span>Instant activation available</span>
            </div>
          </motion.div>

          {/* Top-Up Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors duration-300">
              <Zap className="text-red-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Top-Up Services
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide top-up services and vouchers that can be used for any phone provider. Keep your phone plan active with ease.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <CheckCircle size={16} />
              <span>Universal vouchers available</span>
            </div>
          </motion.div>
        </div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl text-center border border-gray-100"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Connected?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Visit us today for all your Koodo mobile needs. Our experienced team will help you find the perfect plan and get you connected quickly and efficiently.
            </p>
            
            {/* Phone Image Placeholder */}
            <div className="w-full h-64 bg-gray-100 rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-center">
                <Smartphone className="text-gray-400 mx-auto mb-4" size={64} />
                <p className="text-gray-500 text-lg">Koodo Services Image</p>
                <p className="text-gray-400 text-sm">Phone plans and SIM card activation</p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Authorized Vendor</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Expert Consultation</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Instant Activation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-red-800 hover:shadow-2xl hover:shadow-red-700/25"
              >
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  Learn More About Koodo
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:border-red-300 hover:shadow-xl transition-all duration-300 justify-center"
              >
                Visit Store Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KoodoVendor;
