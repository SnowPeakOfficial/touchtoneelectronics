'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ritika Taneja",
    rating: 5,
    text: "I had a great experience with the customer service at TouchTone. The owner was friendly, attentive, and went out of their way to help me find exactly what I needed. It's refreshing to be treated with such professionalism and care. I'll definitely be coming back—highly recommend!",
    service: "Screen Repair"
  },
  {
    id: 2,
    name: "Munigala Laxman",
    rating: 5,
    text: "Excellent service! Got my phone repaired quickly and professionally—feels brand new. The staff was friendly and knowledgeable. Also picked up a stylish phone pouch; great quality and design. Prices are fair, and everything was handled with care. Highly recommend for anyone needing phone repairs or accessories. Will definitely return!",
    service: "Phone Repair"
  },
  {
    id: 3,
    name: "Sriram Medepalli",
    rating: 5,
    text: "I gave my phone for repair to Touchstone Electronics. The phone was fixed very fast. The service and the technician were very good. It was very fast reliable and reasonable. He does repairs for all electronic Items. I would be definitely going there for any future repairs.",
    service: "Phone Repair"
  },
  {
    id: 4,
    name: "Raj Singh",
    rating: 5,
    text: "Had to change my watch belt. Salim provided amazing service with quick turn around. Would definitely recommend this place.",
    service: "Watch Repair"
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
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl group cursor-pointer relative flex flex-col h-full"
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
              <p className="text-gray-700 leading-relaxed mb-6 text-lg flex-grow">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">Verified Customer</div>
                </div>
                <div className="flex-shrink-0">
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
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-red-800 hover:shadow-2xl hover:shadow-red-700/25"
              >
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  Get Your Free Quote
                  <CheckCircle className="group-hover:scale-110 transition-transform duration-300" size={20} />
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
