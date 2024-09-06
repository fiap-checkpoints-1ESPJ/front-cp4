import './index.css'

const Contact = () => {
    return (
        <>
            <section className="contact-section">
                <div className="hero">
                    <h2>Get in Touch</h2>
                    <p>We'd love to hear from you! Whether you have a question about our products, need support, or want to collaborate, we're here to help.</p>
                </div>
                <div className="content">
                    <div className="contact-form">
                        <h3>Send Us a Message</h3>
                        <form>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Email: info@ecohydrate.com</p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Address: 123 Eco Street, Green City, EC 12345</p>
                        <div className="social-links">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
