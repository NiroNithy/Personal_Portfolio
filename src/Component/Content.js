import React from 'react'
import '../Component/content.css';
import Pic from '../assets/Picture.png';
import {Link} from 'react-scroll';
import Job from '../assets/Vector_job.png';

function Content() {
  return (
    <section id='content'>
        <div className='Intro'>
             <span className='hello'>Hello!</span>
             <span>I'm <span className='Myname'>Nirosana</span><br/>UI/UX Engineer</span>
             <p className='introContent'>Welcome to my personal portfolio, where you'll discover a collection of <br/>my finest work and a glimpse into the world of user-centric design.<br/> Explore my projects, and let's embark on a journey of innovation and <br/>creativity together.</p>
             <Link><button><img src={Job} className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={Pic} className='Profile'/>
    </section>
  )
}

export default Content;