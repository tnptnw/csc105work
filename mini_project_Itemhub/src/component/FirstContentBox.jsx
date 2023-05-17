import React from 'react'
import { Box, Grid } from '@mui/material';
import csgo from "../assets/csgo.png"
import '../Style/FirstContent.css'
import Typography from '@mui/material/Typography';
import valo from "../assets/ValoLogo.png"
import csLogo from "../assets/CsgoLogo.png"
import overLogo from "../assets/OverwatchLogo.png"
import ffLogo from "../assets/FFLogo.png"
import Ashe from "../assets/AsheLogo.png"


export const FirstContentBox = () => {
  return (
    <>
      <Grid display="flex" sx={{backgroundColor: '#1F2022', color: 'white', paddingTop : '20px',borderRadius: '25px', marginTop : '20px' , marginRight : '30px' , marginLeft : '30px'}}>      
      <Typography sx={{fontFamily: 'quasix' , fontSize :'45px' , marginTop : '20px' , marginLeft : '30px'}}>Discover and buy/sell <br />
      a wide variety of in-game items<br />
      for your favorite games!. <br/>
      <Typography sx={{fontSize : '18px'}}>Level up your gaming experience!</Typography>
      </Typography>      
      <img src = {csgo} style={{ float: 'right', marginLeft : '800px' , position : 'absolute' }} width={350} height={350}></img>
      <img src = {Ashe} style={{ float: 'right', marginLeft : '100px' , marginRight : '200px' }} width={350} height={350}></img>
    </Grid>

    <Grid display='flex' justifyContent={'center'} sx={{marginTop : '100px' }}>
      <Typography sx={{fontFamily: 'quasix' , fontSize :'60px' , color : 'white' }}>TRENDING Games</Typography>    
    </Grid>
    <Grid display="flex" justifyContent="center">
      <a href='https://playvalorant.com/th-th/' target='blank'><img src={valo} width={200} height={200} style={{ margin: '0 30px' , marginTop : '60px' , borderRadius : '30px' }} /></a>      
      <a href='https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/' target='blank'><img src={csLogo} width={200} height={200} style={{ margin: '0 30px' , marginTop : '60px' , borderRadius : '30px' }} /></a>
      <a href='https://overwatch.blizzard.com/en-us/' target='blank'><img src={overLogo} width={200} height={200} style={{ margin: '0 30px' , marginTop : '60px' , borderRadius : '30px' }} /></a>
      <a href='https://www.finalfantasyxiv.com/' target='blank'><img src={ffLogo} width={200} height={200} style={{ margin: '0 30px' , marginTop : '60px' , borderRadius : '30px' }} /></a>
  </Grid>
  <Grid display='flex' justifyContent={'center'} sx={{marginTop : '100px' }}>
      <Typography sx={{fontFamily: 'quasix' , fontSize :'60px' , color : 'white' }}>TRENDING</Typography>    
    </Grid>
    <Grid display='flex' justifyContent={'center'}>
    <Grid display='flex' sx={{backgroundColor : '#1F2022' , color: 'white' , borderRadius : '25px' , margin : '20px'  , padding : '20px', width : '30%' , height : '600px'}}>
    <Typography sx={{fontFamily : 'quasix' , fontSize : '40px'}}>ITEMS</Typography>
  </Grid>
  <Grid display='flex' sx={{backgroundColor : '#1F2022' , color: 'white' , borderRadius : '25px' , margin : '20px'  , padding : '20px', width : '30%' , height : '600px'}}>
    <Typography sx={{fontFamily : 'quasix' , fontSize : '40px'}}>Account</Typography>
  </Grid>
  <Grid display='flex' sx={{backgroundColor : '#1F2022' , color: 'white' , borderRadius : '25px' , margin : '20px'  , padding : '20px', width : '30%' , height : '600px'}}>
    <Typography sx={{fontFamily : 'quasix' , fontSize : '40px'}}>Giftcard</Typography>
  </Grid>
    </Grid>
    </>
    
  )
}
