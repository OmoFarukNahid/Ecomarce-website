import { Link } from 'react-router-dom';  // Add this import at the top

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Omar Bin Sayem - Technical Solutions </h3>
            <p>Professional HVAC services for residential and commercial customers.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>P.O.BOX: 577777, NAEMA HAMAD BLDG<br />City, 1F 11 NAIF DEIRA DUBAI</p>
            <a href="tel:+971502088575" style={{color: 'inherit', textDecoration: 'none'}}>+971502088575</a>
            <a href="tel:+971522334008" style={{color: 'inherit', textDecoration: 'none'}}>+971522334008</a>
            <p>Email: <a href="mailto:mdfarukf208@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>mdfarukf208@gmail.com</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} OMAR BIN SAYEM - Technical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;