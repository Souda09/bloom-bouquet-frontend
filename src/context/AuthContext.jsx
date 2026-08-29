import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from '../api/axios';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // ✅ Check if user is Admin
    const isAdmin = user?.role === 'Admin';

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                const storedToken = localStorage.getItem('token');
                
                if (storedUser && storedToken) {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);
                    setIsAuthenticated(true);
                    
                    // Verify token with server
                    const response = await axios.get('/auth/me');
                    if (response.data.success) {
                        const userData = response.data.user;
                        setUser(userData);
                        setIsAuthenticated(true);
                        localStorage.setItem('user', JSON.stringify(userData));
                        console.log('✅ User role:', userData.role); // Debug
                    }
                }
            } catch (error) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const register = async (userData) => {
        try {
            const response = await axios.post('/auth/register', userData);
            
            if (response.data.success) {
                const { token, user } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                setUser(user);
                setIsAuthenticated(true);
                
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: `Welcome ${user.name}!`,
                    timer: 3000,
                    showConfirmButton: false,
                    background: '#1A1A2E',
                    color: '#F6DBC0',
                });
                
                return { success: true, user };
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.response?.data?.message || 'Something went wrong',
                background: '#1A1A2E',
                color: '#F6DBC0',
                confirmButtonColor: '#935073',
            });
            return { success: false, error: error.response?.data?.message };
        }
    };

    const login = async (credentials) => {
        try {
            const response = await axios.post('/auth/login', credentials);
            
            if (response.data.success) {
                const { token, user } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                setUser(user);
                setIsAuthenticated(true);
                
                console.log('✅ Login successful. User role:', user.role); // Debug
                
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: `Welcome back ${user.name}!`,
                    timer: 2000,
                    showConfirmButton: false,
                    background: '#1A1A2E',
                    color: '#F6DBC0',
                });
                
                return { success: true, user };
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: error.response?.data?.message || 'Invalid credentials',
                background: '#1A1A2E',
                color: '#F6DBC0',
                confirmButtonColor: '#935073',
            });
            return { success: false, error: error.response?.data?.message };
        }
    };

    const logout = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out of your account',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#935073',
            confirmButtonText: 'Yes, logout',
            background: '#1A1A2E',
            color: '#F6DBC0',
        });

        if (result.isConfirmed) {
            try {
                await axios.post('/auth/logout');
                
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null);
                setIsAuthenticated(false);
                
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out',
                    text: 'You have been successfully logged out',
                    timer: 2000,
                    showConfirmButton: false,
                    background: '#1A1A2E',
                    color: '#F6DBC0',
                });
                
                return { success: true };
            } catch (error) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null);
                setIsAuthenticated(false);
                
                Swal.fire({
                    icon: 'error',
                    title: 'Logout Error',
                    text: 'There was an issue logging out, but your session has been cleared locally',
                    background: '#1A1A2E',
                    color: '#F6DBC0',
                    confirmButtonColor: '#935073',
                });
                return { success: false };
            }
        }
        return { success: false, cancelled: true };
    };

    const value = {
        user,
        loading,
        isAuthenticated,
        register,
        login,
        logout,
        isAdmin,  // ✅ Fixed: Directly from user.role
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};