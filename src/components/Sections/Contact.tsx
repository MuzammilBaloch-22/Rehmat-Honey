import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Toast, { useToast } from '@/components/Shared/Toast';

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
}

const Contact: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { toast, showToast, hideToast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (phone: string) => {
    return /^(\+92|0)?[0-9]{10,11}$/.test(phone.replace(/\s/g, ''));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(
        'success',
        'Your order has been received. We will contact you via email within one hour'
      );
      clearCart();
      setFormData({ name: '', phone: '', email: '', address: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-cream relative">
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
            Place Your Order
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Enter your details and we will contact you
          </p>
          <div className="w-24 h-1 bg-gradient-honey mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-honey">
              <h3 className="text-2xl font-bold text-text-primary mb-6 text-left flex items-center justify-start gap-3">
                <ShoppingCart className="w-6 h-6 text-honey-dark" />
                <span>Your Order</span>
              </h3>

              {cartItems.length === 0 ? (
                <p className="text-text-secondary text-center py-8">
                  Cart is empty. Add products to cart
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between border-b border-border pb-4">
                        <div className="text-left">
                          <p className="text-text-primary">{item.name}</p>
                          <p className="text-sm text-text-secondary">x{item.quantity}</p>
                        </div>
                        <span className="text-text-primary font-medium">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-honey">
                    <span className="text-lg font-bold text-text-primary">
                      Total Amount
                    </span>
                    <span className="text-2xl font-bold text-honey-dark">
                      Rs. {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="card-honey mt-6">
              <h3 className="text-xl font-bold text-text-primary mb-4 text-left">
                Contact Information
              </h3>
              <div className="space-y-3">
                <a href="tel:+923001234567" className="flex items-center justify-start gap-3 text-text-secondary hover:text-honey-dark transition-colors">
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+92 300 123 4567</span>
                </a>
                <a href="mailto:info@rehmatshahad.pk" className="flex items-center justify-start gap-3 text-text-secondary hover:text-honey-dark transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@rehmatshahad.pk</span>
                </a>
                <div className="flex items-center justify-start gap-3 text-text-secondary">
                  <MapPin className="w-5 h-5" />
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card-honey">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-lg text-text-primary mb-2 text-left">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-background text-left transition-colors focus:outline-none focus:border-honey ${
                      errors.name ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="Enter your name"
                    dir="ltr"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1 text-left">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-lg text-text-primary mb-2 text-left">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-background transition-colors focus:outline-none focus:border-honey ${
                      errors.phone ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="03XX XXXXXXX"
                    dir="ltr"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1 text-left">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-lg text-text-primary mb-2 text-left">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-background transition-colors focus:outline-none focus:border-honey ${
                      errors.email ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1 text-left">{errors.email}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-lg text-text-primary mb-2 text-left">
                    Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-background text-left resize-none transition-colors focus:outline-none focus:border-honey ${
                      errors.address ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="Enter your complete address"
                    dir="ltr"
                  />
                  {errors.address && (
                    <p className="text-sm text-destructive mt-1 text-left">{errors.address}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-honey text-dark-brown font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-3 shadow-honey hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-dark-brown border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Order
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
