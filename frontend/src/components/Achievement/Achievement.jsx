import React from 'react'
import ReactPlayer from 'react-player';
import CountUp from 'react-countup';

import "./Achievement.css"
const Achievement = () => {
  return (
    <div className='achievement'>
      <div className="achievement-content">
        <div className="text">
        <h1>ACHIEVEMENTS</h1>
        <p>We feel proud to work with this foundation because rural children are progressing with the touch of technology along with us</p>
        </div>
        <div className="achievement-main">
            <div className="achievement-video">
            <ReactPlayer  url="https://www.youtube.com/watch?v=4viWB3uJ3Hc&ab_channel=KKhudeghor"></ReactPlayer>
            </div>
            <div className="achievement-item">
                <div className="achievement-card">
                    <div className="achievement-carditem">
                        <span><CountUp end={23} duration={5}/></span>
                        <span>Instructors</span>
                    </div>
                    <div className="achievement-carditem">
                        <span><CountUp end={7} duration={5}/></span>
                        <span>Courses</span>
                    </div>
                </div>
                <div className="achievement-card">
                    <div className="achievement-carditem">
                        <span><CountUp end={227} duration={5}/></span>
                        <span>Learner</span>
                    </div>
                    <div className="achievement-carditem">
                        <span><CountUp end={63} duration={5}/></span>
                        <span>Members</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Achievement
