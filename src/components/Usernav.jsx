import {Link} from 'react-router-dom'
import{useState} from 'react'
import { useNavigate } from 'react-router-dom';


// import Login from '../pages/Login';


export function Usernav(){
  const [menuOpen,setMenuOpen] = useState(false)
  // const [modalOpen,setModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout actions if necessary (clear localStorage, etc.)
    sessionStorage.clear();
    alert('Logged out successfully');
    
    // Navigate to the Login page
    navigate('/Login');
  };

  return(
<>
<div>
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
      <Link to='/'><strong>Home</strong></Link>
    </li>
    <li>
      <Link to='/About'><strong>About</strong></Link>
      </li>
    <li>
      <Link to='/Contact '><strong>Contact</strong></Link>
      </li>
      <li>
            <button className='logoutbtn' onClick={handleLogout}>Logout</button>
          </li>
      
    
  </ul>
  </nav>
</div>
{/* {modalOpen && <Login setOpenModal={setModalOpen} />} */}
</>
  );
}
export default Usernav;