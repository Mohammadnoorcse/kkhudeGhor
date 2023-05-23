import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";


export default function ChatOnline({onlineUsers, currentId, setCurrentChat,info,image,name}) {
 

 
  const handleClick = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/conversations/find/${currentId}/${info}`
      );
      if(res.data===null){
        const message={
          senderId:currentId,
          receiverId:info
      
        };
        const result = await axios.post("http://localhost:8080/api/conversations/",message);
        console.log(result);
      }
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="chatOnline">
      
        <div className="chatOnlineFriend" onClick={() => handleClick()}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
               image
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{name}</span>
        </div>
      
      
    </div>
  );
}