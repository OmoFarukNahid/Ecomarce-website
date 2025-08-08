const About = () => {
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Omar Bin Sayem Technical Solutions</h2>
              <p>
                At Smart AC Repair & Maintenance Services, we offer a full spectrum of mechanical, electrical, and civil solutions for residential, commercial, and industrial clients. Our core expertise spans air conditioning, ventilation, and air filtration systems — ensuring healthy air and climate control throughout your space.
              </p>
              <p>
                Beyond HVAC, we also specialize in high-quality floor and wall tiling, precision plaster works, and complete plumbing and sanitary installations that meet modern infrastructure standards. Our electrical services cover both installation and preventive maintenance, handled by certified technicians to ensure safety and efficiency.
                
              </p>
              <p>
                From individual system installations to total facility upkeep, our team is committed to reliable service, long-term performance, and total customer satisfaction. Whether you’re renovating a home, building a commercial space, or upgrading existing utilities — we’re here to make it work seamlessly.
              </p>
              <div className="mission">
                <h3>Our Mission</h3>
                <p>
                  To provide reliable, affordable, and professional HVAC services that keep our customers
                  comfortable year-round while maintaining the highest standards of integrity and workmanship.
                </p>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team" 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;