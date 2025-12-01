// Mock data for the academic marketplace

export const subjects = [
  { id: 'economics', name: 'Economics', icon: '📊' },
  { id: 'mathematics', name: 'Mathematics', icon: '📐' },
  { id: 'finance', name: 'Finance', icon: '💰' }
];

export const categories = [
  { id: 'test-banks', name: 'Test Banks' },
  { id: 'assignments', name: 'Assignments' },
  { id: 'notes', name: 'Lecture Notes' },
  { id: 'solutions', name: 'Solutions Manual' },
  { id: 'study-guides', name: 'Study Guides' }
];

export const universities = [
  'Harvard University',
  'MIT',
  'Stanford University',
  'Yale University',
  'Princeton University',
  'Columbia University',
  'University of Chicago',
  'UC Berkeley',
  'Other'
];

export const mockDocuments = [
  {
    id: 1,
    title: 'Microeconomics Test Bank - Chapters 1-10',
    description: 'Comprehensive test bank covering supply and demand, market structures, consumer theory, and production costs. Includes 500+ questions with detailed solutions.',
    subject: 'economics',
    category: 'test-banks',
    price: 24.99,
    rating: 4.8,
    reviews: 127,
    downloads: 1543,
    seller: 'Dr. Sarah Johnson',
    university: 'Harvard University',
    pages: 150,
    uploadDate: '2024-11-15',
    thumbnail: '📚',
    tags: ['microeconomics', 'test-bank', 'supply-demand']
  },
  {
    id: 2,
    title: 'Calculus II Complete Solutions Manual',
    description: 'Step-by-step solutions for all exercises in Calculus II. Covers integration techniques, series, parametric equations, and polar coordinates.',
    subject: 'mathematics',
    category: 'solutions',
    price: 29.99,
    rating: 4.9,
    reviews: 203,
    downloads: 2156,
    seller: 'Prof. Michael Chen',
    university: 'MIT',
    pages: 280,
    uploadDate: '2024-11-10',
    thumbnail: '📖',
    tags: ['calculus', 'solutions', 'integration']
  },
  {
    id: 3,
    title: 'Corporate Finance Assignment Solutions',
    description: 'Detailed solutions for corporate finance assignments covering capital budgeting, risk analysis, and financial planning.',
    subject: 'finance',
    category: 'assignments',
    price: 19.99,
    rating: 4.7,
    reviews: 89,
    downloads: 876,
    seller: 'Emily Rodriguez',
    university: 'Stanford University',
    pages: 75,
    uploadDate: '2024-11-20',
    thumbnail: '💼',
    tags: ['corporate-finance', 'assignments', 'budgeting']
  },
  {
    id: 4,
    title: 'Macroeconomics Lecture Notes - Full Semester',
    description: 'Complete lecture notes from a full semester of Macroeconomics. Includes GDP, inflation, unemployment, monetary policy, and international trade.',
    subject: 'economics',
    category: 'notes',
    price: 15.99,
    rating: 4.6,
    reviews: 156,
    downloads: 1987,
    seller: 'Alex Thompson',
    university: 'Yale University',
    pages: 120,
    uploadDate: '2024-11-05',
    thumbnail: '📝',
    tags: ['macroeconomics', 'notes', 'monetary-policy']
  },
  {
    id: 5,
    title: 'Linear Algebra Study Guide with Practice Problems',
    description: 'Comprehensive study guide covering matrices, vector spaces, eigenvalues, and linear transformations. Includes 200+ practice problems.',
    subject: 'mathematics',
    category: 'study-guides',
    price: 22.99,
    rating: 4.9,
    reviews: 178,
    downloads: 1654,
    seller: 'Dr. Lisa Wang',
    university: 'Princeton University',
    pages: 95,
    uploadDate: '2024-11-18',
    thumbnail: '📐',
    tags: ['linear-algebra', 'study-guide', 'matrices']
  },
  {
    id: 6,
    title: 'Investment Analysis Test Bank',
    description: 'Test bank for investment analysis course. Covers portfolio theory, asset pricing, derivatives, and risk management.',
    subject: 'finance',
    category: 'test-banks',
    price: 27.99,
    rating: 4.8,
    reviews: 142,
    downloads: 1234,
    seller: 'Robert Martinez',
    university: 'Columbia University',
    pages: 180,
    uploadDate: '2024-11-12',
    thumbnail: '📊',
    tags: ['investments', 'test-bank', 'portfolio']
  },
  {
    id: 7,
    title: 'Differential Equations Complete Notes',
    description: 'Detailed notes on ordinary and partial differential equations. Includes examples, theorems, and applications.',
    subject: 'mathematics',
    category: 'notes',
    price: 18.99,
    rating: 4.7,
    reviews: 134,
    downloads: 1432,
    seller: 'Prof. James Lee',
    university: 'UC Berkeley',
    pages: 145,
    uploadDate: '2024-11-08',
    thumbnail: '🔢',
    tags: ['differential-equations', 'notes', 'ode']
  },
  {
    id: 8,
    title: 'Econometrics Assignment Solutions',
    description: 'Solutions to econometrics assignments covering regression analysis, hypothesis testing, and time series analysis.',
    subject: 'economics',
    category: 'assignments',
    price: 21.99,
    rating: 4.8,
    reviews: 98,
    downloads: 945,
    seller: 'Dr. Maria Garcia',
    university: 'University of Chicago',
    pages: 88,
    uploadDate: '2024-11-22',
    thumbnail: '📈',
    tags: ['econometrics', 'assignments', 'regression']
  },
  {
    id: 9,
    title: 'Financial Derivatives Study Guide',
    description: 'Comprehensive guide to options, futures, swaps, and other derivatives. Includes pricing models and hedging strategies.',
    subject: 'finance',
    category: 'study-guides',
    price: 25.99,
    rating: 4.9,
    reviews: 167,
    downloads: 1567,
    seller: 'David Kim',
    university: 'MIT',
    pages: 110,
    uploadDate: '2024-11-14',
    thumbnail: '💹',
    tags: ['derivatives', 'study-guide', 'options']
  },
  {
    id: 10,
    title: 'Statistics for Economics Test Bank',
    description: 'Test bank covering probability, distributions, hypothesis testing, and regression. Perfect for exam preparation.',
    subject: 'mathematics',
    category: 'test-banks',
    price: 23.99,
    rating: 4.7,
    reviews: 145,
    downloads: 1678,
    seller: 'Prof. Anna Brown',
    university: 'Harvard University',
    pages: 165,
    uploadDate: '2024-11-16',
    thumbnail: '📊',
    tags: ['statistics', 'test-bank', 'probability']
  },
  {
    id: 11,
    title: 'Game Theory Complete Solutions',
    description: 'Solutions manual for game theory course. Covers Nash equilibrium, sequential games, and auction theory.',
    subject: 'economics',
    category: 'solutions',
    price: 26.99,
    rating: 4.8,
    reviews: 112,
    downloads: 1123,
    seller: 'Dr. Thomas Wilson',
    university: 'Stanford University',
    pages: 135,
    uploadDate: '2024-11-19',
    thumbnail: '🎮',
    tags: ['game-theory', 'solutions', 'nash-equilibrium']
  },
  {
    id: 12,
    title: 'Real Analysis Lecture Notes',
    description: 'Complete lecture notes for Real Analysis. Covers sequences, series, continuity, differentiation, and integration.',
    subject: 'mathematics',
    category: 'notes',
    price: 20.99,
    rating: 4.9,
    reviews: 189,
    downloads: 1890,
    seller: 'Prof. Jennifer Taylor',
    university: 'Princeton University',
    pages: 175,
    uploadDate: '2024-11-11',
    thumbnail: '∞',
    tags: ['real-analysis', 'notes', 'sequences']
  }
];

