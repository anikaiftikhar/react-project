import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Discover Amazing Products</h1>
            <p>Shop the latest trends and find everything you need in one place. Quality products, great prices, and exceptional service.</p>
            <Link to="/products" className="cta-button">
              Shop Now <ArrowRight size={20} />
            </Link>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Shopping" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Truck className="feature-icon" />
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $50</p>
            </div>
            <div className="feature-card">
              <Shield className="feature-icon" />
              <h3>Secure Payment</h3>
              <p>100% secure payment processing</p>
            </div>
            <div className="feature-card">
              <Headphones className="feature-icon" />
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support</p>
            </div>
            <div className="feature-card">
              <Star className="feature-icon" />
              <h3>Quality Guarantee</h3>
              <p>30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Discover our most popular items</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/products" className="view-all-btn">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest deals and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;