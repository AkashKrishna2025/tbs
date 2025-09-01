// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import SignatureProjects from '../components/SignatureProjects/SignatureProjects';
import DesignProcess from '../components/DesignProcess/DesignProcess';
import RealStories from '../components/RealStories/RealStories'; // इम्पोर्ट
import CTASection from '../components/CTASection/CTASection';   // इम्पोर्ट
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import GiftSection from '../components/GiftSection/GiftSection';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';


const HomePage = () => {
  return (
    <div>

      <HeroSection />
      <ProductSlider />
      <WhyChooseUs />
      <SignatureProjects />
      <DesignProcess />
       <RealStories />
      <CTASection />
        <GiftSection/>
      <TestimonialSection/>
  
     
    </div>
  );
};

export default HomePage;