import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Sparkles, Crown, Check } from 'lucide-react';
import Swal from 'sweetalert2';
import PageTransition from '../common/PageTransition';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
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

        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                icon: 'warning',
                title: 'Password Mismatch',
                text: 'Passwords do not match',
                background: '#1A1A2E',
                color: '#F6DBC0',
                confirmButtonColor: '#935073',
            });
            return;
        }

        if (formData.password.length < 6) {
            Swal.fire({
                icon: 'warning',
                title: 'Password Too Short',
                text: 'Password must be at least 6 characters long',
                background: '#1A1A2E',
                color: '#F6DBC0',
                confirmButtonColor: '#935073',
            });
            return;
        }

        setLoading(true);
        const result = await register({
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });
        setLoading(false);
        
        if (result.success) navigate('/login');
    };

    const getPasswordStrength = (password) => {
        if (password.length < 4) return { label: 'Weak', color: 'bg-red-500', width: '25%' };
        if (password.length < 8) return { label: 'Fair', color: 'bg-yellow-500', width: '50%' };
        if (password.length < 12) return { label: 'Good', color: 'bg-blue-500', width: '75%' };
        return { label: 'Strong', color: 'bg-green-500', width: '100%' };
    };

    const strength = getPasswordStrength(formData.password);

    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center bg-gradient-radial from-[#3D1F40] via-[#1A1A2E] to-[#502D55] px-4 relative overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F6DBC0] opacity-10 blur-3xl"
                />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className="w-full max-w-md relative z-10"
                >
                    <div className="bg-[#1A1A2E]/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-[#F6DBC0]/20">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            className="text-center mb-8"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F6DBC0] shadow-[0_0_40px_rgba(212,175,55,0.3)] mb-4">
                                <Sparkles className="w-10 h-10 text-[#502D55]" />
                            </div>
                            <h1 className="text-4xl font-display text-[#F6DBC0] font-bold">
                                Join the Club
                            </h1>
                            <p className="text-[#F6DBC0]/60 mt-2">Create your premium account</p>
                        </motion.div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F6DBC0]/40 group-focus-within:text-[#D4AF37] transition-colors" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 bg-[#0D0D1A]/50 border border-[#F6DBC0]/20 rounded-xl text-[#F6DBC0] placeholder-[#F6DBC0]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all outline-none"
                                />
                            </div>

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
                                    placeholder="Password (min 6 characters)"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 bg-[#0D0D1A]/50 border border-[#F6DBC0]/20 rounded-xl text-[#F6DBC0] placeholder-[#F6DBC0]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all outline-none"
                                />
                            </div>

                            {formData.password && (
                                <div className="space-y-1">
                                    <div className="w-full h-1.5 bg-[#0D0D1A]/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: strength.width }}
                                            className={`h-full ${strength.color} rounded-full transition-all`}
                                        />
                                    </div>
                                    <p className="text-xs text-[#F6DBC0]/40 text-right">
                                        Strength: <span className="text-[#D4AF37]">{strength.label}</span>
                                    </p>
                                </div>
                            )}

                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F6DBC0]/40 group-focus-within:text-[#D4AF37] transition-colors" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 bg-[#0D0D1A]/50 border border-[#F6DBC0]/20 rounded-xl text-[#F6DBC0] placeholder-[#F6DBC0]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all outline-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="w-full py-3.5 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37] rounded-xl text-white font-medium text-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10">
                                    {loading ? 'Creating Account...' : 'Create Account'}
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
                                Already have an account?{' '}
                                <Link to="/login" className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors font-medium">
                                    Sign In
                                </Link>
                            </p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            {['Premium Access', 'Secure Login', 'Exclusive Features', '24/7 Support'].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-2 text-xs text-[#F6DBC0]/60"
                                >
                                    <Check className="w-3 h-3 text-[#D4AF37]" />
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default Signup;