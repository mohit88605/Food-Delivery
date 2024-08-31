import React, { useState } from 'react'
import "./Login.css"
import { assets } from '../assests/assets'

const Login = ({setShowLogin}) => {

   const[currState,setCurrState] = useState("Sign Up")


  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt=''/>
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?
            <>
                <input type='email' placeholder='Enter Your Email' required />
                <input type='password' placeholder='Enter Password' required />
            </>
            :
              <>
                <input type='text' placeholder='Enter Your Name' required />
                <input type='email' placeholder='Enter Your Email' required />
                <input type='password' placeholder='Enter Password' required />
                <input type='password' placeholder='Confirm Password' required />
              </>
            }
        </div>
        <button>{currState==="Sign Up"?"Create account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type='checkbox' required/>
          <p className='login-text'>By Contuining , I agree to the terms of use & privacy policy.</p>
        </div >
        {
            currState==="Login"?<p className='login-text' >Create a new account?<span onClick={()=>setCurrState("Sign Up")} >Click here</span></p>
            :<p className='login-text'>Already have an account?<span onClick={()=>setCurrState("Login")}>Login</span></p>   
        }
      </form>


    </div>
  )
}

export default Login
