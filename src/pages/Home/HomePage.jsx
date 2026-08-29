// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { Flower2, Crown, ShoppingBag, ArrowRight, Star } from 'lucide-react';
// // import PageTransition from '../../components/common/PageTransition';
// // import ThemeToggle from '../../components/common/ThemeToggle';
// // import { products } from '../../data/products';

// // const HomePage = () => {
// //     const featuredProducts = products.filter(p => p.isFeatured).slice(0, 6);

// //     return (
// //         <PageTransition>
// //             <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
// //                 {/* Navbar */}
// //                 <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-lighter/80 backdrop-blur-xl border-b border-[#F6DBC0]/20 dark:border-primary-dark/20">
// //                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //                         <div className="flex justify-between items-center h-16">
// //                             <Link to="/" className="flex items-center gap-2">
// //                                 <Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#935073] dark:text-[#D4AF37]" />
// //                                 <span className="text-lg sm:text-xl font-display text-[#502D55] dark:text-[#D4AF37]">BloomBouquet</span>
// //                             </Link>
// //                             <div className="flex items-center gap-4">
// //                                 <Link to="/" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Home</Link>
// //                                 <Link to="/shop" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Shop</Link>
// //                                 <ThemeToggle />
// //                                 <Link to="/cart" className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors relative">
// //                                     <ShoppingBag className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
// //                                 </Link>
// //                                 <Link to="/login" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Sign In</Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </nav>

// //                 {/* Hero Section - Bouquet Theme */}
// //                 <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37]">
// //                     <div className="max-w-7xl mx-auto">
// //                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //                             <motion.div
// //                                 initial={{ opacity: 0, x: -50 }}
// //                                 animate={{ opacity: 1, x: 0 }}
// //                                 transition={{ duration: 0.8 }}
// //                             >
// //                                 <motion.div
// //                                     initial={{ scale: 0 }}
// //                                     animate={{ scale: 1 }}
// //                                     transition={{ delay: 0.3, type: 'spring' }}
// //                                     className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
// //                                 >
// //                                     <span className="text-sm font-medium text-white">🌸 Fresh Flowers Daily</span>
// //                                 </motion.div>
// //                                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-white font-bold leading-tight">
// //                                     Premium Bouquets
// //                                     <br />
// //                                     <span className="text-[#F6DBC0]">For Every Occasion</span>
// //                                 </h1>
// //                                 <p className="text-white/80 text-lg mt-4 max-w-lg">
// //                                     Handcrafted with love using the freshest flowers. Perfect for weddings, birthdays, anniversaries, and more.
// //                                 </p>
// //                                 <div className="flex flex-wrap gap-4 mt-8">
// //                                     <Link to="/shop" className="px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow flex items-center gap-2">
// //                                         Shop Now <ArrowRight className="w-4 h-4" />
// //                                     </Link>
// //                                     <Link to="/about" className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-colors">
// //                                         Learn More
// //                                     </Link>
// //                                 </div>
// //                             </motion.div>
// //                             <motion.div
// //                                 initial={{ opacity: 0, x: 50 }}
// //                                 animate={{ opacity: 1, x: 0 }}
// //                                 transition={{ duration: 0.8 }}
// //                                 className="relative"
// //                             >
// //                                 <div className="relative rounded-2xl overflow-hidden shadow-2xl">
// //                                     <img 
// //                                         src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop" 
// //                                         alt="Beautiful Bouquet" 
// //                                         className="w-full h-[400px] object-cover"
// //                                     />
// //                                     <div className="absolute inset-0 bg-gradient-to-t from-[#502D55]/50 to-transparent" />
// //                                     <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
// //                                         <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
// //                                             🌸 Wedding Collection
// //                                         </span>
// //                                         <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
// //                                             ⭐ 4.9/5
// //                                         </span>
// //                                     </div>
// //                                 </div>
// //                             </motion.div>
// //                         </div>
// //                     </div>
// //                 </section>

