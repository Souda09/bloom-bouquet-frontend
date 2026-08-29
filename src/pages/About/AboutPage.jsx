import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
    Flower2, Crown, Users, Target, Heart, Shield, 
    Sparkles, Mail, MapPin, Phone, Award, Star, 
    ShoppingBag, Truck, Clock, Leaf, Sun, Moon
} from 'lucide-react';
import PageTransition from '../../components/common/PageTransition';

// ===== Floating Petals Component =====
const FloatingPetals = () => {
    const petals = ['🌸', '🌺', '🌷', '🌹', '💐', '🌻', '🌿'];
    const positions = Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 16 + Math.random() * 24,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 10,
        rotation: Math.random() * 360,
        petal: petals[Math.floor(Math.random() * petals.length)],
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {positions.map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute text-white/15"
                    style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        fontSize: pos.size,
                    }}
                    animate={{
                        y: [0, -80, 0],
                        x: [0, 20, -20, 0],
                        rotate: [0, pos.rotation, 0],
                        opacity: [0.15, 0.4, 0.15],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: pos.duration,
                        delay: pos.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    {pos.petal}
                </motion.div>
            ))}
        </div>
    );
};

// ===== Feature Card Component =====
const FeatureCard = ({ feature, index }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const bouquetImages = [
        'https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886043/bloombouquet/jqwc7h5vw7wahtfqlwlj.jpg',
        'https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886044/bloombouquet/j9boe5qggb0vzx5kdaab.jpg',
        'https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886045/bloombouquet/lg002ibunhsqgewxa3bj.jpg',
        'https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886046/bloombouquet/peyfkyympbucdqldahau.jpg',
        'https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886047/bloombouquet/ocasfa12dmhgnes3yokx.jpg',
        'https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886048/bloombouquet/hhirqwn5lcdtdoqza7cx.jpg',
    ];

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: 'easeOut',
                    },
                },
            }}
            whileHover={{
                y: -12,
                boxShadow: '0 25px 50px rgba(80, 45, 85, 0.25)',
                transition: { duration: 0.3 },
            }}
            className="group relative bg-white dark:bg-dark-lighter rounded-2xl overflow-hidden shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20 hover:shadow-2xl transition-all duration-300"
        >
            {/* Background Bouquet Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden">
                <img
                    src={bouquetImages[index % bouquetImages.length]}
                    alt=""
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-lighter via-transparent to-transparent" />
            </div>

            <div className="relative z-10 p-6">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-[#502D55] dark:text-[#D4AF37] group-hover:text-[#935073] transition-colors">
                    {feature.title}
                </h3>
                <p className="text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2 leading-relaxed">
                    {feature.desc}
                </p>

                {/* Small decorative flower */}
                <motion.div
                    animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute bottom-3 right-3 text-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                >
                    {feature.emoji}
                </motion.div>
            </div>
        </motion.div>
    );
};

