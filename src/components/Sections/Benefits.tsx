import React from 'react';
import { motion } from 'framer-motion';
import { benefits } from '@/data/benefits';

const Benefits: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="benefits" className="section-padding bg-background relative overflow-hidden">
      {/* Honeycomb Background */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20" />

      <div className="container-honey relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Benefits of Honey
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Natural honey is packed with countless health benefits
          </p>
          <div className="w-24 h-1 bg-gradient-honey mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-honey text-center group"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-honey flex items-center justify-center shadow-honey group-hover:animate-pulse-glow transition-all duration-300">
                <benefit.icon className="w-10 h-10 text-dark-brown" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-base text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
