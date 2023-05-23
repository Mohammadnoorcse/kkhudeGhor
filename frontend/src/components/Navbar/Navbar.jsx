import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import {getAllUsers,getAllBlogs,getAllschool} from "../../redux/actions/adminAction"

import "./Navbar.css"
const Navbar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const allUser = useSelector((state)=>state.allUser);
  const {loading,error,user} = allUser;

  const {blog} = useSelector(state=>state.AllBlog);
  const {where} = useSelector(state=>state.Allschool);



  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect (()=>{
    
    dispatch(getAllUsers());
    dispatch(getAllBlogs());
    dispatch(getAllschool());
    
  },[dispatch]);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        {/* <a className="navbar-brand" href="#/">Navbar</a> */}
        <span>Khhude<span>G</span>hor</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/whatdo">Where we do</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/story">Stories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/chat" >Chat</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </Link>
              <ul className="dropdown-menu a">
                <li><Link className="dropdown-item" to="/about">About</Link></li>
                <li><a className="dropdown-item" href="#./">Work kkhudeghor</a></li>
                <li><Link className="dropdown-item" to="/advisor">Adivsor</Link></li>


                <li><Link className="dropdown-item" to="/team">Team</Link></li>
                <li><a className="dropdown-item" href="#./">Investor of kkhudeghor</a></li>
                <li><Link className="dropdown-item" to="/chat">Chat</Link></li>
              </ul>
            </li>

            {/* {userInfo && userInfo.isAdmin===true?(       
           <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {userInfo.name}
          </Link>
          <ul className="dropdown-menu a">
            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
            <li><a className="dropdown-item" onClick={logoutHandler}>LogOut</a></li>
         
          </ul>
        </li>):(<li className="nav-item">
            <Link className="nav-link active" to="/login">signIn</Link>
          </li>)
          
          } */}

            {userInfo ? (userInfo.isAdmin === true ? (

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {userInfo.name}
                </Link>
                <ul className="dropdown-menu a">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/deshboard">Deshboard</Link></li>
                  <li><a className="dropdown-item" onClick={logoutHandler}>LogOut</a></li>

                </ul>
              </li>

            ) : (<li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {userInfo.name}
              </Link>
              <ul className="dropdown-menu a">
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><a className="dropdown-item" onClick={logoutHandler}>LogOut</a></li>

              </ul>
            </li>)) : (
              <li className="nav-item">
                <Link className="nav-link active" to="/login">signIn</Link>
              </li>
            )}

          </ul>


        </div>
      </div>
    </nav>
  )
}

export default Navbar
