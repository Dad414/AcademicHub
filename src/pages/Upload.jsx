import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects, categories, universities } from '../utils/mockData';
import './Upload.css';

export default function Upload() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        subject: '',
        category: '',
        university: '',
        pages: '',
        price: '',
        tags: ''
    });
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUploading(true);

        // Simulate upload
        setTimeout(() => {
            alert('Document uploaded successfully!');
            navigate('/dashboard');
        }, 2000);
    };

    return (
        <div className="upload-page">
            <div className="container">
                <div className="upload-header">
                    <h1>Upload Document</h1>
                    <p className="upload-subtitle">
                        Share your study materials and start earning money
                    </p>
                </div>

                <form className="upload-form" onSubmit={handleSubmit}>
                    <div className="upload-grid">
                        <div className="upload-main">
                            <div className="form-section">
                                <h3>Document File</h3>
                                <div
                                    className="file-upload-area"
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                >
                                    <input
                                        type="file"
                                        id="file-input"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                        required
                                    />
                                    {file ? (
                                        <div className="file-selected">
                                            <div className="file-icon">📄</div>
                                            <div className="file-info">
                                                <div className="file-name">{file.name}</div>
                                                <div className="file-size">
                                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className="file-remove"
                                                onClick={() => setFile(null)}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ) : (
                                        <label htmlFor="file-input" className="file-upload-label">
                                            <div className="upload-icon">📤</div>
                                            <div className="upload-text">
                                                <strong>Click to upload</strong> or drag and drop
                                            </div>
                                            <div className="upload-hint">
                                                PDF, DOC, or DOCX (MAX. 50MB)
                                            </div>
                                        </label>
                                    )}
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Document Information</h3>
                                <div className="form-group">
                                    <label className="label">Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="input"
                                        placeholder="e.g., Microeconomics Test Bank - Chapters 1-10"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="label">Description *</label>
                                    <textarea
                                        name="description"
                                        className="input textarea"
                                        placeholder="Provide a detailed description of your document..."
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="5"
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="label">Subject *</label>
                                        <select
                                            name="subject"
                                            className="input select"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select subject</option>
                                            {subjects.map(subject => (
                                                <option key={subject.id} value={subject.id}>
                                                    {subject.icon} {subject.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Category *</label>
                                        <select
                                            name="category"
                                            className="input select"
                                            value={formData.category}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select category</option>
                                            {categories.map(category => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="label">University</label>
                                    <select
                                        name="university"
                                        className="input select"
                                        value={formData.university}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select university</option>
                                        {universities.map(uni => (
                                            <option key={uni} value={uni}>{uni}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="label">Number of Pages *</label>
                                        <input
                                            type="number"
                                            name="pages"
                                            className="input"
                                            placeholder="150"
                                            value={formData.pages}
                                            onChange={handleChange}
                                            min="1"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="label">Price (USD) *</label>
                                        <input
                                            type="number"
                                            name="price"
                                            className="input"
                                            placeholder="24.99"
                                            value={formData.price}
                                            onChange={handleChange}
                                            min="0.99"
                                            step="0.01"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="label">Tags (comma separated)</label>
                                    <input
                                        type="text"
                                        name="tags"
                                        className="input"
                                        placeholder="microeconomics, supply-demand, test-bank"
                                        value={formData.tags}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="upload-sidebar">
                            <div className="upload-tips">
                                <h3>📝 Upload Tips</h3>
                                <ul className="tips-list">
                                    <li>Use a clear, descriptive title</li>
                                    <li>Provide detailed description</li>
                                    <li>Set competitive pricing</li>
                                    <li>Add relevant tags for better discoverability</li>
                                    <li>Ensure high-quality content</li>
                                </ul>
                            </div>

                            <div className="pricing-guide">
                                <h3>💰 Pricing Guide</h3>
                                <div className="pricing-item">
                                    <span>Test Banks</span>
                                    <span>$20-$30</span>
                                </div>
                                <div className="pricing-item">
                                    <span>Solutions Manual</span>
                                    <span>$25-$35</span>
                                </div>
                                <div className="pricing-item">
                                    <span>Lecture Notes</span>
                                    <span>$15-$25</span>
                                </div>
                                <div className="pricing-item">
                                    <span>Study Guides</span>
                                    <span>$20-$30</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="upload-actions">
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            disabled={uploading}
                        >
                            {uploading ? 'Uploading...' : 'Upload Document'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
