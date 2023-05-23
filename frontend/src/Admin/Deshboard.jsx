import React from 'react'
import "./deshboard.css"
import Userlist from './Userlist'
import Sidebar from './Sidebar'
const Deshboard = () => {
  return (
    <div className='deshboard'>
      <div className="deshboard-content">
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="main-item">
        <Userlist/>
        </div>
      </div>

    </div>
  )
}

export default Deshboard