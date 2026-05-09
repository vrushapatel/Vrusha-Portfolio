import React from 'react'
import './Education.css'
import theme_pattern from "../../assets/logo1.svg"
import education_data from "../../assets/education_data"

const Education = () => {
  return (
    <div className='education'>

      <div id='education' className='education-title'>
        <h1>My Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
    
      {/*  SINGLE MAP ONLY */}
      <div className="education-container">
        {education_data.map((edu, index) => {
          return (
            <div className="education-card" key={index}>
              {edu.current && <span className="badge">Current</span>}
              <h3>{edu.year}</h3>
              <h2>{edu.degree}</h2>
              <h4>{edu.institute}</h4>
              <h5>{edu.percentage}</h5>
            </div>
            
          )
        })}
      </div>
      <br />
      <br />
      <br />

    </div>
  )
}

export default Education