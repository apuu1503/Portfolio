import React from "react";

const projects = [
    {
        title: "ServiMatch",
        description: "A platform connecting vendors and users seamlessly.",
        technologies: "React, Redux, Node.js",
    },
    {
        title: "Real-Time Chatting Website",
        description: "A web app for real-time communication using Socket.io.",
        technologies: "React, Socket.io",
    },
    {
        title: "Build-Folio",
        description: "A portfolio-building website for professionals.",
        technologies: "React, Vite",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <p className="text-sm text-gray-600">{project.technologies}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
