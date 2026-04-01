import React, { useState, useEffect } from 'react';
import './Home.css';
import profilePic from '../assets/MANOJ.jpg';
import resume from '../assets/Resume.pdf';

function Home() {
    const titles = [
        "Full-Stack Developer",
        "React & Django Developer",
        "Problem Solver",
        "AI Enthusiast"
    ];
    
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        let timer;
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayedTitle(currentTitle.substring(0, displayedTitle.length - 1));
                if (displayedTitle.length === 0) {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }, 50);
        } else {
            timer = setTimeout(() => {
                setDisplayedTitle(currentTitle.substring(0, displayedTitle.length + 1));
                if (displayedTitle.length === currentTitle.length) {
                    setTimeout(() => setIsDeleting(true), 2500);
                }
            }, 100);
        }
        
        return () => clearTimeout(timer);
    }, [displayedTitle, isDeleting, titleIndex, titles]);

    return (
        <section className="home" id="Home">
            <div className="home-bg-glow"></div>
            
            <div className="home-container">
                <div className="home-text fade-in-left">
                    <p className="greeting">Hi, I'm</p>
                    <h1 className="typewriter-name">Manoj Veturi</h1>
                    
                    <h2 className="dynamic-subtitle">
                        <span className="typing-text">{displayedTitle}</span><span className="cursor">|</span>
                    </h2>
                    
                    <p className="education">
                        B.Tech | Metallurgical & Materials Engineering, NIT Durgapur
                    </p>
                    
                    <p className="value-statement">
                        Building scalable web applications and solving real-world problems.
                    </p>
                    
                    <div className="home-buttons">
                        <a href="#Projects" className="btn btn-primary">View Projects</a>
                        <a href={resume} download="Manoj_Veturi_Resume.pdf" className="btn btn-secondary">
                            Download Resume
                        </a>
                    </div>
                </div>
                
                <div className="home-image-wrapper fade-in-right">
                    <div className="image-glow"></div>
                    <img src={profilePic} alt="Manoj Veturi" className="profile-pic floating" />
                </div>
            </div>
        </section>
    );
}

export default Home;