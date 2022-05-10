import React, { useEffect } from 'react';




import { useProducts } from '../../contexts/CrudContextProvider';
import { Box } from '@mui/material';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const { products, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();



  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);



  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      my: '35px'
    }}
  >
    {products ? (
      products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))
    ) : (
      <h2>Loading...</h2>
    )}
</Box>
  );
};

export default ProductList;