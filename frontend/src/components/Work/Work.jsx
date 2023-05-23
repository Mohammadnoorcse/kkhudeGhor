import React from 'react';
import { Link } from 'react-router-dom';
import { WorkData } from '../../Data/Data'
import "./Work.css"
const Work = () => {
  return (
    <div className="work">
      <div className="page">
        <div className="work-content">
          <div className="text">
            <span>KKHUDEGHOR’s work</span>
            <span>
            The work of our Kkhudeghor is "Technology for Child". As such, we start learning technology from our base stage children. We believe that if a nation wants to rely on technology, the primary school children of that nation should be taught the right technology. It is for this purpose that we work in kkhudeghor.
            </span>
            <span>Discover KKHUDEGHOR's work for every child, everywhere in Bangladesh.</span>
                  </div>
                  <div className="content">
                      {
                          WorkData.map((item) => {
                              return (
                                  <div className="content-item" >
                                      <Link to="/workdetail" state={{addIndex:item}}><img src={item.icon} alt="" /></Link>
                                      <span>{item.name}</span>
                                      
                                  </div>
                              )
                          })
                      }
            </div>
        </div>
      </div>
    </div>
  );
}

export default Work
