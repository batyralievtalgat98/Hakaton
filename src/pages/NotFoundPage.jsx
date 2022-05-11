import { Box, Button, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box>
      <Grid sx={{mt: '30px'}}>
      <Typography variant='h3' textAlign={'center'}>
      404 PAGE NOT FOUND BYE BYE
        </Typography>
        

      <ImageList sx={{ width: '180%', height: '180%', mt: '20px', mb: '50px', ml: '60px'}} >
  
    <ImageListItem key=''>
    <Link to='/'>
      <Button>Back to home</Button>
      </Link>
      <img src='https://c.tenor.com/eCRrEqQIu4wAAAAC/john-travolta-vincent-vega.gif'
        alt=''
        loading="lazy"
      />
      
    </ImageListItem>
  </ImageList>
</Grid>
    </Box>
  );
};

export default NotFoundPage;