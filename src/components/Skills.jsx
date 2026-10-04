import {
    FiCode,
    FiDatabase,
    FiGitBranch,
    FiPenTool,
    FiTerminal,
    FiTool,
} from "react-icons/fi";

const skillGroups = [
    {
        icon: FiCode,
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "TypeScript"],
    },
    {
        icon: FiDatabase,
        title: "State & Data",
        skills: ["Redux Toolkit", "Context API", "REST API", "Axios"],
    },
    {
        icon: FiPenTool,
        title: "Styling",
        skills: ["Tailwind CSS", "CSS Modules", "Responsive Design"],
    },
    {
        icon: FiGitBranch,
        title: "Version Control",
        skills: ["Git", "GitHub", "GitLab"],
    },
    {
        icon: FiTerminal,
        title: "Development",
        skills: ["Vite", "React Router", "React Hook Form", "Zod"],
    },
    {
        icon: FiTool,
        title: "Tools",
        skills: ["VS Code", "Postman", "Figma", "Vercel"],
    },
];

function Skills() {
    return (
        <section className="section section-light" id="skills">
            <div className="container">
                <div className="section-heading">
                    <p>MY SKILLS</p>
                    <h2>Technologies I Use</h2>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group) => {
                        const Icon = group.icon;

                        return (
                            <div className="skill-card" key={group.title}>
                                <div className="skill-icon">
                                    <Icon size={24} />
                                </div>

                                <h3>{group.title}</h3>

                                <div className="skill-list">
                                    {group.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;