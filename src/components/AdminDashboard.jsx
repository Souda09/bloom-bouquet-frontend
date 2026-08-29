// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { motion } from 'framer-motion';
// import {
//     Crown, Users, Package, ShoppingBag, DollarSign,
//     TrendingUp, TrendingDown, Calendar, Settings,
//     Plus, Edit, Trash2, Search, Filter,
//     BarChart3, LineChart, PieChart, Activity,
//     Download, RefreshCw, Eye, Star
// } from 'lucide-react';
// import PageTransition from './common/PageTransition';
// import Navbar from './Navbar';

// const AdminDashboard = () => {
//     const { user } = useAuth();
//     const [activeTab, setActiveTab] = useState('overview');
//     const [products, setProducts] = useState([
//         { id: 1, name: 'Elegant White Rose Wedding Bouquet', price: 89.99, stock: 25, category: 'Wedding', sales: 45, rating: 4.9 },
//         { id: 2, name: 'Romantic Red Rose Bridal Bouquet', price: 99.99, stock: 20, category: 'Wedding', sales: 38, rating: 4.8 },
//         { id: 3, name: 'Happy Birthday Sunshine Bouquet', price: 59.99, stock: 35, category: 'Birthday', sales: 52, rating: 4.7 },
//         { id: 4, name: 'Classic Red Rose Anniversary Bouquet', price: 79.99, stock: 30, category: 'Anniversary', sales: 41, rating: 4.9 },
//         { id: 5, name: 'Royal Premium Mixed Bouquet', price: 129.99, stock: 15, category: 'Premium', sales: 29, rating: 4.9 },
//     ]);

//     const [orders] = useState([
//         { id: '#BQ-2024-001', customer: 'Sarah Johnson', total: 89.99, status: 'Delivered', date: '2024-01-15', items: 3 },
//         { id: '#BQ-2024-002', customer: 'Michael Smith', total: 129.99, status: 'Processing', date: '2024-01-14', items: 2 },
//         { id: '#BQ-2024-003', customer: 'Emily Davis', total: 59.99, status: 'Shipped', date: '2024-01-13', items: 1 },
//         { id: '#BQ-2024-004', customer: 'James Wilson', total: 149.99, status: 'Pending', date: '2024-01-12', items: 4 },
//         { id: '#BQ-2024-005', customer: 'Lisa Brown', total: 79.99, status: 'Delivered', date: '2024-01-11', items: 2 },
//     ]);

//     // Stats
//     const stats = [
//         { icon: DollarSign, label: 'Total Revenue', value: '$12,847', change: '+12.5%', color: 'text-green-500' },
//         { icon: ShoppingBag, label: 'Total Orders', value: '342', change: '+8.2%', color: 'text-blue-500' },
//         { icon: Users, label: 'Total Customers', value: '1,284', change: '+15.3%', color: 'text-purple-500' },
//         { icon: Package, label: 'Products Sold', value: '1,847', change: '+5.7%', color: 'text-orange-500' },
//     ];

//     // Weekly data for chart
//     const weeklyData = [120, 180, 150, 220, 190, 280, 310];
//     const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//     const getStatusColor = (status) => {
//         switch(status) {
//             case 'Delivered': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
//             case 'Processing': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
//             case 'Shipped': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
//             case 'Pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
//             default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
//         }
//     };

//     return (
//         <PageTransition>
//             <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
//                 <Navbar />

//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
//                     {/* Admin Header */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="flex flex-col md:flex-row items-center justify-between mb-8"
//                     >
//                         <div>
//                             <h1 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
//                                 Admin Dashboard 👑
//                             </h1>
//                             <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">
//                                 Welcome back, {user?.name}! Manage your flower shop
//                             </p>
//                         </div>
//                         <div className="flex gap-3 mt-4 md:mt-0">
//                             <button className="px-4 py-2 bg-white dark:bg-dark-lighter rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 text-[#502D55] dark:text-[#F6DBC0] text-sm flex items-center gap-2 hover:shadow-lg transition-shadow">
//                                 <RefreshCw className="w-4 h-4" /> Refresh
//                             </button>
//                             <button className="px-4 py-2 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg text-sm flex items-center gap-2 hover:shadow-lg transition-shadow">
//                                 <Plus className="w-4 h-4" /> Add Product
//                             </button>
//                             <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-sm flex items-center gap-2 hover:shadow-lg transition-shadow">
//                                 <Download className="w-4 h-4" /> Export
//                             </button>
//                         </div>
//                     </motion.div>

