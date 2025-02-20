import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import './index.css';
import Cart from './components/Cart';
import ProfileDetails from './components/ProfileDetails';

function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [profile, _] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    src: 'https://randomuser.me/api/portraits/men/75.jpg',
  });
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=300',
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Could not fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemIndex: number) => {
    const newCart = [...cart];
    newCart.splice(itemIndex, 1);
    setCart(newCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Router>
      <header>
        <h1 className="ml-2">Kirana Shop</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          {profile?.name && (
            <Link to="/profile">
              <img className="profile" src={profile.src} alt="Profile" />
            </Link>
          )}
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<ProfileDetails data={profile} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              getTotal={getTotal}
            />
          }
        />
      </Routes>
      <footer>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="/complaints">Complaints</a>
            <a href="/help">Help</a>
            <a href="/feedback">Feedback</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-links">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/shipping">Shipping Policy</a>
            <a href="/returns">Returns Policy</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="#" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p>&copy; 2025 Kirana Shop. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
