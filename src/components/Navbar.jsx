import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">Omar Bin Sayem - Technical Solutions</Link>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <a href="tel:+1234567890" className="nav-phone">
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