*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: inherit;
    /* cursor: pointer; */
    ;
  }
  .logo
  {
    left:40%;
    /* background:; */
    margin-right:38rem;
  }
  nav{
    /* background-color: #c7dee2; */
    background: #08051a;
    /* background-color: #28a8b974; */
    /* color: rgb(59, 51, 51); */
    display: flex;
    font-size:20px;
    justify-content: space-between;
    padding: 20px 40px;
    position: fixed;
    width: 100%;
    top:0;
    z-index: 1;
  
  
  }
  .nav .title{
    font-size: 5.5rem;
    font-weight: bold;
    text-decoration: none;
    color:orange;
    margin: 1rem;
   
  
  
  }
  .title{
    color:orangered;
    border-left:50px solid #666;
  }
  nav ul{
    display: flex;
  }
  nav ul li{
    list-style: none;
  }
  
  nav ul li a{
    text-decoration: none;
    display: block;
    color:#666;
    padding:0.5rem;
    margin:0 0.5rem;
    border-radius:;
  }
  nav ul li a:hover{
  border-bottom: 3px solid orangered;
  color:white;
  }
  nav .menuu{
    display: none;
  
    position: absolute;
    top:0.75rem;
    right: 0.5em;
    flex-direction: column;
    justify-content: space-between;
    width: 2.25em;
    height:2rem;
  
  }
  nav .menuu span{
    height:0.4rem;
    width:30vw;
    background-color: #fff;
    border-radius:0.2rem;
  
  }
  
  
  
  .Trending h{
    color:#666;
    margin-top:10%;
    text-align:center;
    font-size:30px;
    border-left:30px solid rgba(255, 68, 0, 0.942);
  }
  
  .edit{
    background-color:rgba(255, 68, 0, 0.942);
    display: flex;
    align-items: center;
    justify-content: center;
    width:5vw;
    height:10vh;
    color:white;
    border:none;
    
  }
  .delete{
    background-color:#c7dee2;
    display: flex;
    align-items: center;
    justify-content: center;
    width:5vw;
    height:10vh;
    color:#322f2f;
    border:none;
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  .get{
    border-bottom:5px solid #0f7081;
  }
  
  .menu{
    display: none;
   
  
  }
  
  .bar-icon{
    padding: 8px 15px;
    border: none;
    border: 1px solid white;
    background-color: black;
    color: white;
  }
  .imag-card{
    width:10vw;
    height:20vh;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  nav .desktop-menu{
    display: flex;
    gap: 10px;
  }
  
  
  /* hero section  */
  .hero{
    background-image: url('./assets/pic15.jpg');
    width: 100vw;
    margin:0 auto;
    margin-top: -15%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:5px solid #c7dee2;
  
  }
  .hero h1{
    display: inline-block;
    padding:10px 20px;
    background: #0f7081;
    max-width: 40rem;
    color:white;
    font-size:19px;
    text-decoration: none;
    border-radius:20px;
    margin-top: 15px;
    transition:0.3s ease;
  
  }
  .hero h1:hover{
    background-color:rgb(23, 105, 128);
    color:#a8aa17;
    max-width: 40rem;
    height:40px;
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
  
  }
  .Footer{
    background-color: #08051a;
    width: 80vw;
    margin:0 auto;
    bottom:0;
    height: 20vh;
    display: flex;
    color:wrgb(83, 77, 77);
    align-items: center;
    justify-content: center;
  }
  /* .Footer2{
    background-color: #d4f0f5;
    width: 100vw;
    height: 30vh;
   
    margin-top:75%;
   
    height: 30vh;
    display: flex;
    color:rgb(83, 77, 77);
    align-items: center;
    justify-content: center;
  } */
  .grid-container{
    background-color: aliceblue;
    padding: 20px 40px;
    display: grid;
    grid-template-columns: auto auto auto ;
    gap: 1rem;
    /* width: 30vw; */
    /* margin:0 auto;
    height:10vh; */
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .coco{
    /* background-color: #a8aa17; */
    width: 80%;
    margin: 0 auto;
  }
  .Cardi{
    padding: 0.5rem 0.5rem;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.1rem;
    margin-left:-45px;
    width:30vw;
    height:90vh;
    background-color:white;
  }
  .grid-About{
    background-color: rgb(179, 202, 223);
    padding: 20px 40px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px;
    width: 80vw;
    margin:0 auto;
    height:80vh;
  }
  
  .Content-style{
    background-color: rgb(210, 222, 231);
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 24rem;
    margin-left: 50rem;
    margin-right: 5rem;
  
    width: 80%;
    margin:0 auto;
    height:60vh;
    align-items:center;
  }
  .ree{
    /* background-color: rgba(255, 68, 0, 0.942); */
    border-bottom: 3px solid  rgba(255, 68, 0, 0.942);
    ;
    font-size:20px;
    color:rgb(54, 201, 226);
    width:50vw;
    height: 50vh;
  }
  @media screen and (max-width:568px) {
    
    grid-About{
      display: none;
    }
    nav .menuu{
      display: flex;
    }
    nav{
      flex-direction: column;
      align-items: start;
    }
    nav ul {
      display: none;
      flex-direction: column;
      width:100%;
      margin-bottom: 0.25rem;
    }
    nav ul.open{
      display: flex;
    }
    nav ul li{
      width:100%;
      text-align: center;
    }
    nav ul li a{
      margin:0.2 rem 0.5rem; 
    }
    .Trending{
      margin-top: -2%;
      /* position: absolute; */
      font-size:20px;
     
      display:flex;
      justify-content: center;
      align-items: center;
      }
  
      
        .contn{
          height:45vh;
          width:10vw;
       
          
          /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width:30vw;
          border-bottom:3px solid rgba(255, 68, 0, 0.942);
          margin-top: 15px;
      }
      
      .Cardi{
        padding: 0.5rem 0.5rem;
        border-radius: 1rem;
        display: flex;
        width:22vw;
        flex-direction: column;
        gap: 1rem;
        margin-top: 60px;
      }
  
      .leftsd, .rightsd{
        margin:2rem 2rem;
        height:20vh;
        width:10vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* font-size:5px; */
        background-color: white;
        /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
      }
  
      .rightsd h{
        background-color: orangered;
        color:white;
        margin-top:0px;
      }
  
      .leftsde{
        display:flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;}
        .contner{
          height:45vh;
          width:20vw;
          background-color:white;
          margin:5rem auto;
          /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
          display: flex;
          justify-content: center;
          align-items: center;
          gap:10px;
          margin-top: 10%;
      }
      .leftsde, .rightsde{
        margin:2rem 2rem;
        height:20vh;
        width:20vw;
        background-color: rgb(65, 12, 12);
        /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
      }
  
      .foter{
        margin-top:165px;
      }
      .pice3{
        margin-top:20%;
        width:10vw;
        height:20vh;
      }
  
  
  
  
  
  }
  .foter{
    margin-top:25%;
  }
  .pice3{
    margin-top:20%;
    width:50vw;
    height:100vh;
  }
  
  .card{
    width: 1%;
    background-color: rgb(248, 242, 212);
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 10px;
  }
  
  
  .mobile-menu{
    display: none
  }
  .Add-comment{
   
    border-bottom: 3px solid #0f7081;
    color:rgb(233, 164, 17);
    width:20vw;
    height:10vh;
    font-size:10px;
    border-radius: 10px;
  
  }
  
  @media screen and (max-width:568px) {
    
    /* nav .desktop-menu{
      display: none;
    } */
  
  
    .menu{
      display: block;
      width:80px;
      color:white;
      background:black;
  
    }
  .Footer1{
    background-color: #c7dee2;
    width: 80vw;
  
    margin:0 auto;
    margin-top:47rem;
    bottom:0;
    height: 10vh;
    display: flex;
    color:white;
    align-items: center;
    justify-content: center;
  }
  .Footer2{
    background-color:#c7dee2;
    width: 80vw;
  
    margin:0 auto;
    margin-top:-70rem;
    bottom:0;
    height: 30vh;
    display: flex;
    color:rgb(90, 99, 96);
    align-items: center;
    justify-content: center;
  }
  /* .hero{
    background-image: url('./assets/pic15.jpg');
    width: 100vw;
    margin:0 auto;
    margin-top: -19%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:5px solid rgb(6, 103, 128);
  
  } */
  .grid-container1
  {
      background-color: aqua;
      grid-template-columns: auto auto;
      gap: 15px;
    }
    .Card{
      margin-left:30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width:5%;
    
    
    }
  
  
    
  
    .hero h1{
      background-color:rgb(2, 23, 29);
      color:#666;
      width: 20vw;
      height:60px;
      border-radius: 20px;
      text-align: center;
      max-width:50rem;
      width:30vw;
      height:20vh;
    
    }
    .hero h1:hover{
      background-color:rgb(23, 105, 128);
      color:#0a0707;
      width: 20vw;
      height:60px;
      border-radius: 20px;
      text-align: center;
      display: flex;
      flex-direction: center;
      justify-content: center;
      align-items: center;
    
    }
  
  }
  /* @media screen and (min-width:568px){
  
    /* .Trending{
      margin-top: -2%;
      /* position: absolute; */
      /* //font-size:30px;
      //display:flex; */
  /*     
      justify-content: center;
      align-items: center; */
      /* } */
    
  
  /* */ */ */
  
  .Add-comment{
   
    border-bottom: 3px solid #c7dee2;
    color:rgb(233, 164, 17);
    width:7vw;
    height:7vh;
    border-radius: 10px;
  
  }
  
  .Card{
    margin-left:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  
  }
  .leftsd, .rightsd{
    margin:2rem 2rem;
    height:40vh;
    width:80vw;
    background-color: white;
    /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
  }
  .leftsd{
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;}
    .contn{
      height:45vh;
      width:80vw;
      background-image: url(assets/pic19.jpg);
     
      opacity:90%;
      margin:5rem auto;
      /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom:3px solid rgba(255, 68, 0, 0.619);
      margin-top: 15px;
  }
  
  .leftsidee{
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;}
    .contn2{
      height:45vh;
      width:80vw;
      background-color:white;
      margin:5rem auto;
      /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap:10px;
      margin-top: 20px;
  }
  .imagee{
    width:20vw;
    height:60vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
  
  
  }
  .imagee1{
    width:20vw;
    height:20vh;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    align-items: start;
    gap:10px;
  
  
  }
  .rightsidee
  {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Foota{
    background-color: #08051a;
    text-align: center;
    height:20vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    color:#666;
  
  }
  .Trending{
    /* animation: fade-in 1s ease-in; */
  margin-top: -2%;
  /* position: absolute; */
  font-size:30px;
  display:flex;
  justify-content: center;
  align-items: center;
  }
  
  /* .contn3{
    margin-top:70%;
  } */
  .leftsiid, .rightsiid{
    margin:2rem 2rem;
    height:40vh;
    width:80vw;
    background-color: white;
    /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
  }
  .leftsiid{
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;}
    .contn3{
      height:45vh;
      width:80vw;
      background-color:white;
      /* background-color: #0a0707; */
      /* color:white; */
      margin:5rem auto;
      /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
      display: flex;
      justify-content: center;
      align-items: center;
    
      margin-top: 65%;
  }
  .leftsid, .rightsid{
    margin:2rem 2rem;
    height:40vh;
    width:80vw;
    background-color: white;
    /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
  }
  .leftsid{
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;}
    .contn4{
      height:45vh;
      width:80vw;
      background-color:white;
      /* background-color: #0a0707; */
      /* color:white; */
      margin:5rem auto;
      /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
      display: flex;
      justify-content: center;
      align-items: center;
    
      margin-top: 0%;
  }
  
  
  
  {/*Full.jsx*/}
  
  .leftsde{
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;}
    .contner{
      height:45vh;
      width:80vw;
      background-color:white;
      margin:5rem auto;
      /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap:10px;
      margin-top: 8%;
  }
  .leftsde, .rightsde{
    margin:2rem 2rem;
    height:40vh;
    width:80vw;
    background-color: white;
    /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
  }
  .imagee{
    width:20vw;
    height:40vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
  
  
  }
  .rightsd h{
    background-color: orangered;
    color:white;
  }
  
  .btn1{
    background-color: orangered;
    color:white;
    font-size: 25px;
    width:7vw;
    height:5vh;
    border-radius:10px;
  }
  .textareaa{
    width:20vw;
    height:12vh;
  }



  ////////////////////////////
  ////////////////////////
  blog.jsx
  ////////////
  /////////////
  /////////

  import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdTitle, MdDescription } from 'react-icons/md';
import { BsCardImage } from 'react-icons/bs';
import NavbarAdm from '../components/NavbarAdm';
import './signup.css';
import image from '../assets/pic23.jpg';
import Footer from './Footer';

export function Blog() {
  const navigate = useNavigate();
  const [postImage, setPostImage] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if postImage, postTitle, and postContent are not empty
    if (!postImage || !postTitle || !postContent) {
      alert('Please fill out all fields');
      return;
    }

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        alert('You are not authenticated. Please log in.');
        return;
      }

      const response = await fetch('https://klab-blog-api.onrender.com/Blog/API/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          postImage: postImage,
          postTitle: postTitle,
          postContent: postContent,
        }),
      });

      if (response.ok) {
        alert('Blog is Posted');
        navigate('/Dashboard');
        setPostImage('');
        setPostTitle('');
        setPostContent('');
      } else {
        console.log('Failed to add blog');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <>
      <div>
        <NavbarAdm />
      </div>
      <div className="main-login">
        <div className="login-contain">
          <div className="left-side">
            <h3>Add Post</h3>
            <form className="form1" onSubmit={handleSubmit}>
              <label>
                <i>
                  <BsCardImage />
                </i>
                Choose image
              </label>
              <br />
              <label>
              <input type="file" 
              id="myFile" 
              onChange={(e) => setPostImage(e.target.value)} />
              </label>
              <br />

              <label htmlFor="postTitle">
                <i>
                  <MdTitle />
                </i>
                Title
              </label>
              <br />
              <input
                type="text"
                id="postTitle"
                placeholder="Enter a title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
              <br />

              <label>
                <i>
                  <MdDescription />
                </i>
                Description
              </label>
              <br />
              <textarea
                id="Description"
                placeholder="Enter your message.........."
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
              <br />

              <button className="btn" type="submit">
                Add blog
              </button>
            </form>
          </div>
          <div className="right-side">
            <img src={image} className="img-login" alt="Signup" />
            <Link to="/" className="read-more">
              Join us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;


////////
/////////
Card2.jsx
/////
// import {Link} from "react-router-dom"
import '../App.css'
// import {AiOutlineEdit} from 'react-icons/ai'
// import {IoPersonCircle} from 'react-icons/io'
import axios from "axios";
import { useState } from 'react';

const Card2 = ({id,name,image,description}) => {

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
        .catch((error) => {
          console.error("Error updating data:", error);
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
            alert("Failed to delete data");
          }
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
          alert("Failed to delete data");
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


    ///
    ///dasboard.jsx
    //
    import { useState, useEffect } from 'react'

import Card2 from './Card2'
import NavbarAdm from '../components/NavbarAdm'
import '../App.css'

import Footer from '../pages/Footer'
import pic25 from '../assets/pic25.jpg'


// import {Link} from "react-router-dom"
// import pic21 from '../assets/pic21.jpg'
// import pic23 from '../assets/pic23.jpg'



// import pic26 from '../assets/pic26.jpg'

// import pic24 from '../assets/pic24.jpg'



export function Dashboard() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://klab-blog-api.onrender.com/Blog/API/post/get/all")
            .then((response) => response.json())
            .then((res) => {
                if (res) {
                    setPosts(res)
                }
            })
    }, [])


    console.log("POSTS", posts)

    return (
        <>
        <div>
           
          
            <NavbarAdm />
            
            {/* <section className='hero'> */}
             <div className='Trending'>
                <h><strong>Z-</strong><u>tren</u><i>ding</i></h><br/>
                </div><br/><br/>
             <div className="contn">
                
            <div className="leftsd">
            <img src={pic25} className='imagee'/>
            </div>
            <div className="rightsd">
            <h><strong>Business,Travel </strong>- octob.2023</h><br /><br/>
            <h4><strong>‘Something’s going on here’: SA Startup Week connects founders to resources, inspiration and real talk</strong></h4><br />
            <p>Awareness emerged as an early theme as would-be fledgling and established entrepreneurs gathered for San Antonio Startup Week on Monday morning on the 24th floor of Frost Tower, 
                with its 360-degree views of downtown and beyond.</p>
            </div>
            </div>

            {/* </section> */}

            <section className='coco grid-container'>
            {posts.length > 0 ? posts.map((post, index) => (
                    <Card2 key={index} id={post._id} name={post.postTitle} image={post.postImage} description={post.postContent}/>
                )
                ) : <p>Loading posts...</p>}
    
      
        


        </section>

       
        <Footer />
</div>
        </>
    );
}

