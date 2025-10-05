'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Clock, 
  Shield, 
  DollarSign, 
  Heart, 
  Target, 
  Users, 
  Zap,
  Smartphone,
  Laptop,
  Gamepad2,
  ShoppingBag,
  Phone,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';

const AboutPage = () => {
  const whyChooseUs = [
    {
      icon: Award,
      title: 'Expert Technicians',
      description: '15+ years of experience repairing all major electronics brands',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Same-day repairs available for most devices',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '90-day warranty on all repairs and services',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Fair Pricing',
      description: 'Competitive, transparent pricing with no hidden fees',
      color: 'from-red-500 to-red-600'
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent service you can trust'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Quality workmanship in every repair'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Latest techniques and technology'
    }
  ];

  const services = [
    {
      icon: Smartphone,
      title: 'Smartphone Repair',
      description: 'iPhone, Samsung, Google Pixel - all major brands'
    },
    {
      icon: Laptop,
      title: 'Computer Repair',
      description: 'Laptops, desktops, tablets - hardware & software'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Consoles',
      description: 'PlayStation, Xbox, Nintendo repairs'
    },
    {
      icon: ShoppingBag,
      title: 'Electronics Sales',
      description: 'New and refurbished devices available'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Devices Repaired' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24hr', label: 'Average Turnaround' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-[0.9]">
              <span className="block">Your Trusted</span>
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Electronics Partner
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              15+ years of expert service in Mississauga. Quality repairs, honest pricing, 
              and customer satisfaction guaranteed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, TouchTone Electronics has been Mississauga&apos;s trusted partner 
                  for electronics repair and sales. What started as a small repair shop has grown 
                  into a comprehensive electronics service center.
                </p>
                <p>
                  Our journey began with a simple mission: to provide fast, reliable, and affordable 
                  electronics repair services while maintaining the highest standards of quality.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full">
                  <CheckCircle2 className="text-red-600" size={24} />
                  <span className="font-semibold text-gray-900">Locally Owned</span>
                </div>
                <div className="flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full">
                  <CheckCircle2 className="text-red-600" size={24} />
                  <span className="font-semibold text-gray-900">Expert Service</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-3xl p-12 shadow-2xl">
                <img
                  src="/images/touchtone-store.jpg"
                  alt="TouchTone Electronics"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
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
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Visit our store or give us a call today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingBag size={20} />
                Visit Our Store
              </motion.a>
              
              <motion.a
                href={`tel:${COMPANY_INFO.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-900 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-950 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/20"
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

export default AboutPage;
