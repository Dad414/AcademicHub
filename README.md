# 📚 AcademicHub - Academic Document Marketplace

A premium marketplace platform for buying and selling academic study materials in Economics, Mathematics, and Finance.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.6-646cff.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🌟 Features

- **📖 Browse Documents** - Explore study materials across Economics, Math, and Finance
- **🔍 Advanced Filtering** - Filter by subject, category, price, rating, and university
- **🛒 Shopping Cart** - Add multiple documents and checkout seamlessly
- **💳 Checkout System** - Complete payment flow (mockup for demo)
- **📤 Document Upload** - Drag-and-drop file upload for sellers
- **📊 Seller Dashboard** - Track earnings, sales, and analytics
- **⭐ Ratings & Reviews** - View document ratings and user reviews
- **📱 Responsive Design** - Fully optimized for mobile, tablet, and desktop

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Dad414/AcademicHub.git

# Navigate to project directory
cd AcademicHub

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## 📁 Project Structure

```
academic-marketplace/
├── src/
│   ├── components/       # Reusable components (Navbar, Footer, Cards, etc.)
│   ├── pages/           # Page components (Home, Browse, Cart, etc.)
│   ├── utils/           # Utilities (mock data, local storage)
│   ├── App.jsx          # Main app with routing
│   └── index.css        # Design system & global styles
├── index.html           # HTML entry point
└── package.json         # Dependencies
```

## 🎨 Design System

- **Color Palette**: Vibrant gradients (purple, pink, blue, yellow)
- **Typography**: Inter font family from Google Fonts
- **Effects**: Glassmorphism, smooth animations, hover effects
- **Responsive**: Mobile-first design with breakpoints

## 🛠️ Technology Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite 7.2.6
- **Routing**: React Router DOM 7
- **Styling**: Vanilla CSS with custom design system
- **State**: React hooks + Local Storage

## 📦 Sample Data

The application includes 12 mock documents:

- **Economics**: Microeconomics, Macroeconomics, Econometrics, Game Theory
- **Mathematics**: Calculus, Linear Algebra, Differential Equations, Statistics
- **Finance**: Corporate Finance, Investment Analysis, Derivatives

## 🔄 User Flows

### Buyer Flow
1. Browse documents by subject or search
2. Apply filters (category, price, rating)
3. View document details and reviews
4. Add to cart and checkout
5. Access purchased documents in dashboard

### Seller Flow
1. Upload document with drag-and-drop
2. Fill metadata (title, description, price)
3. Track sales and earnings in dashboard
4. View analytics and performance

## 🚧 Production Deployment

This is a **frontend-only prototype**. For production, you'll need:

### Backend Requirements
- **API Server**: Node.js/Express or Python/FastAPI
- **Database**: PostgreSQL or MongoDB
- **File Storage**: AWS S3 or Google Cloud Storage
- **Payment Gateway**: Stripe or PayPal integration
- **Authentication**: JWT or OAuth

### Recommended Enhancements
- Real user authentication
- PDF preview functionality
- Advanced search with Elasticsearch
- Email notifications
- Admin panel for moderation
- Server-side rendering (Next.js)
- CDN for global performance

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created with ❤️ for students and educators

## 🔗 Links

- **Live Demo**: http://localhost:5173/ (local)
- **Repository**: https://github.com/Dad414/AcademicHub

---

**Note**: This is a demonstration project with mock data and simulated payment processing. For production use, implement proper backend infrastructure and real payment integration.
