import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './component/Appbar'
import { FirstContentBox } from './component/FirstContentBox'
import {LoginPage} from './Pages/LoginPage'
import { Homepage_Loggedin } from './Pages/Homepage_Loggedin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Homepage_Loggedin></Homepage_Loggedin> */}
      <LoginPage></LoginPage>
    </>
  )
}

export default App
