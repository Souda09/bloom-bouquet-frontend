import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Crown, Send, CheckCircle, Flower2, MessageCircle, Clock, Sparkles, ShoppingBag } from 'lucide-react';
import PageTransition from '../../components/common/PageTransition';
import ThemeToggle from '../../components/common/ThemeToggle';
import Swal from 'sweetalert2';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        occasion: 'General',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent! 🌸',
                text: 'We will get back to you within 24 hours. Thank you for reaching out!',
                timer: 3000,
                showConfirmButton: false,
                background: '#1A1A2E',
                color: '#F6DBC0',
            });
            setFormData({ 
                name: '', 
                email: '', 
                phone: '',
                subject: '', 
                message: '',
                occasion: 'General'
            });
            setTimeout(() => setSuccess(false), 3000);
        }, 2000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: Mail, title: 'Email', value: 'support@bloombouquet.com', link: 'mailto:support@bloombouquet.com' },
        { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
        { icon: MapPin, title: 'Address', value: '123 Flower Street, New York, NY 10001', link: '#' },
        { icon: Clock, title: 'Working Hours', value: 'Mon-Fri: 9AM - 8PM | Sat: 10AM - 6PM', link: '#' },
    ];

    const occasions = ['Wedding', 'Birthday', 'Anniversary', 'Love', 'Sympathy', 'Premium', 'Seasonal', 'Graduation', 'General'];

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
                <Navbar />

                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37] overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 text-6xl">🌷</div>
                        <div className="absolute bottom-10 right-10 text-6xl">🌸</div>
                        <div className="absolute top-1/3 left-1/4 text-5xl">💐</div>
                        <div className="absolute bottom-1/3 right-1/4 text-5xl">🌺</div>
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
                                <MessageCircle className="w-5 h-5 text-[#F6DBC0]" />
                                <span className="text-sm font-medium text-white">🌹 Get in Touch</span>
                            </motion.div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-white font-bold">
                                Let's Talk Flowers 🌸
                            </h1>
                            <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
                                Have questions about our bouquets? Need a custom arrangement? 
                                We'd love to hear from you!
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ===== CONTACT SECTION ===== */}
                <section className="py-16 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* ===== LEFT: CONTACT INFO ===== */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-4 flex items-center gap-2">
                                    <Flower2 className="w-8 h-8 text-[#D4AF37]" />
                                    Get in Touch
                                </h2>
                                <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mb-8 leading-relaxed">
                                    Whether you're planning a wedding, celebrating a birthday, 
                                    or just want to brighten someone's day – we're here to help 
                                    you find the perfect bouquet.
                                </p>
                                <div className="space-y-4">
                                    {contactInfo.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.link}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-4 p-4 bg-white dark:bg-dark-lighter rounded-xl shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 hover:shadow-xl transition-shadow hover:border-[#D4AF37]/30"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#502D55] to-[#935073] flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">
                                                    {item.title}
                                                </p>
                                                <p className="text-[#502D55] dark:text-[#D4AF37] font-medium">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Quick Links */}
                                <div className="mt-8 p-4 bg-white dark:bg-dark-lighter rounded-xl shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20">
                                    <h4 className="text-sm font-semibold text-[#502D55] dark:text-[#D4AF37] mb-3">Quick Help</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Link to="/faq" className="text-xs px-3 py-1 bg-[#935073]/10 text-[#935073] dark:text-[#D4AF37] rounded-full hover:bg-[#935073]/20 transition-colors">
                                            FAQ
                                        </Link>
                                        <Link to="/orders" className="text-xs px-3 py-1 bg-[#935073]/10 text-[#935073] dark:text-[#D4AF37] rounded-full hover:bg-[#935073]/20 transition-colors">
                                            Track Order
                                        </Link>
                                        <Link to="/delivery" className="text-xs px-3 py-1 bg-[#935073]/10 text-[#935073] dark:text-[#D4AF37] rounded-full hover:bg-[#935073]/20 transition-colors">
                                            Delivery Info
                                        </Link>
                                        <Link to="/returns" className="text-xs px-3 py-1 bg-[#935073]/10 text-[#935073] dark:text-[#D4AF37] rounded-full hover:bg-[#935073]/20 transition-colors">
                                            Returns
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            {/* ===== RIGHT: CONTACT FORM ===== */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-dark-lighter rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#F6DBC0]/20 dark:border-primary-dark/20"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#502D55] to-[#935073] flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                        Send a Message
                                    </h3>
                                </div>
                                <p className="text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60 mb-6">
                                    Fill in the form below and we'll get back to you as soon as possible.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 transition-all outline-none dark:text-[#F6DBC0]"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 transition-all outline-none dark:text-[#F6DBC0]"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 transition-all outline-none dark:text-[#F6DBC0]"
                                                placeholder="+92 300 1234567"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">
                                            Occasion
                                        </label>
                                        <select
                                            name="occasion"
                                            value={formData.occasion}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 transition-all outline-none dark:text-[#F6DBC0]"
                                        >
                                            {occasions.map((occ) => (
                                                <option key={occ} value={occ}>{occ}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 transition-all outline-none dark:text-[#F6DBC0]"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 transition-all outline-none dark:text-[#F6DBC0] resize-none"
                                            placeholder="Tell us about your flower needs..."
                                        />
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3.5 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37] text-white rounded-xl font-medium hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : success ? (
                                            <>
                                                <CheckCircle className="w-5 h-5" />
                                                Message Sent! 🌸
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </motion.div>
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
                                Need a Custom Bouquet? 🌸
                            </h2>
                            <p className="text-white/80 mt-4">
                                Tell us your vision and we'll create something special just for you.
                            </p>
                            <Link to="/shop" className="inline-block mt-6 px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow">
                                Explore Our Collection
                            </Link>
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

export default ContactPage;