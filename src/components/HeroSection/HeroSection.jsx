import { motion } from 'framer-motion';
import { CodeBracketIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    const floatingCode = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="bg-gradient-to-br from-gray-50 bg-white min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-6 py-24">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={container}
                    className="flex flex-col lg:flex-row items-center justify-between gap-12"
                >
                    {/* Left Column - Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div variants={item}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ext-blue-600 mb-6">
                                Hi, I'm <span className="text-blue-600">TI</span>
                            </h1>
                        </motion.div>

                        <motion.div variants={item}>
                            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 flex items-center">
                                MERN Stack Developer
                            </h2>
                        </motion.div>

                        <motion.p variants={item} className="text-lg text-gray-500 mb-10 leading-relaxed">
                            "<span className="font-semibold text-blue-600">I </span>am a junior <span className="font-semibold text-blue-600"> software engineer</span>. I <span className="font-semibold text-blue-600"> love programming</span> in JavaScript.<br/> I use <span className="font-semibold text-blue-600"> AI tools</span>  to make daily tasks <span className="font-semibold text-blue-600"> easier and more efficient</span>."
                        </motion.p>

                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition duration-300 shadow-md flex items-center">
                                <CursorArrowRaysIcon className="h-5 w-5 mr-2" />
                                View Projects
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg transition duration-300">
                                Contact Me
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column - Animated Code Window */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            variants={floatingCode}
                            animate="animate"
                            className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
                        >
                            {/* Code Window Header */}
                            <div className="flex items-center px-4 py-3 bg-gray-100 border-b">
                                <div className="flex space-x-2 mr-4">
                                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                </div>
                                <div className="text-sm text-gray-500">App.jsx</div>
                            </div>

                            {/* Animated Code Block */}
                            <div className="p-6 font-mono text-sm md:text-base">
                                <motion.div
                                    animate={{
                                        opacity: [0.6, 1, 0.6],
                                        transition: { duration: 3, repeat: Infinity }
                                    }}
                                >
                  <pre className="text-gray-700">
                    <code>
                      <span className="text-blue-600">import </span> React
                        <span className="text-blue-600"> from </span> "React";
                    </code>
                  </pre>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Floating Components */}
                        <motion.div
                            animate={{
                                x: [0, 15, 0],
                                y: [0, -20, 0],
                                rotate: [0, 5, 0],
                                transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute -bottom-10 -right-10 bg-blue-100 p-4 rounded-lg shadow-md"
                        >
                            <CodeBracketIcon className="h-10 w-10 text-blue-600" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;