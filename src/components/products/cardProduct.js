import React, {useState} from 'react';
//imports of Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
//icons
import IconButton from '@mui/material/IconButton';
import  AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
//import of components
import AddProductToCar from '../carShop/addtoCarShop';
import Isloggout from '../layouts/isLoggout';
//import from react-router
import { Link } from 'react-router-dom';

export default function CarProduct({product}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{maxWidth: 345,}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
          sx={{minWidth: 250}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {'$' + product.price}
          </Typography>
        </CardContent>
        <Rating sx={{ml: 2,}}
          name="generalOpinion"
          value={product.ranking}
          readOnly
        />
        <CardActions>
          <Link to={`/store-practice/${true}/${0}/product/see-product/${product.id}`}>
            <IconButton size="large" aria-label="BuyCar" color="secondary">
                  <VisibilityIcon />
            </IconButton>
          </Link>
          {true
            ?<Isloggout open={open} handleClose={handleClose} />
            :<AddProductToCar open={open} handleClose={handleClose} product={product}/>
          }
          <IconButton onClick={handleOpen} size="large" aria-label="BuyCar" color="success">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}