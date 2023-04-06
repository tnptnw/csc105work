import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import jerry from "../assets/jerry.jpg";
import "./Admin.css"

export const Admin = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/Error');
        }
      }, [isLoggedIn, navigate]);

    const handleLogout = () => {
        setIsLoggedIn(false);
      };

  return (
    <div className='Contain-style'>
        <img src={jerry} className='Image-style'></img>
        <h1>This is Admin</h1>
        <button className="my-submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
    
  )
}
