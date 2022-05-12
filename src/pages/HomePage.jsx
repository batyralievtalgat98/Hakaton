import React from 'react';
import OurPartners from '../components/our partners/OurPartners';
import Section1 from '../components/section1/Section1';
import SectionText from '../components/sectionText/SectionText';
import WineImage from '../components/wineimage/WineImage';

const HomePage = () => {
  return (
    <div>
       <Section1/>
       <WineImage/>
        <SectionText/>
        <OurPartners/>
        
    </div>
  );
};

export default HomePage;