import React from "react";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiCanva, SiFigma } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

const SkillsSection = () => {
    const skillCategories = [
        {
            name: "Frontend",
            skills: [
                { name: "React", icon: <FaReact className="text-blue-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> }
            ]
        },
        {
            name: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-white" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
            ]
        },
        {
            name: "Tools",
            skills: [
                { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
                { name: "AI Tools", icon: <TbBrandOpenai className="text-purple-600" /> },
                { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
                { name: "Figma", icon: <SiFigma className="text-purple-400" /> }
            ]
        }
    ];

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                     <span className="text-blue-600 dark:text-blue-400"> My Skills</span>
                </h2>

                <div className="max-w-2xl mx-auto text-center mb-12 text-gray-600 dark:text-gray-300">
                    <p>I am constantly trying to improve Research & my Skills </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-600"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                                <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                                {category.name}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex flex-col items-center p-3 rounded-md bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
                                    >
                                        <div className="text-3xl mb-2">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {skill.name}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;