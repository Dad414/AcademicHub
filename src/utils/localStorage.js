// Local storage utilities for cart and user data

const CART_KEY = 'academic_marketplace_cart';
const USER_KEY = 'academic_marketplace_user';
const PURCHASED_KEY = 'academic_marketplace_purchased';
const FAVORITES_KEY = 'academic_marketplace_favorites';

// Cart functions
export function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

export function addToCart(documentId) {
    const cart = getCart();
    if (!cart.includes(documentId)) {
        cart.push(documentId);
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
    return cart;
}

export function removeFromCart(documentId) {
    const cart = getCart();
    const updated = cart.filter(id => id !== documentId);
    localStorage.setItem(CART_KEY, JSON.stringify(updated));
    return updated;
}

export function clearCart() {
    localStorage.setItem(CART_KEY, JSON.stringify([]));
    return [];
}

export function getCartCount() {
    return getCart().length;
}

export function isInCart(documentId) {
    return getCart().includes(documentId);
}

// Purchased documents functions
export function getPurchasedDocuments() {
    const purchased = localStorage.getItem(PURCHASED_KEY);
    return purchased ? JSON.parse(purchased) : [];
}

export function addPurchasedDocuments(documentIds) {
    const purchased = getPurchasedDocuments();
    const updated = [...new Set([...purchased, ...documentIds])];
    localStorage.setItem(PURCHASED_KEY, JSON.stringify(updated));
    return updated;
}

export function isPurchased(documentId) {
    return getPurchasedDocuments().includes(documentId);
}

// Favorites functions
export function getFavorites() {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
}

export function addToFavorites(documentId) {
    const favorites = getFavorites();
    if (!favorites.includes(documentId)) {
        favorites.push(documentId);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
    return favorites;
}

export function removeFromFavorites(documentId) {
    const favorites = getFavorites();
    const updated = favorites.filter(id => id !== documentId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return updated;
}

export function isFavorite(documentId) {
    return getFavorites().includes(documentId);
}

export function toggleFavorite(documentId) {
    if (isFavorite(documentId)) {
        return removeFromFavorites(documentId);
    } else {
        return addToFavorites(documentId);
    }
}

// User authentication (mock)
export function getCurrentUser() {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
}

export function setCurrentUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
}

export function logout() {
    localStorage.removeItem(USER_KEY);
}

export function isAuthenticated() {
    return getCurrentUser() !== null;
}

// Mock login function
export function login(email, password) {
    // In a real app, this would make an API call
    const mockUser = {
        id: 1,
        name: 'Demo User',
        email: email,
        role: 'buyer',
        joinDate: new Date().toISOString()
    };
    setCurrentUser(mockUser);
    return mockUser;
}
