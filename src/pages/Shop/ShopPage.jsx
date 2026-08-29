import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Flower2, ShoppingBag, Search, Filter, X } from 'lucide-react';
import PageTransition from '../../components/common/PageTransition';
import ProductCard from '../../components/products/ProductCard';
import { products, categories, occasions } from '../../data/products';
import { Toaster } from 'react-hot-toast';

const ShopPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedOccasion, setSelectedOccasion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { items } = useSelector((state) => state.cart);

    const filteredProducts = products.filter(product => {
        const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchOccasion = selectedOccasion === 'all' || product.occasion === selectedOccasion;
        const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchCategory && matchOccasion && matchSearch && matchPrice;
    });

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
                <Toaster position="top-right" />
                
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
                                <Link to="/cart" className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors relative">
                                    <ShoppingBag className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
                                    {items.length > 0 && (
                                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#935073] text-white text-xs rounded-full flex items-center justify-center">
                                            {items.length}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Banner */}
                <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-3xl sm:text-5xl font-display text-white font-bold">
                                    🌸 Premium Bouquets
                                </h1>
                                <p className="text-white/80 mt-2 text-lg">Handcrafted with love for every occasion</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex gap-2 w-full md:w-auto"
                            >
                                <div className="relative flex-1 md:w-80">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                                    <input
                                        type="text"
                                        placeholder="Search bouquets..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                                    />
                                </div>
                                <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="md:hidden p-2.5 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                                    <Filter className="w-5 h-5" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Products */}
                <section className="py-8 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Filters */}
                            <div className="hidden md:block w-64 flex-shrink-0">
                                <div className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 sticky top-24">
                                    <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-4">Categories</h3>
                                    <div className="space-y-2">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                                                    selectedCategory === cat.id
                                                        ? 'bg-gradient-to-r from-[#502D55] to-[#935073] text-white'
                                                        : 'text-[#502D55] dark:text-[#F6DBC0] hover:bg-[#935073]/10'
                                                }`}
                                            >
                                                <span>{cat.icon}</span> {cat.name}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-[#F6DBC0]/20 dark:border-primary-dark/20">
                                        <h4 className="font-medium text-[#502D55] dark:text-[#D4AF37] mb-2">Occasion</h4>
                                        <div className="space-y-2">
                                            {occasions.map((occ) => (
                                                <button
                                                    key={occ.id}
                                                    onClick={() => setSelectedOccasion(occ.id)}
                                                    className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                                                        selectedOccasion === occ.id
                                                            ? 'bg-[#935073] text-white'
                                                            : 'text-[#502D55] dark:text-[#F6DBC0] hover:bg-[#935073]/10'
                                                    }`}
                                                >
                                                    {occ.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-[#F6DBC0]/20 dark:border-primary-dark/20">
                                        <h4 className="font-medium text-[#502D55] dark:text-[#D4AF37] mb-2">Price Range</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">${priceRange[0]}</span>
                                            <input type="range" min="0" max="200" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="flex-1 accent-[#935073]" />
                                            <span className="text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">${priceRange[1]}</span>
                                        </div>
                                    </div>

                                    <button onClick={() => { setSelectedCategory('all'); setSelectedOccasion('all'); setPriceRange([0, 200]); setSearchQuery(''); }} className="w-full mt-4 py-2 text-center text-sm text-[#935073] dark:text-[#D4AF37] border border-[#935073]/30 rounded-lg hover:bg-[#935073]/5 transition-colors">
                                        Reset Filters
                                    </button>
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="flex-1">
                                <p className="text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60 mb-6">
                                    Showing <span className="font-medium text-[#502D55] dark:text-[#D4AF37]">{filteredProducts.length}</span> beautiful bouquets
                                </p>
                                {filteredProducts.length === 0 ? (
                                    <div className="text-center py-20">
                                        <p className="text-4xl mb-4">🌸</p>
                                        <h3 className="text-xl font-display text-[#502D55] dark:text-[#D4AF37]">No bouquets found</h3>
                                        <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">Try adjusting your filters</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                        {filteredProducts.map((product) => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default ShopPage;