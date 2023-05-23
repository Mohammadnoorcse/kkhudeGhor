import React from 'react'
import "./profile.css";
import {useSelector} from "react-redux";
const Profile = () => {

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

  return (
    <div className='profile'>
        <div className="profile-content">
            <h1>Profile</h1>
         
        {userInfo?             <div className="profile-item">
                <div className="profile-one">
                    <img src={userInfo.image.url} alt="" srcset="" />
                    <h1></h1>
                </div>
                <div className="profile-two">
                    <h1>{userInfo.name}</h1>
                    <p>{userInfo.email}</p>
                    
                </div>
             </div>:<h1>plz login </h1>}
            
        </div>

    </div>
  )
}

export default Profile