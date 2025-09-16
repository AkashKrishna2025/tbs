// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import SignatureProjects from '../components/SignatureProjects/SignatureProjects';
import DesignProcess from '../components/DesignProcess/DesignProcess';
import RealStories from '../components/RealStories/RealStories';
import CTASection from '../components/CTASection/CTASection';   
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import GiftCard from '../components/GiftCard/GiftCard';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import giftCard1Image from '../assets/images/gift-card1.png';
import FloatingIcons from '../components/FloatingIcons/FloatingIcons';



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
      <GiftCard leftImage={giftCard1Image} />
      <TestimonialSection/>
     
      <FloatingIcons/>

    </div>
  );
};

export default HomePage;