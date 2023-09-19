import React,{useRef} from 'react'
import '../Component/contact.css';
import Facebook from '../assets/fb.png';
import Instagram from '../assets/Insta.png';
import Linkedln from '../assets/linke.png';
import Github from '../assets/Git.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successsfully");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='Contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='conDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='conForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Enter your name' name="your_name"/>
            <input type="text" className='email' placeholder='Enter your email address' name="your_email"/>
            <textarea className="msg"rows={5} placeholder='Your message' name="message"></textarea>
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