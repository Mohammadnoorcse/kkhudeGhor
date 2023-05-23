import React, { useEffect,useState } from 'react'
import Navbar from "../Navbar/Navbar"
import { TeamData } from "../../Data/team"
import "./Team.css"
import { Link } from 'react-router-dom';
import { getAllUsers } from "../../redux/actions/adminAction"
import { useSelector, useDispatch } from "react-redux";
const Team = () => {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.allUser);
  const { user } = allUser;

  const handleSubmit= async(id)=>{
    console.log(id);
  
    // try {
    //   const res = await axios.post("http://localhost:8080/api/messages/",message);
      
  
    // } catch (error) {
  
    //   console.log(error);
    // }
  }
  

  return (
    <>
      <div className="team">
        <span>Member of kkhudeghor</span>
        <div className="team-content">
          {user && user.map((Item) => (
            <div className="team-item">
              <div className="team-img">
                <img src={Item.image.url} alt="" />
              </div>
              <div className="team-text">
                <span>{Item.name}</span>
                <span>{Item.title}</span>
                <span>Id: {Item.roll}</span>
              </div>
             
              <Link className="Button" to="/memberdetail" state={{ addIndex: Item }}> Details </Link>
              <Link className="Button" to="/chat" state={{ addIndex: Item }}
              
              > chat </Link>

            </div>


          ))}


        </div>
      </div>
    </>
  )
}

export default Team