// //                 {/* Featured Products */}
// //                 <section className="py-16 px-4 sm:px-6">
// //                     <div className="max-w-7xl mx-auto">
// //                         <motion.div
// //                             initial={{ opacity: 0, y: 30 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             transition={{ duration: 0.6 }}
// //                             viewport={{ once: true }}
// //                             className="text-center mb-12"
// //                         >
// //                             <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
// //                                 Featured Bouquets 🌸
// //                             </h2>
// //                             <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">
// //                                 Our most loved arrangements
// //                             </p>
// //                         </motion.div>

// //                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //                             {featuredProducts.map((product, index) => (
// //                                 <motion.div
// //                                     key={product.id}
// //                                     initial={{ opacity: 0, y: 30 }}
// //                                     whileInView={{ opacity: 1, y: 0 }}
// //                                     transition={{ delay: index * 0.1 }}
// //                                     viewport={{ once: true }}
// //                                     whileHover={{ y: -10 }}
// //                                     className="bg-white dark:bg-dark-lighter rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
// //                                 >
// //                                     <div className="aspect-square overflow-hidden">
// //                                         <img 
// //                                             src={product.image} 
// //                                             alt={product.name} 
// //                                             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
// //                                         />
// //                                     </div>
// //                                     <div className="p-4">
// //                                         <p className="text-xs text-[#935073] dark:text-[#D4AF37] font-medium uppercase tracking-wider">
// //                                             {product.category}
// //                                         </p>
// //                                         <h3 className="font-semibold text-[#502D55] dark:text-[#F6DBC0] mt-1">
// //                                             {product.name}
// //                                         </h3>
// //                                         <div className="flex items-center gap-1 mt-1">
// //                                             <div className="flex text-[#D4AF37]">
// //                                                 {[...Array(5)].map((_, i) => (
// //                                                     <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[#D4AF37]' : 'text-gray-300'}`} />
// //                                                 ))}
// //                                             </div>
// //                                             <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviews})</span>
// //                                         </div>
// //                                         <div className="flex items-center justify-between mt-3">
// //                                             <span className="text-xl font-display font-bold text-[#502D55] dark:text-[#D4AF37]">
// //                                                 ${product.discountPrice || product.price}
// //                                             </span>
// //                                             <Link 
// //                                                 to={`/shop`} 
// //                                                 className="text-sm text-[#935073] dark:text-[#D4AF37] hover:underline"
// //                                             >
// //                                                 View → 
// //                                             </Link>
// //                                         </div>
// //                                     </div>
// //                                 </motion.div>
// //                             ))}
// //                         </div>

// //                         <div className="text-center mt-10">
// //                             <Link to="/shop" className="px-8 py-3 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-xl font-medium hover:shadow-lg transition-shadow inline-flex items-center gap-2">
// //                                 View All Bouquets <ArrowRight className="w-4 h-4" />
// //                             </Link>
// //                         </div>
// //                     </div>
// //                 </section>

// //                 {/* CTA Section */}
// //                 <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37]">
// //                     <div className="max-w-4xl mx-auto text-center">
// //                         <motion.div
// //                             initial={{ opacity: 0, scale: 0.9 }}
// //                             whileInView={{ opacity: 1, scale: 1 }}
// //                             transition={{ duration: 0.6 }}
// //                             viewport={{ once: true }}
// //                         >
// //                             <h2 className="text-3xl font-display text-white font-bold">
// //                                 Ready to Order? 🌸
// //                             </h2>
// //                             <p className="text-white/80 mt-4">
// //                                 Get the perfect bouquet delivered to your doorstep
// //                             </p>
// //                             <Link to="/shop" className="inline-block mt-6 px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow">
// //                                 Start Shopping
// //                             </Link>
// //                         </motion.div>
// //                     </div>
// //                 </section>

