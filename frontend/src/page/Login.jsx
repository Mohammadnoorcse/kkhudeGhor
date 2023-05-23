import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import {login} from "../redux/actions/userAction"
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
  
    const redirect = location.search ? location.search.split("=")[1] : "/";
    const dispatch = useDispatch();
    const userLogin = useSelector((state)=>state.userLogin);
    const {loading,error,userInfo} = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(login(email, password));
  };
  return (
    <div className='login'>
        <div className="login-content">
            <form action="" onSubmit={submitHandler}>
               <input type="email" placeholder='Enter the email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
               <input type="password" placeholder='Enter the password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
               <button type='submit' id='btn1'>submit</button>

            </form>
        </div>

    </div>
  )
}

export default Login