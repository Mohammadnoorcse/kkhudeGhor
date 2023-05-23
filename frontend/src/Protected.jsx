import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
const Protected = ({children}) => {
    const navigate = useNavigate();
    const userLogin = useSelector((state)=>state.userLogin);
    const {userInfo} = userLogin;
    if(userInfo && userInfo.isAdmin===true){
        return  children;
    }
    else{
        return <>
        
          <h1>you are not admin</h1>
        </>
    }
   
    
  
}

export default Protected