import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./About.css"

export const About = () => {
    const navigate = useNavigate();
    const buttonclick = () => {
        navigate("/");
    }
  return (
    <>
        <h1>This is About Page</h1>
        <button className='my-button' onClick={buttonclick}>redirect</button>
    </>
  )
}
