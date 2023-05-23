import React,{useState} from 'react'
import {storyAction} from "../redux/actions/adminAction";
import {useDispatch,useSelector} from "react-redux"
const StoryCreate = () => {

    const dispatch = useDispatch();
 

  const { loading, error, story } = useSelector((state) => state.Story);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([]);
//   const [imagesPreview, setImagesPreview] = useState([]);

 
const where ="6457de6285a89a049cd0c949";
const user = "6453b9d1685dca2e48215622";

const submitHandler = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.set("name", name);
  formData.set("title", title);
  formData.set("description", description);
  

  images.forEach((image) => {
    formData.append("images", image);
  });

  dispatch(storyAction(formData));
};

const onChange = (e) => {
  const files = Array.from(e.target.files);

  // setImagesPreview([]);
  setImages([]);

  files.forEach((file) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        // setImagesPreview((oldArray) => [...oldArray, reader.result]);
        setImages((oldArray) => [...oldArray, reader.result]);
      }
    };

    reader.readAsDataURL(file);
  });
};

  return (
    <div>
         <form action=""enctype="multipart/form-data" onSubmit={submitHandler}>
        <h1>CREATE SCHOOL</h1>
      <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
      <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/>
      <textarea type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/> <br/>
      <div>
      <input type="file" id="formupload" name='image' onChange={onChange} multiple/>
      </div>
      
      <button type='submit' id='btn1' >Create</button>
    </form>

    </div>
  )
}

export default StoryCreate