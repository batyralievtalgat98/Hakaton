import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import wing from '../image/wine.png'

import {Link} from 'react-router-dom'
const Section1 = () => {
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
  <Button>GO TO STORE</Button>
  </Link>
  </Grid>

  <Grid sm={7} item> <img src={wing} alt=""  width={'80%'} height={'80%'} align='right'/></Grid>
    </Grid>
  </Box>
  </>
  );
};

export default Section1;