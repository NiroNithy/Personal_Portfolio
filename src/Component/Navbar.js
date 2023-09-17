import React, { useState } from 'react'
import logo from '../assets/Logo.png';
import vector from '../assets/Vector.png';
import {Link} from 'react-scroll';
import menu from '../assets/menu.png';
import './navbar.css';
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false);
  return (
   
    <nav className='Navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='menu'>
           <Link className='menuItem' activeClass='active' to='content' spy={true} smooth={true} offset={-90} duration={500}>Home</Link>
           <Link className='menuItem'activeClass='active' to='skills' spy={true} smooth={true} offset={-15} duration={500}>About</Link>
           <Link className='menuItem'activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Link>
           <Link className='menuItem'activeClass='active' to='Contact' spy={true} smooth={true} offset={-20} duration={500}>Contact</Link>
        </div>
        <button className='menubtn' onClick={()=>{
          document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={vector} alt='' className='menulogo'/>Contact me
        </button>
        <img src={menu} alt='menu' className='moblogo' onClick={()=>{setShowMenu(!showMenu)}}/>
        <div className='Mobmenu' style={{display:showMenu?'flex':'none'}}>
           <Link className='listItem' activeClass='active' to='content' spy={true} smooth={true} offset={-90} duration={500} onClick={()=>{setShowMenu(false)}}>Home</Link>
           <Link className='listItem'activeClass='active' to='skills' spy={true} smooth={true} offset={-15} duration={500} onClick={()=>{setShowMenu(false)}}>About</Link>
           <Link className='listItem'activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
           <Link className='listItem'activeClass='active' to='Contact' spy={true} smooth={true} offset={-20} duration={500} onClick={()=>{setShowMenu(false)}}>Contact</Link>
        </div>
    </nav>
    
  )
}

export default Navbar