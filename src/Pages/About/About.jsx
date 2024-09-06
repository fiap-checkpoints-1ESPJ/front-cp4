import './index.css'

const About = () => {
  return (
      <section className="about-section">
            <div className="hero">
                <h2>Our Mission</h2>
                <p>At EcoHydrate, we're committed to providing sustainable hydration solutions that help reduce plastic waste and promote a healthier planet.</p>
            </div>
            <div className="content">
                <div className="content-section">
                    <h3>Our Story</h3>
                    <p>Founded in 2020, EcoHydrate was born out of a passion for environmental conservation and a desire to make a difference. Our team of eco-enthusiasts came together with a shared vision: to create high-quality, sustainable products that make it easy for people to reduce their plastic footprint.</p>
                    <p>Starting with our flagship eco-friendly water bottle, we've grown to offer a range of products that combine style, functionality, and sustainability.</p>
                </div>
                <div className="content-section">
                    <h3>Our Commitment</h3>
                    <p>We believe that small changes can make a big impact. That's why we're dedicated to:</p>
                    <ul>
                        <li>Using 100% recycled materials in our products</li>
                        <li>Ensuring all our packaging is biodegradable</li>
                        <li>Partnering with environmental organizations</li>
                        <li>Educating our community about sustainability</li>
                    </ul>
                </div>
                <div className="content-section">
                    <h3>Meet Our Team</h3>
                    <div className="team">
                        <div className="team-member">
                            <img src="/api/placeholder/150/150" alt="Jane Doe"/>
                            <p>Jane Doe</p>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="team-member">
                            <img src="/api/placeholder/150/150" alt="John Smith"/>
                            <p>John Smith</p>
                            <p>Head of Design</p>
                        </div>
                        <div className="team-member">
                            <img src="/api/placeholder/150/150" alt="Emily Brown"/>
                            <p>Emily Brown</p>
                            <p>Sustainability Expert</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
};

export default About;
