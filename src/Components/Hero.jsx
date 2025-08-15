import react from 'react';
import '../Stylesheets/Hero.css';
import heroImg from '../Images/me.jpeg';

function Home() {

    function scrollToProjects() {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section id="hero" className="hero-section">
            <img src={heroImg} alt="Hero Background" className="hero-background" />
            <h1>Edgar Arroyo</h1>
            <h3> Software Developer </h3>
            <p>
                I'm a software developer with a strong foundation in Java, JavaScript, and web technologies. 
                I focus on writing clear, maintainable code and love turning complex problems into elegant solutions.
            </p>
            <div className="hero-links">
                <button className="call-to-action" onClick={() => scrollToProjects()}>
                    See My Work
                </button>
                <a className="call-to-action" href="resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Resume
                </a>
            </div>
        </section>
    )
}

export default Home;