import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { ProductVariant } from '@/data/products';

interface ProductCardProps {
  product: ProductVariant;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });
    onAddToCart();
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity((q) => Math.min(q + 1, 10));
  const decrementQuantity = () => setQuantity((q) => Math.max(q - 1, 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-honey text-dark-brown px-3 py-1 rounded-full text-sm font-bold">
          {product.weight}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-text-primary text-left mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-text-secondary text-left mb-4">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-text-secondary">
            Price
          </span>
          <span className="text-2xl font-bold text-honey-dark">
            Rs. {product.price.toLocaleString()}
          </span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-4 bg-background rounded-xl p-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={decrementQuantity}
            className="w-10 h-10 rounded-lg bg-honey/20 flex items-center justify-center hover:bg-honey/40 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4 text-dark-brown" />
          </motion.button>
          <span className="text-xl font-bold text-text-primary">{quantity}</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={incrementQuantity}
            className="w-10 h-10 rounded-lg bg-honey/20 flex items-center justify-center hover:bg-honey/40 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4 text-dark-brown" />
          </motion.button>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="w-full bg-gradient-honey text-dark-brown font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-soft hover:shadow-honey transition-all duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
