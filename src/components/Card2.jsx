// import {Link} from "react-router-dom"
import '../App.css'
// import {AiOutlineEdit} from 'react-icons/ai'
// import {IoPersonCircle} from 'react-icons/io'
import axios from "axios";
import { useState } from 'react';

const Card2 = ({id, name, image, description}) => {

  console.log("Image:",image)

    const [isEditing, setEditing] = useState(false);
    // const [editedImage, setEditedImage] = useState(postImage);
    const [editedName, setEditedName] = useState(name);
    const [editeddescription, setEditedDescription] = useState(description);
    const [editedImage, setEditedImage] = useState(null);
  
    function handleImageChange(e) {
      const file = e.target.files[0];
      setEditedImage(file)
      // const reader = new FileReader();
  
      // reader.onloadend = () => {
      //   setEditedImage(reader.result);
      // };
  
      // if (file) {
      //   reader.readAsDataURL(file);
      //   setEditedImage(file);
      // }
    }
  
    function handleEditClick() {
      setEditing(true);
    }
  
    function handleSaveClick() {
      const formData = new FormData()
      formData.append("postTitle",editedName)
      formData.append("postContent",editeddescription)
      formData.append("postImage",editedImage)
      
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      axios
        .put(`https://klab-blog-api.onrender.com/Blog/API/post/update/${id}`, formData, {
          headers: {
            ...headers,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            alert("Data updated successfully");
            setEditing(false);
            window.location.reload()
          } else {
            alert("Failed to update data");
          }
        })
        .catch(() => {
          // console.error("Error updating data:", error);
          alert("Failed to update data");
        });
    }
  
    function deleteRecord(e,id) {
      e.preventDefault();
      const token = localStorage.getItem("token");


      if (confirm("Are you sure you want to delete?") == true) {
          axios
        .delete(`https://klab-blog-api.onrender.com/Blog/API/post/delete/${id}`,"",{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            alert("Data deleted successfully");
          } else {
            alert("Data deleted");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
          alert("Data deleted");
        });
      }
  
    
    }























    return (
        <div className='Cardi'>
          {isEditing ? (
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='edit-input'
            />
          ) : (
            <img src={image} alt={image}/>
          )}
    
      
            {isEditing ? (
              <input
                type='text'
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              editedName
            )}
          
    
          {isEditing ? (
            <div className='edit-form'>
              <textarea
                value={editeddescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className='edit-textarea'
              />
              <button className='btn' onClick={handleSaveClick}>
                Save
              </button>
            </div>
          ) : (
            <p>{description}</p>
          )}
    
          <button className='edit' onClick={handleEditClick}>
            Edit
          </button>
          <button className='delete' onClick={(e) => deleteRecord(e,id)}>
            Delete
          </button>
        </div>
      );
    };
    
    export default Card2;