// ===== About Page =====
const AboutPage = () => {
    const teamMembers = [
        { 
            name: 'Aisha Khan', 
            role: 'Master Florist & Founder', 
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
            bio: '15+ years of floral design experience'
        },
        { 
            name: 'Zara Ahmed', 
            role: 'Creative Director', 
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            bio: 'Passionate about unique flower arrangements'
        },
        { 
            name: 'Omar Farooq', 
            role: 'Head Florist', 
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            bio: 'Specializes in wedding bouquets'
        },
        { 
            name: 'Sana Malik', 
            role: 'Customer Experience', 
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
            bio: 'Ensures every delivery brings a smile'
        },
    ];

    const values = [
        { 
            icon: Leaf, 
            title: 'Fresh Flowers', 
            desc: 'We source the freshest flowers daily from sustainable farms.',
            emoji: '🌿',
            color: 'from-green-400 to-emerald-600',
        },
        { 
            icon: Heart, 
            title: 'Handcrafted with Love', 
            desc: 'Every bouquet is carefully arranged by our expert florists.',
            emoji: '❤️',
            color: 'from-red-400 to-pink-600',
        },
        { 
            icon: Star, 
            title: 'Premium Quality', 
            desc: 'We never compromise on quality and freshness.',
            emoji: '⭐',
            color: 'from-yellow-400 to-orange-500',
        },
        { 
            icon: Truck, 
            title: 'Same Day Delivery', 
            desc: 'Fast and reliable delivery right to your doorstep.',
            emoji: '🚚',
            color: 'from-blue-400 to-indigo-600',
        },
        { 
            icon: Shield, 
            title: '100% Satisfaction', 
            desc: 'Your happiness is our top priority.',
            emoji: '🛡️',
            color: 'from-purple-400 to-violet-600',
        },
        { 
            icon: Sparkles, 
            title: 'Unique Designs', 
            desc: 'Each bouquet is a unique work of art.',
            emoji: '✨',
            color: 'from-[#502D55] to-[#935073]',
        },
    ];

    // Bouquet images for hero
    const bouquetLeft = 'https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886043/bloombouquet/jqwc7h5vw7wahtfqlwlj.jpg';
    const bouquetRight = 'https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886044/bloombouquet/j9boe5qggb0vzx5kdaab.jpg';

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#F8F4E9] dark:bg-[#1A1A2E] transition-colors duration-300">
                <Navbar />

                {/* ===== HERO SECTION – "The Art of Floral Expression" ===== */}
                <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37] overflow-hidden min-h-[600px] flex items-center">
                    {/* Floating Petals Background */}
                    <FloatingPetals />

                    {/* Content */}
                    <div className="max-w-7xl mx-auto relative z-10 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column – Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: 'spring' }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                                >
                                    <Flower2 className="w-5 h-5 text-[#F6DBC0]" />
                                    <span className="text-sm font-medium text-white">🌸 BloomBouquet</span>
                                </motion.div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-white font-bold leading-tight">
                                    The Art of <br />
                                    <span className="text-[#F6DBC0]">Floral Expression</span>
                                </h1>
                                <p className="text-white/80 text-lg mt-4 max-w-lg leading-relaxed">
                                    We create beautiful, handcrafted bouquets that speak the language of flowers.
                                    From weddings to birthdays, every occasion deserves something special.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Link to="/shop" className="px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow">
                                        Explore Collection
                                    </Link>
                                    <Link to="/contact" className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-colors">
                                        Contact Us
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Right Column – Floating Bouquet Images */}
                            <div className="relative h-[400px] flex items-center justify-center">
                                {/* Left Bouquet – slides in from left */}
                                <motion.div
                                    initial={{ opacity: 0, x: -100, rotate: -10 }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    transition={{
                                        delay: 2,
                                        duration: 1,
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 15,
                                    }}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-48 sm:w-64 z-20"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -12, 0],
                                            rotate: [0, 3, -3, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                        className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30"
                                    >
                                        <img
                                            src={bouquetLeft}
                                            alt="Beautiful bouquet"
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#502D55]/40 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                                            <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                🌸 Wedding Collection
                                            </span>
                                            <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                ⭐ 4.9/5
                                            </span>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Right Bouquet – slides in from right */}
                                <motion.div
                                    initial={{ opacity: 0, x: 100, rotate: 10 }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    transition={{
                                        delay: 2.3,
                                        duration: 1,
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 15,
                                    }}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 w-48 sm:w-64 z-10"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, 12, 0],
                                            rotate: [0, -3, 3, 0],
                                        }}
                                        transition={{
                                            duration: 4.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: 0.5,
                                        }}
                                        className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30"
                                    >
                                        <img
                                            src={bouquetRight}
                                            alt="Romantic bouquet"
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#502D55]/40 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                                            <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                💕 Romantic Collection
                                            </span>
                                            <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                ⭐ 4.8/5
                                            </span>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Center decorative element */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute center text-7xl text-white/10"
                                >
                                    💐
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== STATS SECTION ===== */}
                <section className="py-12 px-4 sm:px-6 bg-white dark:bg-dark-lighter">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { number: '10,000+', label: 'Happy Customers', icon: Users },
                                { number: '5,000+', label: 'Bouquets Delivered', icon: ShoppingBag },
                                { number: '4.9/5', label: 'Average Rating', icon: Star },
                                { number: '24/7', label: 'Customer Support', icon: Clock },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center p-4"
                                >
                                    <stat.icon className="w-8 h-8 text-[#935073] dark:text-[#D4AF37] mx-auto mb-2" />
                                    <h3 className="text-2xl sm:text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                        {stat.number}
                                    </h3>
                                    <p className="text-sm text-[#502D55]/60 dark:text-[#F6DBC0]/60">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== "What Makes Us Special" SECTION ===== */}
                <section className="py-16 px-4 sm:px-6 bg-[#F8F4E9] dark:bg-[#1A1A2E]">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                What Makes Us Special 🌸
                            </h2>
                            <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">
                                Our commitment to quality and creativity
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <FeatureCard key={index} feature={value} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== OUR STORY SECTION ===== */}
                <section className="py-16 px-4 sm:px-6 bg-white dark:bg-dark-lighter">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left – Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold mb-4 flex items-center gap-2">
                                    <Crown className="w-8 h-8 text-[#D4AF37]" />
                                    Our Story
                                </h2>
                                <p className="text-[#502D55]/70 dark:text-[#F6DBC0]/70 leading-relaxed">
                                    BloomBouquet was born from a simple idea – to bring the beauty of fresh flowers 
                                    to every home and occasion. Founded by master florist Aisha Khan, we've been 
                                    creating stunning, handcrafted bouquets that capture emotions and create memories.
                                </p>
                                <p className="text-[#502D55]/70 dark:text-[#F6DBC0]/70 leading-relaxed mt-4">
                                    From intimate weddings to grand celebrations, our team of expert florists 
                                    pours their heart into every arrangement, ensuring that each bouquet tells 
                                    a unique story.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-6">
                                    <span className="px-3 py-1 bg-[#935073]/10 text-[#935073] dark:text-[#D4AF37] rounded-full text-sm">🌸 Fresh Flowers</span>
                                    <span className="px-3 py-1 bg-[#935073]/10 text-[#935073] dark:text-[#D4AF37] rounded-full text-sm">💐 Expert Arrangements</span>
                                    <span className="px-3 py-1 bg-[#935073]/10 text-[#935073] dark:text-[#D4AF37] rounded-full text-sm">🚚 Same Day Delivery</span>
                                </div>
                            </motion.div>

                            {/* Right – Two Bouquet Images */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Left Bouquet */}
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: -2 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                                    >
                                        <img 
                                            src="https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886043/bloombouquet/jqwc7h5vw7wahtfqlwlj.jpg" 
                                            alt="Elegant White Rose Wedding Bouquet"
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#502D55]/30 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                                            <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                🌸 Wedding Collection
                                            </span>
                                            <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                ⭐ 4.9/5
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Right Bouquet */}
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative rounded-2xl overflow-hidden shadow-2xl mt-8"
                                    >
                                        <img 
                                            src="https://res.cloudinary.com/dvsurkwnt/image/upload/v1787886044/bloombouquet/j9boe5qggb0vzx5kdaab.jpg" 
                                            alt="Romantic Red Rose Bridal Bouquet"
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#502D55]/30 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                                            <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                💕 Romantic Collection
                                            </span>
                                            <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                ⭐ 4.8/5
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Decorative floating flower */}
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute -top-6 -right-6 text-5xl text-[#D4AF37]/20"
                                >
                                    🌸
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ===== TEAM SECTION ===== */}
                <section className="py-16 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-display text-[#502D55] dark:text-[#D4AF37] font-bold">
                                Meet Our Florists 🌺
                            </h2>
                            <p className="text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-2">
                                The passionate team behind BloomBouquet
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="text-center bg-white dark:bg-dark-lighter rounded-xl p-4 shadow-lg border border-[#F6DBC0]/20 dark:border-primary-dark/20"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-[#935073]/20"
                                    />
                                    <h3 className="text-base sm:text-lg font-semibold text-[#502D55] dark:text-[#D4AF37] mt-4">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-[#935073] dark:text-[#D4AF37] font-medium">
                                        {member.role}
                                    </p>
                                    <p className="text-xs text-[#502D55]/60 dark:text-[#F6DBC0]/60 mt-1">
                                        {member.bio}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CTA SECTION ===== */}
                <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-[#502D55] via-[#935073] to-[#D4AF37]">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-display text-white font-bold">
                                Ready to Order? 🌸
                            </h2>
                            <p className="text-white/80 mt-4">
                                Let us create the perfect bouquet for your special occasion
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center mt-8">
                                <Link to="/shop" className="px-8 py-3 bg-white text-[#502D55] rounded-xl font-medium hover:shadow-xl transition-shadow">
                                    Shop Now
                                </Link>
                                <Link to="/contact" className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-colors">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ===== FOOTER ===== */}
                <Footer />
            </div>
        </PageTransition>
    );
};

