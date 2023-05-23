import React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Advisor from "./page/Advisor/Advisor";
import BlogDetails from "./components/BLogDetails/BlogDetails"
import Team from "./components/Team/Team";
import MemberDetail from "./components/MemberDetail/MemberDetail";
import Workdetail from "./components/Workdetail/Workdetail";
import AdvisorDetails from "./components/AdvisorDetails/AdvisorDetails";
import Wheredo from "./page/Where_do/Wheredo";
import School from "./components/SchoolDetails/School";
import Footer from "./components/Footer/Footer"
import Register from "./page/Register";
import Navbar from "./components/Navbar/Navbar";
import Protected from "./Protected";
import {useSelector} from "react-redux"
import Login from "./page/Login";
import Deshboard from "./Admin/Deshboard"
import Profile from "./components/Profile/Profile";
import Blog from "./Admin/Blog";
import BlogCreate from "./Admin/BlogCreate";
import SchoolCreate from "./Admin/SchoolCreate";
import AllSchool from "./Admin/AllSchool";
import StoryCreate from "./Admin/StoryCreate";
import Messenger from "./messenger/Messenger";


function App() {
  

  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
        {/* <Route path="/" element={<Protected Component={Home} />} /> */}
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About />} />
        <Route path="advisor" element={
        <Protected >
          <Advisor/>
          </Protected>
        
        } />
        <Route path="blogDetails" element={<BlogDetails />} />
        <Route path="team" element={<Team />} /> 
        <Route path="memberdetail" element={<MemberDetail />} /> 
        <Route path="workdetail" element={<Workdetail />} /> 
        <Route path="advisordetail" element={<AdvisorDetails />} /> 
        <Route path="whatdo" element={<Wheredo />} /> 
        <Route path="schooldetail" element={<School />} /> 
        <Route path="register" element={<Register />} /> 
        <Route path="login" element={<Login />} /> 
        <Route path="deshboard" element={
        <Protected>
         <Deshboard/>
        </Protected>
        
        } /> 
        <Route path="admin/blog" element={
        <Protected>
         <Blog/>
        </Protected>
        
        } /> 
        <Route path="admin/blog/create" element={
        <Protected>
         <BlogCreate/>
        </Protected>
        
        } /> 
        <Route path="admin/school/create" element={
        <Protected>
         <SchoolCreate/>
        </Protected>
        
        } /> 
        <Route path="admin/school/" element={
        <Protected>
         <AllSchool/>
        </Protected>
        
        } /> 
        <Route path="admin/story/create" element={
        <Protected>
         <StoryCreate/>
        </Protected>
        
        } /> 
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/chat" element={<Messenger/>}/>
       
       
        

        
        
      </Routes>
      <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
