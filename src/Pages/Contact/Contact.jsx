import './index.css'

const Contact = () => {
    return (
        <section className='contact-wrapper'>
            <section className="contact-section">
                <section className="hero">
                    <h2>Get in Touch</h2>
                    <p>We{"'"}d love to hear from you! Whether you have a question about our SuperSports gear, need support, or are interested in partnering with RadicalSports, we{"'"}re here to help.</p>
                </section>
                <section className="content">
                    <section className="contact-form">
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
                    </section>
                    <section className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Email: info@radicalsports.com</p>
                        <p>Phone: (555) 987-6543</p>
                        <p>Address: 456 Performance Blvd, Athlete City, SP 67890</p>
                        <article className="contact-socials">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </article>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Contact
