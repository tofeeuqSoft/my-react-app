import React from "EducationSection.jsx"
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const ExperienceSection = () => {
    const experiences = [
        {
            id: 1,
            role: "Frontend Developer",
            company: "Tech Solutions Inc.",
            duration: "Jan 2022 - Present",
            responsibilities: [
                "Developed responsive web applications using React.js and Next.js",
                "Collaborated with UX designers to implement pixel-perfect interfaces",
                "Optimized application performance reducing load time by 40%",
                "Mentored junior developers in modern JavaScript practices"
            ],
            current: true
        },
        {
            id: 2,
            role: "Junior Web Developer",
            company: "Digital Creations",
            duration: "Mar 2020 - Dec 2021",
            responsibilities: [
                "Built and maintained company websites using React and Tailwind CSS",
                "Implemented RESTful API integrations",
                "Participated in agile development cycles",
                "Fixed bugs and improved existing features"
            ]
        },
        {
            id: 3,
            role: "Web Development Intern",
            company: "StartUp Labs",
            duration: "Jun 2019 - Feb 2020",
            responsibilities: [
                "Assisted in developing UI components",
                "Learned modern web development workflows",
                "Contributed to open-source projects",
                "Participated in code reviews"
            ]
        }
    ];

    return (
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        My professional journey and contributions
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline bar */}


                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`mb-8 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Timeline dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white z-10 mx-auto md:mx-0">
                                    <FaBriefcase className="text-lg" />
                                </div>

                                {/* Experience card */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8 md:pr-4' : 'md:pr-8 md:pl-4'} mt-2 md:mt-0`}>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                                        <div className="flex flex-col sm:flex-row justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                                            {exp.current && (
                                                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                          Current
                        </span>
                                            )}
                                        </div>
                                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>

                                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                                            <FaCalendarAlt className="mr-2" />
                                            <span>{exp.duration}</span>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-blue-500 mr-2">•</span>
                                                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;