import { useState } from 'react';
import Navbar from '../components/Navbar'
import './signup.css'
import {Link} from 'react-router-dom'
// import image from '../assets/pic26.jpg'
import {BiSolidUser} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordFill} from "react-icons/ri"
import {FaRegUserCircle} from "react-icons/fa"
import {BsCardImage} from "react-icons/bs"
import Footer from './Footer'
// import {FaCircleUser} from "react-icons/fa"
export function Signup() {


//define variables


const [profile,setProfile ]= useState('');
const [firstName,setFirstname] = useState('');
const [lastName,setLastName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const SignupData = {
  profile,
  firstName,
  lastName ,
  email,
  password,

};

const handlesignup = async (data) => {
  try {
      const response = await fetch('https://klab-blog-api.onrender.com/Blog/API/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
      });

      if (response.ok) {
          const data = await response.json();
          console.log('Response:', data);
          alert("successfully created")
          setProfile('')
          setFirstname('')
          setLastName ('')
          setEmail('')
          setPassword('')

      } else {
        
          alert("Failed")
      }
  } catch (error) {
      console.error('Error:',error);

  }
};























 

  return (
    <>
  <div>
      <Navbar />
      </div>
      <div className="main-login">
      
         
        <div className="login-contain">
        <div className="left-side">
          <h3>Sign Up</h3><br />
            <form className='form1'>
            <label><i><BsCardImage /></i>choose profile</label><br />
                            <input type="file" id="myFile" name="filename"  value={profile} onChange={(e) => setProfile(e.target.value)}></input><br />
            <label><i><BiSolidUser /></i></label><br />
            <input type='Firstname' placeholder='Enter your Firstname' className='input' value={firstName} onChange={(e) => setFirstname(e.target.value)}/><br/>
            <label><i><FaRegUserCircle/></i></label><br/>
            <input type="Lastname" placeholder='Enter your Lastname...' className='input'  value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
            <label><i><AiOutlineMail /></i></label><br/>
            <input type="email" placeholder='Enter your email...' className='input'  value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label><i><RiLockPasswordFill /></i></label><br/>
            <input type="Password" placeholder='Enter your password...' className='input'  value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br />
           

           <button type="submit" className='btn' onClick= {(e)=> {
                e.preventDefault()
                handlesignup(SignupData)
            }}
            >
             Sign Up
            </button>
            <span>If you have an account!!</span>
         <Link to="/Login"><span className='create'>  Login</span></Link>
            </form>
        </div>
       {/* <div className="right-side">
       <img src={image} className='img-login'/>
    
         <a href="" className="read-more">Join us</a>
       </div> */}
        </div>
        {/* <section className='Footer'>@2023 all right reserved</section>  */}
      </div>

      <Footer />
    </> 
     
    );
  }
  export default Signup;

  
