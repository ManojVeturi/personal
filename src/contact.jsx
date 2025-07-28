function Contact() {

    return(
        <div className="contact" id="Contact">
            <h2>Contact Me</h2>
            <form action="https://api.web3forms.com/submit" method="POST" class="contact-us"/>
                <input type="hidden" name="access_key" value="d5bc175d-6e08-4ba1-aba2-19b447f06096"/>
                    <div class="contact-details">
                        <input type="text" name="name" placeholder="Your Name" class="contact-input" required />
                        <input type="text" name="email" placeholder="Your Email" class="contact-input" required />
                        <textarea name="message" placeholder="Your message" class="contact-input" required></textarea>
                    </div>
            <button type="submit" class="contact-btn">Submit</button>
        </div>
    );
}
export default Contact;