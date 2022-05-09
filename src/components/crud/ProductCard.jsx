import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../contexts/CrudContextProvider';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({item}) => {
  const { deleteProduct } = useProducts();

  const navigate = useNavigate();
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.picture}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>deleteProduct(item.id)}>Delete</Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default ProductCard;