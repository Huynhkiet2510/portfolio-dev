import { FaGithub } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";

function Contact() {
    return (
        <section className="section section-dark" id="contact">
            <div className="container contact-container">
                <div className="section-heading section-heading-light">
                    <p>CONTACT</p>
                    <h2>Let's Work Together</h2>
                </div>

                <p className="contact-description">
                    I am currently looking for opportunities as a Frontend Developer.
                    Feel free to contact me if you have a suitable opportunity.
                </p>

                <div className="contact-grid">
                    <a
                        href="mailto:your-email@gmail.com"
                        className="contact-item"
                    >
                        <FiMail size={22} />

                        <div>
                            <span>Email</span>
                            <strong>huynhtuankiet25102003</strong>
                        </div>
                    </a>

                    <a
                        href="https://github.com/Huynhkiet2510"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-item"
                    >
                        <FaGithub size={22} />

                        <div>
                            <span>GitHub</span>
                            <strong>Huynhkiet2510</strong>
                        </div>
                    </a>

                    <div className="contact-item">
                        <FiMapPin size={22} />

                        <div>
                            <span>Location</span>
                            <strong>Vietnam</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;