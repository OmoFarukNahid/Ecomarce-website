import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Professional AC Repair Services</h1>
          <p>Fast, reliable, and affordable HVAC solutions for your home or business.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Request Service</Link>
            <a href="tel:+971502088575" className="btn btn-outline">Call Now: +971502088575</a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://dhakaacservice.com/wp-content/uploads/2024/12/Dhaka-AC-Service-and-Repair.webp" 
            alt="AC Repair" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;