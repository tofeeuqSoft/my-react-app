import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const AboutSection = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="bg-gray-50 py-20 px-6">
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
                         <span className="text-blue-600">About Me</span>
                    </h2>

                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                        className="lg:w-1/3 flex justify-center"
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Developer Profile"
                                className="w-full max-w-xs rounded-xl shadow-lg border-8 border-white"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-3 rounded-lg shadow-md">
                                <CodeBracketIcon className="h-8 w-8 text-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:w-2/3"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            MERN Stack Software  Developer
                        </h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            I'm a passionate Software developer building (SPA) single-page applications.
                            I like the MERN Stack (MongoDB, Express, React, Node.js). For building SPA applications I focus on responsiveness, state management, API integration, performance, user-friendliness and security. etc.....
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Info List */}
                            <div>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-3">
                      <CpuChipIcon className="h-5 w-5 text-blue-600" />
                    </span>
                                        <span className="text-gray-700"><strong>Specialty:</strong> React Js & TailwindCSS</span>
                                    </li>
                                    <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-3">
                      <RocketLaunchIcon className="h-5 w-5 text-blue-600" />
                    </span>
                                        <span className="text-gray-700"><strong>Experience:</strong> 3+ Years</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-3">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                                        <span className="text-gray-700"><strong>Availability:</strong> Full-time</span>
                                    </li>
                                    <li className="flex items-center">
                    <span className="bg-blue-100 p-1 rounded-full mr-3">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                                        <span className="text-gray-700"><strong>Projects:</strong> 5+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-800 mb-4">My Skills</h4>
                            <div className="flex flex-wrap gap-3">
                                {['JavaScript', 'React js ', 'Node.js', 'Express js', 'Next.js', 'MongoDB', 'Tailwind CSS', 'AI Tools'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;