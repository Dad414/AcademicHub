import { Link } from 'react-router-dom';
import { mockDocuments, subjects } from '../utils/mockData';
import DocumentCard from '../components/DocumentCard';
import './Home.css';

export default function Home() {
    const featuredDocuments = mockDocuments.slice(0, 6);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content animate-slideUp">
                        <h1 className="hero-title">
                            Your Gateway to Academic Excellence
                        </h1>
                        <p className="hero-subtitle">
                            Buy and sell premium study materials for Economics, Mathematics, and Finance.
                            Join thousands of students earning and learning together.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/browse" className="btn btn-primary btn-lg">
                                Browse Documents
                            </Link>
                            <Link to="/upload" className="btn btn-outline btn-lg">
                                Start Selling
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-value">50,000+</div>
                                <div className="stat-label">Documents</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">25,000+</div>
                                <div className="stat-label">Students</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">$2M+</div>
                                <div className="stat-label">Earned by Sellers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subjects Section */}
            <section className="subjects-section">
                <div className="container">
                    <h2 className="section-title text-center">Browse by Subject</h2>
                    <p className="section-subtitle text-center">
                        Explore our extensive collection across three core disciplines
                    </p>
                    <div className="subjects-grid">
                        {subjects.map(subject => (
                            <Link
                                key={subject.id}
                                to={`/browse?subject=${subject.id}`}
                                className="subject-card"
                            >
                                <div className="subject-icon">{subject.icon}</div>
                                <h3 className="subject-name">{subject.name}</h3>
                                <p className="subject-description">
                                    Discover test banks, notes, and study guides
                                </p>
                                <span className="subject-arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Documents */}
            <section className="featured-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">Featured Documents</h2>
                            <p className="section-subtitle">Top-rated materials from our community</p>
                        </div>
                        <Link to="/browse" className="btn btn-outline">
                            View All
                        </Link>
                    </div>
                    <div className="documents-grid">
                        {featuredDocuments.map(doc => (
                            <DocumentCard key={doc.id} document={doc} />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works-section">
                <div className="container">
                    <h2 className="section-title text-center">How It Works</h2>
                    <p className="section-subtitle text-center">
                        Start earning or learning in three simple steps
                    </p>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <div className="step-icon">📤</div>
                            <h3 className="step-title">Upload Your Materials</h3>
                            <p className="step-description">
                                Share your test banks, notes, and study guides with students worldwide
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <div className="step-icon">💰</div>
                            <h3 className="step-title">Set Your Price</h3>
                            <p className="step-description">
                                You control the pricing and earn money every time someone purchases
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <div className="step-icon">📊</div>
                            <h3 className="step-title">Track Your Earnings</h3>
                            <p className="step-description">
                                Monitor sales, downloads, and revenue through your seller dashboard
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card">
                        <h2 className="cta-title">Ready to Start Earning?</h2>
                        <p className="cta-description">
                            Join thousands of students who are monetizing their study materials
                        </p>
                        <Link to="/upload" className="btn btn-secondary btn-lg">
                            Upload Your First Document
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
