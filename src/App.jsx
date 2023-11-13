import './App.css'
//import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import Singlepage from './pages/Singlepage';
import Dashboard from './components/Dashboard';
import Charts from './components/Charts';
import Logout from './components/Logout';
import Footer from './pages/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  
 return (

    <Router>
      <Routes>
        <sRoute path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Singlepage/:_id' element={<Singlepage />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/Logout' element={<Logout/>} />
        <Route path='/Footer' element={<Footer/>} />
        <Route path='/Charts' element={<Charts/>} />
       

      </Routes>
    </Router>
    
  
  );
}

export default App;
