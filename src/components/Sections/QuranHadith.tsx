import React from 'react';
import { motion } from 'framer-motion';

const QuranHadith: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#fdfcf9] overflow-hidden">
      {/* Background Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/islamic-art.png')` }} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header: Bismillah with Elegant Lines --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center justify-center gap-6 mb-20"
        >
          <div className="h-[1px] w-full max-w-[150px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="text-[#D4AF37] text-5xl md:text-6xl font-arabic tracking-widest px-4">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ </span>
          <div className="h-[1px] w-full max-w-[150px] bg-gradient-to-l from-transparent via-[#D4AF37] to-transparent" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
          
          {/* --- QURAN SECTION --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B8860B] font-bold">Divine Guidance</span>
              <h3 className="text-gray-400 text-sm mt-1 italic tracking-widest">According to the Holy Quran</h3>
            </div>

            <div className="bg-white border-[0.5px] border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(212,175,55,0.08)] rounded-[2rem] p-10 md:p-20 relative overflow-hidden group">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl text-[#D4AF37]">☪</span>
              </div>

              <div className="max-w-4xl mx-auto text-center">
                <p className="font-serif text-3xl md:text-5xl text-[#1a1a1a] leading-[1.8] mb-12" dir="rtl" style={{ fontFamily: "'Amiri', serif" }}>
                  يَخْرُجُ مِن بُطُونِهَا شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِّلنَّاسِ
                </p>
                
                <p className="text-xl md:text-2xl text-gray-700 font-urdu leading-relaxed mb-6" dir="rtl">
                  ان کے پیٹوں سے ایک مشروب نکلتا ہے جس کے مختلف رنگ ہیں، اس میں لوگوں کے لیے شفا ہے۔
                </p>
                
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 bg-[#D4AF37]/40" />
                  <span className="text-[#B8860B] font-semibold text-xs tracking-tighter uppercase">Surah An-Nahl: 69</span>
                  <div className="h-px w-8 bg-[#D4AF37]/40" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- HADITH SECTION --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto w-full"
          >
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B8860B] font-bold">Prophetic Medicine</span>
              <h3 className="text-gray-400 text-sm mt-1 italic tracking-widest uppercase">The Prophet Muhammad (ﷺ) Said</h3>
            </div>

            <div className="relative bg-gradient-to-b from-[#FAF7F0] to-white border-t-4 border-[#D4AF37] rounded-2xl p-8 md:p-12 shadow-lg text-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                 <span className="text-[#D4AF37] text-xl">✨</span>
              </div>

              <p className="text-2xl md:text-4xl text-[#2d2d2d] mb-8 leading-snug font-arabic" dir="rtl">
                عَلَيْكُم بِالشِّفَاءَيْنِ: الْعَسَلِ وَالْقُرْآنِ
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 mb-6 italic tracking-wide">
                "Take hold of the two cures: Honey and the Quran."
              </p>
              
              <p className="text-md text-gray-800 font-urdu mb-4" dir="rtl">
                "دو چیزوں کو لازم پکڑ لو: شہد اور قرآن"
              </p>

              <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[4px]">Sunan Ibn Majah</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default QuranHadith;