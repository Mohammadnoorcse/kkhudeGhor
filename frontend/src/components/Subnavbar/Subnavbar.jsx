import React from 'react'
import logo from "../../image/logo.png"
import "./Subnavbar.css";
const Subnavbar = () => {
  return (
    <div className='subnavbar'>
        <div className="subnavbar-content">
            <div className="left">
                <img src={logo} alt="Logo" />
                <span>kkhudeghor</span>
                <span className='line'></span>
                <span className='t'>Techonolgy For every child</span>
            </div>
            <div className="right">
                <span>voice of kkhudegh<span>O</span>r</span>
            </div>
        </div>
      
    </div>
  )
}

export default Subnavbar
