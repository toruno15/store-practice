import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
//import incons
import CancelIcon from '@mui/icons-material/Cancel';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

//objetos del carrito de compras
//let productsList = [];


export default function AddProductToCar({open, handleClose, product}) {
  const [inputCant, setInputCant] = useState({text: 'outlined-basic', label : 'Cant', error : false, textError :''});

  const changeInput = (e) => {
     if((new RegExp('[1-9][0-9]?')).test(e.target.value)){
      setInputCant({
        text: 'outlined-basic',
        label: 'Cant',
        error: false,
        textError: ''
      });
    }else{
      setInputCant({
        text: 'outlined-error-helper-text',
        label: 'Error',
        error: true,
        textError: 'ERROR!. Digite un número mayor a cero.'
      });
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-price"
      >
        <Card sx={{...style, maxWidth: 800}}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <h2 id="parent-modal-title">{product.name}</h2>
            <p id="parent-modal-price">
              price: ${product.price}
            </p>
          </CardContent>
          <CardActions>
            <form>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField onChange={changeInput} error={inputCant.error} id={inputCant.text} label={inputCant.label} variant="outlined" helperText={inputCant.textError}/>
                <Stack spacing={3} direction="row">
                  <Button onClick={handleClose} color="secondary" variant="outlined" endIcon={<CancelIcon />}>
                    Cancel
                  </Button>
                  <Button color="success" variant="contained" endIcon={<ShoppingCartCheckoutIcon />}>
                    Send
                  </Button>
                </Stack>
              </Box>
            </form>
          </CardActions>
        </Card>
      </Modal>
    </React.Fragment>
  );
}


//las alerts o toast notifications
/*import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

 */