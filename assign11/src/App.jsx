import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Admin } from './components/Admin'
import { Profile } from './components/Profile'

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = (event) => {
  event.preventDefault();
  setIsLoggedIn(true);
};

  return (
    <BrowserRouter>
    {/* Routes path*/}
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/Home'} element={<Home/>}></Route>
        <Route path={'/About'} element={<About/>}></Route>
        <Route path={'/Contact'} element={<Contact/>}></Route>
        <Route
          path="/Admin"
          element={
            <Admin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path={'/Profile/:profileId'} element={<Profile/>}></Route>
      </Routes>

    {/* Login */}
    {!isLoggedIn && (
      <form onSubmit={handleLogin}>      
        <button className='my-submit'>Login</button>
      </form> 
    )}
         
    
    {/* Navigation link */}
      <nav id='sidebar'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
        <NavLink to={"/Admin"}>For Admin!!</NavLink>
        <NavLink to={"/Profile/239"}>Profile</NavLink>
      </nav>
    </BrowserRouter>
  )
}

export default App
