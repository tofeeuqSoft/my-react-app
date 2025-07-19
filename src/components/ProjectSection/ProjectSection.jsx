import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-featured online store with cart, checkout, and admin dashboard built with React js and Express js and running..",
            tags: ["React.js", "Express.js", "Tailwind CSS", "AI Tools"],
            image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            liveUrl: "#",
            codeUrl: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Kanban-style productivity application with drag-and-drop functionality and real-time updates.",
            tags: ["React.js", "MongoDB","Tailwind CSS","AI Tools"],
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            liveUrl: "#",
            codeUrl: "#"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "This is my Portfolio website. This website is the fully responsive mobile, user-friendly and firster",
            tags: ["React.js", "Tailwind CSS", "MongoDB","AI Tools"],
            image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            liveUrl: "#",
            codeUrl: "#"
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section id="projects" className="bg-white py-20 px-6">
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
                         <span className="text-blue-600">My Projects</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">

                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={fadeIn}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="flex space-x-3">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/90 text-gray-800 hover:bg-white p-2 rounded-full"
                                                aria-label={`View ${project.title} live demo`}
                                            >
                                                <EyeIcon className="h-5 w-5" />
                                            </a>
                                        )}
                                        {project.codeUrl && (
                                            <a
                                                href={project.codeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/90 text-gray-800 hover:bg-white p-2 rounded-full"
                                                aria-label={`View ${project.title} source code`}
                                            >
                                                <CodeBracketIcon className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex space-x-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                                        >
                                            Live Demo <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                                        </a>
                                    )}
                                    {project.codeUrl && (
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
                                        >
                                            Source Code <CodeBracketIcon className="h-4 w-4 ml-1" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300 inline-flex items-center">
                        View All Projects
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectSection;