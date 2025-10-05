'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-gray-200/30 shadow-sm"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Company Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/images/logo.webp"
              alt="TouchTone Electronics"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-black text-gray-900">TouchTone</div>
              <div className="text-xs text-gray-500 font-medium -mt-1">Electronics</div>
            </div>
          </motion.a>

          {/* Desktop Navigation - Apple Style */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -2 }}
                  className={`font-medium text-lg transition-all duration-300 relative group ${
                    isActive ? 'text-red-700' : 'text-gray-700 hover:text-red-700'
                  }`}
                >
                  {item.name}
                  <div className={`absolute -bottom-1 left-0 h-0.5 bg-red-700 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </motion.a>
              );
            })}
          </div>

          {/* Apple-style CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-red-700 hover:text-red-800 font-semibold transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="hidden xl:block">Call Now</span>
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} className="text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Apple Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      onClick={() => setIsOpen(false)}
                      className={`block text-xl font-semibold transition-colors duration-300 py-2 ${
                        isActive ? 'text-red-700' : 'text-gray-700 hover:text-red-700'
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
                
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <motion.a
                    href={`tel:${COMPANY_INFO.phone}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="flex items-center gap-3 text-red-700 font-semibold text-lg"
                  >
                    <Phone size={20} />
                    {COMPANY_INFO.phone}
                  </motion.a>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <MapPin size={20} />
                    <span>{COMPANY_INFO.address.full}</span>
                  </motion.div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-700 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-red-800 transition-colors duration-300"
                  >
                    Get Free Quote
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
