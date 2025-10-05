'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Gamepad2, Tv, ShoppingBag, ArrowRight, Phone, Star } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';

const ProductsPage = () => {
  const categories = [
    {
      icon: Smartphone,
      name: 'Smartphones',
      description: 'Latest iPhone, Samsung, and Google Pixel devices',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Laptop,
      name: 'Laptops & Tablets',
      description: 'MacBooks, Windows laptops, iPads, and more',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Gamepad2,
      name: 'Gaming Consoles',
      description: 'PlayStation, Xbox, Nintendo Switch',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Tv,
      name: 'Electronics',
      description: 'TVs, audio equipment, and accessories',
      color: 'from-red-500 to-red-600'
    }
  ];

  const featuredProducts = [
    {
      name: 'iPhone 17',
      category: 'Smartphone',
      price: 'Call for pricing',
      image: '/images/iphone-17.png',
      features: ['Latest A18 chip', '6.1" display', '5G enabled'],
      inStock: true
    },
    {
      name: 'Samsung Galaxy S25',
      category: 'Smartphone',
      price: 'Call for pricing',
      image: '/images/samsung-galaxy.png',
      features: ['Snapdragon 8 Gen 4', '6.2" AMOLED', '200MP camera'],
      inStock: true
    },
    {
      name: 'MacBook Pro',
      category: 'Laptop',
      price: 'Starting at $1,999',
      image: '/images/laptop.png',
      features: ['M3 chip', '16" Retina display', '18hr battery'],
      inStock: true
    },
    {
      name: 'PlayStation 5',
      category: 'Gaming Console',
      price: 'Call for pricing',
      image: '/images/ps5.png',
      features: ['4K gaming', 'Ultra HD Blu-ray', 'DualSense controller'],
      inStock: true
    },
    {
      name: 'iPad Pro',
      category: 'Tablet',
      price: 'Starting at $1,299',
      image: '/images/laptop.png',
      features: ['M2 chip', '12.9" display', 'Apple Pencil support'],
      inStock: true
    },
    {
      name: 'Smart TV 65"',
      category: 'Electronics',
      price: 'Starting at $899',
      image: '/images/laptop.png',
      features: ['4K UHD', 'Smart features', 'HDR support'],
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-[0.9]">
              <span className="block">Shop</span>
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Electronics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover the latest smartphones, laptops, gaming consoles, and electronics. 
              Quality products at competitive prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${COMPANY_INFO.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold  hover:bg-red-800 hover:shadow-2xl hover:shadow-red-700/25 flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Call for Availability
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:border-red-300 hover:shadow-xl  justify-center"
              >
                <ShoppingBag size={20} />
                Visit Our Store
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Find exactly what you're looking for
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl  cursor-pointer border border-gray-100 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular electronics in stock now
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl  group"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.inStock && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      In Stock
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>

                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-2xl font-black text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors duration-300 flex items-center gap-2"
                    >
                      Inquire
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-700 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Visit our store or give us a call. We have access to a wide range of electronics 
              and can special order items for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100  shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingBag size={20} />
                Visit Our Store
              </motion.a>
              
              <motion.a
                href={`tel:${COMPANY_INFO.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-900 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-950  flex items-center justify-center gap-3 border-2 border-white/20"
              >
                <Phone size={20} />
                {COMPANY_INFO.phone}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
