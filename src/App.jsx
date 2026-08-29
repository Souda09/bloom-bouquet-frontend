import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import { Toaster } from 'react-hot-toast';

// Pages
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import FeaturesPage from './pages/Features/FeaturesPage';
import PricingPage from './pages/Pricing/PricingPage';
import ShopPage from './pages/Shop/ShopPage';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './Checkout/CheckoutPage';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider>
                    <AuthProvider>
                        <Toaster position="top-right" />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/features" element={<FeaturesPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/shop" element={<ShopPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/checkout" element={<CheckoutPage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                            <Route path="/admin/dashboard" element={<ProtectedRoute adminOnly={true}><AdminDashboard /></ProtectedRoute>} />
                            <Route path="*" element={<HomePage />} />
                        </Routes>
                    </AuthProvider>
                </ThemeProvider>
            </Router>
        </Provider>
    );
}

export default App;