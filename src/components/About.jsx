function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-heading">
                    <p>ABOUT ME</p>
                    <h2>Who I Am</h2>
                </div>

                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I am a Frontend Developer focused on building modern,
                            responsive and user-friendly web applications.
                        </p>

                        <p>
                            I enjoy working with ReactJS and learning new technologies
                            to improve my frontend development skills.
                        </p>

                        <p>
                            My goal is to become a professional Frontend Developer and
                            contribute to real-world products with a strong development
                            team.
                        </p>
                    </div>

                    <div className="about-info">
                        <div>
                            <span>Name</span>
                            <strong>Huynh Tuan Kiet</strong>
                        </div>

                        <div>
                            <span>Role</span>
                            <strong>Frontend Developer</strong>
                        </div>

                        <div>
                            <span>Main Stack</span>
                            <strong>ReactJS</strong>
                        </div>

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

export default About;