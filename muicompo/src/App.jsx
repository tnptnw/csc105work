import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Content } from './components/Content'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import Rightbar from './components/Rightbar'
import { Grid } from '@mui/material'
import "./components/style.css/nav.css"
import { Container } from '@mui/system'


function App() {
 
  return (
    <div className="App">   
         <Nav></Nav>         
            <Grid container spacing={2}>
              <Grid item xs={4} md={3}>
                <Sidebar></Sidebar>
              </Grid>
              <Grid item xs={4} md={6}>
                <Content></Content>
              </Grid>
              <Grid item xs={4} md={3}>
                <Rightbar></Rightbar>
              </Grid>
            </Grid>         
    </div>
  )
}

export default App
