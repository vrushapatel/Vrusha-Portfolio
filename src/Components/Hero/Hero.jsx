import React from 'react'
import './Hero.css'
import profile_img from '../../assets/face.svg'
import resume from '../../assets/VrushaResume.pdf'  

const Hero = () => {

  const handleScroll = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  };

  const openResume = () => {
    window.open(resume, "_blank");  
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />

        <h1>
          <span>I'm Vrusha Patel,</span> frontend developer and Computer Engineering student.
        </h1>

        <p>
          I am a skilled frontend developer from India with 2 years of experience 
          working with HTML, CSS, JavaScript,React and modern frameworks to build high-performance websites.
        </p>

        <div className="hero-action">
            <div 
              className="hero-connect" 
              onClick={handleScroll}
              style={{ cursor: "pointer" }}
            >
              Connect With Me
            </div>
            <div 
              className="hero-resume"
              onClick={openResume}
              style={{ cursor: "pointer" }}
            >
              My Resume
            </div>

        </div>
    </div>
  )
}

export default Hero