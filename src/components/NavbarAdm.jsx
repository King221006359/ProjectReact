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
  // localStorage.clear();
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
    <Link to='/Charts'><strong>Charts</strong></Link>
    </li>
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