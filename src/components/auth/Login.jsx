import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock, Crown, Flower2, Sparkles } from 'lucide-react';
import Swal from 'sweetalert2';
import PageTransition from '../common/PageTransition';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Get redirect path from location state
    const from = location.state?.from || '/dashboard';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields',
                text: 'Please fill in all required fields',
                background: '#1A1A2E',
                color: '#F6DBC0',
                confirmButtonColor: '#935073',
            });
            return;
        }

        setLoading(true);
        const result = await login(formData);
        setLoading(false);
        
        if (result.success) {
            // Check if user is admin
            const isAdmin = result.user?.role === 'Admin';
            
            // Success message with role-based greeting
            Swal.fire({
                icon: 'success',
                title: isAdmin ? 'Welcome Admin! 👑' : 'Welcome Back! 🌸',
                text: isAdmin ? 'You have full access to the admin panel.' : 'Your order is ready! Continue shopping.',
                timer: 2500,
                showConfirmButton: false,
                background: '#1A1A2E',
                color: '#F6DBC0',
            });
            
            // Redirect based on role and origin
            if (from === '/checkout') {
                navigate('/checkout');
            } else if (isAdmin) {
                navigate('/admin/dashboard');
            } else {
                navigate(from);
            }
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center bg-gradient-radial from-[#3D1F40] via-[#1A1A2E] to-[#502D55] px-4 relative overflow-hidden">
                {/* Animated Background Orbs */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#935073] to-[#D4AF37] opacity-20 blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F6DBC0] opacity-10 blur-3xl"
                />

                {/* Floating Flowers */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-20 left-10 text-[#D4AF37]/20"
                >
                    <Flower2 className="w-16 h-16" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-20 right-10 text-[#D4AF37]/20"
                >
                    <Sparkles className="w-12 h-12" />
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className="w-full max-w-md relative z-10"
                >
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-[#F6DBC0]/20">
                        {/* Logo Area */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            className="text-center mb-8"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F6DBC0] shadow-[0_0_40px_rgba(212,175,55,0.3)] mb-4">
                                <Crown className="w-10 h-10 text-[#502D55]" />
                            </div>
                            <h1 className="text-4xl font-display text-[#F6DBC0] font-bold">
                                Welcome Back
                            </h1>
                            <p className="text-[#F6DBC0]/60 mt-2">
                                {from === '/checkout' ? 'Complete your order 🌸' : 'Sign in to continue shopping 🌸'}
                            </p>
                            {from === '/checkout' && (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-[#935073]/20 rounded-full text-xs text-[#D4AF37]"
                                >
                                    <Sparkles className="w-3 h-3" />
                                    Complete your order
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F6DBC0]/40 group-focus-within:text-[#D4AF37] transition-colors" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-[#0D0D1A]/50 border border-[#F6DBC0]/20 rounded-xl text-[#F6DBC0] placeholder-[#F6DBC0]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all outline-none"
                                    />
                                </div>

                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F6DBC0]/40 group-focus-within:text-[#D4AF37] transition-colors" />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-[#0D0D1A]/50 border border-[#F6DBC0]/20 rounded-xl text-[#F6DBC0] placeholder-[#F6DBC0]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="w-full py-3.5 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37] rounded-xl text-white font-medium text-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10">
                                    {loading ? 'Signing in...' : from === '/checkout' ? 'Continue to Checkout →' : 'Sign In'}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F6DBC0] opacity-0 group-hover:opacity-20 transition-opacity" />
                                <motion.div
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                />
                            </motion.button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-[#F6DBC0]/60">
                                Don't have an account?{' '}
                                <Link to="/signup" className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors font-medium">
                                    Create Account
                                </Link>
                            </p>
                        </div>

                        {/* Decorative Divider */}
                        <div className="relative mt-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#F6DBC0]/20"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="px-4 bg-[#1A1A2E] text-[#F6DBC0]/40">🌸 BloomBouquet</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default Login;