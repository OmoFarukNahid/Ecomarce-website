import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Alternative way to force reflow that doesn't trigger ESLint
    requestAnimationFrame(() => {
      document.body.getBoundingClientRect();
    });
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return (
      <div style={{ 
        visibility: 'hidden',
        height: '100vh',
        width: '100%'
      }} />
    );
  }

  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
    </main>
  );
};

export default Home;