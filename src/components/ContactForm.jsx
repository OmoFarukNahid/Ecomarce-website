import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have questions or need service? Fill out the form below and we'll get back to you soon.
        </p>
        
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <EnvelopeIcon className="info-icon" />
              <div>
                <p>Email</p>
                <p>Email: <a href="mailto:mdfarukf208@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>mdfarukf208@gmail.com</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <PhoneIcon className="info-icon" />
              <div>
                <p>Phone</p>
                <a href="tel:+971502088575" style={{color: 'inherit', textDecoration: 'none'}}>+971502088575</a>
                <a href="tel:+971522334008" style={{color: 'inherit', textDecoration: 'none'}}>+971522334008</a>
              </div>
            </div>
            
            <div className="info-item">
              <MapPinIcon className="info-icon" />
              <div>
                <p>Address</p>
                <p>P.O.BOX: 577777, NAEMA HAMAD BLDG, 1F 11 NAIF DEIRA DUBAI</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;