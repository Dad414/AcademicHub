import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addToCart, isInCart, isPurchased } from '../utils/localStorage';
import './DocumentCard.css';

export default function DocumentCard({ document }) {
    const [inCart, setInCart] = useState(false);
    const [purchased, setPurchased] = useState(false);

    useEffect(() => {
        setInCart(isInCart(document.id));
        setPurchased(isPurchased(document.id));
    }, [document.id]);

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (!purchased && !inCart) {
            addToCart(document.id);
            setInCart(true);
            // Dispatch custom event to update cart count
            window.dispatchEvent(new Event('cartUpdated'));
        }
    };

    return (
        <Link to={`/document/${document.id}`} className="document-card">
            <div className="document-thumbnail">
                <span className="thumbnail-icon">{document.thumbnail}</span>
                <div className="document-badges">
                    <span className="badge badge-primary">{document.category.replace('-', ' ')}</span>
                </div>
            </div>

            <div className="document-content">
                <h3 className="document-title">{document.title}</h3>
                <p className="document-description">{document.description}</p>

                <div className="document-meta">
                    <span className="meta-item">
                        <span className="meta-icon">📄</span>
                        {document.pages} pages
                    </span>
                    <span className="meta-item">
                        <span className="meta-icon">⬇️</span>
                        {document.downloads}
                    </span>
                </div>

                <div className="document-rating">
                    <span className="rating-stars">
                        {'⭐'.repeat(Math.floor(document.rating))}
                    </span>
                    <span className="rating-value">{document.rating}</span>
                    <span className="rating-reviews">({document.reviews} reviews)</span>
                </div>

                <div className="document-footer">
                    <div className="document-price">
                        <span className="price-label">Price:</span>
                        <span className="price-value">${document.price}</span>
                    </div>

                    {purchased ? (
                        <button className="btn btn-sm btn-ghost" disabled>
                            ✓ Purchased
                        </button>
                    ) : inCart ? (
                        <button className="btn btn-sm btn-outline" disabled>
                            In Cart
                        </button>
                    ) : (
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </Link>
    );
}
