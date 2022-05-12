import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import wing from '../image/wine.png'

import {Link} from 'react-router-dom'
import styled from '@emotion/styled';
const Section1 = () => {


  const StyledButton = styled(Button)`
  background-color: black;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black
  }

`
  
  return (
<>
      <Box sx={{background:'#F3F3F3',zIndex: -1, borderBottomRightRadius:'40%',paddingBottom:'5vw'}}>
    <Grid container sx={{display: 'flex'}}>
      <Grid  item sm={5} sx={{paddingLeft: '10vw'}}>
      <Typography variant='h2' sx={{fontWeight:'bold', fontSize:{xs:'2rem', sm:'3.75rem'}}}>FINEWINE.</Typography>
  <Typography>LIKE WHAT YOU DRINK.<br/>
  WE'LL MAKE IT EASY
  </Typography>
 <Link to='/products'> 
  <StyledButton >GO TO STORE</StyledButton>
  </Link>
  </Grid>

  <Grid sm={7} item> <img src={wing} alt=""  width={'80%'} height={'80%'} align='right'/></Grid>
    </Grid>
  </Box>
  </>
  );
};

export default Section1;