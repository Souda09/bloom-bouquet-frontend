import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Crown, Sparkles, Star, ArrowRight, 
    ShoppingBag, Truck, Shield, Headphones,
    ChevronLeft, ChevronRight, Play, Pause,
    Mail, MapPin, Phone, MessageCircle
} from 'lucide-react';
import { FaTwitter, FaInstagram, FaYoutube, FaGithub, FaFacebook } from 'react-icons/fa';
import PageTransition from './common/PageTransition';
import ThemeToggle from './common/ThemeToggle';

const LandingPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Auto Slider - 4 seconds
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 5000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 5000);
    };

    const slides = [
        {
            title: 'Welcome to LuxeAuth',
            subtitle: 'Premium Authentication System',
            description: 'Secure, elegant, and lightning-fast authentication for your next project.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
            color: 'from-[#502D55] to-[#935073]'
        },
        {
            title: 'Built for Developers',
            subtitle: 'Production Ready',
            description: 'Complete authentication with JWT, HTTP-only cookies, and RBAC.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
            color: 'from-[#935073] to-[#D4AF37]'
        },
        {
            title: 'Premium Design',
            subtitle: 'Dark & Light Mode',
            description: 'Beautiful UI with smooth animations and responsive design.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
            color: 'from-[#D4AF37] to-[#F6DBC0]'
        }
    ];

    const features = [
        { icon: Crown, title: 'Premium Access', desc: 'Exclusive features for premium users' },
        { icon: Shield, title: 'Secure Login', desc: 'JWT authentication with HTTP-only cookies' },
        { icon: ShoppingBag, title: 'E-Commerce Ready', desc: 'Built for production e-commerce apps' },
        { icon: Truck, title: 'Fast Delivery', desc: 'Lightning-fast authentication' },
        { icon: Headphones, title: '24/7 Support', desc: "We're here to help you" },
        { icon: Star, title: '5-Star Rating', desc: 'Loved by developers worldwide' },
    ];

    return (
        <PageTransition>
            <div className="min-h-screen bg-cream dark:bg-dark transition-colors duration-300">
                {/* ========== NAVBAR ========== */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-lighter/80 backdrop-blur-xl border-b border-accent-sand/20 dark:border-primary-dark/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <Link to="/" className="flex items-center gap-2">
                                <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary dark:text-accent-gold" />
                                <span className="text-lg sm:text-xl font-display text-primary-dark dark:text-accent-gold">
                                    LuxeAuth
                                </span>
                            </Link>
                            <div className="flex items-center gap-2 sm:gap-4">
                                <ThemeToggle />
                                <Link to="/login" className="text-sm sm:text-base text-primary-dark dark:text-accent-sand hover:text-secondary dark:hover:text-accent-gold transition-colors hidden sm:block">
                                    Sign In
                                </Link>
                                <Link to="/signup" className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-dark to-secondary text-white text-sm sm:text-base rounded-lg hover:shadow-lg transition-shadow">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* ========== HERO SLIDER ========== */}
                <div className="relative h-[calc(100vh-64px)] mt-16 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-secondary/70 to-accent-gold/60" />
                            
                            {/* Background Image */}
                            <img
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                            />
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="text-center max-w-4xl w-full"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: 'spring' }}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6"
                                    >
                                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent-gold" />
                                        <span className="text-xs sm:text-sm font-medium text-white">
                                            {slides[currentSlide].subtitle}
                                        </span>
                                    </motion.div>
                                    
                                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-white font-bold mb-3 sm:mb-6 leading-tight">
                                        {slides[currentSlide].title}
                                    </h1>
                                    <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                                        {slides[currentSlide].description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                                        <Link to="/signup" className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-primary-dark to-secondary rounded-lg text-white text-sm sm:text-base font-medium hover:shadow-xl transition-shadow">
                                            Get Started Free
                                        </Link>
                                        <button className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm sm:text-base font-medium border border-white/30 hover:bg-white/30 transition-colors">
                                            Learn More
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Slider Controls */}
                    <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex flex-wrap items-center justify-center gap-2 sm:gap-4 z-10 px-4">
                        <button
                            onClick={prevSlide}
                            className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </button>
                        
                        <div className="flex gap-1.5 sm:gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentSlide(index);
                                        setIsPlaying(false);
                                        setTimeout(() => setIsPlaying(true), 5000);
                                    }}
                                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                                        currentSlide === index 
                                            ? 'w-8 sm:w-12 bg-accent-gold' 
                                            : 'w-2 sm:w-3 bg-white/50 hover:bg-white/70'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        
                        <button
                            onClick={nextSlide}
                            className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </button>
                        
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors ml-1 sm:ml-4"
                            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                        >
                            {isPlaying ? (
                                <Pause className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                            ) : (
                                <Play className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                            )}
                        </button>
                    </div>

                    {/* Slide Counter */}
                    <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-white/60 text-xs sm:text-sm">
                        {currentSlide + 1} / {slides.length}
                    </div>
                </div>

                {/* ========== FEATURES SECTION ========== */}
                <section className="py-12 sm:py-20 px-4 sm:px-6 bg-cream dark:bg-dark transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-8 sm:mb-12"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-dark dark:text-accent-gold font-bold">
                                Premium Features
                            </h2>
                            <p className="text-sm sm:text-base text-primary-dark/60 dark:text-accent-sand/60 mt-2">
                                Everything you need for a secure authentication system
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white dark:bg-dark-lighter rounded-xl p-4 sm:p-6 shadow-lg border border-accent-sand/20 dark:border-primary-dark/20"
                                >
                                    <feature.icon className="w-8 h-8 sm:w-12 sm:h-12 text-secondary dark:text-accent-gold mb-3 sm:mb-4" />
                                    <h3 className="text-base sm:text-lg font-semibold text-primary-dark dark:text-accent-gold">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-primary-dark/60 dark:text-accent-sand/60 mt-1">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== CTA SECTION ========== */}
                <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-primary-dark via-secondary to-accent-gold">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold">
                                Ready to Get Started?
                            </h2>
                            <p className="text-white/80 mt-3 sm:mt-4 text-sm sm:text-base">
                                Join thousands of developers using LuxeAuth
                            </p>
                            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
                                <Link to="/signup" className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-primary-dark text-sm sm:text-base rounded-lg font-medium hover:shadow-xl transition-shadow">
                                    Create Account
                                </Link>
                                <Link to="/login" className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white/20 backdrop-blur-sm text-white text-sm sm:text-base rounded-lg font-medium border border-white/30 hover:bg-white/30 transition-colors">
                                    Sign In
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ========== COMPLETE FOOTER ========== */}
                <footer className="bg-primary-dark dark:bg-dark-lighter border-t border-accent-sand/20 dark:border-primary-dark/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                        {/* Footer Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            
                            {/* Column 1 - Brand */}
                            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <Crown className="w-6 h-6 text-accent-gold" />
                                    <span className="text-xl font-display text-accent-gold">LuxeAuth</span>
                                </div>
                                <p className="text-accent-sand/60 text-sm max-w-xs">
                                    Premium authentication system for modern web applications.
                                </p>
                                {/* Social Icons */}
                                <div className="flex gap-3 mt-4">
                                    <a href="#" className="text-accent-sand/40 hover:text-accent-gold transition-colors">
                                        <FaTwitter className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="text-accent-sand/40 hover:text-accent-gold transition-colors">
                                        <FaInstagram className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="text-accent-sand/40 hover:text-accent-gold transition-colors">
                                        <FaYoutube className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="text-accent-sand/40 hover:text-accent-gold transition-colors">
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="text-accent-sand/40 hover:text-accent-gold transition-colors">
                                        <FaFacebook className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Column 2 - Quick Links */}
                            <div>
                                <h4 className="text-accent-gold font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/" className="text-accent-sand/60 hover:text-accent-gold transition-colors">Home</Link></li>
                                    <li><Link to="/about" className="text-accent-sand/60 hover:text-accent-gold transition-colors">About</Link></li>
                                    <li><Link to="/features" className="text-accent-sand/60 hover:text-accent-gold transition-colors">Features</Link></li>
                                    <li><Link to="/pricing" className="text-accent-sand/60 hover:text-accent-gold transition-colors">Pricing</Link></li>
                                </ul>
                            </div>

                            {/* Column 3 - Support */}
                            <div>
                                <h4 className="text-accent-gold font-semibold mb-4 text-sm sm:text-base">Support</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/help" className="text-accent-sand/60 hover:text-accent-gold transition-colors">Help Center</Link></li>
                                    <li><Link to="/contact" className="text-accent-sand/60 hover:text-accent-gold transition-colors">Contact Us</Link></li>
                                    <li><Link to="/privacy" className="text-accent-sand/60 hover:text-accent-gold transition-colors">Privacy Policy</Link></li>
                                    <li><Link to="/terms" className="text-accent-sand/60 hover:text-accent-gold transition-colors">Terms of Service</Link></li>
                                </ul>
                            </div>

                            {/* Column 4 - Contact */}
                            <div>
                                <h4 className="text-accent-gold font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-3 text-accent-sand/60">
                                        <Mail className="w-4 h-4 mt-0.5 text-accent-gold flex-shrink-0" />
                                        <span>support@luxeauth.com</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-accent-sand/60">
                                        <Phone className="w-4 h-4 mt-0.5 text-accent-gold flex-shrink-0" />
                                        <span>+1 (555) 123-4567</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-accent-sand/60">
                                        <MapPin className="w-4 h-4 mt-0.5 text-accent-gold flex-shrink-0" />
                                        <span>123 Premium St, NYC</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="border-t border-accent-sand/10 dark:border-primary-dark/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-xs sm:text-sm text-accent-sand/40">
                                © 2024 LuxeAuth. All rights reserved.
                            </p>
                            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                                <Link to="/privacy" className="text-accent-sand/40 hover:text-accent-gold transition-colors">
                                    Privacy
                                </Link>
                                <Link to="/terms" className="text-accent-sand/40 hover:text-accent-gold transition-colors">
                                    Terms
                                </Link>
                                <Link to="/cookies" className="text-accent-sand/40 hover:text-accent-gold transition-colors">
                                    Cookies
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </PageTransition>
    );
};

export default LandingPage;