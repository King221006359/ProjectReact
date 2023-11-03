import Navbar from '../components/navbar'
// import './comment.css'
import '../App.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import pic25 from '../assets/pic26.jpg'
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
  }, []);

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

            <img src={post.postImage} className='pice3' />
          </div><br />
          <div className="box-2">

            <h4><strong>{post.postTitle}</strong></h4><br></br>
            <p>{post.postContent}</p>
            <p></p><br></br>
          </div>

        </div>


        <div className='comment-wrapper'>

      
          {/* <h2 className='head-text'>Recent comments</h2> */}

          {/* <div className="container"> */}
          <div className="container">
            {/* <h2 className='head-text'>Recent comments</h2> */}
            <div className="comments-box">
            <h4>Recent comments</h4><br />
              {
                commentSingle &&
                commentSingle.map((commentSingles, index) => (

                  <section id='comment-flex' key={index} className='comment-section'>
                    <img src={commentSingles.postCommentor.profile} className='media-man' /><br /><br />
                    <h5 className='custom-para'>{commentSingles.postCommentor.firstName}</h5>
                
                  

                  <strong> <p className='blog-details-para'>{commentSingles.userComment}</p></strong> <br />
                  </section>
                ))

              }

            </div>
            
          </div>
          <div className='comment-form'>
            <form>

              <h2>Leave a reply</h2>

              <label>
                <input type='Content' className='textareaa' placeholder="Leave a comment" value={userComment} onChange={(e) => setUserComment(e.target.value)} /><br />
              </label>
              <button className='comentbtn' type='submit' onClick={addComment}>Post</button>
            </form>
          </div>
        </div>


      </div>
      <div className="foter">
        <Footer />
      </div>





    </>

  );
}

export default Singlepage;