export default Dashboard;


///////////////////////////////////////
//////////////////
////App.css
////
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  color: inherit;
  /* cursor: pointer; */
  ;
}
.logo
{
  left:40%;
  /* background:; */
  margin-right:38rem;
}
nav{
  /* background-color: #c7dee2; */
  background: #08051a;
  /* background-color: #28a8b974; */
  /* color: rgb(59, 51, 51); */
  display: flex;
  font-size:20px;
  justify-content: space-between;
  padding: 20px 40px;
  position: fixed;
  width: 100%;
  top:0;
  z-index: 1;


}
.nav .title{
  font-size: 5.5rem;
  font-weight: bold;
  text-decoration: none;
  color:orange;
  margin: 1rem;
 


}
.title{
  color:orangered;
  border-left:50px solid #666;
}
nav ul{
  display: flex;
}
nav ul li{
  list-style: none;
}

nav ul li a{
  text-decoration: none;
  display: block;
  color:#666;
  padding:0.5rem;
  margin:0 0.5rem;
 
}
.logout{
  text-decoration: none;
  display: block;
  color:#666;
  padding:0.5rem;
  margin:0 0.5rem;
  top:0;
}
nav ul li a:hover{
border-bottom: 3px solid orangered;
color:white;
}
nav .menuu{
  display: none;

  position: absolute;
  top:0.75rem;
  right: 0.5em;
  flex-direction: column;
  justify-content: space-between;
  width: 2.25em;
  height:2rem;

}
nav .menuu span{
  height:0.4rem;
  width:30vw;
  background-color: #fff;
  border-radius:0.2rem;

}



