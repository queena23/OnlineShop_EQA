import React, { useState } from 'react';
import './index.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


const Top = () => {

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
      
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemImage, setItemImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add code to handle the submission of the item data (including the image) to your backend or perform any other necessary actions.
    // You can access the item data (name, price, description, and image) using the state variables (itemName, itemPrice, itemDescription, and itemImage).
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setItemImage(file);
  };

  return (
    
    <Grid container spacing={2}>
    <Grid item>
      <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt="complex" src="/static/images/grid/complex.jpg" />
      </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Standard license
          </Typography>
          <Typography variant="body2" gutterBottom>
            Full resolution 1920x1080 • JPEG
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: 1030114
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ cursor: 'pointer' }} variant="body2">
            Remove
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" component="div">
          $19.00
        </Typography>
      </Grid>
    </Grid>
  </Grid>

  );
}

export default Top;
