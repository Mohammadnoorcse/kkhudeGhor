import React,{useEffect} from "react"
import "./Blog.css"
import {BlogData} from "../../Data/blog"

import { Link } from 'react-router-dom'
import { useSelector} from "react-redux";



const Blog = () => {
    
    const {blog} = useSelector(state=>state.AllBlog);

   


    return (
        <div className='blog'>
            <span>Voice  <span>Of</span> Kkhudeghor</span>

            <div className="blog-content">
                {blog && blog.map((Item,index)=>(
                     <div className= "blog-item"
                     key={index}
                     >
                     <h1>{Item.title}</h1>
                     <div class="blog-text ellipsis">
                         <span class="text-concat">
                             {Item.description}
                         </span>
                     </div>
                     
 
                     <Link className = "Button" to="/blogDetails" state={{ addIndex: Item }}>
                         Read More
                     </Link>
 
                 </div>
                ))}

            </div>
        </div>
    )
}

export default Blog
