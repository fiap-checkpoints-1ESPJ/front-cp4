import './index.css'

import person1 from '../../Assets/person-1.jpg'
import person2 from '../../Assets/person-2.jpg'
import person3 from '../../Assets/person-3.jpg'

const About = () => {
    return (
        <section className='about-wrapper'>
            <section className="about-section">
                <section className="hero">
                    <h2>Our Mission</h2>
                    <p>At RadicalSports, we{"'"}re driven by a passion for excellence and performance. Our goal is to push the limits of what’s possible in sports, while supporting athletes with cutting-edge gear from our flagship brand, SuperSports.</p>
                </section>
                <article className="content">
                    <section className="content-section">
                        <h3>Our Story</h3>
                        <p>Founded in 2015, RadicalSports emerged with the mission to empower athletes at every level. SuperSports, our premier brand, quickly became synonymous with high-quality, performance-driven sports gear designed for endurance and speed.</p>
                        <p>What began as a small operation creating elite athletic wear has grown into a global brand, trusted by professionals and enthusiasts alike.</p>
                    </section>
                    <section className="content-section">
                        <h3>Our Commitment</h3>
                        <p>We believe in raising the bar for athletic performance, while keeping sustainability in mind. We{"'"}re dedicated to:</p>
                        <ul>
                            <li>Developing eco-friendly products without compromising quality</li>
                            <li>Partnering with organizations that promote active and healthy lifestyles</li>
                            <li>Innovating designs that meet the needs of modern athletes</li>
                            <li>Providing top-tier gear that athletes can depend on</li>
                        </ul>
                    </section>
                    <section className="content-section">
                        <h3>Meet Our Team</h3>
                        <article className="team">
                            <article className="team-member">
                                <img src={person1} alt="Jane Doe" />
                                <p>Jane Doe</p>
                                <p>Founder & CEO</p>
                            </article>
                            <article className="team-member">
                                <img src={person2} alt="John Smith" />
                                <p>John Smith</p>
                                <p>Head of Product Development</p>
                            </article>
                            <article className="team-member">
                                <img src={person3} alt="Emily Brown" />
                                <p>Emily Brown</p>
                                <p>Lead Performance Engineer</p>
                            </article>
                        </article>
                    </section>
                </article>
            </section>
        </section>
    )
};

export default About;

