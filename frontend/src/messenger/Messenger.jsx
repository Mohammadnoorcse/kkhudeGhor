import "./messenger.css";
import React,{useEffect,useState,useRef} from "react"

import Conversation from "../messenger/conversations/Conversation";
import Message from "../messenger/message/Message";
import ChatOnline from "../messenger/chatOnline/ChatOnline";

import axios from "axios";
import { io } from "socket.io-client";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";


export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [pass,setPass] =useState(null);
  const [image,setImage]=useState(null);
  const [name,setName]=useState(null);
 
  const socket = useRef();

  const location = useLocation()
  
//   const { addIndex } = location.state;
//  if(addIndex==null){
//   addIndex =1;
//  }
 //console.log(addIndex);
//  if(location.state===null){
//   console.log("null")
//  }else{
//   const {addIndex} =location.state;
//   setPass(addIndex._id);
//  }
//  console.log(addIndex)


  
 
  


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const scrollRef = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userInfo._id);
    // socket.current.on("getUsers", (users) => {
    //   // setOnlineUsers(
    //   //   user.followings.filter((f) => users.some((u) => u.userId === f))
    //   // );
    // }
    if(location.state !==null){
      const {addIndex} = location.state
      socket.current.on("getUsers",addIndex._id);
      setPass(addIndex._id);
      setImage(addIndex.image.url);
      setName(addIndex.name)
    }
    
  }, [userInfo]);

// jar jar sathe chat korchii seta
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/conversations/" + userInfo._id);
        // console.log(res);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [userInfo._id]);


// ki chat korcii seta...
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/messages/" + currentChat?._id);
        setMessages(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);


//new message send korar jonno

const handleSubmit= async(e)=>{
  e.preventDefault();
  const message={
    sender:userInfo._id,
    text:newMessage,
    conversationId:currentChat._id

  };

  const receiverId = currentChat.members.find(
    (member) => member !== userInfo._id
  );

  socket.current.emit("sendMessage", {
    senderId: userInfo._id,
    receiverId,
    text: newMessage,
  });

  try {
    const res = await axios.post("http://localhost:8080/api/messages/",message);
    setMessages([...messages, res.data]);
    setNewMessage("");

  } catch (error) {

    console.log(error);
  }
}

// friend theke sms gulo jeno smooth bhabe pai seta jonno ...
useEffect(() => {
  scrollRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  return (
    <>
      
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
           
            
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={userInfo} info="hii"/>
              </div>
              
            ))}

            
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
          {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === userInfo._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea> 
                   <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            
            <>
             { 
              
              location.state !==null?(<ChatOnline   onlineUsers={onlineUsers}
                
                currentId={userInfo._id}
                  setCurrentChat={setCurrentChat} 
                   info={pass}
                   image={image}
                   name={name}
               />):("no active")
             }
                 
            
            
            </>
           
        
           
            
          </div>
        </div>
      </div>
    </>
  );
}