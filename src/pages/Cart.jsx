import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCart, removeFromCart, clearCart } from '../utils/localStorage';
import { getDocumentById } from '../utils/mockData';
import './Cart.css';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const cartIds = getCart();
        const items = cartIds.map(id => getDocumentById(id)).filter(Boolean);
        setCartItems(items);
    };

    const handleRemove = (documentId) => {
        removeFromCart(documentId);
        loadCart();
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const handleClearCart = () => {
        clearCart();
        setCartItems([]);
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛒</div>
                        <h2>Your cart is empty</h2>
                        <p>Add some documents to get started!</p>
                        <Link to="/browse" className="btn btn-primary">
                            Browse Documents
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <button className="btn btn-ghost" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                </div>

                <div className="cart-grid">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-thumbnail">
                                    <span className="thumbnail-icon">{item.thumbnail}</span>
                                </div>
                                <div className="cart-item-info">
                                    <Link to={`/document/${item.id}`} className="cart-item-title">
                                        {item.title}
                                    </Link>
                                    <div className="cart-item-meta">
                                        <span className="badge badge-primary">{item.subject}</span>
                                        <span className="meta-text">by {item.seller}</span>
                                    </div>
                                    <div className="cart-item-details">
                                        <span>📄 {item.pages} pages</span>
                                        <span>⭐ {item.rating}</span>
                                    </div>
                                </div>
                                <div className="cart-item-price">
                                    ${item.price.toFixed(2)}
                                </div>
                                <button
                                    className="cart-item-remove"
                                    onClick={() => handleRemove(item.id)}
                                    title="Remove from cart"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal ({cartItems.length} items)</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax</span>
                            <span>$0.00</span>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row summary-total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '1.5rem' }}
                            onClick={() => navigate('/checkout')}
                        >
                            Proceed to Checkout
                        </button>
                        <Link to="/browse" className="continue-shopping">
                            ← Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