// ========== NAVBAR ==========
const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-lighter/80 backdrop-blur-xl border-b border-[#F6DBC0]/20 dark:border-primary-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <Link to="/" className="flex items-center gap-2">
                    <Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#935073] dark:text-[#D4AF37]" />
                    <span className="text-lg sm:text-xl font-display text-[#502D55] dark:text-[#D4AF37]">BloomBouquet</span>
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">Home</Link>
                    <Link to="/shop" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">Shop</Link>
                    <Link to="/about" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">About</Link>
                    <Link to="/contact" className="text-sm text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors">Contact</Link>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors">
                            <Sun className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
                        </button>
                        <button className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors">
                            <Moon className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
                        </button>
                    </div>
                    <Link to="/cart" className="p-2 hover:bg-[#935073]/10 rounded-full transition-colors relative">
                        <ShoppingBag className="w-5 h-5 text-[#502D55] dark:text-[#F6DBC0]" />
                    </Link>
                    <Link to="/login" className="text-sm sm:text-base text-[#502D55] dark:text-[#F6DBC0] hover:text-[#935073] transition-colors hidden sm:block">
                        Sign In
                    </Link>
                    <Link to="/signup" className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#502D55] to-[#935073] text-white text-sm sm:text-base rounded-lg hover:shadow-lg transition-shadow">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    </nav>
);

