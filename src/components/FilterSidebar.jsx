import { useState } from 'react';
import { subjects, categories, universities } from '../utils/mockData';
import './FilterSidebar.css';

export default function FilterSidebar({ filters, onFilterChange }) {
    const [priceRange, setPriceRange] = useState([0, 50]);
    const [minRating, setMinRating] = useState(0);

    const handleSubjectToggle = (subjectId) => {
        const currentSubjects = filters.subject || [];
        const updated = currentSubjects.includes(subjectId)
            ? currentSubjects.filter(s => s !== subjectId)
            : [...currentSubjects, subjectId];
        onFilterChange({ ...filters, subject: updated });
    };

    const handleCategoryToggle = (categoryId) => {
        const currentCategories = filters.category || [];
        const updated = currentCategories.includes(categoryId)
            ? currentCategories.filter(c => c !== categoryId)
            : [...currentCategories, categoryId];
        onFilterChange({ ...filters, category: updated });
    };

    const handlePriceChange = (e) => {
        const maxPrice = parseInt(e.target.value);
        setPriceRange([0, maxPrice]);
        onFilterChange({ ...filters, minPrice: 0, maxPrice });
    };

    const handleRatingChange = (rating) => {
        setMinRating(rating);
        onFilterChange({ ...filters, minRating: rating });
    };

    const handleUniversityChange = (e) => {
        const university = e.target.value;
        onFilterChange({ ...filters, university: university || undefined });
    };

    const handleClearFilters = () => {
        setPriceRange([0, 50]);
        setMinRating(0);
        onFilterChange({});
    };

    return (
        <aside className="filter-sidebar">
            <div className="filter-header">
                <h3>Filters</h3>
                <button className="btn-clear" onClick={handleClearFilters}>
                    Clear All
                </button>
            </div>

            {/* Subject Filter */}
            <div className="filter-section">
                <h4 className="filter-title">Subject</h4>
                <div className="filter-options">
                    {subjects.map(subject => (
                        <label key={subject.id} className="filter-checkbox">
                            <input
                                type="checkbox"
                                checked={(filters.subject || []).includes(subject.id)}
                                onChange={() => handleSubjectToggle(subject.id)}
                            />
                            <span className="checkbox-label">
                                <span className="subject-icon">{subject.icon}</span>
                                {subject.name}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Category Filter */}
            <div className="filter-section">
                <h4 className="filter-title">Category</h4>
                <div className="filter-options">
                    {categories.map(category => (
                        <label key={category.id} className="filter-checkbox">
                            <input
                                type="checkbox"
                                checked={(filters.category || []).includes(category.id)}
                                onChange={() => handleCategoryToggle(category.id)}
                            />
                            <span className="checkbox-label">{category.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div className="filter-section">
                <h4 className="filter-title">Price Range</h4>
                <div className="price-range">
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="price-slider"
                    />
                    <div className="price-labels">
                        <span>$0</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>
            </div>

            {/* Rating Filter */}
            <div className="filter-section">
                <h4 className="filter-title">Minimum Rating</h4>
                <div className="rating-options">
                    {[4.5, 4.0, 3.5, 3.0].map(rating => (
                        <button
                            key={rating}
                            className={`rating-button ${minRating === rating ? 'active' : ''}`}
                            onClick={() => handleRatingChange(rating)}
                        >
                            <span className="rating-stars">
                                {'⭐'.repeat(Math.floor(rating))}
                            </span>
                            <span>{rating}+</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* University Filter */}
            <div className="filter-section">
                <h4 className="filter-title">University</h4>
                <select
                    className="input select"
                    value={filters.university || ''}
                    onChange={handleUniversityChange}
                >
                    <option value="">All Universities</option>
                    {universities.map(uni => (
                        <option key={uni} value={uni}>{uni}</option>
                    ))}
                </select>
            </div>
        </aside>
    );
}
