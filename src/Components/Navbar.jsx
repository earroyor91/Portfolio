import React, {useState, useEffect} from "react";
import '../Stylesheets/Navbar.css';

function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(false);

    function handleScroll() {
        setScrolled(window.scrollY > 10);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <a 
                className="navbar-title"
                href="/" 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                    {"{"}<span className={`name ${hovered ? 'slide' : ""}`}>EA</span>{"}"}
            </a>
            <nav>
                <ul className="navbar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;