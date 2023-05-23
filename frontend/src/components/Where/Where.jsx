import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {whereData} from "../../Data/where";
import "./Where.css";
import {useSelector} from "react-redux";
const Where = () => {
  const {where} =useSelector(state=>state.Allschool)
 
  
  return (
    <div className='where'>
       
       <div className="where-content">
       <h1>Where We Do Work With Child</h1>
       <div className="where-card">
        {where && where.map((Item)=>(
          <div className="where-Item">
          <Link to ="/schooldetail" state={{whereItem:Item}}>
            <img src={Item.image.url} alt="" />
            <div className="where-text">
              <span>{Item.name}</span>
            </div>

          </Link>
        </div>
        ))}
     
       </div>
       </div>
    </div>
  )
}

export default Where
