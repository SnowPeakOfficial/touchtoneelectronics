'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Mississauga, ON",
    rating: 5,
    text: "TouchTone Electronics fixed my iPhone screen in just 2 hours! The quality is perfect and the price was very reasonable. Highly recommend their services.",
    service: "Screen Repair"
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Toronto, ON",
    rating: 5,
    text: "Great experience setting up my Koodo plan. The staff was knowledgeable and helped me find the perfect plan for my needs. Very professional service.",
    service: "Koodo Setup"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Oakville, ON",
    rating: 5,
    text: "They repaired my laptop when other places said it couldn't be fixed. Amazing technical skills and honest pricing. Will definitely come back!",
    service: "Computer Repair"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Brampton, ON",
    rating: 5,
    text: "Excellent customer service and quick turnaround. They unlocked my phone and explained everything clearly. Very satisfied with the results.",
    service: "Phone Unlocking"
  }
];

const Testimonials = () => {
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
            <span className="block">Customer</span>
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our satisfied customers have to say about our repair services and customer experience.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-red-700 mb-2">5000+</div>
            <div className="text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={32} />
              ))}
            </div>
            <div className="text-gray-600 font-medium">5-Star Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-red-700 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years of Experience</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl group cursor-pointer relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <Quote className="text-red-600" size={20} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    <CheckCircle size={14} />
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Join Our Satisfied Customers
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the same quality service and customer satisfaction that has made us the trusted choice for electronics repair in Mississauga for over 15 years.
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Expert Technicians</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Fair Pricing</span>
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
                  Get Your Free Quote
                  <CheckCircle className="group-hover:scale-110 transition-transform duration-300" size={20} />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:border-red-300 hover:shadow-xl transition-all duration-300 justify-center"
              >
                Read More Reviews
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
