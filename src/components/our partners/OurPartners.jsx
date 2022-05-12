import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import  "./OurPartners.css";

const OurPartners = () => {

  const itemData = [ 
    {
      img: 'http://tfewines.com/wp-content/uploads/2019/02/MAT_TFE.png',
      title: 'Breakfast',
    },
    {
      img: 'http://tfewines.com/wp-content/uploads/2019/02/graphic_brand_logo_sutter_home@2x.png',
      title: 'Burger',
    },
    {
      img: 'http://tfewines.com/wp-content/uploads/2019/02/brv_logo.png',
      title: 'Camera',
    },
    {
      img: 'http://tfewines.com/wp-content/uploads/2019/02/nr_logo.png',
      title: 'Coffee',
    },
    {
      img: 'http://tfewines.com/wp-content/uploads/2019/02/LU-Luminara_Logo-web.png',
      title: 'Robert Mondavi',
    },
    {
      img: 'http://tfewines.com/wp-content/uploads/2019/02/he_tfe_logo.png',
      title: 'Gailo Family',
    },
    {
      img: 'http://tfewines.com/wp-content/uploads/2019/02/angove_tfewines.png',
      title: 'Concha y Toro ',
    },
    {
      img: 'https://www.tfewines.com/wp-content/uploads/2021/07/morrows-logo-340-sepia.png',
      title: 'BareFoot',
    },

  ];
      
 
  return (
    <Box my={2} >



      <Typography variant="h3" sx={{textAlign: 'center', fontWeight: 'bold'}} >OUR<br/> PARTNERS</Typography>

<Grid container sx={{ maxWidth: '1100px', alignItems: 'center' }} className='OurPartners'>

   {itemData.map((item, index) => (
     <Grid item md={3} xs={12} sm={6} key={index} >
       <Box sx={{display: { xs:'block', sm: 'flex' }}}   className='imageOurPartners' >
    <img 
  
    src={`${item.img}`}
    srcSet={`${item.img}`}
    alt={item.title}
    loading="lazy" 
    width={250}
    height={150}
    align='center'
    

    />
    </Box>
</Grid>
    ))}

</Grid>   
    </Box>
  );
};
export default OurPartners;