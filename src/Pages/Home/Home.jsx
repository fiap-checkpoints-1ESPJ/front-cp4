import './index.css'
import sportsGuy from '../../Assets/basket-guy.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='home-wrapper'>
            <section className='home-section'>
                <section className="hero">
                    <div className="hero-content">
                        <h1>Radical sports are much more fun!!!</h1>
                        <p>Our website offers the best for all radical sports throught the world</p>
                        <Link to="/products" className="cta-button">Shop Now</Link>
                    </div>
                </section>

                <section className="features">
                    <h2>Why Shop with SuperSports?</h2>
                    <div className="feature-grid">
                        <div className="feature-item">
                            ⚡⚡
                            <h3>100% Radical Materials</h3>
                            <p>Our bottles are made from fully recycled and recyclable materials.</p>
                        </div>
                        <div className="feature-item">
                            💅💅
                            <h3>Stylish Design</h3>
                            <p>Sleek and modern designs that you{"'"}ll love to carry.</p>
                        </div>
                        <div className="feature-item">
                            ♻♻
                            <h3>Positive Impact</h3>
                            <p>Every bottle purchased helps fund ocean cleanup projects.</p>
                        </div>
                    </div>
                </section>

                <section className="featured-product">
                    <div className="product-image">
                        <img src={sportsGuy} alt="Featured SuperSports Gear" />
                    </div>
                    <div className="product-info">
                        <h2>Our Bestseller: The SuperSports Elite Series</h2>
                        <p>The ultimate choice for high-performance athletes. Built for strength, durability, and speed.</p>
                        <ul>
                            <li>Engineered with advanced materials for maximum durability</li>
                            <li>Lightweight design to enhance performance in any sport</li>
                            <li>Moisture-wicking and breathable fabric</li>
                            <li>Available in various styles and sizes</li>
                        </ul>
                        <Link to="/products" className="cta-button">Shop Now</Link>
                    </div>
                </section>

                <section className="testimonials">
                    <h2>What Our Athletes Say</h2>
                    <div className="testimonial-grid">
                        <div className="testimonial-item">
                            <p>&ldquo; SuperSports gear has taken my training to the next level. It{"'"}s incredibly comfortable and durable.&rdquo;</p>
                            <p className="testimonial-author">- Alex M.</p>
                        </div>
                        <div className="testimonial-item">
                            <p>&ldquo;I’ve used SuperSports products in my toughest competitions, and they{"'"}ve never let me down.&rdquo;</p>
                            <p className="testimonial-author">- Jamie L.</p>
                        </div>
                        <div className="testimonial-item">
                            <p>&ldquo;RadicalSports is a brand I trust. Their commitment to quality and performance is unmatched.&rdquo;</p>
                            <p className="testimonial-author">- Chris P.</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
};

export default Home;
