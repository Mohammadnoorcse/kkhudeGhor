import React,{useState} from 'react'
import "./blog.css";
import {BlogAction} from "../redux/actions/adminAction";
import {useDispatch,useSelector} from "react-redux";
const BlogCreate = () => {
   const [title,setTitle] = useState("");
   const [description,setDescription] = useState("");

   const dispatch = useDispatch();
   const Blog = useSelector(state=>state.Blog);
   const {loading,error,blogInfo} = Blog;

   const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
   

  const submitHandler = (e) => {
    e.preventDefault();
     if( dispatch(BlogAction(title,description,userInfo._id))){
      alert("Sucessful post the blog");
      setTitle(" ");
      setDescription(" ");
     }else{
      alert("Can not post the blog")
     }
   
  };
  return (
    <div className='blogCreate'>
        <div className="blogc-content">
          
        <form action=""enctype="multipart/form-data" onSubmit={submitHandler}>
            <h1>Post BLOG</h1>
          <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/>
          <textarea type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/> <br/>
          
          <button type='submit' id='btn1' >Create</button>
        </form>

        </div>

    </div>
  )
}

export default BlogCreate