import React from 'react';
import { Image } from 'react-bootstrap';
import ProductList from '../components/crud/ProductList';
import OurPartners from '../components/our partners/OurPartners';
import Section1 from '../components/section1/Section1';
import SectionText from '../components/sectionText/SectionText';

const HomePage = () => {
  return (
    <div>
       <Section1/>
        <SectionText/>
        <OurPartners/>
        
    </div>
  );
};

export default HomePage;