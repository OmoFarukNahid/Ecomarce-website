import { WrenchScrewdriverIcon, CogIcon, ShieldCheckIcon, RectangleGroupIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Air - Conditioning ',
      description: ' We provide expert installation and maintenance of air conditioning and ventilation systems, ensuring clean, efficient, and healthy indoor air environments for homes and businesses. .',
      icon: 'AC Repair'
    },
    {
      id: 2,
      title: 'AC System Installation & Maintenance',
      description: 'From HVAC units to mechanical systems, we offer end-to-end installation and reliable maintenance services to ensure optimal performance and energy efficiency.',
      icon: 'install1'
    },
    {
      id: 3,
      title: 'Floor and Wall Tiling Works',
      description: 'Our tiling specialists deliver high-quality floor and wall finishes with precision and durability. We work with a wide range of materials for both residential and commercial interiors.',
      icon: 'maintenance1'
    },
    {
      id: 4,
      title: 'Electrical Equipment Installation & Maintenance',
      description: 'We handle all types of electrical installations, wiring, and routine servicing with safety, compliance, and functionality as top priorities.',
      icon: 'maintenance2'
    },
    {
      id: 5,
      title: 'Plumbing & Senetery Installation',
      description: 'Our certified technicians provide professional plumbing services, including water supply systems, drainage, and sanitary fittings for new builds or renovations.',
      icon: 'maintenance3'
    },
    {
      id: 6,
      title: 'Plaster Works',
      description: 'We offer clean and seamless plastering solutions for walls and ceilings, creating a smooth foundation for painting and decorative finishes.',
      icon: 'install2'
    }
    
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'AC Repair':
        return <RectangleGroupIcon className="service-icon" />;
      case 'install1':
        return <CogIcon className="service-icon" />;
      case 'maintenance1':
        return <ShieldCheckIcon className="service-icon" />;
      case 'maintenance2':
        return <ShieldCheckIcon className="service-icon" />;
      case 'maintenance3':
        return <ShieldCheckIcon className="service-icon" />;
      case 'install2':
        return <ShieldCheckIcon className="service-icon" />;
      default:
        return null;
    }
  };

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer comprehensive HVAC solutions to keep your home comfortable year-round.
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon-container">
                {getIcon(service.icon)}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;