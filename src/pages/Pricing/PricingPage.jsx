import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Crown, Check, X, Mail, MapPin, Phone, Sparkles, 
    Flower2, ShoppingBag, Heart, Gift, Star, Clock,
    Shield, Truck, Leaf, Award, Sun, Moon
} from 'lucide-react';
import PageTransition from '../../components/common/PageTransition';
// ThemeToggle import hata diya
// import ThemeToggle from '../../components/common/ThemeToggle';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: 'Starter',
            price: isAnnual ? '2,800' : '3,500',
            icon: '🌱',
            features: [
                '1 bouquet per month',
                'Standard wrapping',
                'Free delivery (local)',
                'Email support',
                'Choose from 20+ designs',
            ],
            notFeatures: [
                'Premium flowers',
                'Custom designs',
                'Priority delivery',
                'Same-day delivery',
                'Free greeting card',
            ],
            buttonText: 'Get Started',
            popular: false,
            color: 'from-green-400 to-emerald-600',
        },
        {
            name: 'Premium',
            price: isAnnual ? '5,600' : '7,000',
            icon: '👑',
            features: [
                '3 bouquets per month',
                'Premium luxury wrapping',
                'Free express delivery',
                'Priority support 24/7',
                'Choose from 50+ designs',
                'Free greeting card',
                'Seasonal specials',
                'Custom color options',
            ],
            notFeatures: [
                'Same-day delivery',
            ],
            buttonText: 'Start Free Trial',
            popular: true,
            color: 'from-[#502D55] to-[#935073]',
        },
        {
            name: 'Enterprise',
            price: isAnnual ? '9,800' : '12,500',
            icon: '🏢',
            features: [
                'Unlimited bouquets',
                'Premium luxury wrapping',
                'Free express delivery',
                'Dedicated support',
                'Access to all 100+ designs',
                'Free greeting cards',
                'Seasonal specials',
                'Custom color options',
                'Corporate branding',
                'Same-day delivery',
                'Custom bouquet creation',
            ],
            notFeatures: [],
            buttonText: 'Contact Sales',
            popular: false,
            color: 'from-purple-500 to-indigo-700',
        },
    ];

    const faqs = [
        { 
            q: 'Can I change my plan later?', 
            a: 'Yes, you can upgrade, downgrade, or cancel your subscription anytime.' 
        },
        { 
            q: 'What flowers do you use?', 
            a: 'We source the freshest, highest quality flowers from sustainable farms worldwide.' 
        },
        { 
            q: 'Do you offer same-day delivery?', 
            a: 'Yes! Enterprise plan includes same-day delivery. Premium plans get express delivery within 24 hours.' 
        },
        { 
            q: 'Can I customize my bouquet?', 
            a: 'Absolutely! Premium and Enterprise plans include custom color and design options.' 
        },
        { 
            q: 'Is there a setup fee?', 
            a: 'No, there are no hidden fees or setup costs. What you see is what you pay.' 
        },
        { 
            q: 'What if I\'m not satisfied?', 
            a: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll make it right.' 
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
                                <span className="text-sm font-medium text-white">🌸 BloomBouquet Pricing</span>
                            </motion.div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-white font-bold">
                                Simple, Transparent <br />
                                <span className="text-[#F6DBC0]">Pricing Plans</span>
                            </h1>
                            <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
                                Choose the perfect flower subscription plan for every occasion. 
                                Upgrade or cancel anytime.
                            </p>

                            {/* ===== BILLING TOGGLE ===== */}
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-white/60'}`}>
                                    Monthly
                                </span>
                                <button
                                    onClick={() => setIsAnnual(!isAnnual)}
                                    className="relative w-14 h-8 bg-white/20 backdrop-blur-sm rounded-full p-1 transition-colors"
                                >
                                    <motion.div
                                        animate={{ x: isAnnual ? 24 : 0 }}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                                    >
                                        <span className="text-xs text-[#502D55]">💐</span>
                                    </motion.div>
                                </button>
                                <span className={`text-sm ${isAnnual ? 'text-white' : 'text-white/60'}`}>
                                    Annual
                                    <span className="ml-1 text-xs text-[#F6DBC0]">(Save 20%)</span>
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ===== PRICING CARDS ===== */}
                <section className="py-16 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {plans.map((plan, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className={`relative bg-white dark:bg-dark-lighter rounded-2xl p-6 sm:p-8 shadow-lg border transition-all ${
                                        plan.popular 
                                            ? 'border-[#D4AF37] shadow-2xl scale-105 ring-2 ring-[#D4AF37]/30' 
                                            : 'border-[#F6DBC0]/20 dark:border-primary-dark/20'
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#502D55] to-[#935073] text-white text-xs font-medium rounded-full flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="text-center">
                                        <span className="text-4xl">{plan.icon}</span>
                                        <h3 className="text-2xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold mt-2">
                                            {plan.name}
                                        </h3>
                                        <div className="mt-4">
                                            <span className="text-4xl font-display text-[#935073] dark:text-[#D4AF37] font-bold">
                                                Rs {plan.price}
                                            </span>
                                            <span className="text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                                /{isAnnual ? 'year' : 'month'}
                                            </span>
                                        </div>
                                        <p className="text-xs text-[#502D55]/50 dark:text-[#F6DBC0]/50 mt-1">
                                            {isAnnual ? 'Billed annually' : 'Billed monthly'}
                                        </p>
                                    </div>

                                    <ul className="mt-6 space-y-2.5">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm">
                                                <Check className="w-5 h-5 text-[#935073] dark:text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                                <span className="text-[#502D55] dark:text-[#F6DBC0]">{feature}</span>
                                            </li>
                                        ))}
                                        {plan.notFeatures.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-[#502D55]/40 dark:text-[#F6DBC0]/40">
                                                <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to={plan.popular ? '/signup' : plan.name === 'Enterprise' ? '/contact' : '/signup'}
                                        className={`block w-full mt-8 py-3 text-center rounded-xl font-medium transition-all ${
                                            plan.popular
                                                ? 'bg-gradient-to-r from-[#502D55] to-[#935073] text-white hover:shadow-xl'
                                                : 'border-2 border-[#935073]/30 text-[#935073] dark:text-[#D4AF37] hover:bg-[#935073]/5'
                                        }`}
                                    >
                                        {plan.buttonText}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FAQ SECTION ===== */}
                <section className="py-16 px-4 sm:px-6 bg-white dark:bg-dark-lighter">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                Frequently Asked Questions 🌸
                            </h2>
                            <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">
                                Everything you need to know about our flower subscription
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -3 }}
                                    className="bg-[#F8F4E9] dark:bg-dark rounded-xl p-6 border border-[#F6DBC0]/20 dark:border-primary-dark/20 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[#935073]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-sm">🌸</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#502D55] dark:text-[#D4AF37]">
                                                {faq.q}
                                            </h4>
                                            <p className="text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-1">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CTA SECTION ===== */}
                <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37]">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-display text-white font-bold">
                                Ready to Bloom? 🌸
                            </h2>
                            <p className="text-white/80 mt-4">
                                Start your flower journey today. First bouquet on us!
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center mt-8">
                                <Link to="/signup" className="px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow">
                                    Start Free Trial
                                </Link>
                                <Link to="/shop" className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-colors">
                                    Browse Bouquets
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
                    <Link to="/pricing" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">Pricing</Link>
                    <Link to="/contact" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">Contact</Link>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Theme Toggle - Simple version */}
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors">
                            <Sun className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
                        </button>
                    </div>
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

export default PricingPage;