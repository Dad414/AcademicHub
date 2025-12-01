import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">
                            <span className="logo-icon">📚</span>
                            AcademicHub
                        </h3>
                        <p className="footer-description">
                            Your trusted marketplace for academic materials in Economics, Mathematics, and Finance.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link">📘</a>
                            <a href="#" className="social-link">🐦</a>
                            <a href="#" className="social-link">📷</a>
                            <a href="#" className="social-link">💼</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">For Students</h4>
                        <ul className="footer-links">
                            <li><Link to="/browse">Browse Documents</Link></li>
                            <li><Link to="/browse?subject=economics">Economics</Link></li>
                            <li><Link to="/browse?subject=mathematics">Mathematics</Link></li>
                            <li><Link to="/browse?subject=finance">Finance</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">For Sellers</h4>
                        <ul className="footer-links">
                            <li><Link to="/upload">Upload Documents</Link></li>
                            <li><Link to="/dashboard">Seller Dashboard</Link></li>
                            <li><a href="#">Pricing Guide</a></li>
                            <li><a href="#">Best Practices</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Support</h4>
                        <ul className="footer-links">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 AcademicHub. All rights reserved.</p>
                    <p>Made with ❤️ for students and educators</p>
                </div>
            </div>
        </footer>
    );
}
