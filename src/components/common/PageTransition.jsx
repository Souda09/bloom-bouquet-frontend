import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 0.5,
            }}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;