 import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const discount = product.discountPrice 
        ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
        : 0;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart! 🌸`, {
            duration: 2000,
            style: { background: '#1A1A2E', color: '#F6DBC0' },
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="group relative bg-white dark:bg-dark-lighter rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
            {/* Discount Badge */}
            {discount > 0 && (
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-[#502D55] to-[#935073] text-white px-3 py-1 rounded-full text-xs font-bold">
                    -{discount}% OFF
                </div>
            )}

            {/* Occasion Badge */}
            <div className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-dark/90 px-2 py-1 rounded-full text-[10px] font-medium text-[#502D55] dark:text-[#F6DBC0] shadow-md">
                {product.occasion || product.category}
            </div>

            {/* Product Image */}
            <div className="overflow-hidden aspect-square bg-[#F8F4E9] dark:bg-dark">
                <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-2">
                <p className="text-xs text-[#935073] dark:text-[#D4AF37] font-medium uppercase tracking-wider">
                    {product.category} ✦ {product.occasion}
                </p>
                <h3 className="font-semibold text-[#502D55] dark:text-[#F6DBC0] text-sm sm:text-base line-clamp-1">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-display font-bold text-[#502D55] dark:text-[#D4AF37]">
                        ${product.discountPrice || product.price}
                    </span>
                    {product.discountPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.price}</span>
                    )}
                </div>

                {/* Colors */}
                {product.colors && (
                    <div className="flex gap-1">
                        {product.colors.map((color, i) => (
                            <span key={i} className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: color.toLowerCase() }} />
                        ))}
                    </div>
                )}

                {/* Add to Cart Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="w-full py-2.5 bg-gradient-to-r from-[#502D55] to-[#935073] text-white text-sm rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
