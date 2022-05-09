import React, { useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { productContext, useProducts } from '../../contexts/CrudContextProvider';
const AddProduct = () => {

  const{ addProduct }=useProducts()

  const [product, setProduct]= useState({
    name: '',
    description: '',
    price: 0,
    picture: '',
  })



  const handleInp = (e)=>{
    if (e.target.name === 'price'){
      let obj = {
        ... product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj)
    }else{
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      }
      setProduct(obj)
    }
  }
 
  return (
    <div>
      <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <TextField
      sx={{marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name='name'
        size="small"
        

        onChange={handleInp}
      />
      <TextField
      sx={{marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name='description' 
        size="small"

        onChange={handleInp}
      />
      <TextField
      sx={{marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name='price'
        size="small"

        onChange={handleInp}
      />
      <TextField
      
      sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name='picture'
        size="small"

        onChange={handleInp}
      />
      <Button
      sx={{marginBottom: '10px', borderColor: 'black', color: 'black', backgroundColor: 'whitesmoke' }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={()=>{
          addProduct(product);
        }}
      >
       Add product
      </Button>
    </Box>
    </div>
  );
};

export default AddProduct;