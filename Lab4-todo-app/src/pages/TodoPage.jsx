import React from 'react'
import { Box } from '@mui/material'
import Home from "../components/Home"
import Todo from "../components/Todo"
import BottomNav from "../components/ButtomNav"

export const TodoPage = () => {
  return (
    <Box sx={{
        display:{md:"flex"},
        flexDirection : {md :"row"},
        justifyContent :"center",
        alignItems : "center",
        height: "100vh",
    }}>
        <Box sx={{
            display:{xs : "none", md:"block"},
        }}>
            <Home></Home>
        </Box>
        <Box sx={{
            backgroundColor : "a08bff",
            height:{xs : "90%", md: "604"},
            width : {xs : "100%",md:"580px"},
            margin : {md : "20px"},
            borderRadius: "20px",
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
        }}>
            <Todo />
        </Box>
        <Box sx = {{display : {md : "none"}}}>
            <BottomNav></BottomNav>
        </Box>
    </Box>
  )
}
