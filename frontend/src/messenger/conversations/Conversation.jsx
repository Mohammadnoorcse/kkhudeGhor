import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import Image1 from "../../image/10003.jpg"

export default function Conversation({ conversation, currentUser }) {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:8080/api/users/profile?userId=" + friendId);
        // console.log(res);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
        <img
        className="conversationImg"
        src={
          user?user.image.url: Image1
        }
        alt="" 
      /> 
      <span className="conversationName">{user?user.name:""}</span>
    </div>
  );
}