.Trending h{
  color:#666;
  margin-top:10%;
  text-align:center;
  font-size:30px;
  border-left:30px solid rgba(255, 68, 0, 0.942);
}

.edit{
  background-color:rgba(255, 68, 0, 0.942);
  display: flex;
  align-items: center;
  justify-content: center;
  width:5vw;
  height:10vh;
  color:white;
  border:none;
  
}
.delete{
  background-color:#c7dee2;
  display: flex;
  align-items: center;
  justify-content: center;
  width:5vw;
  height:10vh;
  color:#322f2f;
  border:none;
  
}













.get{
  border-bottom:5px solid #0f7081;
}

.menu{
  display: none;
 

}

.bar-icon{
  padding: 8px 15px;
  border: none;
  border: 1px solid white;
  background-color: black;
  color: white;
}
.imag-card{
  width:10vw;
  height:20vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
nav .desktop-menu{
  display: flex;
  gap: 10px;
}


/* hero section  */
.hero{
  background-image: url('./assets/pic15.jpg');
  width: 100vw;
  margin:0 auto;
  margin-top: -15%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom:5px solid #c7dee2;

}
.hero h1{
  display: inline-block;
  padding:10px 20px;
  background: #0f7081;
  max-width: 40rem;
  color:white;
  font-size:19px;
  text-decoration: none;
  border-radius:20px;
  margin-top: 15px;
  transition:0.3s ease;

}
.hero h1:hover{
  background-color:rgb(23, 105, 128);
  color:#a8aa17;
  max-width: 40rem;
  height:40px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

}
.Footer{
  background-color: #08051a;
  width: 80vw;
  margin:0 auto;
  bottom:0;
  height: 20vh;
  display: flex;
  color:wrgb(83, 77, 77);
  align-items: center;
  justify-content: center;
}
/* .Footer2{
  background-color: #d4f0f5;
  width: 100vw;
  height: 30vh;
 
  margin-top:75%;
 
  height: 30vh;
  display: flex;
  color:rgb(83, 77, 77);
  align-items: center;
  justify-content: center;
} */
.grid-container{
  background-color: aliceblue;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: auto auto auto ;
  gap: 1rem;
  /* width: 30vw; */
  /* margin:0 auto;
  height:10vh; */
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.coco{
  /* background-color: #a8aa17; */
  width: 80%;
  margin: 0 auto;
  margin-top: -5%;
  background:white;
}
.Cardi{
  padding: 0.5rem 0.5rem;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.1rem;
  margin-left:-45px;
  width:30vw;
  height:90vh;
  background-color:white;
}
.grid-About{
  background-color: rgb(179, 202, 223);
  padding: 20px 40px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  width: 80vw;
  margin:0 auto;
  height:80vh;
}

.Content-style{
  background-color: rgb(210, 222, 231);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24rem;
  margin-left: 50rem;
  margin-right: 5rem;

  width: 80%;
  margin:0 auto;
  height:60vh;
  align-items:center;
}
.ree{
  /* background-color: rgba(255, 68, 0, 0.942); */
  border-bottom: 3px solid  rgba(255, 68, 0, 0.942);
  ;
  font-size:20px;
  color:rgb(54, 201, 226);
  width:50vw;
  height: 50vh;
}
@media screen and (max-width:568px) {
  
  grid-About{
    display: none;
  }
  nav .menuu{
    display: flex;
  }
  nav{
    flex-direction: column;
    align-items: start;
  }
  nav ul {
    display: none;
    flex-direction: column;
    width:100%;
    margin-bottom: 0.25rem;
  }
  nav ul.open{
    display: flex;
  }
  nav ul li{
    width:100%;
    text-align: center;
  }
  nav ul li a{
    margin:0.2 rem 0.5rem; 
  }
  .Trending{
    margin-top: -2%;
    /* position: absolute; */
    font-size:20px;
   
    display:flex;
    justify-content: center;
    align-items: center;
    }
.Cardi{
  margin-top:10%;
  width:100%;
}
    
      .contn{
        height:45vh;
        width:10vw;
     
        
        /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width:30vw;
        border-bottom:3px solid rgba(255, 68, 0, 0.942);
        margin-top: 15px;
    }
    
    .Cardi{
      padding: 0.5rem 0.5rem;
      /* border-radius: 1rem; */
      display: flex;
      width:32vw;
      height:72vh;
      flex-direction: column;
      gap: 1rem;
      margin-top: 20%;
    }

    .leftsd, .rightsd{
      margin:2rem 2rem;
      height:20vh;
      width:10vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* font-size:5px; */
      background-color: white;
      /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
    }

    .rightsd h{
      background-color: orangered;
      color:white;
      margin-top:0px;
    }

    .leftsde{
      display:flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;}
      .contner{
        height:45vh;
        width:20vw;
        background-color:white;
        margin:5rem auto;
        /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
        display: flex;
        justify-content: center;
        align-items: center;
        gap:10px;
        margin-top: 10%;
    }
    .leftsde, .rightsde{
      margin:2rem 2rem;
      height:20vh;
      width:20vw;
      background-color: rgb(65, 12, 12);
      /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
    }

    .foter{
      margin-top:165px;
    }
    .pice3{
      margin-top:20%;
      width:10vw;
      height:20vh;
    }
    .edit{
      width:10vw;
      height:10vh;
      color:white;
      border:none;
      
    }
    .delete{
     
      width:10vw;
      height:10vh;
      color:#322f2f;
      border:none;
      
    }




}
@media screen and (max-width:368px) {
  .edit{
    width:10vw;
    height:10vh;
    color:white;
    border:none;
    
  }
  .delete{
   
    width:10vw;
    height:10vh;
    color:#322f2f;
    border:none;

}
.Cardi{
  padding: 0.5rem 0.5rem;
  /* border-radius: 1rem; */
  display: flex;
  width:32vw;
  height:72vh;
  flex-direction: column;
  gap: 1rem;
  margin-top: 100%;
}
}
.foter{
  margin-top:25%;
}
.pice3{
  margin-top:20%;
  width:50vw;
  height:100vh;
}

.card{
  width: 1%;
  background-color: rgb(248, 242, 212);
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 10px;
}


.mobile-menu{
  display: none
}
.Add-comment{
 
  border-bottom: 3px solid #0f7081;
  color:rgb(233, 164, 17);
  width:20vw;
  height:10vh;
  font-size:10px;
  border-radius: 10px;

}

@media screen and (max-width:568px) {
  
  /* nav .desktop-menu{
    display: none;
  } */
.Cardi{
margin-top:170%;
}
  .Foota{
    background-color: #08051a;
    text-align: center;
    height:20vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    color:#666;
    margin-top: 30%;
  
  }
  .menu{
    display: block;
    width:80px;
    color:white;
    background:black;

  }

.Footer1{
  background-color: #c7dee2;
  width: 80vw;

  margin:0 auto;
  margin-top:47rem;
  bottom:0;
  height: 10vh;
  display: flex;
  color:white;
  align-items: center;
  justify-content: center;
}
.rightsd h{
  width:70vw;
  font-size: 20px;
  text-align: center;
}
.Footer2{
  background-color:#c7dee2;
  width: 80vw;

  margin:0 auto;
  margin-top:-70rem;
  bottom:0;
  height: 30vh;
  display: flex;
  color:rgb(90, 99, 96);
  align-items: center;
  justify-content: center;
}
/* .hero{
  background-image: url('./assets/pic15.jpg');
  width: 100vw;
  margin:0 auto;
  margin-top: -19%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom:5px solid rgb(6, 103, 128);

} */
.grid-container1
{
    background-color: aqua;
    grid-template-columns: auto auto;
    gap: 15px;
  }
  .Card{
    margin-left:30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:5%;
  
  
  }


  

  .hero h1{
    background-color:rgb(2, 23, 29);
    color:#666;
    width: 20vw;
    height:60px;
    border-radius: 20px;
    text-align: center;
    max-width:50rem;
    width:30vw;
    height:20vh;
  
  }
  .hero h1:hover{
    background-color:rgb(23, 105, 128);
    color:#0a0707;
    width: 20vw;
    height:60px;
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
  
  }

}
@media screen and (min-width:568px){
  .Cardi{
    margin-top:20%;
  }
  .Foota{
    background-color: #08051a;
    text-align: center;
    height:20vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    color:#666;
    /* margin-top: 40%; */
  
  }
  .Trending h{
    margin-top:10%;
  }
  .contn{

    margin-top: 70%;
}
}
.Add-comment{
 
  border-bottom: 3px solid #c7dee2;
  color:rgb(233, 164, 17);
  width:7vw;
  height:7vh;
  border-radius: 10px;

}

.Card{
  margin-left:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

}
.leftsd, .rightsd{
  margin:2rem 2rem;
  height:40vh;
  width:80vw;
  background-color: white;
  /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
}
.leftsd{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  .contn{
    height:45vh;
    width:80vw;
    background-image: url(assets/pic19.jpg);
   
    opacity:90%;
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:3px solid rgba(255, 68, 0, 0.619);
    margin-top: 15px;
}

.leftsidee{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  .contn2{
    height:45vh;
    width:80vw;
    background-color:white;
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    margin-top: 20px;
}
.imagee{
  width:20vw;
  height:60vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:10px;


}
.imagee1{
  width:20vw;
  height:20vh;
  border-radius: 10px;
  display:flex;
  flex-direction: column;
  align-items: start;
  gap:10px;


}
.rightsidee
{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Foota{
  background-color: #08051a;
  text-align: center;
  height:20vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color:#666;

}
.Trending{
  /* animation: fade-in 1s ease-in; */
margin-top: -2%;

/* position: absolute; */
font-size:30px;
display:flex;
justify-content: center;
align-items: center;
}

/* .contn3{
  margin-top:70%;
} */
.leftsiid, .rightsiid{
  margin:2rem 2rem;
  height:40vh;
  width:80vw;
  background-color: white;
  /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
}
.leftsiid{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  .contn3{
    height:45vh;
    width:80vw;
    background-color:white;
    /* background-color: #0a0707; */
    /* color:white; */
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin-top: 65%;
}
.leftsid, .rightsid{
  margin:2rem 2rem;
  height:40vh;
  width:80vw;
  background-color: white;
  /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
}
.leftsid{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  .contn4{
    height:45vh;
    width:80vw;
    background-color:white;
    /* background-color: #0a0707; */
    /* color:white; */
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin-top: 0%;
}



{/*Full.jsx*/}

.leftsde{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  .contner{
    height:45vh;
    width:80vw;
    background-color:white;
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    margin-top: 8%;
}
.leftsde, .rightsde{
  margin:2rem 2rem;
  height:40vh;
  width:80vw;
  background-color: white;
  /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
}
.imagee{
  width:20vw;
  height:40vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:10px;


}
.rightsd h{
  background-color: orangered;
  color:white;
}

.btn1{
  background-color: orangered;
  color:white;
  font-size: 25px;
  width:7vw;
  height:5vh;
  border-radius:10px;
}
.textareaa{
  width:20vw;
  height:12vh;
}

//////
////
NavdbarAdm.jsx//////
///
import {Link} from 'react-router-dom'
import {useState} from 'react'


// import { useNavigate } from 'react'
// import {AiOutlineHome} from 'react-icons/ai'
// import {IoAddCircleSharp} from 'react-icons/io'
// import {IoMdLogOut} from 'react-icons/io'
export function NavbarAdm(){
  const [menuOpen,setMenuOpen] = useState(false)
//   const history=useHistory()
//   function Logout(){
//     // let user=JSON.parse(localStorage.getItem('user-info'))
//     localStorage.clear();
//     history.push('/')
//   }
const handleLogout = () => {
  // Clear user information from localStorage
  localStorage.clear();
  // Redirect to the home page or any other desired page
  window.location.href = '/Login';
  alert('Signed Out')
};

  return(
<>
<nav>
<Link to='/' className='title'>
  <strong>
  Z-Tre<i>nds</i>Blog
  </strong>
  </Link>
<div className='menuu' onClick={() =>{
  setMenuOpen(!menuOpen);
}}>

  <span></span>
  <span></span>
  <span></span>

</div>

<ul className={menuOpen ? "open" : ""}>
  <li>
    <Link to='/Dashboard'><strong>Home</strong></Link>
  </li>
  {/* <li>
    <Link to='/About'><strong>About</strong></Link>
    </li>
  <li>
    <Link to='/Contact '><strong>Contact</strong></Link>
    </li> */}
 
    <li>
    <Link to='/Blog'><strong>Blog</strong></Link>
    </li>
    <li>
    <Link onClick={handleLogout}>
        Logout
    </Link>
    </li>
</ul>
</nav>


</>
  );
}
export default NavbarAdm;

///////////////
/////////////////////////////////////////////
//////
CiDesktop.jsx/////////

//////////////
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Navbar from '../components/navbar'
import '../App.css'
import pic25 from '../assets/pic25.jpg'

import Footer from './Footer'




export function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://klab-blog-api.onrender.com/Blog/API/post/get/all")
            .then((response) => response.json())
            .then((res) => {
                if (res) {
                    setPosts(res)
                }
            })
    }, [])



    console.log("POSTS", posts)
    return (
        <>
        <Navbar />
        <div>
           
           
            
            
            {/* <section className='hero'> */}
             <div className='Trending'>
                <h><strong>Z-</strong><u>tren</u><i>ding</i></h><br/>
                </div><br/><br/>
             <div className="contn">
                
            <div className="leftsd">
            <img src={pic25} className='imagee'/>
            </div>
            <div className="rightsd">
            <h><strong>Business,Travel </strong>- octob.2023</h><br /><br/>
            <h4><strong>‘Something’s going on here’: SA Startup Week connects founders to resources, inspiration and real talk</strong></h4><br />
            <p>Awareness emerged as an early theme as would-be fledgling and established entrepreneurs gathered for San Antonio Startup Week on Monday morning on the 24th floor of Frost Tower, 
                with its 360-degree views of downtown and beyond.</p>
            </div>
            </div>

            {/* </section> */}

            <section className='coco grid-container'>
            {posts.length > 0 ? posts.map((post, index) => (
                    <Card key={index} name={post.postTitle} image={post.postImage} author={post.author} description={post.postContent} link={post.link}  onUpdate={(updatedDescription) => handleUpdate(updatedDescription, post.id)}/>
                )
                ) : <p>Loading posts...</p>}
    
      
        


        </section>

       
        <Footer />
</div>
        </>
    );
}

export default Home;






/*Singlepage */

import Navbar from '../components/navbar'
// import './comment.css'
import '../App.css'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import pic25 from '../assets/pic26.jpg'
// import {BiSolidUserCircle} from "react-icons/bi"
import Footer from './Footer'
import axios from 'axios'



export function Singlepage() {
    const { _id } = useParams();
    console.log(_id);
  const [post, setPost] = useState([]);
  console.log(post);
   //const [message, setpostComment] = useState("");
  const [userComment, setUserComment] = useState("");


  console.log("user comment is: ", userComment);

  // const [error, setError] = useState(null);
  // const token = localStorage.getItem("token");
  // const config = {
  //   Authorization: `Bearer ${token}`,
  //   "Content-Type": "application/json"
  // };
  // console.log("Tokennnnn-----------",config);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://klab-blog-api.onrender.com/Blog/API/post/get/${_id}`
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setPost(data.data);
  //         console.log(data.data)
  //         setUserComment(data.data.comments || []);

  //       } else {
  //        console.log("Failed to fetch post data");
  //       }
  //     } catch (error) {
  //       console.log("Error fetching post data: " ,error);
  //     }
  //   };

  //   fetchData();
  // }, [_id]);

//   const handleCommentSubmit = (e) => {
//     setUserComment(e.target.value);
//   };



// const formData ={

//   commentMessage:userComment
// }
// const formData=new FormData();
//             formData.append("message",message);


//             const handleCommentSubmit = async (e) => {
//               e.preventDefault();
//               console.log("userComment", userComment);
            
//               try {
//                 const response = await fetch(`https://klab-blog-api.onrender.com/Blog/API/comments/add/${_id}`, {
//                   method: "POST",
//                   headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify({ comment: userComment }), // Assuming userComment is a variable holding the comment data
//                 });
            
                
//                 // console.log(Response);
        
//                 if (response.status === 200 || response.status === 201) {
                    
//                   const updatedComments = await response.json();
//                   if (updatedComments.data && updatedComments.data.comments) {
//                     setUserComment(updatedComments.data.comments);
//                     setUserComment("");
//                     alert("Comment added successfully");
//                     window.location.reload();
//                   } else {
//                     alert("failed to add comment");
//                     // window.location.reload();
//                   }
//                 } 
                
//                 else {
//                   alert("Failed to add comment to the database");
//                   console.log("Failed to add comment to the database");
//                 }

//               } catch (error) {
  //                 console.log("Error adding comment: ", error);
  //                 alert("failed please try again.")
  //               }
  
  
  
  //           };
  
  
  
// const addComment = async(id)=>{
//   console.log("Clicked");
//   console.log("comment Id", id);
//   try {
//       const AddCo = await axios.post(`https://klab-blog-api.onrender.com/Blog/API/comments/add/${id}`,config,formData)
//   const response = await AddCo.data
//   setUserComment(response)
//   console.log(response);
//   if(response.status === 201){
//     alert("query Ok")
//   }
//   } catch (error) {
//     alert("failed")
//   }
// }

const [comment_view, setCommentView] = useState([]);
const [commentSingle, setCommentSingle] = useState([]);
console.log("comment single is: ", commentSingle);

console.log("comment_view: ", comment_view);


const displayAll = async () => {
  const response = await fetch(
    `https://klab-blog-api.onrender.com/Blog/API/post/get/${_id}`
    );
  const res = await response.json();
  setPost(res.data);
  setCommentSingle(res.data.comments);
};
useEffect(() => {
  displayAll();
},[] );

// let comment_view = setPost.userComment;



{
  /*---------- comment api section start --------- */
}

const postdata = {
  userComment,
};

const addComment = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");
  // console.log("token", token);

  if (!token) {
    alert("First Login to post your comment");
  }

  try {
    const response = await axios.post(
      `https://klab-blog-api.onrender.com/Blog/API/comments/add/${_id}`,
      postdata,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log("postdata", postdata);

    if (response.status === 201 || response.status === 200) {
      alert("comment Posted");
      console.log(response.data);
      setCommentView(response.data.userComment || []);
      setUserComment("");
      displayAll();
    } else {
      alert("comment post failed");
      console.log(response.data);
    }
  } catch (error) {
    console.log("error", error);
    alert("an error occured while posting");
  }
};

{
    /*---------- comment api section end --------- */
  }


console.log("comment_view: ", comment_view);



    return (
        <>
       
          <Navbar /> 
          <div className='single-page'>
              <div className="contner">
                
            <div className="box-1">
           
            <img src={post.postImage}className='pice3'/>
            </div>
            <div className="box-2">
        
         <h4><strong>{post.postTitle}</strong></h4><br></br>
         <p>{post.postContent}</p>
           <p></p><br></br>
            <div className='comment-form'>
                <form>
              
                <h2>Leave a comment</h2>
              
                <label> 
                    <input type='Content' className='textareaa' value={userComment} onChange={(e)=>setUserComment(e.target.value)}/><br />
                </label>
                <button className='comentbtn' type='submit'onClick={addComment}>Post</button>
                </form>
            </div>
           
    
           
            </div>
            </div> 
            {/* <div className="reply">
            <div className="comment"> */}
                   {/* Comments...............
                    <ul id="comment-list">
          {comments.map((comment, index) => (
            <li key={index}>
              <img src={comment.author} />
              <p>{comment.author}</p>,{comment.content}{" "}
            </li>
          ))}
        </ul>
        
        {error && <p className="error-message">{error}</p>} */}
     
                <div className='comment-wrapper'>
                <h2 className='head-text'>Recent comments</h2>
                
                    {/* <div className="container"> */}
                    <div className="container">
                        {/* <h2 className='head-text'>Recent comments</h2> */}
                    <div className="comments-box"> 
                    {
                    commentSingle &&
                    commentSingle.map((commentSingles, index) => (
                  
                    <section id='comment-flex' key={index}>
                      <img src={commentSingles.postCommentor.profile} className='media-man'/>
                    <h5 className='custom-para'>{commentSingles.postCommentor.firstName}</h5>
                    <h5 className='custom-para'>{commentSingles.postCommentor.lastName
}</h5>
                  
                     <p className='blog-details-para'>{commentSingles.userComment}</p><br />
                    </section>
                    ))
                    
                    }
                        {/* <img src={pic25} className='media-man'/>
                        <div className="media-body">
                        <div className="custom-flex">
                            <h5 className='custom-para'>Isiking |<span>oct 2023</span></h5>
                            <a className='reply-text' href='#' ><i className='Fas-fa-reply' /></a>
                        </div>
                        <p className='blog-details-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed modi nihil natus magni neque.</p>
                        </div> */}
                      </div>
                    </div>
                </div>

                {/* <div className='comment-wrapper'>
                    <div className="container">
                    <div className="comment-box">
                        <img src={pic25} className='media-man'/>
                        <div className="media-body">
                        <div className="custom-flex">
                            <h5 className='custom-para'>Isiking |<span>oct 2023</span></h5>
                            <a className='reply-text' href='#' ><i className='Fas-fa-reply' /></a>
                        </div>
                        <p className='blog-details-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed modi nihil natus magni neque.</p>
                        </div>
                      </div>
                    </div>
                </div> */}
                </div>
            <div className="foter">
            <Footer /> 
            </div>
          
         
     
           
           
        </>

    );
          }

export default Singlepage;



/*App.css *
/

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  color: inherit;
  /* cursor: pointer; */
  ;
}
.logo
{
  left:40%;
  /* background:; */
  margin-right:38rem;
}
nav{
  /* background-color: #c7dee2; */
  background: #140909;
  /* background-color: #28a8b974; */
  /* color: rgb(59, 51, 51); */
  display: flex;
  font-size:20px;
  justify-content: space-between;
  padding: 20px 40px;
  position: fixed;
  width: 100%;
  top:0;
  z-index: 1;


}
.nav .title{
  font-size: 5.5rem;
  font-weight: bold;
  text-decoration: none;
  color:#009cff;
  margin: 1rem;
 


}
.title{
  color:white
  ;
  border-left:50px solid #666;
}
nav ul{
  display: flex;
}
nav ul li{
  list-style: none;
}

nav ul li a{
  text-decoration: none;
  display: block;
  color:#666;
  padding:0.5rem;
  margin:0 0.5rem;
 
}
.logout{
  text-decoration: none;
  display: block;
  color:#666;
  padding:0.5rem;
  margin:0 0.5rem;
  top:0;
}
nav ul li a:hover{
border-bottom: 3px solid white;
color:white;
}
nav .menuu{
  display: none;

  position: absolute;
  top:0.75rem;
  right: 0.5em;
  flex-direction: column;
  justify-content: space-between;
  width: 2.25em;
  height:2rem;

}
nav .menuu span{
  height:0.4rem;
  width:30vw;
  background-color: #fff;
  border-radius:0.2rem;

}



.Trending h{
  color:#666;
  margin-top:10%;
  text-align:center;
  font-size:30px;
  border-left:30px solid rgba(0, 0, 0, 0.723);
  border-bottom: none;
  
}

.edit{
  background-color:rgba(0, 0, 0, 0.723);
  display: flex;
  align-items: center;
  justify-content: center;
  width:5vw;
  height:10vh;
  color:white;
  border:none;
  
}
.delete{
  background-color:#009cff;
  display: flex;
  align-items: center;
  justify-content: center;
  width:5vw;
  height:10vh;
  color:#322f2f;
  border:none;
  
}













.get{
  border-bottom:5px solid #0f7081;
}

.menu{
  display: none;
 

}

.bar-icon{
  padding: 8px 15px;
  border: none;
  border: 1px solid white;
  background-color: black;
  color: white;
}
.imag-card{
  width:10vw;
  height:20vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
nav .desktop-menu{
  display: flex;
  gap: 10px;
}


/* hero section  */
.hero{
  background-image: url('./assets/pic15.jpg');
  width: 100vw;
  margin:0 auto;
  margin-top: -15%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom:5px solid #c7dee2;

}
.hero h1{
  display: inline-block;
  padding:10px 20px;
  background: #0f7081;
  max-width: 40rem;
  color:white;
  font-size:19px;
  text-decoration: none;
  border-radius:20px;
  margin-top: 15px;
  transition:0.3s ease;

}
.hero h1:hover{
  background-color:rgb(23, 105, 128);
  color:#a8aa17;
  max-width: 40rem;
  height:40px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

}
.Footer{
  background-color: #140909;
  width: 80vw;
  margin:0 auto;
  bottom:0;
  height: 20vh;
  display: flex;
  color:wrgb(83, 77, 77);
  align-items: center;
  justify-content: center;
}
/* .Footer2{
  background-color: #d4f0f5;
  width: 100vw;
  height: 30vh;
 
  margin-top:75%;
 
  height: 30vh;
  display: flex;
  color:rgb(83, 77, 77);
  align-items: center;
  justify-content: center;
} */
.grid-container{
  background-color: aliceblue;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: auto auto auto ;
  gap: 1rem;
  /* width: 30vw; */
  /* margin:0 auto;
  height:10vh; */
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.coco{
 
  width: 80%;
  margin: 0 auto;
  margin-top: -5%;
  
  column-gap:10px;
  background-color: white;
  
}
.Cardi{
  padding: 0.5rem 0.5rem;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.1rem;
  margin-left:-45px;
  width:30vw;
  height:90vh;
  background-color:white;
}
.grid-About{
  background-color: rgb(179, 202, 223);
  padding: 20px 40px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  width: 80vw;
  margin:0 auto;
  height:80vh;
}

.Content-style{
  background-color: rgb(210, 222, 231);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24rem;
  margin-left: 50rem;
  margin-right: 5rem;

  width: 80%;
  margin:0 auto;
  height:60vh;
  align-items:center;
}
.ree{
  /* background-color: rgba(255, 68, 0, 0.942); */
  border-bottom: 3px solid  #140909;
  ;
  font-size:20px;
  color:rgb(54, 201, 226);
  width:50vw;
  height: 50vh;
}
@media screen and (max-width:568px) {
  
  grid-About{
    display: none;
  }
  .comment-wrapper h2{
    margin-top:29%;
  }

  nav .menuu{
    display: flex;
  }
  nav{
    flex-direction: column;
    align-items: start;
  }
  nav ul {
    display: none;
    flex-direction: column;
    width:100%;
    margin-bottom: 0.25rem;
  }
  nav ul.open{
    display: flex;
  }
  nav ul li{
    width:100%;
    text-align: center;
  }
  nav ul li a{
    margin:0.2 rem 0.5rem; 
  }
  .Trending{
    margin-top: -2%;
    /* position: absolute; */
    font-size:20px;
   
    display:flex;
    justify-content: center;
    align-items: center;
    }
.Cardi{
  margin-top:10%;
  width:120%;
}
.contner{
  height:75vh;
  width:80vw;
  margin-top:10%;
  /* background-color:darkkhaki;
  margin:5rem auto;
  box-shadow:0.5rem 5.5rem 2rem -2rem darkkhaki;
  display: flex;
  justify-content: center; */
  align-items: center;
 
}
.leftsde{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  /* .contner{
    height:75vh;
    width:80vw;
    background-color:darkkhaki;
    margin:5rem auto;
    box-shadow:0.5rem 5.5rem 2rem -2rem darkkhaki;
    display: flex;
    justify-content: center;
    align-items: center;
   
} */
/* .rightsde{
  width:10vw
  height:5vh;
  margin-top:80%;
  margin-left:-20%;
  display:flex;
  flex-direction: column;
  justify-content: center;
} */
.comment-space{
  margin-top:70%;
  width:10px;
  height:3vh;
}
.rightsde p{
  font-size: 10px;
}



/* .leftsde, .rightsde{
  margin:2rem 2rem;
  height:80%;
  width:100%;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 2rem -2rem #08051a;

  /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
} */
    
      .contn{
        height:45vh;
        width:10vw;
     
        
        /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width:30vw;
        gap:2px;
        border-bottom:3px solid darkkhaki;
        margin-top: 15px;
    }
    
    .Cardi{
      padding: 0.5rem 0.5rem;
      /* border-radius: 1rem; */
      display: flex;
      width:26vw;
      height:102vh;
      flex-direction: column;
      gap: 1rem;
      margin-top: -40%;
      padding: 0 20px;
    }

    .leftsd, .rightsd{
      margin:2rem 2rem;
      height:20vh;
      width:10vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* font-size:5px; */
      background-color: white;
      /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
    }

    .rightsd h{
      /* background-color: darkkhaki; */
      color:#666;
      margin-top:0px;
      border-bottom: none;
      background-color: rgb(182, 97, 97);
      width:40vw;
    }

    .leftsde{
      display:flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;}
      .contner{
        height:45vh;
        width:20vw;
        background-color:white;
        margin:5rem auto;
        /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap:10px;
        margin-top: 20%;
    }
    .leftsde h{
      font-size: 20px;
      margin-top:-0%;
    }
    .rightsiede{
      margin-top:-2%;
      display:flex;
      flex-direction: column;
      justify-content: center;
      margin-left:20%;

    }
    .leftsde, .rightsde{
      margin:2rem 2rem;
      height:20vh;
      width:50vw;
      text-align: center;
      margin-left:24%;
      background-color: darkkhaki;
      color:#666;
      font-size: 5%;
      
      margin-top:-0.3%;
      /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
    }

    .foter{
      margin-top:165px;
    }
    .pice3{
      margin-top:20%;
      width:5vw;
      height:5vh;
      height:auto;
      display:block;
    }
    .edit{
      width:10vw;
      height:10vh;
      color:white;
      border:none;
      
    }
    .delete{
     
      width:10vw;
      height:10vh;
      color:#322f2f;
      border:none;
      
    }





@media screen and (max-width:368px) {
  .edit{
    width:10vw;
    height:10vh;
    color:white;
    border:none;
    
  }
  .delete{
   
    width:10vw;
    height:10vh;
    color:#322f2f;
    border:none;

}

.comment-wrapper h2{
  margin-top:29%;
}


.Cardi{
  padding: 0.5rem 0.5rem;
  /* border-radius: 1rem; */
  display: flex;
  width:32vw;
  height:72vh;
  flex-direction: column;
  gap: 1rem;
  margin-top: 100%;
}
}
.foter{
  margin-top:25%;
}
/* .pice3{
  margin-top:20%;
  margin-left:-30%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width:30vw;
  height:70vh;
} */

.card{
  width: 1%;
  background-color: rgb(248, 242, 212);
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 10px;
}


.mobile-menu{
  display: none
}
.Add-comment{
 
  border-bottom: 3px solid #0f7081;
  color:rgb(233, 164, 17);
  width:20vw;
  height:10vh;
  font-size:10px;
  border-radius: 10px;

}

@media screen and (max-width:568px) {
  
  /* nav .desktop-menu{
    display: none;
  } */
.Cardi{
margin-top:170%;
}
.comment-form textareaa{
  height:10px;
  background-color: #322f2f;
}
  .Foota{
    background-color: darkkhaki;
    text-align: center;
    height:60vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    color:#666;
    margin-top: 500%;
  
  }
  .coco{
background-color: white;
gap:50px;
height:90%;
margin-top: -20%;
  }
  .menu{
    display: block;
    width:80px;
    color:white;
    background:black;

  }
  .media-man{

    height:auto;
    display:block;
  }

.Footer1{
  background-color: #c7dee2;
  width: 80vw;

  margin:0 auto;
  margin-top:47rem;
  bottom:0;
  height: 10vh;
  display: flex;
  color:white;
  align-items: center;
  justify-content: center;
}
.rightsd h{
  width:70vw;
  font-size: 20px;
  padding:0 20px;
  text-align: center;
  background-color: #009cff;
}
.pice{
  width:200%;
  height:30vh;
  margin-top:5%;
  opacity:50%;
}
.Footer2{
  background-color:#c7dee2;
  width: 80vw;

  margin:0 auto;
  margin-top:-70rem;
  bottom:0;
  height: 30vh;
  display: flex;
  color:rgb(90, 99, 96);
  align-items: center;
  justify-content: center;
}
/* .hero{
  background-image: url('./assets/pic15.jpg');
  width: 100vw;
  margin:0 auto;
  margin-top: -19%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom:5px solid rgb(6, 103, 128);

} */
.grid-container1
{
    background-color: darkkhaki;
    grid-template-columns: auto auto;
    gap: 15px;
  }
  .Card{
    margin-left:30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:5%;
  
  
  }


  

  .hero h1{
    background-color:rgb(2, 23, 29);
    color:#666;
    width: 20vw;
    height:60px;
    border-radius: 20px;
    text-align: center;
    max-width:50rem;
    width:30vw;
    height:20vh;
  
  }
  .hero h1:hover{
    background-color:darkkhaki;
    color:#0a0707;
    width: 20vw;
    height:60px;
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
  
  }

}
@media screen and (min-width:568px){
  .Cardi{
    margin-top:20%;
  }
  .Foota{
    background-color: #08051a;
    text-align: center;
    height:20vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    color:#666;
    /* margin-top: 40%; */
  
  }
  .comment-wrapper h2{
    margin-top:29%;
  }
  .Trending h{
    margin-top:10%;
  }
  .contn{

    margin-top: 70%;
}

.media-man{

  height:auto;
  display:block;
}

.textareaa{
  height: 10%;
  background-color: #0a0707;
}











}
.Add-comment{
 
  border-bottom: 3px solid #c7dee2;
  color:rgb(233, 164, 17);
  width:7vw;
  height:7vh;
  border-radius: 10px;

}

.Card{
  margin-left:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

}
.leftsd, .rightsd{
  margin:2rem 2rem;
  height:40vh;
  width:80vw;
  background-color: white;
  /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
}
.leftsd{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  .contn{
    height:45vh;
    width:80vw;
    background-image: url(assets/pic19.jpg);
   
    opacity:90%;
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:3px solid #140909;
    margin-top: 15px;
}

.leftsidee{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  .contn2{
    height:45vh;
    width:80vw;
    background-color:white;
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    margin-top: 20px;
}
.imagee{
  width:20vw;
  height:60vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:10px;


}
.imagee1{
  width:20vw;
  height:20vh;
  border-radius: 10px;
  display:flex;
  flex-direction: column;
  align-items: start;
  gap:10px;


}
.rightsidee
{
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* .Foota{
  background-color: #08051a;
  text-align: center;
  height:20vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color:#666;

} */
.Trending{
  /* animation: fade-in 1s ease-in; */
margin-top: -2%;

/* position: absolute; */
font-size:30px;
display:flex;
justify-content: center;
align-items: center;
}

/* .contn3{
  margin-top:70%;
} */
.leftsiid, .rightsiid{
  margin:2rem 2rem;
  height:40vh;
  width:80vw;
  background-color: white;
  /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
}
.leftsiid{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  .contn3{
    height:45vh;
    width:80vw;
    background-color:white;
    /* background-color: #0a0707; */
    /* color:white; */
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin-top: 65%;
}
.leftsid, .rightsid{
  margin:2rem 2rem;
  height:40vh;
  width:80vw;
  background-color: white;
  /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
}
.leftsid{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;}
  .contn4{
    height:45vh;
    width:80vw;
    background-color:white;
    /* background-color: #0a0707; */
    /* color:white; */
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin-top: 0%;
}



/*singlePage.jsx*/

/* .leftsde{
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;} */
  .contner{
    height:45vh;
    width:80vw;
    background-color:white;
    margin:5rem auto;
    /* box-shadow:0.5rem 5.5rem 2rem -2rem white; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    margin-top: 8%;
    padding:0 10px;
}
.box-1{
  background-color: rgb(28, 11, 11);
  width:40vw;
  height:150%;
  margin-top:20%;
  float:left;
}
.box-1 .pice3{
  width:40vw;
  height:80%;
  margin-top:-6%;

}
.box-2{
  background-color: white;
  width:70vw;
  height:150%;
  margin-top:20%;
  float:right;
}
/* .leftsde, .rightsde{
  margin:2rem 2rem;
  height:40vh;
  width:80vw;
  background-color: white;
  /* box-shadow: 0.5rem 5.5rem 2rem -2rem rgb(2, 23, 29); */
 */
.imagee{
  width:20vw;
  height:40vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:10px;


}
.rightsd h{
  background-color: darkkhaki;
  color:white;
}

.comentbtn{

  float:left;
  padding:6px 14px;
  border:none;
  background:#009cff;
  color:white;
  width:20vw;
  border-radius:2px;

}
.textareaa{
  width:30vw;
  height:6vh;
  background: #eee;
  width:-webkit-fill-available;
  height:102px;
  margin:10px 0;
  padding:10px;
  border:none;
  border-radius:4px;
  box-shadow: 0 0 0 0.5px #0003;
}
.textareaa:focus{
  outline-color:#009cff;

}


/* FOOTER .CSS*/
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container-footer{
  max-width: 1170px;
  background-color:darkkhaki;
  margin:auto;
}
.ulu{
  list-style: none;
}
.row-f{
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
}
.footer{
  background-color: #140909;
  padding:70px 0;

}
.footer-col{
width:25%;
padding: 0 15px;
}

.footer-col h4{
  font-size: 18px;
  color:#fff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight:500;position:relative;
  /* border-bottom:3px solid #e91e63; */
  /* width:90px; */
  border-bottom:3px solid black;

}
.footer-col h4::before{
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  border-bottom:3px solid #e91e63;
  height: 2px;
  box-sizing: border-box;
}
.footer-col ul li:not(:last-child){
  margin-bottom: 10px;
}
.footer-col ul li a{
  font-size: 16px;
  text-transform: capitalize;
  color:#ffffff;
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover{
  color:#ffffff;
  padding:1px;
}
/* .social-links .ulu i{
  display: inline-block;
  flex-direction: row;
  height:10px;
  width:10vw;
  background-color: rgba(255,255,255,0,2);
  margin:0 10px 10px 0;
  text-align: center;
  line-height: 10px;
  /* border-radius:50%; */
  /* color:#0a0707; */
  /* transition: all 0.5s ease; */
/* } */ 
/* .social-links .ulu i:hover{
  background-color: #ffffff;
  width:20px;
  height:20px;
} */

.comment-space{
  background-color: #f2f1f8;
  color:white;
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: start;
  width:40vw;
  height:30vh;
  margin-left:-30%;
  margin-top:68%;
}
.comment-space h6{
  color:#f0efef;
  background-color: #009cff;
  font-size:23px;
  width:40vw;
  height:5vh;
}



/*SinglePage.css */

.comment-box textarea{
  background: #eee;
  width:-webkit-fill-available;
  height:152px;
  margin:10px 0;
  padding:10px;
  border:none;
  border-radius:4px;
  box-shadow: 0 0 0 0.5px #0003;

}
.comment-box textarea:focus{
  outline-color:#009cff;

}
/* .comment-box .comment-submit{
  float:right;
  padding:6px 14px;
  border:none;
  background:#009cff;
  color:white;
 
  border-radius:2px;
} */
.comment-box .comment-submit:hover{
  background:#08051a;
}
icon{
  display: flex;
  align-items: center;
  justify-content: center;
  width:24px;
  height:24px;
  color:#777;
  gap:5px;
}
h2{
  color:#666;
}

.coment-spac .imag{
width:19%;
height:10%;
/* border-radius: 50px; */
display: flex;
flex-direction: row;
gap:10px;

}
.profile{
  border-radius:170px;
  width:50px;
}
.comment-spac{
  display: flex;
flex-direction: row;
justify-content: center;
}

.cmment-wrapper{
  padding: 80px 0;
  background-color: #140909;
}
.comment-wrapper h2{
  margin-top:25%;
  background-color:;
 
 
}
.container-comment{
  width:650px;
  max-width:650px;
  margin:0 auto;
  padding:0 20px;
}
.head-text{
  font-size:40px;
  font-weight:700;
  color:#666;
  margin-bottom:30px;
  text-align: center;
}
.comment-box{
  display:flex;
  align-items: flex-start;
}
.media-man{
  width:70px;
  height:70px;
  border-radius:50px;
  margin-right:20%;
  height:auto;
  display:block;
}
.media-body{
margin-top:20px;
}
.custom-flex{
  display: flex;
  align-items:center;
  justify-content:space-between;
}
.custom-para{
  font-size:16px;
  color:#4d1010;
  background-color: darkkhaki;
  color:white;
  display: flex;
  justify-content: start;
  height:20px;
  width:40%;
  border-left:16px solid black;

}

.custom-para span{
  font-size:10px;
}
.reply-text{
  color:#ffffff;
  text-decoration: none;
  transition: .2s;
}
.blog-details-para{
  font-size:  15px;
  margin-top:20px;
  color:#0a0707;
}
.comments-box{
  display:flex;
  flex-direction: column;
  justify-content: center;
  width:70%;
  background-color:white;
  color:#666;

}

@media (max-width: 550px) {
  textareaa{
    padding: 5px; /* Adjust padding for even smaller screens */
    height:5px;
    background-color: #009cff;
  }
}







