import React, { useState } from 'react'
import './styles.css'
import './mobile.css'
import { Link } from 'react-router-dom'
import logo1 from '../../assets/tickitz-logo.png'
import logo2 from '../../assets/signup/bg-2.png'
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line }  from 'react-icons/ri'

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className='nav-logo'><img src={logo1} alt="tickitz" /></Link>
          <Link to="/" className='nav-logo'><img src={logo2} alt="tickitz" /></Link>
          <div className={toggle ? "nav-menu active" : "nav-menu"}>
            <div className="nav-links left"><Link to="/">Home</Link></div>
            <div className="nav-links"><Link to="/movies">List Movies</Link></div>
            <button>Sign Up</button> 
          </div>
          <div className="nav-menu">
            <button>Sign Up</button>
          </div>
          <div className="nav-icon" onClick={ () => setToggle(!toggle)}>
            {toggle ? <FaTimes/> : <RiMenu3Line />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar