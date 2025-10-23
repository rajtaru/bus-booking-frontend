import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const isLoggedIn = true
  return (
    <div className={isLoggedIn ?'navbar-login-sm navbar-login-lg':"navbar-bg-container"}>
        <img src="https://ggu.edu.in/wp-content/uploads/2025/03/ggu-new-logo.png" alt="logo" />
        <div className='navbar-right'>
          <h2 className={ isLoggedIn? 'nav-heading':''}>GGU BUS BOOKING SYSTEM</h2>
        </div>
        {isLoggedIn ? (<div className='logout-btn-container'><h2>2456548TB5</h2>
        <button className='logout-btn'>Logout</button></div>):null }
    </div>
  )
}

export default Navbar