import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import { Box } from '@mui/system'
import "./style.css/nav.css"
import MenuIcon from "@mui/icons-material/Menu";

export const Nav = () => {
  return (
    <section>
    <Box sx={{flexGrow:1}} mb={4}>
    <AppBar position="static" sx={{backgroundColor: "#20232a"}}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>My Website
            </Typography>
              <Box sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}>
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>about</Button>
                <Button color='inherit'>contact</Button> 
              </Box>
              <Button
                        color="inherit"
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        <MenuIcon color="white" />
                    </Button>                           
        </Toolbar>
    </AppBar>
    </Box>

    </section>

  )
}

