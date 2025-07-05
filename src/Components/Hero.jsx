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
        <section className="hero-section">
            <img src={heroImg} alt="Hero Background" className="hero-background" />
            <h1>Edgar Arroyor</h1>
            <h3> Software Developer </h3>
            <p>
                I'm a software developer with a strong foundation in Java, JavaScript, and web technologies. 
                I focus on writing clear, maintainable code and love turning complex problems into elegant solutions.
            </p>
            <button className="call-to-action" onClick={() => scrollToProjects}>
                See My Work
            </button>

        </section>
    )
}

export default Home;