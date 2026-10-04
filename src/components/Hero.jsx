import { FiArrowDown, FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-small">HELLO, I'M</p>

                    <h1>
                        Huynh Tuan <span>Kiet</span>
                    </h1>

                    <h2>Frontend Developer</h2>

                    <p className="hero-description">
                        I build modern and responsive web applications with ReactJS,
                        JavaScript and modern frontend technologies.
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="primary-button"
                            onClick={scrollToProjects}
                        >
                            View Projects
                            <FiArrowDown size={18} />
                        </button>

                        <a
                            href="/public/Huynh-Tuan-Kiet-TopCV.vn-041026.130325.pdf"
                            download
                            className="secondary-button"
                        >
                            <FiDownload size={18} />
                            Download CV
                        </a>
                    </div>

                    <a
                        href="https://github.com/Huynhkiet2510"
                        target="_blank"
                        rel="noreferrer"
                        className="hero-github"
                    >
                        <FaGithub size={18} />
                        github.com/Huynhkiet2510
                    </a>
                </div>

                <div className="hero-card">
                    <div className="hero-avatar">
                        <span>HK</span>
                    </div>

                    <div className="hero-card-content">
                        <p>Frontend Developer</p>
                        <strong>ReactJS Developer</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
