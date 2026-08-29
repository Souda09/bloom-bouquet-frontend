import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Crown, User, LogOut, Shield, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
    const { user, isAuthenticated, isAdmin, logout } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = async () => {
        const result = await logout();
        if (result.success) navigate('/login');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A2E]/80 backdrop-blur-xl border-b border-[#F6DBC0]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/dashboard" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Crown className="w-8 h-8 text-[#D4AF37]" />
                        </motion.div>
                       <span className="text-lg sm:text-xl font-display text-[#502D55] dark:text-[#D4AF37]">BloomBouquet</span>
                        <span className="text-xs bg-gradient-to-r from-[#D4AF37] to-[#F6DBC0] text-[#502D55] px-2 py-0.5 rounded-full font-medium">
                            Premium
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {isAuthenticated && (
                            <>
                                <Link to="/dashboard" className="text-[#F6DBC0]/70 hover:text-[#D4AF37] transition-colors">
                                    Dashboard
                                </Link>
                                {isAdmin && (
                                    <Link to="/admin/dashboard" className="text-[#F6DBC0]/70 hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                                        <Shield className="w-4 h-4" />
                                        Admin
                                    </Link>
                                )}
                                <div className="flex items-center gap-3 pl-4 border-l border-[#F6DBC0]/20">
                                    <div className="flex items-center gap-2 text-[#F6DBC0]/70">
                                        <User className="w-4 h-4" />
                                        <span className="text-sm">{user?.name}</span>
                                        {isAdmin && (
                                            <span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded-full">
                                                Admin
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="p-2 hover:bg-white/5 rounded-full transition-colors text-[#F6DBC0]/50 hover:text-red-500"
                                    >
                                        <LogOut className="w-4 h-4" />
                                    </button>
                                </div>
                            </>
                        )}
                        {!isAuthenticated && (
                            <div className="flex items-center gap-3">
                                <Link to="/login" className="text-[#F6DBC0]/70 hover:text-[#D4AF37] transition-colors">
                                    Sign In
                                </Link>
                                <Link to="/signup" className="px-4 py-2 bg-gradient-to-r from-[#502D55] to-[#935073] rounded-lg text-white text-sm font-medium hover:shadow-lg transition-shadow">
                                    <span className="flex items-center gap-1">
                                        <Sparkles className="w-4 h-4" />
                                        Join Premium
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[#F6DBC0]/70 hover:text-[#D4AF37] transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-[#1A1A2E]/95 backdrop-blur-xl border-b border-[#F6DBC0]/10 p-4 space-y-3"
                >
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" className="block text-[#F6DBC0]/70 hover:text-[#D4AF37] transition-colors py-2">
                                Dashboard
                            </Link>
                            {isAdmin && (
                                <Link to="/admin/dashboard" className="block text-[#F6DBC0]/70 hover:text-[#D4AF37] transition-colors py-2 flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    Admin Panel
                                </Link>
                            )}
                            <div className="flex items-center justify-between pt-2 border-t border-[#F6DBC0]/10">
                                <span className="text-[#F6DBC0]/70">{user?.name}</span>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 text-red-500/70 hover:text-red-500 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="block text-[#F6DBC0]/70 hover:text-[#D4AF37] transition-colors py-2">
                                Sign In
                            </Link>
                            <Link to="/signup" className="block px-4 py-2 bg-gradient-to-r from-[#502D55] to-[#935073] rounded-lg text-white text-center font-medium">
                                Join Premium
                            </Link>
                        </>
                    )}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;