//                     {/* Stats Grid */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.1 }}
//                         className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
//                     >
//                         {stats.map((stat, index) => (
//                             <motion.div
//                                 key={index}
//                                 whileHover={{ y: -5 }}
//                                 className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20"
//                             >
//                                 <div className="flex items-center justify-between mb-2">
//                                     <stat.icon className={`w-6 h-6 ${stat.color}`} />
//                                     <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
//                                         {stat.change}
//                                     </span>
//                                 </div>
//                                 <p className="text-2xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
//                                     {stat.value}
//                                 </p>
//                                 <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">
//                                     {stat.label}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </motion.div>

//                     {/* Tabs */}
//                     <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
//                         {['overview', 'products', 'orders', 'customers'].map((tab) => (
//                             <button
//                                 key={tab}
//                                 onClick={() => setActiveTab(tab)}
//                                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                                     activeTab === tab
//                                         ? 'bg-gradient-to-r from-[#502D55] to-[#935073] text-white shadow-lg'
//                                         : 'bg-white dark:bg-dark-lighter text-[#502D55] dark:text-[#F6DBC0] hover:shadow-lg'
//                                 }`}
//                             >
//                                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Charts Section */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
//                     >
//                         {/* Revenue Chart */}
//                         <div className="lg:col-span-2 bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20">
//                             <div className="flex items-center justify-between mb-4">
//                                 <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
//                                     Weekly Revenue
//                                 </h3>
//                                 <div className="flex items-center gap-2 text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">
//                                     <Activity className="w-4 h-4" />
//                                     <span>Last 7 days</span>
//                                 </div>
//                             </div>
//                             <div className="h-48 flex items-end justify-between gap-2">
//                                 {weeklyData.map((value, index) => {
//                                     const height = (value / 310) * 100;
//                                     return (
//                                         <div key={index} className="flex-1 flex flex-col items-center gap-1">
//                                             <div 
//                                                 className="w-full rounded-t-lg bg-gradient-to-t from-[#502D55] to-[#935073] transition-all hover:opacity-80"
//                                                 style={{ height: `${height}%`, minHeight: '10px' }}
//                                             />
//                                             <span className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">
//                                                 {days[index]}
//                                             </span>
//                                             <span className="text-xs font-medium text-[#502D55] dark:text-[#D4AF37]">
//                                                 ${value}
//                                             </span>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                         {/* Pie Chart - Category Distribution */}
//                         <div className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20">
//                             <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-4">
//                                 Sales by Category
//                             </h3>
//                             <div className="space-y-3">
//                                 {[
//                                     { name: 'Wedding', percentage: 35, color: 'from-pink-500 to-rose-600' },
//                                     { name: 'Birthday', percentage: 25, color: 'from-yellow-400 to-orange-500' },
//                                     { name: 'Anniversary', percentage: 20, color: 'from-red-500 to-pink-600' },
//                                     { name: 'Premium', percentage: 12, color: 'from-purple-500 to-indigo-600' },
//                                     { name: 'Other', percentage: 8, color: 'from-green-500 to-emerald-600' },
//                                 ].map((cat, index) => (
//                                     <div key={index}>
//                                         <div className="flex justify-between text-sm mb-1">
//                                             <span className="text-[#502D55] dark:text-[#F6DBC0]">{cat.name}</span>
//                                             <span className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">{cat.percentage}%</span>
//                                         </div>
//                                         <div className="w-full h-2 bg-[#F8F4E9] dark:bg-dark rounded-full overflow-hidden">
//                                             <div 
//                                                 className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
//                                                 style={{ width: `${cat.percentage}%` }}
//                                             />
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* Products Table */}
//                     {activeTab === 'products' && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 overflow-hidden"
//                         >
//                             <div className="p-6 border-b border-[#F6DBC0]/20 dark:border-primary-dark/20">
//                                 <div className="flex flex-wrap gap-4 items-center justify-between">
//                                     <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
//                                         Products Management
//                                     </h3>
//                                     <div className="flex gap-2">
//                                         <div className="relative">
//                                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                             <input
//                                                 type="text"
//                                                 placeholder="Search products..."
//                                                 className="pl-9 pr-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 text-sm focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
//                                             />
//                                         </div>
//                                         <button className="px-4 py-2 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg text-sm flex items-center gap-2">
//                                             <Plus className="w-4 h-4" /> Add Product
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="overflow-x-auto">
//                                 <table className="w-full">
//                                     <thead className="bg-[#F8F4E9] dark:bg-dark">
//                                         <tr>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Product</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Category</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Price</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Stock</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Sales</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Rating</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="divide-y divide-[#F6DBC0]/20 dark:divide-primary-dark/20">
//                                         {products.map((product) => (
//                                             <tr key={product.id} className="hover:bg-[#F8F4E9] dark:hover:bg-dark/50 transition-colors">
//                                                 <td className="px-6 py-4">
//                                                     <div className="flex items-center gap-3">
//                                                         <div className="w-10 h-10 rounded-lg bg-[#F8F4E9] dark:bg-dark overflow-hidden">
//                                                             <img src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?w=40&h=40&fit=crop" alt="" className="w-full h-full object-cover" />
//                                                         </div>
//                                                         <span className="text-sm font-medium text-[#502D55] dark:text-[#D4AF37]">{product.name}</span>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-6 py-4 text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">{product.category}</td>
//                                                 <td className="px-6 py-4 text-sm font-medium text-[#502D55] dark:text-[#D4AF37]">${product.price}</td>
//                                                 <td className="px-6 py-4">
//                                                     <span className={`text-sm font-medium ${product.stock < 20 ? 'text-red-500' : 'text-green-500'}`}>
//                                                         {product.stock}
//                                                     </span>
//                                                 </td>
//                                                 <td className="px-6 py-4 text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">{product.sales}</td>
//                                                 <td className="px-6 py-4">
//                                                     <div className="flex items-center gap-1 text-[#D4AF37]">
//                                                         <Star className="w-4 h-4 fill-[#D4AF37]" />
//                                                         <span className="text-sm font-medium text-[#502D55] dark:text-[#D4AF37]">{product.rating}</span>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-6 py-4">
//                                                     <div className="flex gap-2">
//                                                         <button className="p-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-blue-500 transition-colors">
//                                                             <Edit className="w-4 h-4" />
//                                                         </button>
//                                                         <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500 transition-colors">
//                                                             <Trash2 className="w-4 h-4" />
//                                                         </button>
//                                                         <button className="p-1.5 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg text-green-500 transition-colors">
//                                                             <Eye className="w-4 h-4" />
//                                                         </button>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </motion.div>
//                     )}

