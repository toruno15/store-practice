import React from 'react';
//imports from Material UI
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
//imports of react-router
import { Link } from 'react-router-dom';

//funcion que define los estilos de la card
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Isloggout({open, handleClose}) {
  
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-price"
      >
        <Card sx={{...style, maxWidth: 800}}>
          <CardContent>
            <h2 id="parent-modal-title">
                Funcion Invalida
            </h2>
            <p id="parent-modal-price">
              Para poder hacer uso de estas funcionalidades por favor registrese o en caso de que ya posea una cuenta con nosostros por favor inicie sesion.
            </p>
          </CardContent>
          <CardActions>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Stack spacing={3} direction="row">
                <Button onClick={handleClose} color="secondary" variant="outlined">
                  Cancel
                </Button>
                <Link to='/store-practice/false/0/login' className='link'>
                  <Button color="success" variant="contained">
                    Go to Login
                  </Button>
                </Link>
              </Stack>
            </Box>
          </CardActions>
        </Card>
      </Modal>
    </React.Fragment>
  );
}