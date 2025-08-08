import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      comment: 'The technician arrived on time and fixed my AC quickly. Very professional service!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      comment: 'Great experience from start to finish. Will definitely use them again.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Brown',
      comment: 'Fair pricing and honest assessment of what needed to be repaired.',
      rating: 4
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied customers.
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={i < testimonial.rating ? 'star filled' : 'star'}
                  />
                ))}
              </div>
              <p className="comment">"{testimonial.comment}"</p>
              <p className="name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;