//                     {/* Orders Table */}
//                     {activeTab === 'orders' && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 overflow-hidden"
//                         >
//                             <div className="p-6 border-b border-[#F6DBC0]/20 dark:border-primary-dark/20">
//                                 <div className="flex flex-wrap gap-4 items-center justify-between">
//                                     <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
//                                         Order Management
//                                     </h3>
//                                     <div className="flex gap-2">
//                                         <div className="relative">
//                                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                             <input
//                                                 type="text"
//                                                 placeholder="Search orders..."
//                                                 className="pl-9 pr-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 text-sm focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
//                                             />
//                                         </div>
//                                         <div className="relative">
//                                             <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                                             <select className="pl-9 pr-8 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 text-sm focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0] appearance-none">
//                                                 <option>All Status</option>
//                                                 <option>Pending</option>
//                                                 <option>Processing</option>
//                                                 <option>Shipped</option>
//                                                 <option>Delivered</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="overflow-x-auto">
//                                 <table className="w-full">
//                                     <thead className="bg-[#F8F4E9] dark:bg-dark">
//                                         <tr>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Order ID</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Customer</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Date</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Items</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Total</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Status</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="divide-y divide-[#F6DBC0]/20 dark:divide-primary-dark/20">
//                                         {orders.map((order) => (
//                                             <tr key={order.id} className="hover:bg-[#F8F4E9] dark:hover:bg-dark/50 transition-colors">
//                                                 <td className="px-6 py-4 text-sm font-medium text-[#502D55] dark:text-[#D4AF37]">{order.id}</td>
//                                                 <td className="px-6 py-4 text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">{order.customer}</td>
//                                                 <td className="px-6 py-4 text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">{order.date}</td>
//                                                 <td className="px-6 py-4 text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">{order.items}</td>
//                                                 <td className="px-6 py-4 text-sm font-medium text-[#502D55] dark:text-[#D4AF37]">${order.total.toFixed(2)}</td>
//                                                 <td className="px-6 py-4">
//                                                     <span className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusColor(order.status)}`}>
//                                                         {order.status}
//                                                     </span>
//                                                 </td>
//                                                 <td className="px-6 py-4">
//                                                     <div className="flex gap-2">
//                                                         <button className="p-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-blue-500 transition-colors">
//                                                             <Eye className="w-4 h-4" />
//                                                         </button>
//                                                         <button className="p-1.5 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg text-green-500 transition-colors">
//                                                             <Edit className="w-4 h-4" />
//                                                         </button>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </motion.div>
//                     )}
//                 </div>
//             </div>
//         </PageTransition>
//     );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import {
    Crown, Users, Package, ShoppingBag, DollarSign,
    Plus, Edit, Trash2, RefreshCw, Eye, Star,
    X, CheckCircle, Clock, Truck, AlertCircle,
    TrendingUp, TrendingDown, Activity
} from 'lucide-react';
import PageTransition from './common/PageTransition';
import Navbar from './Navbar';
import axios from '../api/axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [stats, setStats] = useState({
        totalRevenue: 0,
        totalOrders: 0,
        totalCustomers: 0,
        totalProducts: 0,
    });

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [productForm, setProductForm] = useState({
        name: '',
        price: '',
        discountPrice: '',
        category: 'Wedding',
        occasion: 'Wedding',
        description: '',
        image: '',
        stock: '',
        isFeatured: false,
        colors: '',
    });

    // ===== FETCH DATA =====
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            console.log('🔄 Fetching admin data...');
            const [ordersRes, productsRes] = await Promise.all([
                axios.get('/orders/admin/all'),
                axios.get('/products')
            ]);

            const ordersData = ordersRes.data.orders || [];
            const productsData = productsRes.data.products || [];

            setOrders(ordersData);
            setProducts(productsData);

            // Calculate stats
            const uniqueCustomers = new Set(ordersData.map(o => o.user?._id).filter(Boolean));
            const totalRevenue = ordersData.reduce((sum, o) => sum + (o.total || 0), 0);

            setStats({
                totalRevenue,
                totalOrders: ordersData.length,
                totalCustomers: uniqueCustomers.size,
                totalProducts: productsData.length,
            });
        } catch (err) {
            console.error('❌ Fetch error:', err);
            const msg = err.response?.data?.message || err.message || 'Failed to load data';
            setError(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // ===== UPDATE ORDER STATUS =====
    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            await axios.put(`/orders/${orderId}/status`, { status: newStatus });
            toast.success(`Order status updated to ${newStatus}`);
            fetchData(); // Refresh
        } catch (err) {
            toast.error(err.response?.data?.message || 'Failed to update status');
        }
    };

    // ===== DELETE PRODUCT =====
    const deleteProduct = async (productId) => {
        const confirm = await Swal.fire({
            title: 'Delete Product?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            background: '#1A1A2E',
            color: '#F6DBC0',
        });
        if (!confirm.isConfirmed) return;

        try {
            await axios.delete(`/products/${productId}`);
            toast.success('Product deleted');
            fetchData();
        } catch (err) {
            toast.error(err.response?.data?.message || 'Delete failed');
        }
    };

    // ===== ADD / EDIT PRODUCT =====
    const handleProductSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = {
                ...productForm,
                price: parseFloat(productForm.price),
                discountPrice: parseFloat(productForm.discountPrice) || 0,
                stock: parseInt(productForm.stock) || 0,
                colors: productForm.colors.split(',').map(c => c.trim()).filter(Boolean),
            };

            if (editingProduct) {
                await axios.put(`/products/${editingProduct._id}`, form);
                toast.success('Product updated');
            } else {
                await axios.post('/products', form);
                toast.success('Product added');
            }
            setShowModal(false);
            setEditingProduct(null);
            resetForm();
            fetchData();
        } catch (err) {
            toast.error(err.response?.data?.message || 'Failed to save product');
        }
    };

    const resetForm = () => {
        setProductForm({
            name: '',
            price: '',
            discountPrice: '',
            category: 'Wedding',
            occasion: 'Wedding',
            description: '',
            image: '',
            stock: '',
            isFeatured: false,
            colors: '',
        });
    };

    // ===== HELPER FUNCTIONS =====
    const getStatusColor = (status) => {
        const map = {
            'Pending': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
            'Processing': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            'Shipped': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
            'Delivered': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            'Cancelled': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        };
        return map[status] || map['Pending'];
    };

    const getStatusIcon = (status) => {
        const map = {
            'Pending': Clock,
            'Processing': Clock,
            'Shipped': Truck,
            'Delivered': CheckCircle,
            'Cancelled': AlertCircle,
        };
        return map[status] || Clock;
    };

    // Compute weekly revenue data from orders (last 7 days)
    const getWeeklyRevenue = () => {
        const now = new Date();
        const weekDays = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date(now);
            d.setDate(d.getDate() - i);
            weekDays.push(d.toISOString().split('T')[0]);
        }
        const revenueByDay = weekDays.map(day => {
            const total = orders
                .filter(o => o.createdAt?.startsWith(day))
                .reduce((sum, o) => sum + (o.total || 0), 0);
            return { day, total };
        });
        return revenueByDay;
    };

    const weeklyRevenue = getWeeklyRevenue();

    // Stats Cards
    const statsCards = [
        { icon: DollarSign, label: 'Total Revenue', value: `Rs ${stats.totalRevenue.toLocaleString()}`, color: 'text-green-500' },
        { icon: ShoppingBag, label: 'Total Orders', value: stats.totalOrders, color: 'text-blue-500' },
        { icon: Users, label: 'Total Customers', value: stats.totalCustomers, color: 'text-purple-500' },
        { icon: Package, label: 'Products', value: stats.totalProducts, color: 'text-orange-500' },
    ];

    // ===== RENDER =====
    if (loading) {
        return (
            <PageTransition>
                <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E]">
                    <Navbar />
                    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
                        <div className="w-12 h-12 border-4 border-[#935073]/30 border-t-[#935073] rounded-full animate-spin" />
                        <p className="mt-4 text-[#502D55] dark:text-[#F6DBC0]">Loading dashboard...</p>
                    </div>
                </div>
            </PageTransition>
        );
    }

    if (error) {
        return (
            <PageTransition>
                <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E]">
                    <Navbar />
                    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] px-4">
                        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
                        <h2 className="text-2xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">Error Loading Data</h2>
                        <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2 text-center max-w-md">{error}</p>
                        <button
                            onClick={fetchData}
                            className="mt-6 px-6 py-2 bg-[#935073] text-white rounded-lg hover:bg-[#7A3D60] transition-colors"
                        >
                            Retry
                        </button>
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
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row items-center justify-between mb-8"
                    >
                        <div>
                            <h1 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold flex items-center gap-2">
                                <Crown className="w-8 h-8 text-[#D4AF37]" />
                                Admin Dashboard
                            </h1>
                            <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                Welcome back, {user?.name}! Real-time data from your shop.
                            </p>
                        </div>
                        <div className="flex gap-3 mt-4 md:mt-0">
                            <button
                                onClick={fetchData}
                                className="px-4 py-2 bg-white dark:bg-dark-lighter rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 text-[#502D55] dark:text-[#F6DBC0] text-sm flex items-center gap-2 hover:shadow-lg transition-shadow"
                            >
                                <RefreshCw className="w-4 h-4" /> Refresh
                            </button>
                            <button
                                onClick={() => {
                                    setEditingProduct(null);
                                    resetForm();
                                    setShowModal(true);
                                }}
                                className="px-4 py-2 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg text-sm flex items-center gap-2 hover:shadow-lg transition-shadow"
                            >
                                <Plus className="w-4 h-4" /> Add Product
                            </button>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                    >
                        {statsCards.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20"
                            >
                                <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
                                <p className="text-2xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                    {stat.value}
                                </p>
                                <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                        {['overview', 'orders', 'products'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    activeTab === tab
                                        ? 'bg-gradient-to-r from-[#502D55] to-[#935073] text-white shadow-lg'
                                        : 'bg-white dark:bg-dark-lighter text-[#502D55] dark:text-[#F6DBC0] hover:shadow-lg'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* ===== OVERVIEW TAB ===== */}
                    {activeTab === 'overview' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                        >
                            {/* Weekly Revenue Chart */}
                            <div className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5 text-green-500" />
                                        Weekly Revenue (Rs)
                                    </h3>
                                    <span className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">Last 7 days</span>
                                </div>
                                <div className="h-48 flex items-end justify-between gap-2">
                                    {weeklyRevenue.map((item, index) => {
                                        const max = Math.max(...weeklyRevenue.map(d => d.total), 1);
                                        const height = (item.total / max) * 100;
                                        return (
                                            <div key={index} className="flex-1 flex flex-col items-center gap-1">
                                                <div
                                                    className="w-full rounded-t-lg bg-gradient-to-t from-[#502D55] to-[#935073] transition-all hover:opacity-80"
                                                    style={{ height: `${Math.max(height, 5)}%`, minHeight: '10px' }}
                                                />
                                                <span className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                                    {new Date(item.day).toLocaleDateString('en', { weekday: 'short' })}
                                                </span>
                                                <span className="text-xs font-medium text-[#502D55] dark:text-[#D4AF37]">
                                                    Rs {item.total}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Recent Orders */}
                            <div className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20">
                                <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-4 flex items-center gap-2">
                                    <ShoppingBag className="w-5 h-5 text-[#935073]" />
                                    Recent Orders
                                </h3>
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                    {orders.slice(0, 5).map((order) => (
                                        <div key={order._id} className="flex items-center justify-between p-3 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/10 dark:border-primary-dark/10">
                                            <div>
                                                <p className="text-sm font-medium text-[#502D55] dark:text-[#D4AF37]">
                                                    {order.user?.name || 'Guest'}
                                                </p>
                                                <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                                    {order.items?.length} items • Rs {order.total?.toFixed(2)}
                                                </p>
                                            </div>
                                            <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(order.status)}`}>
                                                {order.status || 'Pending'}
                                            </span>
                                        </div>
                                    ))}
                                    {orders.length === 0 && (
                                        <p className="text-center text-[#502D55]/60 dark:text-[#F6DBC0]/60 py-4">No orders yet</p>
                                    )}
                                </div>
                            </div>

                            {/* Category Distribution */}
                            <div className="lg:col-span-2 bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20">
                                <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-4 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-[#935073]" />
                                    Sales by Category
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {products.reduce((acc, p) => {
                                        const cat = p.category || 'Other';
                                        acc[cat] = (acc[cat] || 0) + 1;
                                        return acc;
                                    }, {}) && Object.entries(
                                        products.reduce((acc, p) => {
                                            const cat = p.category || 'Other';
                                            acc[cat] = (acc[cat] || 0) + 1;
                                            return acc;
                                        }, {})
                                    ).map(([cat, count]) => {
                                        const total = products.length || 1;
                                        const percentage = (count / total) * 100;
                                        return (
                                            <div key={cat}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-[#502D55] dark:text-[#F6DBC0]">{cat}</span>
                                                    <span className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">{percentage.toFixed(0)}%</span>
                                                </div>
                                                <div className="w-full h-2 bg-[#F8F4E9] dark:bg-dark rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full rounded-full bg-gradient-to-r from-[#502D55] to-[#935073]"
                                                        style={{ width: `${percentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {products.length === 0 && (
                                        <p className="text-center text-[#502D55]/60 dark:text-[#F6DBC0]/60 col-span-2">No products</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ===== ORDERS TAB ===== */}
                    {activeTab === 'orders' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#F6DBC0]/20 dark:border-primary-dark/20">
                                <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                    All Orders ({orders.length})
                                </h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-[#F8F4E9] dark:bg-dark">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Order ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Customer</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Items</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Total</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F6DBC0]/20 dark:divide-primary-dark/20">
                                        {orders.map((order) => {
                                            const StatusIcon = getStatusIcon(order.status);
                                            return (
                                                <tr key={order._id} className="hover:bg-[#F8F4E9] dark:hover:bg-dark/50 transition-colors">
                                                    <td className="px-6 py-4 text-sm font-mono text-[#502D55] dark:text-[#D4AF37]">
                                                        #{order._id?.slice(-6) || 'N/A'}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-[#502D55] dark:text-[#F6DBC0]">
                                                        {order.user?.name || 'Guest'}
                                                        <div className="text-xs text-[#502D55]/50">{order.user?.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-[#502D55] dark:text-[#F6DBC0]">
                                                        {order.items?.length || 0} items
                                                        <div className="text-xs text-[#502D55]/50">
                                                            {order.items?.map(i => i.name).join(', ')?.slice(0, 30)}...
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-[#502D55] dark:text-[#D4AF37]">
                                                        Rs {order.total?.toFixed(2) || '0'}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-3 py-1 text-xs rounded-full font-medium flex items-center gap-1 w-fit ${getStatusColor(order.status)}`}>
                                                            <StatusIcon className="w-3 h-3" />
                                                            {order.status || 'Pending'}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                                        {new Date(order.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <select
                                                            value={order.status || 'Pending'}
                                                            onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                                                            className="text-xs px-2 py-1 rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 bg-transparent text-[#502D55] dark:text-[#F6DBC0] focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none"
                                                        >
                                                            <option value="Pending">Pending</option>
                                                            <option value="Processing">Processing</option>
                                                            <option value="Shipped">Shipped</option>
                                                            <option value="Delivered">Delivered</option>
                                                            <option value="Cancelled">Cancelled</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        {orders.length === 0 && (
                                            <tr>
                                                <td colSpan="7" className="px-6 py-12 text-center text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                                    No orders found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                    {/* ===== PRODUCTS TAB ===== */}
                    {activeTab === 'products' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 overflow-hidden"
                        >
                            <div className="p-6 border-b border-[#F6DBC0]/20 dark:border-primary-dark/20 flex flex-wrap gap-4 items-center justify-between">
                                <h3 className="font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                    Products ({products.length})
                                </h3>
                                <button
                                    onClick={() => {
                                        setEditingProduct(null);
                                        resetForm();
                                        setShowModal(true);
                                    }}
                                    className="px-4 py-2 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg text-sm flex items-center gap-2 hover:shadow-lg transition-shadow"
                                >
                                    <Plus className="w-4 h-4" /> Add Product
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-[#F8F4E9] dark:bg-dark">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60">Product</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60">Category</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60">Price</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60">Stock</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60">Featured</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-[#502D55]/60 dark:text-[#F6DBC0]/60">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F6DBC0]/20 dark:divide-primary-dark/20">
                                        {products.map((product) => (
                                            <tr key={product._id} className="hover:bg-[#F8F4E9] dark:hover:bg-dark/50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 rounded-lg bg-[#F8F4E9] dark:bg-dark overflow-hidden">
                                                            <img src={product.image || 'https://via.placeholder.com/50'} alt={product.name} className="w-full h-full object-cover" />
                                                        </div>
                                                        <span className="text-sm font-medium text-[#502D55] dark:text-[#D4AF37]">{product.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">{product.category}</td>
                                                <td className="px-6 py-4 text-sm font-medium text-[#502D55] dark:text-[#D4AF37]">
                                                    Rs {product.discountPrice || product.price}
                                                    {product.discountPrice && <span className="text-xs line-through text-gray-400 ml-1">Rs {product.price}</span>}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-sm font-medium ${product.stock < 10 ? 'text-red-500' : 'text-green-500'}`}>
                                                        {product.stock}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {product.isFeatured ? (
                                                        <span className="text-green-500">⭐ Featured</span>
                                                    ) : (
                                                        <span className="text-gray-400">—</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setEditingProduct(product);
                                                                setProductForm({
                                                                    name: product.name,
                                                                    price: product.price,
                                                                    discountPrice: product.discountPrice || '',
                                                                    category: product.category,
                                                                    occasion: product.occasion || 'Wedding',
                                                                    description: product.description || '',
                                                                    image: product.image || '',
                                                                    stock: product.stock,
                                                                    isFeatured: product.isFeatured || false,
                                                                    colors: product.colors?.join(', ') || '',
                                                                });
                                                                setShowModal(true);
                                                            }}
                                                            className="p-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-blue-500 transition-colors"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => deleteProduct(product._id)}
                                                            className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500 transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {products.length === 0 && (
                                            <tr>
                                                <td colSpan="6" className="px-6 py-12 text-center text-[#502D55]/60 dark:text-[#F6DBC0]/60">
                                                    No products found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* ===== ADD / EDIT PRODUCT MODAL ===== */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-dark-lighter rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#F6DBC0]/20 dark:border-primary-dark/20"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                {editingProduct ? 'Edit Product' : 'Add New Product'}
                            </h2>
                            <button onClick={() => { setShowModal(false); setEditingProduct(null); }} className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors">
                                <X className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
                            </button>
                        </div>

                        <form onSubmit={handleProductSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Name *</label>
                                    <input
                                        type="text"
                                        value={productForm.name}
                                        onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                                        required
                                        className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Price (Rs) *</label>
                                    <input
                                        type="number"
                                        value={productForm.price}
                                        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                                        required
                                        className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Discount Price</label>
                                    <input
                                        type="number"
                                        value={productForm.discountPrice}
                                        onChange={(e) => setProductForm({ ...productForm, discountPrice: e.target.value })}
                                        className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Category *</label>
                                    <select
                                        value={productForm.category}
                                        onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                                        className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                    >
                                        <option value="Wedding">Wedding</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Anniversary">Anniversary</option>
                                        <option value="Love">Love</option>
                                        <option value="Sympathy">Sympathy</option>
                                        <option value="Premium">Premium</option>
                                        <option value="Seasonal">Seasonal</option>
                                        <option value="Graduation">Graduation</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Image URL</label>
                                <input
                                    type="text"
                                    value={productForm.image}
                                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                                    placeholder="https://res.cloudinary.com/..."
                                    className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Description</label>
                                <textarea
                                    value={productForm.description}
                                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                                    rows="2"
                                    className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Stock</label>
                                    <input
                                        type="number"
                                        value={productForm.stock}
                                        onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                                        className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#502D55] dark:text-[#F6DBC0] mb-1">Colors (comma)</label>
                                    <input
                                        type="text"
                                        value={productForm.colors}
                                        onChange={(e) => setProductForm({ ...productForm, colors: e.target.value })}
                                        placeholder="Red, White, Pink"
                                        className="w-full px-4 py-2 bg-[#F8F4E9] dark:bg-dark rounded-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0]"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={productForm.isFeatured}
                                    onChange={(e) => setProductForm({ ...productForm, isFeatured: e.target.checked })}
                                    className="w-4 h-4 accent-[#935073]"
                                />
                                <label className="text-sm text-[#502D55] dark:text-[#F6DBC0]">Featured Product</label>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 py-2.5 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                                >
                                    {editingProduct ? 'Update Product' : 'Add Product'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => { setShowModal(false); setEditingProduct(null); }}
                                    className="px-6 py-2.5 border border-[#F6DBC0]/20 dark:border-primary-dark/20 rounded-lg text-[#502D55] dark:text-[#F6DBC0] hover:bg-[#935073]/5 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </PageTransition>
    );
};

export default AdminDashboard;