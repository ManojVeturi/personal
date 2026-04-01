import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const currentRef = aboutRef.current;

        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    currentRef.classList.add('fade-in-visible');
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div className="about" id="About">
            <div className="about-container fade-in-section" ref={aboutRef}>
                <h2>About Me</h2>
                
                <div className="about-card">
                    <div className="about-text">
                        <p>
                            I am a <span className="highlight">full-stack web developer</span> focused on building scalable and user-centric applications. 
                            I have hands-on experience developing real-world projects using <span className="highlight">React</span> and <span className="highlight">Django</span>, 
                            including authentication systems and REST APIs. I enjoy solving practical problems through clean and efficient code, 
                            and I have collaborated on technical platforms during events like AAROHAN. 
                            I am continuously improving my skills to build impactful and production-ready solutions.
                        </p>
                    </div>
                </div>

                <div className="skills-section">
                    <h3>My Skills</h3>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h4>Frontend</h4>
                            <div className="skill-badges">
                                <span className="skill-badge">HTML5</span>
                                <span className="skill-badge">CSS3</span>
                                <span className="skill-badge">JavaScript</span>
                                <span className="skill-badge">React</span>
                                <span className="skill-badge">Bootstrap</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>Backend</h4>
                            <div className="skill-badges">
                                <span className="skill-badge">Python</span>
                                <span className="skill-badge">Django</span>
                                <span className="skill-badge">REST APIs</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>Tools & Others</h4>
                            <div className="skill-badges">
                                <span className="skill-badge">Git</span>
                                <span className="skill-badge">GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;