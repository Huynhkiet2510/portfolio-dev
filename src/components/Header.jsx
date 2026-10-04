import { FaGithub } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
        setIsOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-inner">
                <button
                    className="logo"
                    onClick={() => scrollToSection("home")}
                >
                    Kiet.
                </button>

                <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
                    <button onClick={() => scrollToSection("home")}>
                        Home
                    </button>

                    <button onClick={() => scrollToSection("about")}>
                        About
                    </button>

                    <button onClick={() => scrollToSection("skills")}>
                        Skills
                    </button>

                    <button onClick={() => scrollToSection("projects")}>
                        Projects
                    </button>

                    <button onClick={() => scrollToSection("contact")}>
                        Contact
                    </button>
                </nav>

                <div className="header-actions">
                    <a
                        href="https://github.com/Huynhkiet2510"
                        target="_blank"
                        rel="noreferrer"
                        className="github-link"
                    >
                        <FaGithub size={20} />
                    </a>

                    <button
                        className="menu-button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <FiX size={24} />
                        ) : (
                            <FiMenu size={24} />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;