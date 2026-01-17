import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Shield, CreditCard } from 'lucide-react';

const deliveryFeatures = [
  {
    id: 'fast',
    icon: Clock,
    title: 'Fast Delivery',
    description: '24 hours in Karachi, 3-5 days across Pakistan',
  },
  {
    id: 'free',
    icon: Truck,
    title: 'Free Delivery',
    description: 'Free delivery on orders above Rs. 2000',
  },
  {
    id: 'secure',
    icon: Shield,
    title: 'Secure Packaging',
    description: 'Special packaging keeps honey safe during transport',
  },
  {
    id: 'cod',
    icon: CreditCard,
    title: 'Cash on Delivery',
    description: 'Pay when you receive your order',
  },
];

const Delivery: React.FC = () => {
  return (
    <section className="section-padding bg-dark-brown text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="honeycomb-pattern h-full w-full" />
      </div>

      <div className="container-honey relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-honey mb-4">
            Delivery Service
          </h2>
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
            Delivery service available across Pakistan
          </p>
          <div className="w-24 h-1 bg-gradient-honey mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliveryFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-honey/20 flex items-center justify-center">
                <feature.icon className="w-10 h-10 text-honey" />
              </div>
              <h3 className="text-xl font-bold text-honey mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-cream/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
