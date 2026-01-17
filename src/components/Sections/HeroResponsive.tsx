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
      
      {/* Mobile-First Background Gradients */}
      <div className="absolute top-[-5%] right-[-10%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-honey/10 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-orange-200/20 rounded-full blur-[40px] sm:blur-[60px] lg:blur-[100px]" />
      
      {/* Honeycomb Pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-[0.02] sm:opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Mobile-First Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Mobile-Optimized Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm border border-honey/20 text-honey-dark font-bold text-xs sm:text-sm mb-6 sm:mb-8"
            >
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-honey animate-ping" />
              <span className="font-['Quicksand'] tracking-wide">100% PURE & ORGANIC</span>
            </motion.div>
            
            {/* Mobile-First Responsive Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.1] sm:leading-[1.05] lg:leading-[1] mb-4 sm:mb-6 font-['Quicksand']"
            >
              <span className="block sm:inline">Nature's</span>{' '}
              <span className="block sm:inline text-honey">Liquid</span>
              <br className="hidden sm:block" />
              <span className="text-honey tracking-tight relative inline-block mt-1 sm:mt-2">
                Gold
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1.5 sm:h-2 lg:h-3" 
                  viewBox="0 0 300 10" 
                  fill="none"
                >
                  <path d="M1 8C50 2 150 2 299 8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                </motion.svg>
              </span>
              <span className="block sm:inline sm:ml-2 lg:ml-4">Drops</span>
            </motion.h1>
            
            {/* Mobile-Optimized Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-lg lg:max-w-xl leading-relaxed font-['Quicksand'] mx-auto lg:mx-0 px-2 sm:px-0"
            >
              Directly from the lush beehives of Pakistan to your doorstep. Experience the raw, unfiltered essence of{' '}
              <span className="font-bold text-honey-dark underline decoration-honey/30">Rehmat Honey</span>.
            </motion.p>

            {/* Mobile-First CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center lg:justify-start px-2 sm:px-0"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('products')}
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-honey to-orange-500 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-lg sm:shadow-xl transition-all font-['Quicksand']"
              >
                Shop Collection <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.05)" }}
                onClick={() => scrollToSection('benefits')}
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-honey/20 text-slate-800 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all font-['Quicksand'] hover:border-honey/40"
              >
                Our Benefits
              </motion.button>
            </motion.div>

            {/* Mobile-Optimized Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-6 sm:mt-8 lg:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800">12K+</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Happy Souls</span>
              </div>
              <div className="hidden sm:block w-[1px] h-8 lg:h-10 bg-gray-200" />
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-green-50 rounded-lg text-green-600">
                  <ShieldCheck size={16} className="sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-700 font-['Quicksand'] uppercase tracking-tighter">Purity Certified</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile-First Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center order-1 lg:order-2 px-4 sm:px-6 lg:px-0"
          >
            {/* Mobile-Optimized Animated Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[105%] h-[105%] border border-dashed border-honey/15 sm:border-honey/20 rounded-full pointer-events-none"
            />
            
            <div className="relative group">
              {/* Mobile-First Responsive Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src={heroImage} 
                  alt="Premium Rehmat Honey Jar" 
                  className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[450px] xl:max-w-[520px] rounded-[1.2rem] sm:rounded-[1.8rem] lg:rounded-[2.5rem] shadow-[0_15px_30px_-8px_rgba(183,121,31,0.2)] sm:shadow-[0_25px_50px_-12px_rgba(183,121,31,0.2)] lg:shadow-[0_40px_80px_-15px_rgba(183,121,31,0.2)] border-[6px] sm:border-[8px] lg:border-[12px] border-white transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </motion.div>

              {/* Mobile-Optimized Floating Card */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-8 -right-1 sm:-right-2 lg:-right-4 xl:-right-8 bg-white/90 backdrop-blur-md p-3 sm:p-4 lg:p-6 rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[2rem] shadow-lg sm:shadow-xl lg:shadow-2xl z-20 border border-white/50"
              >
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <div className="flex -space-x-1.5 sm:-space-x-2 lg:-space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex text-honey leading-none mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" className="sm:w-3 sm:h-3 lg:w-4 lg:h-4" />)}
                    </div>
                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Top Rated</p>
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