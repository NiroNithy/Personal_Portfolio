import React from 'react'
import '../Component/contact.css';
import Facebook from '../assets/fb.png';
import Instagram from '../assets/Insta.png';
import Linkedln from '../assets/linke.png';
import Github from '../assets/Git.png';
const Contact = () => {
  return (
    <div className='Contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='conDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='conForm'>
            <input type="text" className='name' placeholder='Enter your name'/>
            <input type="text" className='email' placeholder='Enter your email address'/>
            <textarea className="msg"rows={5} placeholder='Your message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={Facebook} alt="Facebook" className='link'/>
                <img src={Instagram} alt="Instagram" className='link'/>
                <img src={Linkedln} alt="Linkedln" className='link'/>
                <img src={Github} alt="Github" className='link'/>
            </div>
        </form> 
    </div>
  )
}

export default Contact