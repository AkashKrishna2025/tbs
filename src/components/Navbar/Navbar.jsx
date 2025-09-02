import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import MegaMenu from './MegaMenu';
import { useCart } from '../../context/CartContext';
import { CATEGORIES, PRODUCTS } from '../../Data/products';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/icons/search.png';
import userIcon from '../../assets/icons/user.png';
import cartIcon from '../../assets/icons/cart.png';
import newBadgeIcon from '../../assets/icons/new.png'; // <--- NEW: Import your new badge icon
import { useAuth } from '../../context/AuthContext';

// --- Mock Authentication (for demonstration, replace with actual context) ---
const mockAuth = {
  isAuthenticated: () => !!localStorage.getItem('isUserLoggedIn'),
  logout: () => localStorage.removeItem('isUserLoggedIn'),
};
// --- End Mock Authentication ---

// --- NEW: Mobile Menu Overlay Component ---
const MobileMenuOverlay = ({ isOpen, onClose, categories, onConsultationClick, onNavigate }) => {
  return (
    <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.open : ''}`} onClick={onClose}>
      <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}> {/* Prevent clicks inside from closing */}
        <span className={styles.mobileMenuClose} onClick={onClose}>&times;</span>
        <h3>Explore</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/collection/${category.id}`} onClick={() => { onClose(); onNavigate(`/collection/${category.id}`); }}>
                {category.name}
              </Link>
            </li>
          ))}
          {/* Add other main links here if needed */}
          <li>
            <Link to="/my-orders" onClick={() => { onClose(); onNavigate('/my-orders'); }}>My Last Order</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => { onClose(); onNavigate('/login'); }}>Login / Register</Link>
          </li>
        </ul>
        <Link
          to="/contact"
          className={styles.consultationButtonMobile}
          onClick={() => { onClose(); onConsultationClick(); }}
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
};
// --- END NEW: Mobile Menu Overlay Component ---


const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Assuming useAuth provides these
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Use the authentication status from your context directly
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(isAuthenticated); // Update login status when auth context changes or location
  }, [location, isAuthenticated]);

  const { cartItems } = useCart();
  const activeCategoryData = CATEGORIES.find(cat => cat.id === hoveredCategory);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const filtered = PRODUCTS.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  const handleCartClick = (event) => {
    if (!isLoggedIn) { // Use isLoggedIn state
      event.preventDefault();
      navigate('/login');
    }
  };

  const handleProfileClick = () => {
    if (isLoggedIn) { // Use isLoggedIn state
      setIsProfileMenuOpen(!isProfileMenuOpen);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
    navigate('/');
    // You might want to update the isLoggedIn state here as well or rely on the useEffect for location change
    // For immediate UI update, you could do: setIsLoggedIn(false);
    // window.location.reload(); // Only if truly necessary, often avoid full reloads
  };

  // Close all dropdowns/menus when mobile menu opens or vice versa
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsSearchOpen(false);
      setIsProfileMenuOpen(false);
      setHoveredCategory(null); // Close mega menu
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Close mobile menu if screen size changes to desktop while open
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMobileMenuOpen) { // Adjust breakpoint as needed
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);


  return (
    <header
      className={styles.header}
      onMouseLeave={() => setHoveredCategory(null)}
    >
      {/* Top Bar */}
      <div className={styles.topBar}>
        <p><span><u>FREE SHIPPING</u> </span>ONLY FOR PREPAID ORDERS ABOVE 999/- INR</p>
      </div>

      {/* Main Navigation */}
      <nav className={`${styles.mainNav} ${styles.container}`}>
        <button
          className={styles.consultationButton}
          onClick={() => navigate('/contact')} // Use navigate for internal routes
        >
          Book Consultation
        </button>

        <Link to="/" className={styles.logoContainer}>
          <img src={logo} alt="TBS Studio Logo" className={styles.logo} />
        </Link>

        <div className={styles.icons}>
          {/* Search */}
          <div className={styles.searchContainer}>
            <img
              src={searchIcon}
              alt="Search"
              className={styles.icon}
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                setIsProfileMenuOpen(false); // Close profile if search opens
                setHoveredCategory(null); // Close mega menu
                setIsMobileMenuOpen(false); // Close mobile menu
              }}
            />
            {isSearchOpen && (
              <div className={styles.searchDropdown}>
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchResults.length > 0 && (
                  <div className={styles.searchResultsList}>
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className={styles.searchResultItem}
                        onClick={() => setIsSearchOpen(false)}
                      >
                        {product.images && product.images.length > 0 ? (
                          <img src={product.images[0]} alt={product.name} />
                        ) : (
                          <div className={styles.searchResultPlaceholder} />
                        )}
                        <span>{product.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className={styles.profileContainer}>
            <img
              src={userIcon}
              alt="User"
              className={styles.icon}
              onClick={handleProfileClick}
            />
            {isLoggedIn && isProfileMenuOpen && (
              <div className={styles.profileMenu}>
                <Link to="/my-orders" onClick={() => setIsProfileMenuOpen(false)}>
                  My Last Order
                </Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className={styles.cartIconContainer}
            onClick={handleCartClick}
          >
            <img src={cartIcon} alt="Cart" className={styles.icon} />
            {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsSearchOpen(false); // Close search if mobile menu opens
            setIsProfileMenuOpen(false); // Close profile if mobile menu opens
            setHoveredCategory(null); // Close mega menu
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Category Bar */}
      <div className={`${styles.categoryBar} ${styles.container}`}>
        <ul className={styles.categoryList}>
          {CATEGORIES.map((category) => (
            <li
              key={category.id}
              onMouseEnter={() => setHoveredCategory(category.id)}
            >
              <Link to={`/collection/${category.id}`}>{category.name}</Link>
              {category.isNew && (
                <img src={newBadgeIcon} alt="New" className={styles.newBadge} />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mega Menu */}
      {hoveredCategory && <MegaMenu category={activeCategoryData} />}

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        categories={CATEGORIES}
        onConsultationClick={() => navigate('/contact')}
        onNavigate={navigate} // Pass navigate function
      />
    </header>
  );
};

export default Navbar;