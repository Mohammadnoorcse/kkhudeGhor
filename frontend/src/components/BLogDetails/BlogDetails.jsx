import React from 'react'
import { useLocation } from 'react-router-dom'
// import { BlogData } from '../../Data/blog'
import Navbar from '../Navbar/Navbar'

import "./BlogDetails.css"
const BlogDetails = () => {
  const location = useLocation()
  
  const { addIndex } = location.state
  return (

    <>
    <Navbar/>
    <div className="blogdetail">
      {/* <span>{BlogData[addIndex].text}</span> */}
      <div className="blogdetail-text">
      <span>{addIndex.title}</span>
      <span>{addIndex.text}</span>
      </div>
    </div>
      
      
      
    </>
  )
}

export default BlogDetails
