import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./Workdetail.css"
import { useLocation } from 'react-router-dom'
const Workdetail = () => {
    const location = useLocation();
    const {addIndex} = location.state
  return (
    <>
    <Navbar/>
        <div className='workdetail'>
            <div className='workdetail-content'>
                <div className='workdetail-text'>
                    <img src={addIndex.icon} alt=""/>
                    
                    <span className='workdetail-t'>{addIndex.title}</span>
                    <span className='workdetail-t2'>{addIndex.text}</span>
                </div>
                <div className='workdetail-image'>
                    {addIndex.Image.map((element)=>{
                        return(
                            <div className='workdetail-imageItem'>
                                <img src={element} alt=""></img>
                            </div>

                        )
                    })}
                </div>
                <div className='workdetail-text'>
                    <span className='workdetail-t'>{addIndex.title2}</span>
                    <span className='workdetail-t2'>{addIndex.text2}</span>
                </div>
                <div className='workdetail-image'>
                    {addIndex.Image.map((element)=>{
                        return(
                            <div className='workdetail-imageItem'>
                                <img src={element} alt=""></img>
                            </div>

                        )
                    })}
                </div>


            </div>
        </div>

      
    </>
  )
}

export default Workdetail
