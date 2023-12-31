import React from 'react';
import '../Component/work.css';
import Mobile from '../assets/FirstPage.png';
import ventura from '../assets/venture.png';
import WebFood from '../assets/B&B Restaurant Home.png';
import Logo from '../assets/LogoDesign.png';
import Thought from '../assets/second.png';
import {Link} from 'react-scroll';
const Work = () => {
  return (
   <section id='Works'>
    <h2 className='WorkTitle'>My Portfolio</h2>
    <span className='WorkDesc'>Welcome to my UI/UX design portfolio, where creativity meets functionality. I am passionate about crafting seamless digital experiences that captivate users and drive results. With a keen eye for detail and a user-centric approach, I have brought numerous projects to life.</span>
    <div className='WorkImgs'>
        <img src={Mobile} alt="Mobile" className='WorkImg'/>
        <img src={ventura} alt="Ventura" className='WorkImg'/>
        <img src={WebFood} alt="Webfood" className='WorkImg'/>
        <img src={Logo} alt="Logo" className='WorkImg'/>
        <img src={Thought} alt="Thought" className='WorkImg'/>
    </div>
    <Link><button className='ImgBtn'>See More</button></Link>
   </section>
  )
}

export default Work