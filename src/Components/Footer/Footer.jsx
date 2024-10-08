import './index.css'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>123 Eco Street, Green City, EC 12345</li>
                        <li>Phone: (555) 123-4567</li>
                        <li>Email: info@ecohydrate.com</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook" title='Facebook'>FB</a>
                        <a href="#" aria-label="Twitter" title='Twitter'>TW</a>
                        <a href="#" aria-label="Instagram" title='Instagram'>IG</a>
                        <a href="#" aria-label="LinkedIn" title='LinkedIn'>LI</a>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <p>&copy; 2024 EcoHydrate. All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer
