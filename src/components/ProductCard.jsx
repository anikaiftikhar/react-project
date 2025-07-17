import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-overlay">
            <span>View Details</span>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < product.rating ? 'star-filled' : 'star-empty'}
              />
            ))}
            <span className="rating-text">({product.reviews})</span>
          </div>
          <div className="product-price">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            <span className="current-price">${product.price}</span>
          </div>
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;