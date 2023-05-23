import React from 'react'
import "./Advisors.css"
import {AdvisorData} from "../../Data/advisor";
import { Link } from 'react-router-dom';
const Advisors = () => {
  return (
    <div className='advisors'>
      <div className="advisors-content">
        <span>Advisor</span>
      <div className="advisor-card">
      {AdvisorData.map((Item)=>{
          return(
            <div className="advisor-item">
              <Link to="/advisordetail" state={{advisorItem:Item}}>
              <img src={Item.image} alt="" />
              <div className="advisor-text">
                <span>{Item.name}</span>
                <span>{Item.title}</span>
                <span>kkhudeghor Foundation</span>
                
              
                </div>
              </Link>
              
            </div>
          )
        })}
      </div>

      </div>

      
    </div>
  )
}

export default Advisors
