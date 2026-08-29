import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

export const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { isAuthenticated, user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-radial from-[#3D1F40] via-[#1A1A2E] to-[#502D55]">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-12 border-4 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full"
                />
            </div>
        );
    }

    if (!isAuthenticated) {
        Swal.fire({
            icon: 'warning',
            title: 'Authentication Required',
            text: 'Please login to access this page',
            background: '#1A1A2E',
            color: '#F6DBC0',
            confirmButtonColor: '#935073',
            timer: 2000,
            showConfirmButton: false,
        });
        return <Navigate to="/login" />;
    }

    if (adminOnly && user?.role !== 'Admin') {
        Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: 'You do not have permission to access this page. Admin access required.',
            background: '#1A1A2E',
            color: '#F6DBC0',
            confirmButtonColor: '#935073',
        });
        return <Navigate to="/dashboard" />;
    }

    return children;
};