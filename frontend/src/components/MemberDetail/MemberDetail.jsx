import React from 'react'
import "./MemberDetail.css"
import {  useLocation } from 'react-router-dom';

const MemberDetail = () => {
    const location = useLocation()
  
    const { addIndex } = location.state
  return (
    <div className='memberDetail'>
      <div className="member-content">
        <div className="member-image">
        
        <img src={addIndex.image.url} alt="" />
        <div className="icon">
            <span><a href="/#"><i class="fa-brands fa-facebook fa-2xl"></i></a></span>
            <span><a href="/#"><i class="fa-brands fa-twitter fa-2xl"></i></a></span>
            <span><a href="/#"><i class="fa-brands fa-instagram fa-2xl"></i></a></span>
            <span><a href="/#"><i class="fa-brands fa-telegram fa-2xl"></i></a></span>
        </div>
        
        
        </div>
        <div className="member-text">
            <h1>MEMBER INFO</h1>
            <div className="member-info">
                <div className="info-text">
                    <span>Name:</span>
                    <span>{addIndex.name}</span>
                </div>
                <div className="info-text">
                    <span>Title:</span>
                    <span>{addIndex.title}</span>
                </div>
                <div className="info-text">
                    <span>ID:</span>
                    <span>{addIndex.roll}</span>
                </div>
                <div className="info-text">
                    <span>E-mail:</span>
                    <span>{addIndex.email}</span>
                </div>
                <div className="info-text">
                    <span>Present adress:</span>
                    <span>{addIndex.address}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MemberDetail
