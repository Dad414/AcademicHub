import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getPurchasedDocuments, getFavorites } from '../utils/localStorage';
import { mockDocuments } from '../utils/mockData';
import './Dashboard.css';

export default function Dashboard() {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'purchased');
    const [purchasedDocs, setPurchasedDocs] = useState([]);
    const [favoriteDocs, setFavoriteDocs] = useState([]);

    useEffect(() => {
        const purchasedIds = getPurchasedDocuments();
        const favoriteIds = getFavorites();

        setPurchasedDocs(purchasedIds.map(id => mockDocuments.find(doc => doc.id === id)).filter(Boolean));
        setFavoriteDocs(favoriteIds.map(id => mockDocuments.find(doc => doc.id === id)).filter(Boolean));
    }, []);

    // Mock seller data
    const sellerStats = {
        totalEarnings: 1245.50,
        totalSales: 87,
        totalDocuments: 5,
        avgRating: 4.8
    };

    return (
        <div className="dashboard-page">
            <div className="container">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <p className="dashboard-subtitle">Manage your documents and track your activity</p>
                </div>

                <div className="dashboard-tabs">
                    <button
                        className={`tab-button ${activeTab === 'purchased' ? 'active' : ''}`}
                        onClick={() => setActiveTab('purchased')}
                    >
                        📚 Purchased
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'favorites' ? 'active' : ''}`}
                        onClick={() => setActiveTab('favorites')}
                    >
                        ❤️ Favorites
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'seller' ? 'active' : ''}`}
                        onClick={() => setActiveTab('seller')}
                    >
                        💰 Seller Dashboard
                    </button>
                </div>

                <div className="dashboard-content">
                    {activeTab === 'purchased' && (
                        <div className="tab-content">
                            <h2>Purchased Documents</h2>
                            {purchasedDocs.length > 0 ? (
                                <div className="documents-list">
                                    {purchasedDocs.map(doc => (
                                        <div key={doc.id} className="document-item">
                                            <div className="document-item-icon">{doc.thumbnail}</div>
                                            <div className="document-item-info">
                                                <Link to={`/document/${doc.id}`} className="document-item-title">
                                                    {doc.title}
                                                </Link>
                                                <div className="document-item-meta">
                                                    <span className="badge badge-primary">{doc.subject}</span>
                                                    <span>{doc.pages} pages</span>
                                                </div>
                                            </div>
                                            <div className="document-item-actions">
                                                <button className="btn btn-sm btn-primary">
                                                    📥 Download
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <div className="empty-icon">📚</div>
                                    <h3>No purchased documents yet</h3>
                                    <p>Start browsing to find study materials</p>
                                    <Link to="/browse" className="btn btn-primary">
                                        Browse Documents
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'favorites' && (
                        <div className="tab-content">
                            <h2>Favorite Documents</h2>
                            {favoriteDocs.length > 0 ? (
                                <div className="documents-list">
                                    {favoriteDocs.map(doc => (
                                        <div key={doc.id} className="document-item">
                                            <div className="document-item-icon">{doc.thumbnail}</div>
                                            <div className="document-item-info">
                                                <Link to={`/document/${doc.id}`} className="document-item-title">
                                                    {doc.title}
                                                </Link>
                                                <div className="document-item-meta">
                                                    <span className="badge badge-primary">{doc.subject}</span>
                                                    <span>${doc.price}</span>
                                                </div>
                                            </div>
                                            <div className="document-item-actions">
                                                <Link to={`/document/${doc.id}`} className="btn btn-sm btn-outline">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <div className="empty-icon">❤️</div>
                                    <h3>No favorites yet</h3>
                                    <p>Save documents you're interested in</p>
                                    <Link to="/browse" className="btn btn-primary">
                                        Browse Documents
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'seller' && (
                        <div className="tab-content">
                            <h2>Seller Dashboard</h2>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-card-icon">💰</div>
                                    <div className="stat-card-info">
                                        <div className="stat-card-value">${sellerStats.totalEarnings.toFixed(2)}</div>
                                        <div className="stat-card-label">Total Earnings</div>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-card-icon">📊</div>
                                    <div className="stat-card-info">
                                        <div className="stat-card-value">{sellerStats.totalSales}</div>
                                        <div className="stat-card-label">Total Sales</div>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-card-icon">📚</div>
                                    <div className="stat-card-info">
                                        <div className="stat-card-value">{sellerStats.totalDocuments}</div>
                                        <div className="stat-card-label">Documents</div>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-card-icon">⭐</div>
                                    <div className="stat-card-info">
                                        <div className="stat-card-value">{sellerStats.avgRating}</div>
                                        <div className="stat-card-label">Avg Rating</div>
                                    </div>
                                </div>
                            </div>

                            <div className="seller-actions">
                                <Link to="/upload" className="btn btn-primary btn-lg">
                                    📤 Upload New Document
                                </Link>
                            </div>

                            <div className="seller-info">
                                <h3>💡 Tips to Increase Sales</h3>
                                <ul className="tips-list">
                                    <li>Upload high-quality, well-organized materials</li>
                                    <li>Write clear, detailed descriptions</li>
                                    <li>Price competitively based on content value</li>
                                    <li>Add relevant tags for better discoverability</li>
                                    <li>Respond to buyer questions promptly</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
