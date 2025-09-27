'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Company Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-4 mb-8">
              <img
                src="/images/logo.webp"
                alt="TouchTone Electronics"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{COMPANY_INFO.name}</h3>
                <p className="text-gray-400 text-base">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
          </div>

          {/* Essential Contact */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-8 text-white">Contact Us</h4>
            <div className="space-y-6">
              <motion.a
                href={`tel:${COMPANY_INFO.phone}`}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-red-400 transition-all duration-300 group"
              >
                <Phone size={20} className="text-red-400" />
                <span className="text-lg font-medium">{COMPANY_INFO.phone}</span>
              </motion.a>
              
              <motion.a
                href={`mailto:${COMPANY_INFO.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-red-400 transition-all duration-300 group"
              >
                <Mail size={20} className="text-red-400" />
                <span className="text-lg">{COMPANY_INFO.email}</span>
              </motion.a>
              
              <div className="flex items-start space-x-4 text-gray-300">
                <MapPin size={20} className="text-red-400 mt-1 flex-shrink-0" />
                <span className="text-lg leading-relaxed">{COMPANY_INFO.address.full}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-8 text-white">Get Started</h4>
            <div className="space-y-6">
              
              {/* Primary CTA */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href={`tel:${COMPANY_INFO.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold text-center hover:border-red-400 hover:text-red-400 transition-all duration-300"
              >
                Call Now
              </motion.a>

              {/* Essential Links */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/"
                  className="block text-gray-400 hover:text-red-400 transition-colors duration-300 text-base"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block text-gray-400 hover:text-red-400 transition-colors duration-300 text-base"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-400 hover:text-red-400 transition-colors duration-300 text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-base">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-8 text-base">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
