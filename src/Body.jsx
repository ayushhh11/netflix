import React, { useState } from 'react'
import './Body.scss'
import Header from './Header'

const Body = () => {
    const [LogIn, setLogIn] = useState(true);
  return (
    <div >
         <Header/>
         <div className='formClass'>
            <h3 className='headSignIn'>{LogIn?"Log In":"Sign Up"}</h3>
            <form>
            {!LogIn && <input type='text' placeholder='Name' className='inputf'/>}
                <input type='email' placeholder='Email Address' className='inputf'/>
                <br/>
                <input type='password' placeholder='Password' className='inputf'/>
                <br/>
                <button className='button' >{LogIn?"Log In":"Sign Up"}</button>
            </form>
            <span className='afterButton' onClick={()=>setLogIn(!LogIn)}>{LogIn?"Not a User, Sign Up":"Already a User, Log In"}</span>
         </div>
         <div>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg'
            alt='img'></img>
         </div>
         
        
       
        
    </div>
  )
}

export default Body