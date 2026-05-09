import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logovrusha.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <br /><br />
                <p>I am a skilled frontend developer from India with 2 years of experience working with HTML, CSS, JavaScript,React and modern frameworks to build high-performance websites.</p>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2026 Vrusha Patel. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer