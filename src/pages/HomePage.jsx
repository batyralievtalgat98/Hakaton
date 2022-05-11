import React from 'react';
import { Image } from 'react-bootstrap';
import ProductList from '../components/crud/ProductList';
import OurPartners from '../components/our partners/OurPartners';

const HomePage = () => {
  return (
    <div>
       

        <ProductList/>
        <OurPartners/>
    </div>
  );
};

export default HomePage;