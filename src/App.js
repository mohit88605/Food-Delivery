import React, { useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import {Route , Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer'
import Login from './components/Login'

const App = () => {

   const [showLogin,setShowLogin] = useState(false)
   const [mode,setMode] = useState("light");

   const toggleMode = ()=>{
     if(mode==="light"){
        setMode("dark");
       
       }
     else{
         setMode("light");
     }
   };

   useEffect(()=>{
      document.body.className=mode;
   },[mode]);


  return (
    <>
      {showLogin ? <Login  setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} toggleMode={toggleMode} mode={mode}/>      
        <Routes>
          <Route path="/" element={<Home />} toggleMode={toggleMode} mode={mode} />
          <Route path="/cart" element={<Cart/>}  mode={mode} />
          <Route path="/order" element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
