import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/logo1.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {

  const [visibleCount, setVisibleCount] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    if (showAll) {
      setVisibleCount(3);       // wapas 3 images
      setShowAll(false);
    } else {
      setVisibleCount(mywork_data.length); // sab show
      setShowAll(true);
    }
  };

  return (
    <div id='work' className='mywork'>
      
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div>

      <div className="mywork-showmore" onClick={handleToggle}>
        <p>{showAll ? "Show Less" : "Show More"}</p>
        <img src={arrow_icon} alt="" 
          style={{ transform: showAll ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
 <br />
      <br />
      <br />

    </div>
  )
}

export default MyWork