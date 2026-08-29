import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Flower2, Crown, Shield, Zap, Users, Lock, Sparkles, 
    Mail, MapPin, Phone, ShoppingBag, Truck, Headphones, Star,
    Cloud, Database, Server, Globe, Heart, Gift, Leaf, Award,
    Clock, CheckCircle, Palette, Layers
} from 'lucide-react';
import PageTransition from '../../components/common/PageTransition';
import ThemeToggle from '../../components/common/ThemeToggle';

const FeaturesPage = () => {
    const features = [
        { 
            icon: Flower2, 
            title: 'Fresh Flowers Daily', 
            desc: 'We source the freshest flowers every morning from sustainable farms.', 
            color: 'from-pink-500 to-rose-600',
            emoji: '🌸'
        },
        { 
            icon: Crown, 
            title: 'Premium Quality', 
            desc: 'Every bouquet is crafted with the finest flowers and premium materials.', 
            color: 'from-[#502D55] to-[#935073]',
            emoji: '👑'
        },
        { 
            icon: Zap, 
            title: 'Same Day Delivery', 
            desc: 'Fast and reliable delivery right to your doorstep within hours.', 
            color: 'from-yellow-400 to-orange-500',
            emoji: '⚡'
        },
        { 
            icon: Heart, 
            title: 'Handcrafted with Love', 
            desc: 'Each bouquet is carefully arranged by our expert florists.', 
            color: 'from-red-500 to-pink-600',
            emoji: '❤️'
        },
        { 
            icon: Palette, 
            title: 'Unique Designs', 
            desc: 'Every bouquet is a unique work of art, never mass-produced.', 
            color: 'from-purple-500 to-indigo-600',
            emoji: '🎨'
        },
        { 
            icon: Gift, 
            title: 'Personalized Gifts', 
            desc: 'Add custom messages, ribbons, and add-ons to make it special.', 
            color: 'from-green-500 to-emerald-600',
            emoji: '🎁'
        },
        { 
            icon: Shield, 
            title: '100% Satisfaction', 
            desc: 'Your happiness is our priority. We guarantee fresh flowers.', 
            color: 'from-blue-500 to-indigo-600',
            emoji: '🛡️'
        },
        { 
            icon: Headphones, 
            title: '24/7 Customer Support', 
            desc: 'We\'re always here to help with any questions or concerns.', 
            color: 'from-[#935073] to-[#D4AF37]',
            emoji: '🎧'
        },
        { 
            icon: Award, 
            title: 'Expert Florists', 
            desc: 'Our team has years of experience in floral design.', 
            color: 'from-[#D4AF37] to-[#F6DBC0]',
            emoji: '🏆'
        },
        { 
            icon: Clock, 
            title: 'Timely Deliveries', 
            desc: 'We respect your time and always deliver on schedule.', 
            color: 'from-teal-500 to-cyan-600',
            emoji: '⏰'
        },
        { 
            icon: Sparkles, 
            title: 'Seasonal Collections', 
            desc: 'Fresh seasonal flowers that change with the seasons.', 
            color: 'from-[#502D55] to-[#D4AF37]',
            emoji: '✨'
        },
        { 
            icon: Globe, 
            title: 'Global Reach', 
            desc: 'Send flowers to loved ones anywhere in the world.', 
            color: 'from-blue-500 to-purple-600',
            emoji: '🌍'
        },
    ];

    const benefits = [
        { 
            icon: Truck, 
            title: 'Free Delivery', 
            desc: 'Free delivery on all orders over Rs 5000' 
        },
        { 
            icon: Star, 
            title: '4.9/5 Rating', 
            desc: 'Loved by thousands of happy customers' 
        },
        { 
            icon: Leaf, 
            title: 'Eco-Friendly', 
            desc: 'Sustainable sourcing and eco-friendly packaging' 
        },
        { 
            icon: CheckCircle, 
            title: 'Fresh Guarantee', 
            desc: '100% fresh flowers or your money back' 
        },
        { 
            icon: Users, 
            title: '10,000+ Happy Customers', 
            desc: 'Trusted by customers worldwide' 
        },
        { 
            icon: Layers, 
            title: 'Custom Bouquets', 
            desc: 'Tell us your vision and we\'ll create it' 
        },
    ];

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
                <Navbar />

                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37] overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 text-6xl">🌺</div>
                        <div className="absolute bottom-10 right-10 text-6xl">💐</div>
                        <div className="absolute top-1/3 left-1/4 text-5xl">🌷</div>
                        <div className="absolute bottom-1/3 right-1/4 text-5xl">🌻</div>
                    </div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: 'spring' }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                            >
                                <Sparkles className="w-5 h-5 text-[#F6DBC0]" />
                                <span className="text-sm font-medium text-white">🌸 Why Choose BloomBouquet</span>
                            </motion.div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-white font-bold">
                                Premium Flower <br />
                                <span className="text-[#F6DBC0]">Delivery Service</span>
                            </h1>
                            <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
                                Discover why thousands of customers trust us to deliver 
                                the freshest, most beautiful bouquets for every occasion.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ===== FEATURES GRID ===== */}
                <section className="py-16 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                What Makes Us Special 💐
                            </h2>
                            <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">
                                BloomBouquet features that set us apart
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white dark:bg-dark-lighter rounded-2xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 hover:shadow-2xl transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-xl flex-shrink-0`}>
                                            {feature.emoji}
                                        </div>
                                        <h3 className="text-base font-semibold text-[#502D55] dark:text-[#D4AF37] group-hover:text-[#935073] transition-colors">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== BENEFITS SECTION ===== */}
                <section className="py-16 px-4 sm:px-6 bg-white dark:bg-dark-lighter">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                Why Customers Love Us 🌹
                            </h2>
                            <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">
                                Benefits that make BloomBouquet the preferred choice
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="text-center p-4 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 hover:shadow-lg transition-shadow"
                                >
                                    <benefit.icon className="w-8 h-8 text-[#935073] dark:text-[#D4AF37] mx-auto mb-2" />
                                    <h4 className="text-sm font-semibold text-[#502D55] dark:text-[#D4AF37]">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-1">
                                        {benefit.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== STATS SECTION ===== */}
                <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { number: '10,000+', label: 'Bouquets Delivered', icon: ShoppingBag },
                                { number: '4.9/5', label: 'Customer Rating', icon: Star },
                                { number: '5,000+', label: 'Happy Customers', icon: Users },
                                { number: '99.8%', label: 'On-Time Delivery', icon: Clock },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center text-white"
                                >
                                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#F6DBC0]" />
                                    <h3 className="text-3xl sm:text-4xl font-display font-bold">
                                        {stat.number}
                                    </h3>
                                    <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CTA SECTION ===== */}
                <section className="py-16 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                Ready to Experience <br />
                                <span className="text-[#935073]">BloomBouquet?</span> 🌸
                            </h2>
                            <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-4 max-w-lg mx-auto">
                                Join thousands of happy customers who trust us for their flower needs.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center mt-8">
                                <Link to="/shop" className="px-8 py-3 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-xl font-medium hover:shadow-xl transition-shadow">
                                    Shop Now
                                </Link>
                                <Link to="/contact" className="px-8 py-3 bg-white dark:bg-dark-lighter text-[#502D55] dark:text-[#D4AF37] rounded-xl font-medium border border-[#F6DBC0]/20 dark:border-primary-dark/20 hover:shadow-xl transition-shadow">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ===== FOOTER ===== */}
                <Footer />
            </div>
        </PageTransition>
    );
};

// ========== NAVBAR ==========
const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-lighter/80 backdrop-blur-xl border-b border-[#F6DBC0]/20 dark:border-primary-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <Link to="/" className="flex items-center gap-2">
                    <Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#935073] dark:text-[#D4AF37]" />
                    <span className="text-lg sm:text-xl font-display text-[#502D55] dark:text-[#D4AF37]">BloomBouquet</span>
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">Home</Link>
                    <Link to="/shop" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">Shop</Link>
                    <Link to="/about" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">About</Link>
                    <Link to="/features" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">Features</Link>
                    <Link to="/contact" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">Contact</Link>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <ThemeToggle />
                    <Link to="/cart" className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors relative">
                        <ShoppingBag className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
                    </Link>
                    <Link to="/login" className="text-sm sm:text-base text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">
                        Sign In
                    </Link>
                    <Link to="/signup" className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#502D55] to-[#935073] text-white text-sm sm:text-base rounded-lg hover:shadow-lg transition-shadow">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    </nav>
);

// ========== FOOTER ==========
const Footer = () => (
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
                        <li><Link to="/terms" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3 text-[#F6DBC0]/60">
                            <Mail className="w-4 h-4 mt-0.5 text-[#D4AF37] flex-shrink-0" />
                            <span>support@bloombouquet.com</span>
                        </li>
                        <li className="flex items-start gap-3 text-[#F6DBC0]/60">
                            <Phone className="w-4 h-4 mt-0.5 text-[#D4AF37] flex-shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-start gap-3 text-[#F6DBC0]/60">
                            <MapPin className="w-4 h-4 mt-0.5 text-[#D4AF37] flex-shrink-0" />
                            <span>123 Flower St, NYC</span>
                        </li>
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
);

export default FeaturesPage;