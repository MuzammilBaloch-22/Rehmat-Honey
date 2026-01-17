import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />

      <div className="container-honey relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Experiences from our satisfied customers
          </p>
          <div className="w-24 h-1 bg-gradient-honey mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-honey relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-10 h-10 rounded-full bg-gradient-honey flex items-center justify-center shadow-honey">
                  <Quote className="w-5 h-5 text-dark-brown" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 justify-start">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-honey text-honey" />
                ))}
              </div>

              {/* Review */}
              <p className="text-lg text-text-primary leading-relaxed mb-6 text-left">
                {testimonial.review}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 justify-start border-t border-border pt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-honey flex items-center justify-center text-dark-brown font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