// ========== FOOTER ==========
const Footer = () => (
    <footer className="bg-[#502D55] dark:bg-dark-lighter border-t border-[#F6DBC0]/20 dark:border-primary-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <Flower2 className="w-6 h-6 text-[#D4AF37]" />
                        <span className="text-xl font-display text-[#D4AF37]">BloomBouquet</span>
                    </div>
                    <p className="text-[#F6DBC0]/60 text-sm max-w-xs">
                        Premium handcrafted bouquets for every occasion. Made with love and care.
                    </p>
                </div>
                <div>
                    <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Home</Link></li>
                        <li><Link to="/shop" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Shop</Link></li>
                        <li><Link to="/about" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">About</Link></li>
                        <li><Link to="/contact" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/help" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Help Center</Link></li>
                        <li><Link to="/contact" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
                        <li><Link to="/privacy" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="text-[#F6DBC0]/60 hover:text-[#D4AF37] transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[#D4AF37] font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3 text-[#F6DBC0]/60">
                            <Mail className="w-4 h-4 mt-0.5 text-[#D4AF37] flex-shrink-0" />
                            <span>support@bloombouquet.com</span>
                        </li>
                        <li className="flex items-start gap-3 text-[#F6DBC0]/60">
                            <Phone className="w-4 h-4 mt-0.5 text-[#D4AF37] flex-shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-start gap-3 text-[#F6DBC0]/60">
                            <MapPin className="w-4 h-4 mt-0.5 text-[#D4AF37] flex-shrink-0" />
                            <span>123 Flower St, NYC</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#F6DBC0]/10 mt-8 pt-6 text-center">
                <p className="text-xs sm:text-sm text-[#F6DBC0]/40">
                    © 2024 BloomBouquet. All rights reserved. 🌸
                </p>
            </div>
        </div>
    </footer>
);

export default AboutPage;