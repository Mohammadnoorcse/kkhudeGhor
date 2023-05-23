import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {schoolAction} from "../redux/actions/adminAction"
const SchoolCreate = () => {

    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [description,setDescription] = useState("");
    const [image, setImage] = useState([]);
 
    const dispatch = useDispatch();
    const School = useSelector(state=>state.School);
    const {loading,error,schoolInfo} = School;
 
    const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

     //handle and convert it in base 64

     const handleImage = (e) =>{
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImage(reader.result);
        }

    }
    
 
   const submitHandler = (e) => {
     e.preventDefault();
      if( dispatch(schoolAction(name,address,description,userInfo._id,image))){
       alert("Sucessful post the blog");
       setName("");
       setAddress("");
       setDescription(" ");
      }else{
       alert("Can not post the blog")
      }
    
   };
  return (
    <div className='blogCreate'>
    <div className="blogc-content">
      
    <form action=""enctype="multipart/form-data" onSubmit={submitHandler}>
        <h1>CREATE SCHOOL</h1>
      <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
      <input type="text" placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/> <br/>
      <textarea type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/> <br/>
      <div>
      <input type="file" id="formupload" name='image' onChange={handleImage} />
      </div>
      
      <button type='submit' id='btn1' >Create</button>
    </form>

    </div>

</div>
  )
}

export default SchoolCreate