import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartSidebar from '@/components/Shared/CartSidebar';
import logo from '@/assets/logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = id === 'home' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleOrderNow = () => {
    setIsCartOpen(false);
    scrollToSection('contact');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ fontFamily: "'Quicksand', sans-serif" }} // Global clean font for nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10">
        <div className={`relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg sm:shadow-xl shadow-honey/5 border border-honey/10' 
            : 'bg-transparent'
        }`}>
          
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            <img src={logo} alt="Logo" className="h-12 md:h-14 w-auto" />
            {/* Agar aap text logo use karna chahen to ye font honey look dega */}
            {/* <span style={{ fontFamily: "'Satisfy', cursive" }} className="text-2xl text-honey-dark hidden lg:block">Pure Organic</span> */}
          </motion.div>

          {/* Desktop Nav - Rounded & Soft Font */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-[16px] font-bold tracking-wide text-gray-700 hover:text-honey-dark transition-all duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-honey rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCartClick}
              className="relative p-3 rounded-2xl bg-gradient-to-br from-honey to-orange-400 text-white shadow-lg shadow-honey/30 transition-all"
            >
              <ShoppingCart size={22} strokeWidth={2.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-honey-dark shadow-md border border-honey/20">
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-4 right-4 mt-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-honey/10 p-8 md:hidden text-center"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{ fontFamily: "'Satisfy', cursive" }}
                  className="text-3xl text-gray-800 hover:text-honey transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onOrderNow={handleOrderNow}
      />
    </motion.header>
  );
};

export default Header;