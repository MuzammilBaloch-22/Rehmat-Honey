import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderNow: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, onOrderNow }) => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, cartCount } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:max-w-sm md:max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-gradient-to-r from-honey/10 to-honey-dark/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-honey/20 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-honey-dark" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-text-primary">Your Cart</h2>
                  <p className="text-xs sm:text-sm text-text-secondary">{cartCount} items</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                  <p className="text-sm text-gray-500">Add some delicious honey to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-text-primary text-sm">{item.name}</h3>
                          <p className="text-honey-dark font-bold text-lg">
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3 bg-white rounded-lg p-1 border">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </motion.button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </motion.button>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
                        >
                          Remove
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
              {cartItems.length > 0 && (
              <div className="border-t border-gray-100 p-4 sm:p-6 bg-gray-50">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-base sm:text-lg font-semibold text-text-primary">Total:</span>
                  <span className="text-xl sm:text-2xl font-bold text-honey-dark">
                    Rs. {totalPrice.toLocaleString()}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOrderNow}
                  className="w-full bg-gradient-honey text-white font-bold py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 sm:gap-3 shadow-honey hover:shadow-lg transition-all duration-300"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;