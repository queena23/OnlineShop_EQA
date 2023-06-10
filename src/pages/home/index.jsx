import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import './index.css';
import itemData from '../../data/home_images_list'


const Home = () => {
    return (

        <div class='home-container'>
            +            <div class="intro-container">
                <h3 class="title"> Awesome EQ   </h3>
                <p class="intro"> Welcome to Awesome EQ, your ultimate online destination for trendy and high-quality clothing that will elevate your style game to new heights. We are passionate about fashion and believe that every individual deserves to look and feel amazing in what they wear.</p>
            </div>
            <div class="image-grid">
                <Grid container spacing={1}>
                    {itemData.map((item) => (
                    <Grid item xs={4}>
                        <div class="image-container">  <img class="home-images" src={item.img} /> </div>
                    
                    </Grid>
                ))}
            </Grid>
            </div>
        </div>
    );
};
 
export default Home;