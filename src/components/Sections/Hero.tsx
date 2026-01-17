import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import heroImage from '@/assets/hero-honey.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#FFFCF7] pt-20 sm:pt-24">
      
      {/* Dynamic Background Gradients - Mobile Optimized */}
      <div className="absolute top-[-5%] right-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-honey/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-orange-200/20 rounded-full blur-[60px] sm:blur-[100px]" />
      
      {/* Soft Honeycomb Overlay */}
      <div className="absolute inset-0 honeycomb-pattern opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Text Content - No Logo Here */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Elegant Top Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-honey/20 text-honey-dark font-bold text-sm mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-honey animate-ping" />
              <span className="font-['Quicksand'] tracking-wide">100% PURE & ORGANIC</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1] mb-6 font-['Quicksand']">
              Nature’s Liquid <br />
              <span className="text-honey tracking-tight relative inline-block mt-2">
                Gold
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full h-3" 
                  viewBox="0 0 300 10" 
                  fill="none"
                >
                  <path d="M1 8C50 2 150 2 299 8" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/>
                </motion.svg>
              </span>
              <span className="ml-4">Drops</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-['Quicksand'] mx-auto lg:mx-0">
              Directly from the lush beehives of Pakistan to your doorstep. Experience the raw, unfiltered essence of <span className="font-bold text-honey-dark underline decoration-honey/30">Rehmat Honey</span>.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('products')}
                className="px-10 py-4 bg-gradient-to-r from-honey to-orange-500 text-white rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl transition-all font-['Quicksand']"
              >
                Shop Collection <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.05)" }}
                onClick={() => scrollToSection('benefits')}
                className="px-10 py-4 border-2 border-honey/20 text-slate-800 rounded-2xl font-bold text-lg transition-all font-['Quicksand']"
              >
                Our Benefits
              </motion.button>
            </div>

            {/* Minimal Trust Indicators */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-10">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-slate-800">12K+</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Happy Souls</span>
              </div>
              <div className="w-[1px] h-10 bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-lg text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-bold text-slate-700 font-['Quicksand'] uppercase tracking-tighter">Purity Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Image Section - Floating and Styled */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            {/* Animated Ring Around Image */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[105%] h-[105%] border border-dashed border-honey/20 rounded-full pointer-events-none"
            />
            
            <div className="relative group">
              {/* Main Image with Modern Frame */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src={heroImage} 
                  alt="Premium Rehmat Honey Jar" 
                  className="w-full max-w-[520px] rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(183,121,31,0.2)] border-[12px] border-white transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </motion.div>

              {/* Minimalist Floating Card */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -right-4 md:-right-8 bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl z-20 border border-white/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex text-honey leading-none mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Top Rated Product</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;