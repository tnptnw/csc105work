import React from 'react'
import { Box, Grid } from '@mui/material';
import csgo from "../assets/csgo.png"
import '../Style/FirstContent.css'
import Typography from '@mui/material/Typography';


export const FirstContentBox = () => {
  return (
    <>
      <Grid display="flex" sx={{backgroundColor: '#1F2022', color: 'white', p: 2 ,borderRadius: '25px', marginTop : '20px' , marginRight : '30px' , marginLeft : '30px'}}>      
      <Typography sx={{fontFamily: 'quasix' , fontSize :'35px' , marginTop : '30px' , marginLeft : '30px'}}>Discover and buy/sell <br />
      a wide variety of in-game items<br />
      for your favorite games!. <br/>
      <Typography>Level up your gaming experience!</Typography>
      </Typography>      
      <img src = {csgo} style={{ float: 'right', marginLeft : '400px'}} width={350} height={350}></img>
    </Grid>

    <Grid display='flex' justifyContent={'center'} sx={{marginTop : '100px' }}>
      <Typography sx={{fontFamily: 'quasix' , fontSize :'60px' , color : 'white' }}>TRENDING Games</Typography>
      <Grid>
        <img></img>
      </Grid>
    </Grid>
    </>
    
  )
}
