import { Grid } from '@mui/material';
import React from 'react';
import ProductList from '../components/crud/ProductList';
import SideBar from '../components/crud/SideBar';

const ProductsPage = () => {
  return (
    <Grid sx={{display: 'flex'}}>
      <Grid item md={3}><SideBar/></Grid>
      <Grid item md={8}><ProductList/></Grid>
     
    </Grid>
    )
  
};

export default ProductsPage;