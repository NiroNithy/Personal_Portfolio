import React from 'react'
import UIUX from '../assets/UI-UX-Design.jpg';
import Web from '../assets/webdesign.jpg';
import Mobile from '../assets/mobiledesign.png';
import '../Component/skill.css';
function Skill() {
  return (
    <section id='skills'>
        <span className='SkillTitle'>What I do</span><br/>
        <span className='SkillDesc'>I am skilled passionate UI/UX Designer with experience in creating visually appending and attractive user experience designs. I have a strong understanding of design and a keen eye for detail. I am proflicient in design software such as figma and as well as HTML, CSS and Javascript.</span>
        <div className='SkillBars'>
          <div className='SkillBar'>
            <img src={UIUX} alt="uiux"  className='SkillImg'/>
            <div className='SkillText'>
              <h2>UI/UX Design</h2>
              <p>Create well structured and creative user experience designs using Figma software.</p>
            </div>
          </div>
          <div className='SkillBar'>
            <img src={Web} alt="Web" className='SkillImg'/>
            <div className='SkillText'>
              <h2>Web Design</h2>
              <p>Create well structured and creative Web designs such as B&B Food Restaurant web site, Ventura Web site.</p>
            </div>
          </div>
          <div className='SkillBar'>
            <img src={Mobile} alt="mobile" className='SkillImg'/>
            <div className='SkillText'>
              <h2>Mobile Design</h2>
              <p>Create well structured and creative Mobile design such as Termomete, Temperature Monitoring app.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skill