// //                 {/* Footer */}
// //                 <footer className="bg-[#502D55] dark:bg-dark-lighter border-t border-[#F6DBC0]/20 dark:border-primary-dark/20">
// //                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
// //                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //                             <div className="col-span-1 sm:col-span-2 lg:col-span-1">
// //                                 <div className="flex items-center gap-2 mb-4">
// //                                     <Flower2 className="w-6 h-6 text-[#D4AF37]" />
// //                                     <span className="text-xl font-display text-[#D4AF37]">BloomBouquet</span>
// //                                 </div>
// //                                 <p className="text-[#F6DBC0]/60 text-sm max-w-xs">
// //                                     Premium handcrafted bouquets for every occasion. Made with love and care.
// //                                 </p>
// //                             </div>
// //                             <div>
// //                                 <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
// //                                 <ul className="space-y-2 text-sm">
// //                                     <li><Link to="/" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Home</Link></li>
// //                                     <li><Link to="/shop" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Shop</Link></li>
// //                                     <li><Link to="/about" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">About</Link></li>
// //                                     <li><Link to="/contact" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Contact</Link></li>
// //                                 </ul>
// //                             </div>
// //                             <div>
// //                                 <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Support</h4>
// //                                 <ul className="space-y-2 text-sm">
// //                                     <li><Link to="/help" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Help Center</Link></li>
// //                                     <li><Link to="/contact" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
// //                                     <li><Link to="/privacy" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
// //                                 </ul>
// //                             </div>
// //                             <div>
// //                                 <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Contact</h4>
// //                                 <ul className="space-y-3 text-sm">
// //                                     <li className="text-[#F6DBC0]/60">📧 support@bloombouquet.com</li>
// //                                     <li className="text-[#F6DBC0]/60">📞 +1 (555) 123-4567</li>
// //                                     <li className="text-[#F6DBC0]/60">📍 123 Flower St, NYC</li>
// //                                 </ul>
// //                             </div>
// //                         </div>
// //                         <div className="border-t border-[#F6DBC0]/10 mt-8 pt-6 text-center">
// //                             <p className="text-xs sm:text-sm text-[#F6DBC0]/40">
// //                                 © 2024 BloomBouquet. All rights reserved. 🌸
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </footer>
// //             </div>
// //         </PageTransition>
// //     );
// // };

// // export default HomePage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Flower2, Crown, ShoppingBag, ArrowRight, Star } from 'lucide-react';
// import PageTransition from '../../components/common/PageTransition';
// import ThemeToggle from '../../components/common/ThemeToggle';
// import { products } from '../../data/products';

// const HomePage = () => {
//     // Take first 3 featured products (or fallback to first 3)
//     const featuredProducts = products.filter(p => p.isFeatured).slice(0, 3);
//     const displayProducts = featuredProducts.length >= 3 ? featuredProducts : products.slice(0, 3);

//     // Floating animation variants – continuous loop
//     const floatVariants = {
//         initial: { y: 0 },
//         animate: (i) => ({
//             y: [0, -12, 0],
//             transition: {
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.3, // each card different delay
//             }
//         })
//     };

//     return (
//         <PageTransition>
//             <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
//                 {/* Navbar */}
//                 <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-lighter/80 backdrop-blur-xl border-b border-[#F6DBC0]/20 dark:border-primary-dark/20">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="flex justify-between items-center h-16">
//                             <Link to="/" className="flex items-center gap-2">
//                                 <Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#935073] dark:text-[#D4AF37]" />
//                                 <span className="text-lg sm:text-xl font-display text-[#502D55] dark:text-[#D4AF37]">BloomBouquet</span>
//                             </Link>
//                             <div className="flex items-center gap-4">
//                                 <Link to="/" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Home</Link>
//                                 <Link to="/shop" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Shop</Link>
//                                 <ThemeToggle />
//                                 <Link to="/cart" className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors relative">
//                                     <ShoppingBag className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
//                                 </Link>
//                                 <Link to="/login" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Sign In</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>

