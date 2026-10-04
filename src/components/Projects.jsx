import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "MovieWeb",
        description:
            "A movie website that allows users to discover movies, search content and manage authentication.",
        tech: ["React", "Redux Toolkit", "TMDB API", "Tailwind CSS"],
        demo: "https://movie-web-yzeh.vercel.app/",
        github: "https://github.com/Huynhkiet2510/MovieWeb",
    },
    {
        title: "E-Commerce Website",
        description:
            "An e-commerce interface focused on product browsing, responsive UI and modern frontend development.",
        tech: ["React", "JavaScript", "Tailwind CSS", "API"],
        demo: "#",
        github: "https://github.com/Huynhkiet2510/E-Commerce-Website",
    },
    {
        title: "Blog Router App",
        description:
            "A blog management application with CRUD functionality, routing and state management.",
        tech: ["React", "React Router", "Context API", "useReducer"],
        demo: "https://blog-router-app-rose.vercel.app/",
        github: "https://github.com/Huynhkiet2510/Blog-Router-App",
    },
    {
        title: "E-Learning Platform",
        description:
            "An e-learning platform UI with course catalog, course details, authentication and learning pages.",
        tech: ["React", "React Router", "Axios", "Tailwind CSS"],
        demo: "#",
        github: "#",
    },
];

function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-heading">
                    <p>MY WORK</p>
                    <h2>Featured Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-preview">
                                <span>{project.title}</span>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FiExternalLink size={17} />
                                            Live Demo
                                        </a>
                                    )}

                                    {project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaGithub size={17} />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;