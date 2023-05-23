import React from 'react'
import { useLocation } from 'react-router-dom'
import "./School.css"
import {Link} from "react-router-dom"
const School = () => {
  const location = useLocation()
  
  const { whereItem } = location.state
  return (
    <div className='school'>
      <img src={whereItem.image.url} alt="" srcset="" />
      <h1>Name : {whereItem.name}</h1>
      <h1>Address : {whereItem.address}</h1>
      
      {/* <div className="school-gallery">
        {whereItem.Image.map((item)=>{
          return(
            <div className="school-item">
              <img src={item} alt="" />
            </div>
          )
        })}
      </div> */}
       <div className="des">
        <p>{whereItem.description}</p>
       </div>
       <Link to="/work">
       <button id="btn2">working details</button></Link>
       
    </div>
  )
}

export default School