//                 {/* ===== HERO SECTION – LEFT TEXT + RIGHT 3 ANIMATED BOUQUET CARDS ===== */}
//                 <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37]">
//                     <div className="max-w-7xl mx-auto">
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                             {/* LEFT SIDE – TEXT */}
//                             <motion.div
//                                 initial={{ opacity: 0, x: -50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.8 }}
//                             >
//                                 <motion.div
//                                     initial={{ scale: 0 }}
//                                     animate={{ scale: 1 }}
//                                     transition={{ delay: 0.3, type: 'spring' }}
//                                     className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
//                                 >
//                                     <span className="text-sm font-medium text-white">🌸 Fresh Flowers Daily</span>
//                                 </motion.div>
//                                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-white font-bold leading-tight">
//                                     Premium Bouquets
//                                     <br />
//                                     <span className="text-[#F6DBC0]">For Every Occasion</span>
//                                 </h1>
//                                 <p className="text-white/80 text-lg mt-4 max-w-lg">
//                                     Handcrafted with love using the freshest flowers. Perfect for weddings, birthdays, anniversaries, and more.
//                                 </p>
//                                 <div className="flex flex-wrap gap-4 mt-8">
//                                     <Link to="/shop" className="px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow flex items-center gap-2">
//                                         Shop Now <ArrowRight className="w-4 h-4" />
//                                     </Link>
//                                     <Link to="/about" className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-colors">
//                                         Learn More
//                                     </Link>
//                                 </div>
//                             </motion.div>

//                             {/* RIGHT SIDE – 3 ANIMATED BOUQUET CARDS */}
//                             <div className="relative">
//                                 <motion.div
//                                     initial="initial"
//                                     animate="animate"
//                                     variants={{
//                                         initial: { opacity: 0 },
//                                         animate: {
//                                             opacity: 1,
//                                             transition: {
//                                                 staggerChildren: 0.15,
//                                                 delayChildren: 0.3,
//                                             },
//                                         },
//                                     }}
//                                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
//                                 >
//                                     {displayProducts.map((product, idx) => (
//                                         <motion.div
//                                             key={product.id}
//                                             custom={idx}
//                                             variants={{
//                                                 initial: { opacity: 0, y: 40 },
//                                                 animate: { 
//                                                     opacity: 1, 
//                                                     y: 0,
//                                                     transition: { duration: 0.6 }
//                                                 },
//                                             }}
//                                             whileHover={{ scale: 1.05 }}
//                                             className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20"
//                                         >
//                                             <Link to={`/shop`}>
//                                                 <div className="aspect-square overflow-hidden">
//                                                     <img
//                                                         src={product.image}
//                                                         alt={product.name}
//                                                         className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                                                     />
//                                                 </div>
//                                             </Link>
//                                             <div className="p-3">
//                                                 <p className="text-xs text-[#F6DBC0] font-medium uppercase tracking-wider">
//                                                     {product.category}
//                                                 </p>
//                                                 <h3 className="font-semibold text-white text-sm mt-1 line-clamp-1">
//                                                     {product.name}
//                                                 </h3>
//                                                 <div className="flex items-center gap-1 mt-1">
//                                                     <div className="flex text-[#F6DBC0]">
//                                                         {[...Array(5)].map((_, i) => (
//                                                             <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[#F6DBC0]' : 'text-white/30'}`} />
//                                                         ))}
//                                                     </div>
//                                                     <span className="text-xs text-white/60">({product.reviews})</span>
//                                                 </div>
//                                                 <div className="flex items-center justify-between mt-2">
//                                                     <span className="text-lg font-display font-bold text-white">
//                                                         Rs {product.discountPrice || product.price}
//                                                     </span>
//                                                     <Link
//                                                         to={`/shop`}
//                                                         className="text-xs text-[#F6DBC0] hover:underline"
//                                                     >
//                                                         View →
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </motion.div>
//                                     ))}
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* ===== FEATURED PRODUCTS (rest of page) ===== */}
//                 <section className="py-16 px-4 sm:px-6 bg-[#F8F4E9] dark:bg-[#1A1A2E]">
//                     <div className="max-w-7xl mx-auto">
//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="text-center mb-12"
//                         >
//                             <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
//                                 Featured Bouquets 🌸
//                             </h2>
//                             <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">
//                                 Our most loved arrangements
//                             </p>
//                         </motion.div>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {products.filter(p => p.isFeatured).slice(0, 6).map((product, index) => (
//                                 <motion.div
//                                     key={product.id}
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                     whileHover={{ y: -10 }}
//                                     className="bg-white dark:bg-dark-lighter rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//                                 >
//                                     <div className="aspect-square overflow-hidden">
//                                         <img 
//                                             src={product.image} 
//                                             alt={product.name} 
//                                             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                                         />
//                                     </div>
//                                     <div className="p-4">
//                                         <p className="text-xs text-[#935073] dark:text-[#D4AF37] font-medium uppercase tracking-wider">
//                                             {product.category}
//                                         </p>
//                                         <h3 className="font-semibold text-[#502D55] dark:text-[#F6DBC0] mt-1">
//                                             {product.name}
//                                         </h3>
//                                         <div className="flex items-center gap-1 mt-1">
//                                             <div className="flex text-[#D4AF37]">
//                                                 {[...Array(5)].map((_, i) => (
//                                                     <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[#D4AF37]' : 'text-gray-300'}`} />
//                                                 ))}
//                                             </div>
//                                             <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviews})</span>
//                                         </div>
//                                         <div className="flex items-center justify-between mt-3">
//                                             <span className="text-xl font-display font-bold text-[#502D55] dark:text-[#D4AF37]">
//                                                 Rs {product.discountPrice || product.price}
//                                             </span>
//                                             <Link 
//                                                 to={`/shop`} 
//                                                 className="text-sm text-[#935073] dark:text-[#D4AF37] hover:underline"
//                                             >
//                                                 View →
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>

