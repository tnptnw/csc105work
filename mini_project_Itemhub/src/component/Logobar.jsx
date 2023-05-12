import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../Style/Appbar.css'

export default function Logobar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#1F2022" , color:"#E21B3C"}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'quasix', fontSize:'40px' }}>
            ITEMHUB
          </Typography>          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
