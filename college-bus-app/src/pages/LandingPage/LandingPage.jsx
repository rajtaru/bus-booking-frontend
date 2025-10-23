import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Login from '../Login/Login'
import Footer from '../../components/Footer/Footer'
import Register from '../Register/Register'
import Home from '../Home/Home'
import {Routes, Route} from 'react-router-dom'
import './LandingPage.css'
import ForgotPassword from '../ForgotPassword/ForgotPasswaord'

const LandingPage = () => {
  return (
    <div className='landing-page'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default LandingPage