import React from 'react'
import { Box, Grid } from '@mui/material';
import csgo from "../assets/csgo.png"
import '../Style/FirstContent.css'


export const FirstContentBox = () => {
  return (
    <Grid display="flex" justify-content="flex-end" align-items="center" sx={{backgroundColor: '#1F2022', color: 'white', p: 2 ,borderRadius: '25px'}}>      
      <p >Discover and buy/sell a wide variety of in-gameitems for your favorite games!.</p>
      <img src = {csgo} style={{ float: 'right', margin: '0 0 10px 10px' }} width={350} height={350}></img>
    </Grid>
  )
}