//                         <div className="text-center mt-10">
//                             <Link to="/shop" className="px-8 py-3 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-xl font-medium hover:shadow-lg transition-shadow inline-flex items-center gap-2">
//                                 View All Bouquets <ArrowRight className="w-4 h-4" />
//                             </Link>
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37]">
//                     <div className="max-w-4xl mx-auto text-center">
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="text-3xl font-display text-white font-bold">
//                                 Ready to Order? 🌸
//                             </h2>
//                             <p className="text-white/80 mt-4">
//                                 Get the perfect bouquet delivered to your doorstep
//                             </p>
//                             <Link to="/shop" className="inline-block mt-6 px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow">
//                                 Start Shopping
//                             </Link>
//                         </motion.div>
//                     </div>
//                 </section>

//                 {/* Footer */}
//                 <footer className="bg-[#502D55] dark:bg-dark-lighter border-t border-[#F6DBC0]/20 dark:border-primary-dark/20">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                             <div className="col-span-1 sm:col-span-2 lg:col-span-1">
//                                 <div className="flex items-center gap-2 mb-4">
//                                     <Flower2 className="w-6 h-6 text-[#D4AF37]" />
//                                     <span className="text-xl font-display text-[#D4AF37]">BloomBouquet</span>
//                                 </div>
//                                 <p className="text-[#F6DBC0]/60 text-sm max-w-xs">
//                                     Premium handcrafted bouquets for every occasion. Made with love and care.
//                                 </p>
//                             </div>
//                             <div>
//                                 <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
//                                 <ul className="space-y-2 text-sm">
//                                     <li><Link to="/" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Home</Link></li>
//                                     <li><Link to="/shop" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Shop</Link></li>
//                                     <li><Link to="/about" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">About</Link></li>
//                                     <li><Link to="/contact" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Contact</Link></li>
//                                 </ul>
//                             </div>
//                             <div>
//                                 <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Support</h4>
//                                 <ul className="space-y-2 text-sm">
//                                     <li><Link to="/help" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Help Center</Link></li>
//                                     <li><Link to="/contact" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
//                                     <li><Link to="/privacy" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
//                                 </ul>
//                             </div>
//                             <div>
//                                 <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Contact</h4>
//                                 <ul className="space-y-3 text-sm">
//                                     <li className="text-[#F6DBC0]/60">📧 support@bloombouquet.com</li>
//                                     <li className="text-[#F6DBC0]/60">📞 +1 (555) 123-4567</li>
//                                     <li className="text-[#F6DBC0]/60">📍 123 Flower St, NYC</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="border-t border-[#F6DBC0]/10 mt-8 pt-6 text-center">
//                             <p className="text-xs sm:text-sm text-[#F6DBC0]/40">
//                                 © 2024 BloomBouquet. All rights reserved. 🌸
//                             </p>
//                         </div>
//                     </div>
//                 </footer>
//             </div>
//         </PageTransition>
//     );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flower2, Crown, ShoppingBag, ArrowRight, Star, Sparkles } from 'lucide-react';
import PageTransition from '../../components/common/PageTransition';
import ThemeToggle from '../../components/common/ThemeToggle';
import { products } from '../../data/products';

