import React from 'react'
import logo from '../assets/Logo.png';
import vector from '../assets/Vector.png';
import {Link} from 'react-scroll';
import './navbar.css';
const Navbar = () => {
  return (
   
    <nav className='Navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='menu'>
           <Link className='menuItem'>Home</Link>
           <Link className='menuItem'>About</Link>
           <Link className='menuItem'>Portfolio</Link>
           <Link className='menuItem'>Skills</Link>
        </div>
        <button className='menubtn'>
            <img src={vector} alt='' className='menulogo'/>Contact me
        </button>
    </nav>
    
  )
}

export default Navbar