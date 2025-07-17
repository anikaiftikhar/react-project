import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About ShopHub</h1>
          <p>Your trusted partner in online shopping since 2020</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                ShopHub was founded with a simple mission: to make quality products accessible to everyone. 
                We started as a small team of passionate individuals who believed that shopping online should 
                be easy, secure, and enjoyable.
              </p>
              <p>
                Today, we've grown into a trusted e-commerce platform serving thousands of customers worldwide. 
                Our commitment to quality, customer service, and innovation remains at the heart of everything we do.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Our team" />
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <Heart className="value-icon" />
                <h3>Customer First</h3>
                <p>We put our customers at the center of everything we do, ensuring exceptional service and satisfaction.</p>
              </div>
              <div className="value-card">
                <Award className="value-icon" />
                <h3>Quality Products</h3>
                <p>We carefully curate our product selection to offer only the highest quality items at competitive prices.</p>
              </div>
              <div className="value-card">
                <Globe className="value-icon" />
                <h3>Global Reach</h3>
                <p>We serve customers worldwide with fast, reliable shipping and localized customer support.</p>
              </div>
              <div className="value-card">
                <Users className="value-icon" />
                <h3>Community</h3>
                <p>We believe in building strong relationships with our customers, partners, and the communities we serve.</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>50,000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-card">
                <h3>1,000+</h3>
                <p>Products Available</p>
              </div>
              <div className="stat-card">
                <h3>25+</h3>
                <p>Countries Served</p>
              </div>
              <div className="stat-card">
                <h3>99.9%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Sarah Johnson" />
                <h3>Sarah Johnson</h3>
                <p>CEO & Founder</p>
              </div>
              <div className="team-member">
                <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Michael Chen" />
                <h3>Michael Chen</h3>
                <p>CTO</p>
              </div>
              <div className="team-member">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Emily Rodriguez" />
                <h3>Emily Rodriguez</h3>
                <p>Head of Customer Success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;