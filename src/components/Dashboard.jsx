import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import {
    Crown, Flower2, ShoppingBag, Heart, Package,
    Calendar, Star, TrendingUp, ArrowRight, Clock,
    CheckCircle, Truck, User, Settings, LogOut,
    Gift, Award, Edit2, Save, X, Sparkles
} from 'lucide-react';
import PageTransition from './common/PageTransition';
import Navbar from './Navbar';
import axios from '../api/axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [stats, setStats] = useState({
        totalOrders: 0,
        totalSpent: 0,
        memberSince: '',
        role: 'User',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    // ===== FETCH USER DATA =====
    const fetchUserData = async () => {
        setLoading(true);
        try {
            const ordersRes = await axios.get('/orders/my-orders');
            const ordersData = ordersRes.data.orders || [];
            setOrders(ordersData);

            const totalSpent = ordersData.reduce((sum, o) => sum + (o.total || 0), 0);

            setStats({
                totalOrders: ordersData.length,
                totalSpent: totalSpent,
                memberSince: user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : '2024',
                role: user?.role || 'User',
            });

            setProfileData({
                name: user?.name || '',
                email: user?.email || '',
                phone: user?.phone || '',
                address: user?.address || '',
            });

        } catch (error) {
            console.error('Fetch error:', error);
            toast.error('Failed to load dashboard data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    // ===== UPDATE PROFILE =====
    const handleProfileUpdate = async () => {
        try {
            await axios.put('/auth/profile', profileData);
            toast.success('Profile updated successfully!');
            setIsEditing(false);
            const updatedUser = { ...user, ...profileData };
            localStorage.setItem('user', JSON.stringify(updatedUser));
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to update profile');
        }
    };

    const getStatusBadge = (status) => {
        const configs = {
            'Delivered': { icon: CheckCircle, color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
            'Processing': { icon: Clock, color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
            'Shipped': { icon: Truck, color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
            'Pending': { icon: Clock, color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
            'Cancelled': { icon: X, color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
        };
        return configs[status] || configs['Pending'];
    };

    const statsCards = [
        { icon: ShoppingBag, label: 'Total Orders', value: stats.totalOrders, color: 'from-blue-500 to-blue-700' },
        { icon: TrendingUp, label: 'Total Spent', value: `Rs ${stats.totalSpent.toLocaleString()}`, color: 'from-green-500 to-emerald-600' },
        { icon: Calendar, label: 'Member Since', value: stats.memberSince, color: 'from-purple-500 to-indigo-600' },
        { icon: Award, label: 'Status', value: stats.role, color: 'from-[#502D55] to-[#935073]' },
    ];

    const quickActions = [
        { icon: ShoppingBag, label: 'Shop Bouquets', link: '/shop', color: 'from-[#502D55] to-[#935073]' },
        { icon: Package, label: 'My Orders', link: '/orders', color: 'from-blue-500 to-indigo-600' },
        { icon: Heart, label: 'Wishlist', link: '/wishlist', color: 'from-red-500 to-pink-600' },
        { icon: Settings, label: 'Profile', link: '#', color: 'from-purple-500 to-indigo-600', onClick: () => setIsEditing(!isEditing) },
    ];

    if (loading) {
        return (
            <PageTransition>
                <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E]">
                    <Navbar />
                    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
                        <div className="w-12 h-12 border-4 border-[#935073]/30 border-t-[#935073] rounded-full animate-spin" />
                    </div>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
                <Navbar />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
                    {/* ===== WELCOME BANNER WITH BOUQUET LOGO ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37] p-6 sm:p-8 mb-10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F6DBC0] opacity-10" />
                        <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        />
                        <div className="absolute top-1/2 right-8 -translate-y-1/2 text-7xl opacity-10">
                            💐
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex-1">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, type: 'spring' }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-3"
                                >
                                    <Flower2 className="w-4 h-4 text-[#F6DBC0]" />
                                    <span className="text-sm font-medium text-white">
                                        {user?.role === 'Admin' ? '👑 Admin' : '🌸 Premium'} Member
                                    </span>
                                </motion.div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold flex items-center gap-3">
                                    <span>Welcome back, {user?.name}!</span>
                                    <span className="text-3xl">🌺</span>
                                </h1>
                                <p className="text-white/80 mt-1 text-sm sm:text-base flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Here's your flower journey summary
                                    <Sparkles className="w-4 h-4" />
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Link
                                    to="/shop"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow"
                                >
                                    <Flower2 className="w-4 h-4" />
                                    Shop Now <ArrowRight className="w-4 h-4" />
                                </Link>
                                <button
                                    onClick={logout}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" /> Logout
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== BOUQUET LOGO SECTION ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center justify-center gap-3 mb-8"
                    >
                        <span className="text-3xl">🌸</span>
                        <span className="text-xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                            BloomBouquet Dashboard
                        </span>
                        <span className="text-3xl">🌺</span>
                    </motion.div>

                    {/* ===== STATS ===== */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {statsCards.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 text-center cursor-pointer group"
                            >
                                <stat.icon className="w-8 h-8 text-[#935073] dark:text-[#D4AF37] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                <p className="text-2xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                    {stat.value}
                                </p>
                                <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* ===== QUICK ACTIONS WITH BOUQUET ICONS ===== */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {quickActions.map((action, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                {action.onClick ? (
                                    <button
                                        onClick={action.onClick}
                                        className={`block w-full p-4 rounded-xl bg-gradient-to-r ${action.color} text-white text-center hover:shadow-xl transition-all`}
                                    >
                                        <action.icon className="w-8 h-8 mx-auto mb-2" />
                                        <span className="text-sm font-medium">{action.label}</span>
                                    </button>
                                ) : (
                                    <Link
                                        to={action.link}
                                        className={`block p-4 rounded-xl bg-gradient-to-r ${action.color} text-white text-center hover:shadow-xl transition-all`}
                                    >
                                        <action.icon className="w-8 h-8 mx-auto mb-2" />
                                        <span className="text-sm font-medium">{action.label}</span>
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* ===== PROFILE EDIT SECTION ===== */}
                    {isEditing && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 p-6 mb-10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold flex items-center gap-2">
                                    <User className="w-5 h-5 text-[#935073]" />
                                    Edit Profile
                                </h2>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={profileData.name}
                                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                        className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={profileData.email}
                                        disabled
                                        className="w-full px-4 py-2 bg-gray-100 dark:bg-dark/50 rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                    />
                                    <p className="text-xs text-[#502D55]/50 mt-1">Email cannot be changed</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Phone</label>
                                    <input
                                        type="text"
                                        value={profileData.phone}
                                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                        className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Address</label>
                                    <input
                                        type="text"
                                        value={profileData.address}
                                        onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                                        className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 mt-4">
                                <button
                                    onClick={handleProfileUpdate}
                                    className="px-6 py-2 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center gap-2"
                                >
                                    <Save className="w-4 h-4" /> Save Changes
                                </button>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="px-6 py-2 border border-[#F6DBC0]/20 dark:border-primary-dark/20 rounded-lg text-[#502D55] dark:text-[#F6DBC0] hover:bg-[#935073]/5 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* ===== REAL ORDERS ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#502D55] to-[#935073] flex items-center justify-center">
                                    <Flower2 className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                    My Orders 🌸 ({orders.length})
                                </h2>
                            </div>
                            {orders.length > 0 && (
                                <span className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                    Last {orders.length} orders
                                </span>
                            )}
                        </div>

                        {orders.length === 0 ? (
                            <div className="text-center py-12">
                                <Flower2 className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">No orders yet</p>
                                <p className="text-xs text-[#502D55]/40 dark:text-[#F6DBC0]/40 mt-1">Start shopping to see your orders here</p>
                                <Link to="/shop" className="inline-block mt-3 px-6 py-2 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg text-sm hover:shadow-lg transition-shadow">
                                    Start Shopping
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {orders.map((order) => {
                                    const StatusIcon = getStatusBadge(order.status).icon;
                                    return (
                                        <motion.div
                                            key={order._id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            whileHover={{ scale: 1.01 }}
                                            className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/10 dark:border-primary-dark/10 hover:shadow-md transition-shadow cursor-pointer"
                                        >
                                            <div className="flex-1 min-w-0 w-full">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-[#935073]/10 flex items-center justify-center flex-shrink-0">
                                                        <Flower2 className="w-5 h-5 text-[#935073]" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-[#502D55] dark:text-[#D4AF37] truncate text-sm sm:text-base">
                                                            {order.items?.[0]?.name || 'Order'}
                                                            {order.items?.length > 1 && ` + ${order.items.length - 1} more`}
                                                        </p>
                                                        <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                                            Order #{order._id?.slice(-6) || 'N/A'} • {new Date(order.createdAt).toLocaleDateString()}
                                                            • {order.items?.length || 0} items
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 mt-2 sm:mt-0">
                                                <span className="text-lg font-display text-[#502D55] dark:text-[#D4AF37]">
                                                    Rs {order.total?.toFixed(2) || '0'}
                                                </span>
                                                <span className={`px-3 py-1 text-xs rounded-full font-medium flex items-center gap-1 ${getStatusBadge(order.status).color}`}>
                                                    <StatusIcon className="w-3 h-3" />
                                                    {order.status || 'Pending'}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>

                    {/* ===== ACCOUNT INFO WITH BOUQUET LOGO ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        <div className="bg-white dark:bg-dark-lighter rounded-xl p-5 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#935073]/10 flex items-center justify-center">
                                <User className="w-6 h-6 text-[#935073]" />
                            </div>
                            <div>
                                <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">Account</p>
                                <p className="font-medium text-[#502D55] dark:text-[#D4AF37]">{user?.email}</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-dark-lighter rounded-xl p-5 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#935073]/10 flex items-center justify-center">
                                <Award className="w-6 h-6 text-[#935073]" />
                            </div>
                            <div>
                                <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">Member Since</p>
                                <p className="font-medium text-[#502D55] dark:text-[#D4AF37]">{stats.memberSince}</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-dark-lighter rounded-xl p-5 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#935073]/10 flex items-center justify-center">
                                <Flower2 className="w-6 h-6 text-[#935073]" />
                            </div>
                            <div>
                                <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">Total Orders</p>
                                <p className="font-medium text-[#502D55] dark:text-[#D4AF37]">{stats.totalOrders}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== BOUQUET LOGO WATERMARK ===== */}
                    <div className="mt-8 flex justify-center items-center gap-2 opacity-20">
                        <span className="text-2xl">💐</span>
                        <span className="text-xs text-[#502D55] dark:text-[#F6DBC0]">BloomBouquet</span>
                        <span className="text-2xl">🌸</span>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Dashboard;