export const mockReviews = [
  {
    id: 1,
    documentId: 1,
    user: 'John D.',
    rating: 5,
    comment: 'Excellent resource! Helped me ace my microeconomics exam. Very comprehensive and well-organized.',
    date: '2024-11-20'
  },
  {
    id: 2,
    documentId: 1,
    user: 'Sarah M.',
    rating: 4,
    comment: 'Great test bank with detailed solutions. Would have liked more practice questions though.',
    date: '2024-11-18'
  },
  {
    id: 3,
    documentId: 2,
    user: 'Mike R.',
    rating: 5,
    comment: 'Best solutions manual I\'ve found! Step-by-step explanations are crystal clear.',
    date: '2024-11-15'
  }
];

export const mockUser = {
  id: 1,
  name: 'Current User',
  email: 'user@example.com',
  role: 'buyer', // or 'seller'
  joinDate: '2024-01-15',
  purchasedDocuments: [1, 2, 4],
  uploadedDocuments: [],
  earnings: 0,
  favorites: [3, 5, 6]
};

// Helper functions
export function getDocumentById(id) {
  return mockDocuments.find(doc => doc.id === parseInt(id));
}

export function getDocumentsBySubject(subject) {
  return mockDocuments.filter(doc => doc.subject === subject);
}

export function getDocumentsByCategory(category) {
  return mockDocuments.filter(doc => doc.category === category);
}

export function getReviewsByDocumentId(documentId) {
  return mockReviews.filter(review => review.documentId === parseInt(documentId));
}

export function searchDocuments(query) {
  const lowerQuery = query.toLowerCase();
  return mockDocuments.filter(doc => 
    doc.title.toLowerCase().includes(lowerQuery) ||
    doc.description.toLowerCase().includes(lowerQuery) ||
    doc.tags.some(tag => tag.includes(lowerQuery))
  );
}

export function filterDocuments(filters) {
  let results = [...mockDocuments];
  
  if (filters.subject && filters.subject.length > 0) {
    results = results.filter(doc => filters.subject.includes(doc.subject));
  }
  
  if (filters.category && filters.category.length > 0) {
    results = results.filter(doc => filters.category.includes(doc.category));
  }
  
  if (filters.minPrice !== undefined) {
    results = results.filter(doc => doc.price >= filters.minPrice);
  }
  
  if (filters.maxPrice !== undefined) {
    results = results.filter(doc => doc.price <= filters.maxPrice);
  }
  
  if (filters.minRating !== undefined) {
    results = results.filter(doc => doc.rating >= filters.minRating);
  }
  
  if (filters.university) {
    results = results.filter(doc => doc.university === filters.university);
  }
  
  return results;
}

export function sortDocuments(documents, sortBy) {
  const sorted = [...documents];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
    case 'popular':
      return sorted.sort((a, b) => b.downloads - a.downloads);
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
}
