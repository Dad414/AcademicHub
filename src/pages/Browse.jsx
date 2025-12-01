import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockDocuments, filterDocuments, sortDocuments, searchDocuments } from '../utils/mockData';
import DocumentCard from '../components/DocumentCard';
import FilterSidebar from '../components/FilterSidebar';
import './Browse.css';

export default function Browse() {
    const [searchParams] = useSearchParams();
    const [documents, setDocuments] = useState(mockDocuments);
    const [filters, setFilters] = useState({});
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        // Handle search query from URL
        const searchQuery = searchParams.get('search');
        const subjectParam = searchParams.get('subject');

        let results = mockDocuments;

        if (searchQuery) {
            results = searchDocuments(searchQuery);
        }

        if (subjectParam) {
            setFilters({ subject: [subjectParam] });
            results = filterDocuments({ subject: [subjectParam] });
        }

        setDocuments(sortDocuments(results, sortBy));
    }, [searchParams]);

    useEffect(() => {
        const filtered = filterDocuments(filters);
        setDocuments(sortDocuments(filtered, sortBy));
    }, [filters, sortBy]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <div className="browse-page">
            <div className="container">
                <div className="browse-header">
                    <div>
                        <h1>Browse Documents</h1>
                        <p className="browse-subtitle">
                            Showing {documents.length} document{documents.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                    <div className="browse-controls">
                        <label className="sort-label">
                            Sort by:
                            <select
                                className="input select sort-select"
                                value={sortBy}
                                onChange={handleSortChange}
                            >
                                <option value="newest">Newest</option>
                                <option value="popular">Most Popular</option>
                                <option value="rating">Highest Rated</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="browse-content">
                    <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

                    <div className="browse-results">
                        {documents.length > 0 ? (
                            <div className="documents-grid">
                                {documents.map(doc => (
                                    <DocumentCard key={doc.id} document={doc} />
                                ))}
                            </div>
                        ) : (
                            <div className="no-results">
                                <div className="no-results-icon">🔍</div>
                                <h3>No documents found</h3>
                                <p>Try adjusting your filters or search query</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
