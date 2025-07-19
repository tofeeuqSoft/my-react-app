import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon, TrophyIcon } from '@heroicons/react/24/outline';

const EducationSection = () => {
    const educationData = [
        {
            id: 1,
            degree: "SSC/Equivalent",
            institution: "Kumorpur Alim Madrashah",
            board: "Madrashah",
            year: "2015 - 2017",
            result: "GPA: 5.00",
            icon: <BookOpenIcon className="h-6 w-6 text-blue-500" />
        },
        {
            id: 2,
            degree: "HSC/Equivalent",
            institution: "Varendra College,Rajshahi",
            board: "Rajshahi",
            year: "2017 - 2019",
            result: "GPA: 4.00",
            icon: <AcademicCapIcon className="h-6 w-6 text-blue-500" />
        },
        {
            id: 3,
            degree: "BSc in Computer Science",
            institution: "Varendra University, Rajshahi",
            board: "Dept. of CSE",
            year: "2019 - 2025",
            result: "CGPA: 2.90/4.00",
            icon: <TrophyIcon className="h-6 w-6 text-blue-500" />
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section id="education" className="bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                         <span className="text-blue-600"> Education</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        My academic journey and qualifications in computer science
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {educationData.map((edu) => (
                        <motion.div
                            key={edu.id}
                            variants={fadeIn}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        {edu.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 pl-16">
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-gray-600">{edu.year}</span>
                                    </div>

                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span className="text-gray-600">{edu.board}</span>
                                    </div>

                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-gray-600 font-medium">{edu.result}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;