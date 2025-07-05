import react from "react";
import '../Stylesheets/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar-title">Placeholder</h1>
            <nav>
                <ul className="navbar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;