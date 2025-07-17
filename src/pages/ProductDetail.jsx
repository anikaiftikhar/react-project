import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container">
        <div className="product-not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/products')} className="back-btn">
            <ArrowLeft size={16} />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate('/products')} className="back-btn">
          <ArrowLeft size={16} />
          Back to Products
        </button>

        <div className="product-detail-content">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info-section">
            <h1>{product.name}</h1>
            
            <div className="product-rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < product.rating ? 'star-filled' : 'star-empty'}
                />
              ))}
              <span className="rating-text">({product.reviews} reviews)</span>
            </div>

            <div className="product-price">
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice}</span>
              )}
              <span className="current-price">${product.price}</span>
              {product.originalPrice && (
                <span className="discount">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-features">
              <h3>Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>
              </div>

              <button 
                className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                {addedToCart ? (
                  <>
                    <Check size={16} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={16} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            <div className="product-meta">
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>SKU:</strong> {product.id.toString().padStart(6, '0')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;