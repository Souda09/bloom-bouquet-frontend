import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from "../redux/slices/cartSlice";
import { Flower2, ShoppingBag, ArrowRight, CheckCircle, Truck, CreditCard } from 'lucide-react';
import PageTransition from "../components/common/PageTransition";
import { useAuth } from "../context/AuthContext";
import axios from '../api/axios';
import toast from 'react-hot-toast';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const { items, totalPrice } = useSelector((state) => state.cart);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: 'Pakistan'
    });

    // ✅ If user is not logged in, redirect to login AND SAVE PATH
    useEffect(() => {
        if (!isAuthenticated) {
            // Save the redirect path in sessionStorage so Login.js can use it
            sessionStorage.setItem('redirectAfterLogin', '/checkout');
            navigate('/login', { state: { from: '/checkout' } });
            toast.error('Please login to place your order 🌸');
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ SUBMIT ORDER – WITH API CALL
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const required = ['name', 'email', 'phone', 'address', 'city', 'zip'];
        for (let field of required) {
            if (!formData[field]) {
                toast.error(`Please fill in ${field}`);
                return;
            }
        }

        // Prepare order data
        const orderData = {
            items: items.map(item => ({
                product: item.product || item.id,
                name: item.name,
                price: item.discountPrice || item.price,
                quantity: item.quantity,
                image: item.image,
            })),
            total: totalPrice + 5 + (totalPrice * 0.08),
            shippingAddress: {
                street: formData.address,
                city: formData.city,
                state: formData.state,
                zip: formData.zip,
                country: formData.country,
            },
            paymentMethod: 'Cash on Delivery',
        };

        setStep(2);
        setLoading(true);

        try {
            const response = await axios.post('/orders', orderData);
            console.log('✅ Order response:', response.data);
            
            dispatch(clearCart());
            setStep(3);
            toast.success('Order placed successfully! 🌸');
        } catch (error) {
            console.error('❌ Order error:', error);
            toast.error(error.response?.data?.message || 'Failed to place order');
            setStep(1);
        } finally {
            setLoading(false);
        }
    };

    if (items.length === 0 && step === 1) {
        return (
            <PageTransition>
                <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] flex flex-col items-center justify-center px-4">
                    <Flower2 className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-6" />
                    <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">Your cart is empty 🌸</h2>
                    <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">Looks like you haven't added any bouquets yet.</p>
                    <Link to="/shop" className="mt-6 px-8 py-3 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
                        Start Shopping
                    </Link>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300 pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-8 text-center">
                        Checkout 🌸
                    </h1>

                    {/* Steps Progress */}
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center gap-2">
                                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                                    step >= s 
                                        ? 'bg-[#935073] text-white' 
                                        : 'bg-gray-200 dark:bg-dark-lighter text-gray-500'
                                }`}>
                                    {step > s ? '✓' : s}
                                </div>
                                <span className={`text-xs sm:text-sm ${
                                    step >= s 
                                        ? 'text-[#502D55] dark:text-[#D4AF37] font-medium' 
                                        : 'text-gray-400'
                                }`}>
                                    {s === 1 ? 'Shipping' : s === 2 ? 'Processing' : 'Confirm'}
                                </span>
                                {s < 3 && (
                                    <div className={`w-8 sm:w-16 h-0.5 ${
                                        step > s ? 'bg-[#935073]' : 'bg-gray-200 dark:bg-dark-lighter'
                                    }`} />
                                )}
                            </div>
                        ))}
                    </div>

                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        >
                            <div className="bg-white dark:bg-dark-lighter rounded-2xl p-6 sm:p-8 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20">
                                <h2 className="text-xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-6 flex items-center gap-2">
                                    <Truck className="w-5 h-5 text-[#935073]" />
                                    Shipping Details
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0] transition-all" />
                                    <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0] transition-all" />
                                    <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0] transition-all" />
                                    <input type="text" name="address" placeholder="Address *" value={formData.address} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0] transition-all" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" name="city" placeholder="City *" value={formData.city} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0] transition-all" />
                                        <input type="text" name="zip" placeholder="ZIP *" value={formData.zip} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0] transition-all" />
                                    </div>
                                    <select name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 bg-[#F8F4E9] dark:bg-dark rounded-xl border border-[#F6DBC0]/20 dark:border-primary-dark/20 focus:border-[#935073] focus:ring-2 focus:ring-[#935073]/20 outline-none dark:text-[#F6DBC0] transition-all">
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading} className="w-full py-3.5 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-xl font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                                        {loading ? 'Placing Order...' : 'Place Order'} <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </form>
                            </div>

                            <div className="bg-white dark:bg-dark-lighter rounded-2xl p-6 sm:p-8 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 h-fit sticky top-24">
                                <h2 className="text-xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-6">Order Summary</h2>
                                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex items-center gap-3 py-2 border-b border-[#F6DBC0]/10 dark:border-primary-dark/10">
                                            <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-[#502D55] dark:text-[#D4AF37] truncate">{item.name}</p>
                                                <p className="text-xs text-[#935073]">${(item.discountPrice || item.price).toFixed(2)} x {item.quantity}</p>
                                            </div>
                                            <span className="font-medium text-[#502D55] dark:text-[#D4AF37]">${((item.discountPrice || item.price) * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-[#F6DBC0]/20 dark:border-primary-dark/20 pt-4 mt-4 space-y-2">
                                    <div className="flex justify-between text-sm"><span className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">Subtotal</span><span className="font-medium">${totalPrice.toFixed(2)}</span></div>
                                    <div className="flex justify-between text-sm"><span className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">Delivery</span><span className="font-medium">$5.00</span></div>
                                    <div className="flex justify-between text-sm"><span className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">Tax</span><span className="font-medium">${(totalPrice * 0.08).toFixed(2)}</span></div>
                                    <div className="border-t border-[#F6DBC0]/20 dark:border-primary-dark/20 pt-3 mt-3">
                                        <div className="flex justify-between text-lg font-display font-bold"><span className="text-[#502D55] dark:text-[#D4AF37]">Total</span><span className="text-[#935073] dark:text-[#D4AF37]">${(totalPrice + 5 + totalPrice * 0.08).toFixed(2)}</span></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                            <div className="w-20 h-20 border-4 border-[#935073]/30 border-t-[#935073] rounded-full animate-spin mx-auto mb-6" />
                            <h2 className="text-2xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">Processing Your Order...</h2>
                            <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">Please wait while we confirm your order</p>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16 bg-white dark:bg-dark-lighter rounded-2xl shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 p-8">
                            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-12 h-12 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                Order Placed! 🌸
                            </h2>
                            <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2 max-w-md mx-auto">
                                Your bouquet order has been placed successfully. 
                                You will receive a confirmation email shortly.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center mt-8">
                                <Link to="/shop" className="px-8 py-3 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-xl font-medium hover:shadow-lg transition-shadow">
                                    Continue Shopping
                                </Link>
                                <Link to="/dashboard" className="px-8 py-3 bg-white dark:bg-dark text-[#502D55] dark:text-[#D4AF37] rounded-xl font-medium border border-[#F6DBC0]/20 dark:border-primary-dark/20 hover:shadow-lg transition-shadow">
                                    Go to Dashboard
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </PageTransition>
    );
};

export default CheckoutPage;