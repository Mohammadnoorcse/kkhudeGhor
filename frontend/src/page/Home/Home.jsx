import React from 'react'

import Achievement from '../../components/Achievement/Achievement'
import Blog from '../../components/Blog/Blog'

import Card from '../../components/Card/Card'

import Learn from '../../components/Learn/Learn'

import Work from '../../components/Work/Work'


const Home = () => {
  return (
    <div>
      {/* <Subnavbar/> */}
      {/* <Navbar /> */}
      <Learn />
      
      <Blog/>
      <Work/>
      <Card />
      <Achievement/>
      
    
    </div>
  )
}

export default Home
