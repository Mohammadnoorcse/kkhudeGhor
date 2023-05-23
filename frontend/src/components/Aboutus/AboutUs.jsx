import React from 'react'
import { motion } from "framer-motion";
import ReactPlayer from 'react-player';

import "./AboutUs.css"
const AboutUs = () => {
  
  return (
    <div className='aboutus'>
      < div className="aboutus-content">
        <div className="context">
          <motion.span 
              animate={{ y:-20 }}
              transition={{ ease: "easeOut", duration: 2 }}
          
          
          >ABOUT US</motion.span>
          <span>Our goal and objective is to build a technology dependent Bangladesh</span>
        </div>
        <div className="video">
          <span>video for kkudeghore</span>
          <div className="video-content">
            <ReactPlayer  url="https://www.youtube.com/watch?v=bo1lwGDLopo&t=31s&ab_channel=KKhudeghor"></ReactPlayer>
            <ReactPlayer className="video-second" url="https://www.youtube.com/watch?v=6sp9U1q684A&t=5s&ab_channel=KKhudeghor"></ReactPlayer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

