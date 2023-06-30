import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"; //App.css contains all CSS styles 
import { Route, Routes } from 'react-router-dom';

//rafce
const App = () => {

  const [auth,setAuth] = useState();

  //Whenever the variable in [] will change, app.js will get rendered. Right now, [] means that 
  //this page will render only once
  useEffect (()=>{
    setAuth(localStorage.getItem("TOKEN"));
  },[]);

  return (
    <div>
      <Navbar auth={auth}/>
    {/* Routes is used instead of swicth now */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage/>} />
        <Route path="/logout" element={<Logout setAuth={setAuth}/>} />
    </Routes>
  
      </div>
  )
}

export default App

