import React from 'react'
import { useLocation } from 'react-router-dom'
import "./AdvisorDetails.css"
const AdvisorDetails = () => {
 const location = useLocation();
 const {advisorItem} = location.state
  return (
    <div className='advisordetail'>
        <div className="advisordetail-content ">
            <div className="advisordetail-left">
                <img src={advisorItem.image} alt="" />
            </div>
            <div className="advisordetail-right">
                <h1>INFORMATION</h1>
                <div className="advisordetail-textItem">
                    <span>Name:</span>
                    <span>{advisorItem.name}</span>
                </div>
                <div className="advisordetail-textItem">
                    <span>Employee ID:</span>
                    <span>{advisorItem.id}</span>
                </div>
                <div className="advisordetail-textItem">
                    <span>Designation:</span>
                    <span>{advisorItem.des}</span>
                </div>
                <div className="advisordetail-textItem">
                    <span>Department:</span>
                    <span>{advisorItem.dept}</span>
                </div>
                <div className="advisordetail-textItem">
                    <span>Faculty:</span>
                    <span>{advisorItem.faculty}</span>
                </div>
                <div className="advisordetail-textItem">
                    <span>Webpage:</span>
                    <span>{advisorItem.web}</span>
                </div>
                <div className="advisordetail-textItem">
                    <span>E-mail:</span>
                    <span>{advisorItem.email}</span>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default AdvisorDetails
