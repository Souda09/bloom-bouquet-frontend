import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleTheme}
            className="relative w-12 h-7 sm:w-14 sm:h-8 rounded-full bg-gradient-to-r from-[#502D55] to-[#935073] p-1 transition-colors duration-300 flex-shrink-0"
        >
            <motion.div
                animate={{ x: isDark ? '100%' : '0%' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow-md flex items-center justify-center"
            >
                {isDark ? (
                    <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-[#502D55]" />
                ) : (
                    <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;