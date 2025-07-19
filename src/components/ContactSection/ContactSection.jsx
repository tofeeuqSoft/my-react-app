import { motion } from 'framer-motion';
import { useState } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate form submission
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                // Hide success message after 5 seconds
                setTimeout(() => setSubmitSuccess(false), 5000);
            }, 1500);
        }
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="contact" className="bg-gray-50 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                         <span className="text-blue-600">Contact</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">

                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:w-1/3"
                    >
                        <div className="space-y-8">
                            {/* Contact Card 1 */}
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                                    <MapPinIcon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Location</h3>
                                    <p className="text-gray-600">Rajshahi, Bangladesh</p>
                                </div>
                            </div>

                            {/* Contact Card 2 */}
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                                    <a href="mailto:tauhidulislam1928@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                                        tauhidulislam1928@gmail.com

                                    </a>
                                </div>
                            </div>

                            {/* Contact Card 3 */}
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                                    <a href="tel:+880 1648-522262" className="text-gray-600 hover:text-blue-600 transition-colors">
                                        +880 1648-522262
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-4">
                                <h3 className="text-lg  font-semibold text-gray-800 mb-4">Social</h3>
                                <div className="flex space-x-4">
                                    {['github', 'linkedin', 'twitter', 'linkedin'].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors"
                                            aria-label={social}
                                        >
                                            <img
                                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${social}/${social}-original.svg`}
                                                alt={social}
                                                className="h-5 w-5"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-sm">
                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                                    Thank you for your message! I'll get back to you soon.
                                </div>
                            )}

                            {/* Name Field */}
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    placeholder="Tauhidul Islam"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    placeholder="tauhidulislam1928@gmail.com"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="2"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    placeholder="Hay!"
                                ></textarea>
                                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;