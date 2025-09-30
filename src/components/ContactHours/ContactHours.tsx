'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, ArrowRight, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';

const ContactHours = () => {
  const hours = [
    { day: 'Monday - Friday', time: '10:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '11:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '12:00 PM - 5:00 PM' }
  ];

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
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[0.9]">
            <span className="block">Visit Our</span>
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Store
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Mississauga, we&apos;re here to help with all your electronics needs.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-red-700" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-red-600 hover:text-red-700 transition-colors duration-300 text-lg font-medium"
                >
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-gray-600 text-sm mt-1">Call us for immediate assistance</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-red-700" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-700 text-lg">
                  33-377 Burnhamthorpe Rd E<br />
                  Mississauga, ON, L5A 3Y1
                </p>
                <p className="text-gray-600 text-sm mt-1">Easy parking available</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-red-700" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-red-600 hover:text-red-700 transition-colors duration-300 text-lg font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
                <p className="text-gray-600 text-sm mt-1">Send us your questions anytime</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                href={`tel:${COMPANY_INFO.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-red-800 hover:shadow-2xl hover:shadow-red-700/25 flex items-center justify-center gap-3"
              >
                <Phone className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                Call Now
              </motion.a>

              <motion.a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY_INFO.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:border-red-300 hover:shadow-xl transition-all duration-300 justify-center"
              >
                <Navigation className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                Get Directions
              </motion.a>
            </div>
          </motion.div>

          {/* Store Hours */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                <Clock className="text-red-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Store Hours</h3>
            </div>

            <div className="space-y-6">
              {hours.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0"
                >
                  <span className="text-gray-700 font-medium text-lg">{schedule.day}</span>
                  <span className="text-gray-900 font-semibold text-lg">{schedule.time}</span>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-red-50 rounded-2xl border border-red-200">
              <h4 className="text-red-700 font-semibold mb-2">Need Urgent Repair?</h4>
              <p className="text-red-600 text-sm">
                Call us during business hours for same-day service on most repairs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h3>
          
          {/* Interactive Google Map */}
          <div className="w-full h-96 rounded-2xl overflow-hidden mb-6 shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=33-377%20Burnhamthorpe%20Rd%20E,%20Mississauga,%20ON,%20L5A%203Y1&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TouchTone Electronics Location"
              className="w-full h-full"
            />
          </div>

          {/* Location Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="text-red-700" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Easy to Find</h4>
              <p className="text-gray-600 text-sm">Located on Burnhamthorpe Road</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Navigation className="text-red-700" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Free Parking</h4>
              <p className="text-gray-600 text-sm">Ample parking space available</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="text-red-700" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Convenient Hours</h4>
              <p className="text-gray-600 text-sm">Open 7 days a week</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHours;
