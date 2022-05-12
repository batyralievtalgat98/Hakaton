import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCart } from '../../contexts/CartContextProvider';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  console.log(cart);

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem('cart');
    getCart();
  };

  return (
    <TableContainer component={Paper} sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <Table  sx={{width: '700px'}} 
        aria-label="customized table">
        
          <TableRow>
            <StyledTableCell>Picture</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>

            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Count</StyledTableCell>
            <StyledTableCell align="right">SubPrice</StyledTableCell>
            
          </TableRow>
        
        <TableBody>
          {cart?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.picture} alt="" width="70" height="70" />
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.name}</StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>

              <StyledTableCell align="right">{row.item.price}</StyledTableCell>

              <StyledTableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>

              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>

              <StyledTableCell align="right">
                <IconButton onClick={() => deleteCartProduct(row.item.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

        <Grid container 
        sx={{m: '0 10px', 
        width: '200px', 
        height: '100%', 
        
        
         
        }}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: '12%'}}>
          <Typography textAlign='center' variant='h5'>Summary</Typography>
          
          <StyledTableCell >Subtotal {cart?.totalPrice} $</StyledTableCell>
          
          <StyledTableCell >Shipping 10 $</StyledTableCell>

          <Typography display='flex' textAlign='center'> <h3>TOTAL {cart?.totalPrice + 10} $</h3></Typography>
          </Box>

            <Button onClick={cartCleaner} 
            sx={{color: 'red', 
            border: '1px solid black', 
            background: '#3e5e70', 
            display: 'flex', 
            alignSelf: 'flex-end',
            marginLeft: '30%', maxHeight: '10vh'}}>Buy now</Button>
        </Grid>
    </TableContainer>
  );
}
