import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="logo-arabic">ةينفلا تامدخلل مياص نيب رمع</div>
          <div className="logo-english">
            OMAR BIN SAYEM<br />
            <span className="orange-text">Technical Services</span>
          </div>
        </Link>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <a href="tel:+971502088575" className="nav-phone">
            <PhoneIcon className="icon" />
            +971502088575
          </a>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn">
          {isOpen ? <XMarkIcon className="icon" /> : <Bars3Icon className="icon" />}
        </button>
      </div>
      
      {isOpen && (
        <div className="mobile-nav">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <a href="tel:+971502088575" onClick={() => setIsOpen(false)}>
            <PhoneIcon className="icon" />
            +971502088575
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;