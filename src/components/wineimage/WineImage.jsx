
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './WineImage.css'
const WineImage = () => {

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
    <div>
      <h2 className='wineText'>DISCOVER <br/>NEW FEELING</h2>
      <Box className='wineblock' sx={{display:'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
        <div className='wine wineblock1_1'>
          <img src="https://images.pexels.com/photos/66636/pexels-photo-66636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <h4> BEST OFFERS</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta?</p>
          <StyledButton >VIEW MORE</StyledButton>
          </div>
        <div className='wine wineblock1_2'>
          <img className='wineimg' src="https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <h4>THE MOST POPULAR WINES</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, harum!</p>
          <StyledButton>VIEW MORE</StyledButton>
          </div>
        <div className='wine wineblock1_3'
        ><img className='wineimg' src="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <h4>PREMIUM COLLECTION</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit?</p>
          <StyledButton>VIEW MORE</StyledButton>
        </div>
      </Box>
    </div>
  );
};

export default WineImage;