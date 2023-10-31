import {Link} from 'react-router-dom'
import{useState} from 'react'
// import Login from '../pages/Login';


export function Navbar(){
  const [menuOpen,setMenuOpen] = useState(false)
  // const [modalOpen,setModalOpen] = useState(false);
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
      <Link to='/Login'><strong>SignIn</strong></Link>  </li>
      {/* <button
          // className="openModalBtn"
          // onClick={() => {
          //   setModalOpen(true);
          // }}
        >
         Login
         
        </button> */}
    
  </ul>
  </nav>
</div>
{/* {modalOpen && <Login setOpenModal={setModalOpen} />} */}
</>
  );
}
export default Navbar;