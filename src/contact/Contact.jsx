import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
    const contactRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const currentRef = contactRef.current;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const form = e.target;
        const formData = new FormData(form);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            setIsSubmitting(false);
            if (data.success) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            setIsSubmitting(false);
            alert("Error submitting the form.");
            console.error(error);
        });
    };

    return (
        <div className="contact" id="Contact">
            <div className="contact-container fade-in-section" ref={contactRef}>
                <h2>Contact Me</h2>
                <p className="contact-subtitle">Feel free to reach out for collaboration or opportunities</p>
                
                <div className="contact-card">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input type="hidden" name="access_key" value="d5bc175d-6e08-4ba1-aba2-19b447f06096"/>
                        
                        <div className="input-group">
                            <input type="text" name="name" id="name" required placeholder=" " />
                            <label htmlFor="name">Your Name</label>
                        </div>

                        <div className="input-group">
                            <input type="email" name="email" id="email" required placeholder=" " />
                            <label htmlFor="email">Your Email</label>
                        </div>

                        <div className="input-group">
                            <textarea name="message" id="message" required placeholder=" " rows="5"></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>

                        <button type="submit" className={`submit-btn ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                            {isSubmitting ? (
                                <span className="loader"></span>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;