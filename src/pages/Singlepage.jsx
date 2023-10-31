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


