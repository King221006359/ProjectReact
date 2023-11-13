import { useNavigate } from 'react';

// import { useState } from 'react';

const Logout = () => {
  const navigate = useNavigate();
  // const [handleLogout, setHandleLogout] = useState(false);

  // Declare the handleLogout function outside of the if statement.
  const handle = async () => {
    // Remove the user's login information from local storage.
   
    localStorage.clear();

    // localStorage.removeItem('user');

    // Navigate the user to the login page.
    navigate('/Login');
  };

  // if (localStorage.getItem('data.token')) {
  //   setHandleLogout("true");
  // }

  // The Logout button should call the handleLogout function, not the Login function.
  return (
    <button onClick={handle } >Logout</button>
  );
};

export default Logout;