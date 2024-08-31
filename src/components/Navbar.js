import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import {assets} from "../assests/assets"
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/storeContext';
import { MdLightMode,MdDarkMode } from "react-icons/md";
const Navbar = ({setShowLogin,toggleMode,mode}) => {

    
    const[menu,setMenu] = useState("");
    const{getTotalAmt} = useContext(StoreContext);
    // const [mode,setMode] = useState("light");

    // const toggleMode = ()=>{
    //   if(mode==="light"){
    //      setMode("dark");
        
    //     }
    //   else{
    //       setMode("light");
    //   }
    // };

    // useEffect(()=>{
    //    document.body.className=mode;
    // },[mode]);


  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt='' className='logo'/></Link>
        {
          mode==="light"?
          <ul className='navbar-menu light'>
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")}  className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
          </ul>
          :
          <ul className='navbar-menu dark'>
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")}  className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
          </ul>
        }
        <div className='navbar-right'>
            <img src= {assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
              <Link to='/cart'><img src= {assets.basket_icon} alt=''/></Link>
              <div className={getTotalAmt()===0?"":"dot"}></div>
            </div>
            <div className='switch-theme'>
             {
               mode==="light"?<button className='dark' onClick={toggleMode}><MdDarkMode  size={20}/></button>
               :<button className='light' onClick={toggleMode}><MdLightMode size={20}/></button>
              }
            </div>
            <button onClick={()=>{setShowLogin(true)}}>Sign in</button>
            {/* <button onClick={()=>{setShowLogin(false)}}>Log out</button> */}
        </div>
      
    </div>
  )
}

export default Navbar
