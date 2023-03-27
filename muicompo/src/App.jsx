import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Content } from './components/Content'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "./components/style.css/nav.css"
import { Container } from '@mui/system'


function App() {
 
  return (
    <Container maxWidth="lg">   
         <Nav></Nav>         
            <Grid2 container spacing={2} width>
              <Grid2 item md={3}>
                <Sidebar></Sidebar>
              </Grid2>
              <Grid2 item md={6}>
                <Content></Content>
              </Grid2>
              <Grid2 item md={3}>
                <Rightbar></Rightbar>
              </Grid2>
            </Grid2>         
    </Container>
  )
}

export default App