// ---------- Helper: Animated Bouquet Card with Personality ----------
const AnimatedBouquetCard = ({ product, index, personality }) => {
  // personality: 'elegant', 'passionate', 'energetic'
  const getAnimations = () => {
    switch (personality) {
      case 'elegant':
        return {
          y: [0, -10, 0, -6, 0],
          rotate: [0, 3, -3, 2, 0],
          scale: [1, 1.02, 0.98, 1.01, 1],
          transition: { duration: 4, ease: 'easeInOut', repeat: Infinity },
        };
      case 'passionate':
        return {
          y: [0, -8, 0, -12, 0],
          rotate: [0, 5, -5, 8, 0],
          scale: [1, 1.04, 0.96, 1.02, 1],
          transition: { duration: 2.5, ease: 'easeInOut', repeat: Infinity },
        };
      case 'energetic':
        return {
          y: [0, -15, 0, -20, 0],
          rotate: [0, -4, 4, -6, 0],
          scale: [1, 1.06, 0.94, 1.04, 1],
          transition: { duration: 3, ease: 'easeInOut', repeat: Infinity },
        };
      default:
        return {};
    }
  };

  // Sparkle particles (petals/leaves) - floating dots around card
  const sparkles = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 100,
    y: (Math.random() - 0.5) * 100,
    size: 4 + Math.random() * 6,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div
      className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20"
      animate={getAnimations()}
      whileHover={{ scale: 1.08 }}
    >
      {/* Sparkles / Petals floating */}
      {sparkles.map((sp) => (
        <motion.div
          key={sp.id}
          className="absolute rounded-full bg-[#F6DBC0] opacity-50 pointer-events-none"
          style={{
            width: sp.size,
            height: sp.size,
            left: `calc(50% + ${sp.x}%)`,
            top: `calc(50% + ${sp.y}%)`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 80],
            y: [0, (Math.random() - 0.5) * 80],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: sp.duration,
            repeat: Infinity,
            delay: sp.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Ribbon / wrapping effect (a moving line) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(45deg, transparent 40%, rgba(255,215,0,0.15) 50%, transparent 60%)' }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Image */}
      <Link to={`/shop`}>
        <div className="aspect-square overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.05, 0.98, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-3 text-center relative z-10">
        <p className="text-xs text-[#F6DBC0] font-medium uppercase tracking-wider">{product.category}</p>
        <h3 className="font-semibold text-white text-sm mt-1 line-clamp-1">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mt-2">
          <div className="flex text-[#F6DBC0]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#F6DBC0]' : 'text-white/30'}`} />
            ))}
          </div>
          <span className="text-xs text-white/60">({product.reviews})</span>
        </div>
        {/* PRICE REMOVED as requested */}
      </div>
    </motion.div>
  );
};

