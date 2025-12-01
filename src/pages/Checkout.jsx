import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, clearCart, addPurchasedDocuments } from '../utils/localStorage';
import { getDocumentById } from '../utils/mockData';
import './Checkout.css';

export default function Checkout() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        cardNumber: '',
        cardName: '',
        expiry: '',
        cvv: '',
        billingAddress: '',
        city: '',
        zipCode: ''
    });
    const [processing, setProcessing] = useState(false);

    const cartIds = getCart();
    const cartItems = cartIds.map(id => getDocumentById(id)).filter(Boolean);
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            // Add to purchased documents
            addPurchasedDocuments(cartIds);
            // Clear cart
            clearCart();
            window.dispatchEvent(new Event('cartUpdated'));
            // Navigate to success page (dashboard)
            navigate('/dashboard?tab=purchased');
        }, 2000);
    };

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <div className="checkout-page">
            <div className="container">
                <h1 className="checkout-title">Checkout</h1>

                <div className="checkout-grid">
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <h3>Contact Information</h3>
                            <div className="form-group">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>Payment Information</h3>
                            <div className="payment-badge">
                                <span>🔒 Secure Payment</span>
                            </div>
                            <div className="form-group">
                                <label className="label">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    className="input"
                                    placeholder="1234 5678 9012 3456"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    maxLength="19"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="label">Cardholder Name</label>
                                <input
                                    type="text"
                                    name="cardName"
                                    className="input"
                                    placeholder="John Doe"
                                    value={formData.cardName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="label">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        className="input"
                                        placeholder="MM/YY"
                                        value={formData.expiry}
                                        onChange={handleChange}
                                        maxLength="5"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        className="input"
                                        placeholder="123"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        maxLength="4"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>Billing Address</h3>
                            <div className="form-group">
                                <label className="label">Address</label>
                                <input
                                    type="text"
                                    name="billingAddress"
                                    className="input"
                                    placeholder="123 Main St"
                                    value={formData.billingAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="label">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="input"
                                        placeholder="New York"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label">ZIP Code</label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        className="input"
                                        placeholder="10001"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            style={{ width: '100%' }}
                            disabled={processing}
                        >
                            {processing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                        </button>
                    </form>

                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="summary-item-info">
                                        <div className="summary-item-icon">{item.thumbnail}</div>
                                        <div>
                                            <div className="summary-item-title">{item.title}</div>
                                            <div className="summary-item-meta">{item.subject}</div>
                                        </div>
                                    </div>
                                    <div className="summary-item-price">${item.price.toFixed(2)}</div>
                                </div>
                            ))}
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row">
                            <span>Subtotal</span>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
