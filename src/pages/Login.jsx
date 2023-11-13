import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './login.css'
 import {Link} from 'react-router-dom'
 import Footer from './Footer'
// import image from '../assets/pic24.jpg'
import {BiSolidUserCircle} from "react-icons/bi"
import {RiLockPasswordFill} from "react-icons/ri"
// export function Login({ setModalOpen}) {
  export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const data = {
      email,
      password,
    };
  
    const handlesignin = async (data) => {
      try {
        const response = await fetch('https://klab-blog-api.onrender.com/Blog/API/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("response", data);
          localStorage.setItem("token", data.token);
          alert("Sign IN successfully");
          console.log("role",data.users.role);

          
  
          if (data.users.role === "admin") {
            navigate("/Dashboard"); // Redirect to the admin dashboard
          } else {
            navigate("/"); // Redirect to the user dashboard
          }
  
          setEmail("");
          setPassword("");
        } else {
          console.log("failed to login");
          alert("failed to login");
  
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        console.log("error", error);
      }
    };
  





















return (
    <>
    <Navbar />
    <div>
      
    </div>

      <div className="main-login">
       <div className='login-contain'>
      
        <div className="left-side">
          <h3>Sign In </h3><br />
            <form className='form1'>
            <label><i><BiSolidUserCircle /></i></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            <input type='email' placeholder='Enter your email...' className='input'value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br />
            <label className='label'><i><RiLockPasswordFill /></i></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input type="Password" placeholder='Enter your password...' className='input' value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br />
            <button type="submit" className='btn' onClick= {(e)=>  {
                e.preventDefault()
                handlesignin(data)
                // navigate('/Dashboard')
            }}
  
  >
            Sign In
            
            </button>
            <span>Do not have an account?</span>
              <Link to="/Signup"><span className='create'>  Create an account</span></Link><br />
              {/* <Link to="/Blog"><span className='create1'> Add blog</span></Link> */}
            

            </form>
        </div>
        </div>
        {/* </div></div> */}
     {/* <div className="right-side">
     <img src={image} className='img-login'/>
      <a href="" className="read-more">Join us</a>
   </div>  */}
        </div>
        
       

      <Footer />
    </>
 
       
     
    );
  }
  
  export default Login;

  