// ---------- Main HomePage ----------
const HomePage = () => {
  // Select 3 products for the hero (Wedding, Love, Seasonal types as example)
  const heroProducts = [
    products.find(p => p.category === 'Wedding' && p.isFeatured),
    products.find(p => p.category === 'Love' && p.isFeatured),
    products.find(p => p.category === 'Seasonal' && p.isFeatured),
  ].filter(Boolean);

  // Fallback if not enough featured
  const displayProducts = heroProducts.length === 3
    ? heroProducts
    : products.filter(p => p.isFeatured).slice(0, 3);

  // Personalities for each card
  const personalities = ['elegant', 'passionate', 'energetic'];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-lighter/80 backdrop-blur-xl border-b border-[#F6DBC0]/20 dark:border-primary-dark/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center gap-2">
                <Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#935073] dark:text-[#D4AF37]" />
                <span className="text-lg sm:text-xl font-display text-[#502D55] dark:text-[#D4AF37]">BloomBouquet</span>
              </Link>
              <div className="flex items-center gap-4">
                <Link to="/" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Home</Link>
                <Link to="/shop" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Shop</Link>
                <ThemeToggle />
                <Link to="/cart" className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors relative">
                  <ShoppingBag className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
                </Link>
                <Link to="/login" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Sign In</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section – Left text + Right animated cards */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                >
                  <span className="text-sm font-medium text-white">🌸 Fresh Flowers Daily</span>
                </motion.div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-white font-bold leading-tight">
                  Premium Bouquets
                  <br />
                  <span className="text-[#F6DBC0]">For Every Occasion</span>
                </h1>
                <p className="text-white/80 text-lg mt-4 max-w-lg">
                  Handcrafted with love using the freshest flowers. Perfect for weddings, birthdays, anniversaries, and more.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to="/shop" className="px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow flex items-center gap-2">
                    Shop Now <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/about" className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-colors">
                    Learn More
                  </Link>
                </div>
              </motion.div>

              {/* Right – 3 Animated Cards with Personalities */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {displayProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                  >
                    <AnimatedBouquetCard
                      product={product}
                      index={idx}
                      personality={personalities[idx % personalities.length]}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the page – Featured Products, CTA, Footer (same as before) */}
        <section className="py-16 px-4 sm:px-6 bg-[#F8F4E9] dark:bg-[#1A1A2E]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                Featured Bouquets 🌸
              </h2>
              <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">
                Our most loved arrangements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.isFeatured).slice(0, 6).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-dark-lighter rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#935073] dark:text-[#D4AF37] font-medium uppercase tracking-wider">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-[#502D55] dark:text-[#F6DBC0] mt-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[#D4AF37]' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xl font-display font-bold text-[#502D55] dark:text-[#D4AF37]">
                        Rs {product.discountPrice || product.price}
                      </span>
                      <Link
                        to={`/shop`}
                        className="text-sm text-[#935073] dark:text-[#D4AF37] hover:underline"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/shop" className="px-8 py-3 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-xl font-medium hover:shadow-lg transition-shadow inline-flex items-center gap-2">
                View All Bouquets <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display text-white font-bold">
                Ready to Order? 🌸
              </h2>
              <p className="text-white/80 mt-4">
                Get the perfect bouquet delivered to your doorstep
              </p>
              <Link to="/shop" className="inline-block mt-6 px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow">
                Start Shopping
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#502D55] dark:bg-dark-lighter border-t border-[#F6DBC0]/20 dark:border-primary-dark/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <Flower2 className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-xl font-display text-[#D4AF37]">BloomBouquet</span>
                </div>
                <p className="text-[#F6DBC0]/60 text-sm max-w-xs">
                  Premium handcrafted bouquets for every occasion. Made with love and care.
                </p>
              </div>
              <div>
                <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Home</Link></li>
                  <li><Link to="/shop" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Shop</Link></li>
                  <li><Link to="/about" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">About</Link></li>
                  <li><Link to="/contact" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/help" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Help Center</Link></li>
                  <li><Link to="/contact" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
                  <li><Link to="/privacy" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                <ul className="space-y-3 text-sm">
                  <li className="text-[#F6DBC0]/60">📧 support@bloombouquet.com</li>
                  <li className="text-[#F6DBC0]/60">📞 +1 (555) 123-4567</li>
                  <li className="text-[#F6DBC0]/60">📍 123 Flower St, NYC</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#F6DBC0]/10 mt-8 pt-6 text-center">
              <p className="text-xs sm:text-sm text-[#F6DBC0]/40">
                © 2024 BloomBouquet. All rights reserved. 🌸
              </p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default HomePage;