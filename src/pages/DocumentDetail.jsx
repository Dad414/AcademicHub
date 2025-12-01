import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDocumentById, mockDocuments, getReviewsByDocumentId } from '../utils/mockData';
import { addToCart, isInCart, isPurchased } from '../utils/localStorage';
import './DocumentDetail.css';

export default function DocumentDetail() {
    const { id } = useParams();
    const document = getDocumentById(id);
    const [inCart, setInCart] = useState(false);
    const [purchased, setPurchased] = useState(false);
    const reviews = getReviewsByDocumentId(id);
    const relatedDocuments = mockDocuments
        .filter(doc => doc.subject === document?.subject && doc.id !== document?.id)
        .slice(0, 3);

    useEffect(() => {
        if (document) {
            setInCart(isInCart(document.id));
            setPurchased(isPurchased(document.id));
        }
    }, [document]);

    const handleAddToCart = () => {
        if (!purchased && !inCart && document) {
            addToCart(document.id);
            setInCart(true);
            window.dispatchEvent(new Event('cartUpdated'));
        }
    };

    if (!document) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Document not found</h2>
                <Link to="/browse" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                    Browse Documents
                </Link>
            </div>
        );
    }

    return (
        <div className="document-detail-page">
            <div className="container">
                <div className="detail-grid">
                    {/* Main Content */}
                    <div className="detail-main">
                        <div className="detail-header">
                            <div className="detail-thumbnail">
                                <span className="thumbnail-icon-large">{document.thumbnail}</span>
                            </div>
                            <div className="detail-header-content">
                                <div className="detail-badges">
                                    <span className="badge badge-primary">{document.subject}</span>
                                    <span className="badge badge-outline">{document.category.replace('-', ' ')}</span>
                                </div>
                                <h1 className="detail-title">{document.title}</h1>
                                <div className="detail-meta">
                                    <span className="meta-item">
                                        <span className="meta-icon">👤</span>
                                        {document.seller}
                                    </span>
                                    <span className="meta-item">
                                        <span className="meta-icon">🏛️</span>
                                        {document.university}
                                    </span>
                                    <span className="meta-item">
                                        <span className="meta-icon">📅</span>
                                        {new Date(document.uploadDate).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="detail-rating">
                                    <span className="rating-stars">
                                        {'⭐'.repeat(Math.floor(document.rating))}
                                    </span>
                                    <span className="rating-value">{document.rating}</span>
                                    <span className="rating-reviews">({document.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h2>Description</h2>
                            <p className="detail-description">{document.description}</p>
                        </div>

                        <div className="detail-section">
                            <h2>Document Details</h2>
                            <div className="detail-stats">
                                <div className="stat-box">
                                    <div className="stat-icon">📄</div>
                                    <div className="stat-info">
                                        <div className="stat-value">{document.pages}</div>
                                        <div className="stat-label">Pages</div>
                                    </div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-icon">⬇️</div>
                                    <div className="stat-info">
                                        <div className="stat-value">{document.downloads.toLocaleString()}</div>
                                        <div className="stat-label">Downloads</div>
                                    </div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-icon">⭐</div>
                                    <div className="stat-info">
                                        <div className="stat-value">{document.rating}</div>
                                        <div className="stat-label">Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="detail-section">
                            <h2>Tags</h2>
                            <div className="detail-tags">
                                {document.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {reviews.length > 0 && (
                            <div className="detail-section">
                                <h2>Reviews</h2>
                                <div className="reviews-list">
                                    {reviews.map(review => (
                                        <div key={review.id} className="review-card">
                                            <div className="review-header">
                                                <div>
                                                    <div className="review-author">{review.user}</div>
                                                    <div className="review-date">
                                                        {new Date(review.date).toLocaleDateString()}
                                                    </div>
                                                </div>
                                                <div className="review-rating">
                                                    {'⭐'.repeat(review.rating)}
                                                </div>
                                            </div>
                                            <p className="review-comment">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="detail-sidebar">
                        <div className="purchase-card">
                            <div className="purchase-price">
                                <span className="price-label">Price</span>
                                <span className="price-value">${document.price}</span>
                            </div>

                            {purchased ? (
                                <div>
                                    <button className="btn btn-primary" style={{ width: '100%' }} disabled>
                                        ✓ Already Purchased
                                    </button>
                                    <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                                        📥 Download
                                    </button>
                                </div>
                            ) : inCart ? (
                                <div>
                                    <button className="btn btn-outline" style={{ width: '100%' }} disabled>
                                        In Cart
                                    </button>
                                    <Link to="/cart" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                        Go to Cart
                                    </Link>
                                </div>
                            ) : (
                                <button
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                            )}

                            <div className="purchase-features">
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    Instant download
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    Lifetime access
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    Money-back guarantee
                                </div>
                            </div>
                        </div>

                        {relatedDocuments.length > 0 && (
                            <div className="related-section">
                                <h3>Related Documents</h3>
                                <div className="related-list">
                                    {relatedDocuments.map(doc => (
                                        <Link key={doc.id} to={`/document/${doc.id}`} className="related-item">
                                            <span className="related-icon">{doc.thumbnail}</span>
                                            <div className="related-info">
                                                <div className="related-title">{doc.title}</div>
                                                <div className="related-price">${doc.price}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
