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
        
        <Link to='/'>
      <Button sx={{alignSelf: 'center', border: '1px solid blue'}}>Back to home</Button>
      </Link>
  
    
      
      <img width='100%' src='https://c.tenor.com/eCRrEqQIu4wAAAAC/john-travolta-vincent-vega.gif'
  
      />
      
      
    
</Grid>
    </Box>
  );
};

export default NotFoundPage;