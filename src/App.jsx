import { Component } from "react";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default App
