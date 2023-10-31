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

      const formData = new FormData();
      formData.append("postImage",postImage);
      formData.append("postTitle",postTitle);
      formData.append("postContent",postContent);

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        alert('You are not authenticated. Please log in.');
        return;
      }


      const response = await fetch('https://klab-blog-api.onrender.com/Blog/API/post/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData
      });

      if (response.ok) {
        alert('Blog is Posted');
        navigate('/Dashboard');
        // setPostImage('');
        // setPostTitle('');
        // setPostContent('');
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
              onChange={(e) => setPostImage(e.target.files[0])} />
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