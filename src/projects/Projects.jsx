import React, { useEffect, useRef } from 'react';
import './Projects.css';
import commerce from '../assets/e-commerce.png';

function Projects() {
    const projectRef = useRef(null);

    useEffect(() => {
        const currentRef = projectRef.current;
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
        <section className="project-section" id="Projects">
            <div className="project-container fade-in-section" ref={projectRef}>
                <h2>Projects</h2>
                
                <article className="featured-card">
                    <div className="card-image-wrapper">
                        <img src={commerce} alt="Simply Shop Interface" />
                        <div className="image-overlay"></div>
                    </div>
                    
                    <div className="card-content">
                        <h3 className="card-title">Simply Shop</h3>
                        
                        <p className="card-description">
                            Full-stack e-commerce platform built using React and Django with secure authentication and dynamic cart system.
                        </p>
                        
                        <div className="features">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    JWT + Google OAuth Authentication
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Dynamic Cart System
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    REST API with Django
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Deployed on Vercel & Render
                                </li>
                            </ul>
                        </div>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>Django</span>
                            <span>PostgreSQL</span>
                            <span>JWT</span>
                        </div>

                        <div className="card-actions">
                            <a href="https://simply-shop-three.vercel.app/" className="btn live-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a href="https://github.com/ManojVeturi/Simply-Shop" className="btn view-code" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                View Code
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Projects;