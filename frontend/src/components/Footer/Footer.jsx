import React from 'react'
import logo from "../../image/logo.png";
import {Link} from "react-router-dom"
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
      <div className="footer-left">
        <div className="left-img">
          <img src={logo} alt="" />
        </div>
        <div className="left-text">
          <div className="left-icon">
            <span><i class="fa-solid fa-phone"></i></span>
            <span><span>phone</span>+8801619980623</span>
          </div>
          <div className="left-icon">
            <span><i class="fa-regular fa-envelope"></i></span>
            <span><span>Email</span>info@kkhudeghor.org</span>
          </div>
          <div className="left-icon">
            <span><i class="fa-solid fa-location-dot"></i></span>
            <span>27/1,Middle Pirerbag,paka Mosjid,Mirpur,Dhaka-1216</span>
          </div>
        </div>
      </div>
      <div className="footer-mid">
        <div className="mid-text">
          <span>About</span>
          <span>Work for kkhudeghor</span>
          <span>volunteer</span>
        </div>
      </div>
      <div className="footer-right">
        <div className="right-btn">
          <button><Link to="/register">Join With As</Link></button>
        </div>
        <div className="right-icon">
          <span><a href="https://www.facebook.com/kkhudeghor"><i class="fa-brands fa-facebook"></i></a></span>
          <span><a href="https://www.linkedin.com/company/kgr023/mycompany/?viewAsMember=true"><i class="fa-brands fa-linkedin"></i></a></span>
          
          <span><a href="https://www.youtube.com/channel/UC3hkdvecfgRPXqAznJ8HZLg"><i class="fa-brands fa-youtube"></i></a></span>
          <span><a href="https://t.me/kkhudeghor"><i class="fa-brands fa-telegram"></i></a></span>
        </div>
        <div className="right-text">
          <span><span className='h'>kkhudeghor</span> Technological Team</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
