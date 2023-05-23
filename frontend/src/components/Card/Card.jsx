import React from 'react'
// import Image1 from "../../image/10003.jpg"
import { SidebarData } from "../../Data/Data.jsx";
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
      <h1>Voice From kkhudeghor For Child</h1>
      <div className="card-content">
        
        {SidebarData.map((item) => {
          return (
            <div className="cardItem">
              <img src={item.image} alt="" />
              
              <div className="cardItem-text">
              <span>{item.name}</span>
              <span>{item.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card
