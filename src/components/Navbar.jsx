import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCartCount } from '../utils/localStorage';
import './Navbar.css';

export default function Navbar() {
    const [cartCount, setCartCount] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        updateCartCount();
        // Listen for cart updates
        window.addEventListener('cartUpdated', updateCartCount);
        return () => window.removeEventListener('cartUpdated', updateCartCount);
    }, []);

    const updateCartCount = () => {
        setCartCount(getCartCount());
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-icon">📚</span>
                    <span className="logo-text">AcademicHub</span>
                </Link>

                <form className="navbar-search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search documents, subjects, topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        🔍
                    </button>
                </form>

                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/browse" className="nav-link">Browse</Link>
                    <Link to="/upload" className="nav-link">Upload</Link>
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    <Link to="/cart" className="nav-link cart-link">
                        <span className="cart-icon">🛒</span>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
}
