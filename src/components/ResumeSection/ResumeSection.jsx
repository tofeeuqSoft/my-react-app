import React from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
const ResumeSection = () => {
    // Resume data
    const resumePages = [
        {
            id: 1,
            title: "Professional Experience",
            url: "/experience",
            description: "View my work history and career progression"
        },
        {
            id: 2,
            title: "Technical Skills",
            url: "/skills",
            description: "See my technical competencies and proficiencies"
        },
        {
            id: 3,
            title: "Education",
            url: "/education",
            description: "Review my academic background and certifications"
        }
    ];

    // CV download handler
    const handleDownloadCV = () => {
        // Replace with your actual CV file path
        const cvUrl = '/path/to/your/cv.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'YourName_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="resume" className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                         <span className="text-blue-600 dark:text-blue-400">My Resume</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore my professional background and qualifications
                    </p>
                </div>

                {/* Resume Navigation Buttons */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {resumePages.map((page) => (
                            <a

                                key={page.id}
                                href={page.url}
                                className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
                            >
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">

                                        {page.title}


                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {page.description}
                                </p>

                            </a>
                        ))}
                    </div>


                {/* CV Download Section */}
                <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                            <FaFilePdf className="text-3xl text-red-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                    Download Full CV
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Get a complete copy of my resume in PDF format
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleDownloadCV}
                            className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                        >
                            <FaDownload className="mr-2" />
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;