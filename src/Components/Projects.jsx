import react from 'react';
import '../Stylesheets/Projects.css';
import '../Data/projects.js';
import projects from '../Data/projects.js';

function Projects() {
    
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h2>{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <p className="project-tools"><strong>Tools Used:</strong> {project.toolsUsed}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project
                        </a>
                    </div>
            ))}
            </div>
        </section>
    )

}

export default Projects;