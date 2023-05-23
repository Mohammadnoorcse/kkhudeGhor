import React,{useState,useEffect} from 'react'
import { Link,useLocation,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {register} from "../redux/actions/userAction"

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState([]);
    const [address, setAddress] = useState("");
    const [birth, setBirth] = useState("");
    
    const location = useLocation();
    const navigate = useNavigate();
  
    const redirect = location.search ? location.search.split("=")[1] : "/";
  
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;
  
    useEffect(() => {
      if (userInfo) {
        navigate(redirect);
      }
    }, [navigate, userInfo, redirect]);

     //handle and convert it in base 64
     const handleImage = (e) =>{
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImage(reader.result);
        }

    }
  
    const submitHandler = (e) => {
      e.preventDefault();
      //dispatch
      if (password !== confirmPassword) {
        console.log("Password do not macth");
      } else {
        dispatch(register(name, email, password,address,birth,image));
      }
    };
  return (
    <div className='register'>
        <form action="" enctype="multipart/form-data" onSubmit={submitHandler}>
          <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
          <input type="email" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/>
          <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/>
          <input type="password" placeholder='ComfirmPassword' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/> <br/>
          <input type="text" placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/> <br/>
          <input type="text" placeholder='BirthDay' value={birth} onChange={(e)=>setBirth(e.target.value)}/> <br/>
          <input type="file" id="formupload" name='image' onChange={handleImage} />
          <button type='submit' id='btn1'>Create</button>
        </form>

    </div>
  )
}

export default Register