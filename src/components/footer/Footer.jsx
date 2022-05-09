import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'; 
import zIndex from '@mui/material/styles/zIndex';
import { height } from '@mui/system';
import React from 'react'; 
 
const Footer = () => { 
    return ( 
        <footer> 
            <Box sx={{background: 'rgb(54,57,61)', color: 'white', display: 'wrap'}}
            px={{ xs: 4, sm: 10 }} py={{ xs: 6, sm: 10 }} 
            > 
            <Container maxWidth="xl"> 
                <Grid container spacing={3}> 
                    <Grid item px={5} xs={3} sm={3} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='h6'>OUR PRODUCTS</Typography>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Red wine
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            White wine
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Rose wine
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Dessert wine
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Sparkling wine
                            </Link>
                           
                            
                            
                    </Grid>

                        
                        

                        
                        <Grid item px={5} xs={3} sm={3} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='h6'>CONTACTS</Typography>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Store hours
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Phone
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Address
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Store location
                            </Link>
                            
                        </Grid>

                    <Grid item pr={5} xs={3} sm={3} sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='h6'>COMPANY</Typography>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                                Company
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            About FineWine
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Partner network
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Careers
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Referral program
                            </Link>
                            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                            Coupon code
                            </Link>
                            


                    </Grid>
                        <Grid item xs={3} sm={3} pt={3} mt={2}>
                            
                            <Typography variant='h6'>PAYMENT METHODS</Typography>
                            <Grid py={3}>
                                <img style={{marginRight: '15px', width: '80px', height: '40px'}} src="https://cdn.icon-icons.com/icons2/1316/PNG/128/if-visa-2593666_86609.png" alt="" />
                                <img style={{marginRight: '15px', width: '80px', height: '40px'}} src="https://cdn.icon-icons.com/icons2/1178/PNG/128/mastercard_82049.png" alt="" />
                                <img style={{marginRight: '15px', width: '80px', height: '65px'}} src="https://cdn-icons-png.flaticon.com/128/5968/5968279.png" alt="" />
                            
                            </Grid>
                        </Grid>
                            

                </Grid> 
            </Container> 

            <Grid>
                <Grid  container spacing={3} px={{ xs: 4, sm: 3 }} py={{ xs: 6, sm: 3 }}>
            <Grid item  px={{ xs: 4, sm: 5 }} sx={{display: 'flex', flexDirection: 'column'}}>
            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                Store hours</Link>
            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                Phone</Link>
            <Link variant='body1' py={{xs: 1}} sx={{color: '#9999A6'}} href="#" color="inherit" underline="hover">
                Address</Link>
            </Grid>

            <Grid item sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant='body1' py={{xs: 1}}>Mon-Sun: 9AM-9PM</Typography>
            <Typography variant='body1' py={{xs: 1}}>+996 555 555 555</Typography>
            <Typography variant='body1' py={{xs: 1}}>Manas street 55, Bishkek, Kyrghyzstan</Typography>
            </Grid>
            </Grid>
            

                    <Box textAlign='center' sx={{color: 'white', display: 'flex', justifyContent: 'space-around'}} variant='body2' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}> 
                    <Typography variant='h6'>FINEWINE.</Typography> &reg; {new Date().getFullYear()} FineWine All Rights Reserved
                    <Box>
                    <img style={{marginRight: '15px', width: '30px', height: '30px'}} src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670127.png?token=exp=1652096806~hmac=5fe274b1fe7c5eeda403147f3e78afb0" alt="" />
                    <img style={{marginRight: '15px', width: '30px', height: '30px'}} src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="" />
                    <img style={{marginRight: '15px', width: '30px', height: '30px'}} src="https://cdn-icons.flaticon.com/png/128/4138/premium/4138124.png?token=exp=1652096909~hmac=091ad85f88779995e5b84a99fbc13ef9" alt="" />
                    </Box>
                    </Box>
            </Grid>
            </Box> 
        </footer > 
    ); 
}; 
 
export default Footer;