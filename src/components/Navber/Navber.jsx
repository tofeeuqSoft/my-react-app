import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/16/solid/index.js";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close mobile menu when clicking on a nav item
    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    // Change navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white  py-2' : 'bg-white/90 py-4'}`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <a
                            href="/#"
                            className="text-2xl font-bold text-gray-800 flex items-center"
                            onClick={closeMobileMenu}
                        >
                            <span className="bg-blue-600 text-white p-2 rounded mr-2">TI</span>
                            <span> TAUHIDUL ISLAM</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                            </a>
                        ))}

                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-8 w-8" />
                            ) : (
                                <Bars3Icon className="h-8 w-8" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        >
                            {item.name}
                        </a>
                    ))}

                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
























