import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosInitializer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
};

export default AosInitializer;
