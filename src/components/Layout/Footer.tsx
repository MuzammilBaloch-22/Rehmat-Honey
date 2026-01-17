import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-honey via-honey-dark to-[#B8860B] text-white pt-20 pb-10 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Identity Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6 text-center sm:text-left"
          >
            <img
              src={logo}
              alt="Rehmat Honey"
              className="h-12 sm:h-14 lg:h-16 w-auto brightness-125 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] mx-auto sm:mx-0"
            />
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-serif font-semibold text-white drop-shadow-md">
                Rehmat Honey
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-white/90 italic max-w-xs mx-auto sm:mx-0">
                "Nature's Gift, Health's Guarantee. Experience the purity of organic nectar delivered straight from the hives."
              </p>
            </div>
          </motion.div>

          {/* Quick Links (Optional but makes it look premium) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold uppercase tracking-widest text-white drop-shadow-sm">Shop</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Sidr Honey</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Wildflower Honey</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Organic Comb</li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold uppercase tracking-widest text-white drop-shadow-sm">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+923001234567" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-4 h-4 text-white group-hover:text-honey-dark" />
                </div>
                <span className="text-sm font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">+92 300 123 4567</span>
              </a>
              <a href="mailto:info@rehmatshahad.pk" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-4 h-4 text-white group-hover:text-honey-dark" />
                </div>
                <span className="text-sm font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">info@rehmatshahad.pk</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium tracking-wide text-white/90">Karachi, Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Social Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold uppercase tracking-widest text-white drop-shadow-sm">Follow Our Journey</h3>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white hover:text-honey-dark transition-all duration-500 text-white shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-[2px] uppercase text-white/80">
            © {currentYear} Rehmat Honey. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-white/70">
            <span>Designed & Developed by</span>
            <span className="text-white font-bold hover:tracking-[3px] hover:text-cream transition-all duration-500 cursor-default drop-shadow-sm">
              Muzammil Ahmed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;