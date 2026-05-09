import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logovrusha.svg'

const Navbar = () => {

  const [menu, setMenu] = useState('home');

  const handleClick = (section) => {
    setMenu(section);
    document.getElementById(section).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />

      <ul className='nav-menu'>

        <li>
          <p 
            onClick={() => handleClick("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </p>
        </li>

        <li>
          <p 
            onClick={() => handleClick("about")}
            className={menu === "about" ? "active" : ""}
          >
            About Me
          </p>
        </li>

        <li>
          <p 
            onClick={() => handleClick("education")}
            className={menu === "education" ? "active" : ""}
          >
            Education
          </p>
        </li>

        <li>
          <p 
            onClick={() => handleClick("work")}
            className={menu === "work" ? "active" : ""}
          >
            Portfolio
          </p>
        </li>

        <li>
          <p 
            onClick={() => handleClick("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
          </p>
        </li>

      </ul>

      <div 
        className='nav-connect' 
        onClick={() => handleClick("contact")}
        style={{ cursor: "pointer" }}
      >
        Connect With Me
      </div>
    </div>
  )
}
export default Navbar