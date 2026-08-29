import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../../redux/slices/cartSlice';
import { Flower2, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import PageTransition from '../../components/common/PageTransition';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

    const handleUpdateQuantity = (id, quantity) => {
        if (quantity < 1) {
            dispatch(removeFromCart(id));
            toast.success('Bouquet removed from cart');
        } else {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleCheckout = () => {
        if (!isAuthenticated) {
            toast.error('Please login or signup to place order 🌸', {
                duration: 3000,
                style: { background: '#1A1A2E', color: '#F6DBC0' },
            });
            navigate('/login', { state: { from: '/cart' } });
            return;
        }
        navigate('/checkout');
    };

    if (items.length === 0) {
        return (
            <PageTransition>
                <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
                    <Navbar />
                    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4">
                        <Flower2 className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-6" />
                        <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">Your cart is empty 🌸</h2>
                        <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">Looks like you haven't added any bouquets yet.</p>
                        <Link to="/shop" className="mt-6 px-8 py-3 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
                            Start Shopping
                        </Link>
                    </div>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                            Your Bouquet Cart 🌸
                        </h1>
                        <button onClick={() => { dispatch(clearCart()); toast.success('Cart cleared'); }} className="text-sm text-red-500 hover:text-red-600 transition-colors">
                            Clear Cart
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <motion.div key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-white dark:bg-dark-lighter rounded-xl p-4 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 flex flex-col sm:flex-row items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                                    <div className="flex-1 min-w-0 w-full">
                                        <h3 className="font-semibold text-[#502D55] dark:text-[#D4AF37] truncate">{item.name}</h3>
                                        <p className="text-[#935073] dark:text-[#D4AF37] font-bold">${(item.discountPrice || item.price).toFixed(2)}</p>
                                        <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60">{item.category}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="p-1.5 hover:bg-[#935073]/10 rounded-lg transition-colors"><Minus className="w-4 h-4 text-[#502D55] dark:text-[#F6DBC0]" /></button>
                                            <span className="w-8 text-center font-medium text-[#502D55] dark:text-[#F6DBC0]">{item.quantity}</span>
                                            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="p-1.5 hover:bg-[#935073]/10 rounded-lg transition-colors"><Plus className="w-4 h-4 text-[#502D55] dark:text-[#F6DBC0]" /></button>
                                        </div>
                                    </div>
                                    <button onClick={() => { dispatch(removeFromCart(item.id)); toast.success(`${item.name} removed`); }} className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors">
                                        <Trash2 className="w-5 h-5 text-red-500" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                        <div className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 h-fit sticky top-24">
                            <h3 className="text-xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-6">Order Summary</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm"><span className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">Subtotal</span><span className="font-medium text-[#502D55] dark:text-[#D4AF37]">${totalPrice.toFixed(2)}</span></div>
                                <div className="flex justify-between text-sm"><span className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">Delivery</span><span className="font-medium text-[#502D55] dark:text-[#D4AF37]">$5.00</span></div>
                                <div className="flex justify-between text-sm"><span className="text-[#502D55]/60 dark:text-[#F6DBC0]/60">Tax</span><span className="font-medium text-[#502D55] dark:text-[#D4AF37]">${(totalPrice * 0.08).toFixed(2)}</span></div>
                                <div className="border-t border-[#F6DBC0]/20 dark:border-primary-dark/20 pt-3 mt-3">
                                    <div className="flex justify-between text-lg font-display font-bold"><span className="text-[#502D55] dark:text-[#D4AF37]">Total</span><span className="text-[#935073] dark:text-[#D4AF37]">${(totalPrice + 5 + totalPrice * 0.08).toFixed(2)}</span></div>
                                </div>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full mt-6 py-3 bg-gradient-to-r from-[#502D55] to-[#935073] text-white rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                            >
                                Proceed to Checkout <ArrowRight className="w-4 h-4" />
                            </button>
                            {!isAuthenticated && (
                                <p className="text-xs text-center text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">
                                    🔐 Please login to place your order
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

// ========== NAVBAR ==========
const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-lighter/80 backdrop-blur-xl border-b border-[#F6DBC0]/20 dark:border-primary-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <Link to="/" className="flex items-center gap-2"><Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#935073] dark:text-[#D4AF37]" /><span className="text-lg sm:text-xl font-display text-[#502D55] dark:text-[#D4AF37]">BloomBouquet</span></Link>
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Home</Link>
                    <Link to="/shop" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">Shop</Link>
                    <Link to="/cart" className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors relative"><ShoppingBag className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" /></Link>
                </div>
            </div>
        </div>
    </nav>
);

export default CartPage;