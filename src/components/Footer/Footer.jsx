import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="bg-blue-600 w-2 h-2 rounded-full mr-2"></span>
                            Connect
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:text-white"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-xl" />
                            </a>
                        </div>
                        <p className="mt-2 max-w-xs">
                            Follow my coding journey and explore my projects.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="bg-blue-600 w-2 h-2 rounded-full mr-2"></span>
                            Contact
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-blue-500 mr-3" />
                                <a href="mailto:contact@yourdomain.com" className="hover:text-white transition-colors">
                                    contact@yourdomain.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-blue-500 mr-3" />
                                <a href="tel:+8801234567890" className="hover:text-white transition-colors">
                                    +880 1234 567890
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* About Section (Replaces Navigation) */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="bg-blue-600 w-2 h-2 rounded-full mr-2"></span>
                            About
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            A passionate MERN stack developer dedicated to building efficient and
                            user-friendly web applications. Focused on clean code, modern practices,
                            and delivering impactful digital solutions.
                        </p>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 mt-12 pt-6 text-center">
                    <p className="text-gray-500">
                        &copy; {currentYear} MERN Stack Developer Portfolio. All rights reserved.
                    </p>
                    <p className="text-sm mt-2 text-gray-600">
                        Built with React, Node.js, Express & MongoDB
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;