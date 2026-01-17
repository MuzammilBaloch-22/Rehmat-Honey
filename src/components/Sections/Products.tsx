import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products, getAllVariants } from '@/data/products';
import ProductCard from '@/components/Shared/ProductCard';
import Toast, { useToast } from '@/components/Shared/Toast';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { toast, showToast, hideToast } = useToast();

  const categories = [
    { id: 'all', label: 'All Products' },
    ...products.map(p => ({ id: p.id, label: p.category })),
  ];

  const displayedProducts = activeCategory === 'all'
    ? getAllVariants()
    : products.find(p => p.id === activeCategory)?.variants || [];

  const handleAddToCart = () => {
    showToast('success', 'Added to cart!');
  };

  return (
    <section id="products" className="section-padding bg-gradient-cream relative">
      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      <div className="container-honey">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Selected pure natural honey from across Pakistan
          </p>
          <div className="w-24 h-1 bg-gradient-honey mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-honey text-dark-brown shadow-honey'
                  : 'bg-cream text-text-primary hover:bg-honey/20 border border-border'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
