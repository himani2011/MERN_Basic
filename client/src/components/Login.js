import React, { useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = (props) => {

  
  const navigateTo = useNavigate();

  const [user,setUser] = useState({
    email:"",
    password:""
  });

  let name,value;
  //let, because it will get changed all the time
  const handleInputs = (e) =>{
    name=e.target.name;
    value=e.target.value;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) =>{
    e.preventDefault();
    const {email,password} = user;

    const res= await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      //because server doesn't understand json, it has to be string
      body: JSON.stringify({
        email,password
      })
    });

    //parses the text as json, which was string earlier as we just saw
    const data=await res.json();
    console.log("Data:", data);

    if(data.status === 422 || !data){
      window.alert("Invalid login!!");
      console.log("Invalud login!!");
    }else{
      window.alert("valid login!!");
      console.log("valud login!!");
      localStorage.setItem("TOKEN",data.token);
      props.setAuth(data.token);

      navigateTo("/");
    }
  }
  return (
    <div className='container mt-2'>
      <form className='register-form' id='register-form' method='POST'>
        <div className='form-group'>
    <div className="mb-3">
      <label htmlFor="email" className="form-label"><i className="zmdi zmdi-email"></i></label>
      <input type="email" className="form-control" id="email" name="email" placeholder="Your email" value={user.email} onChange={handleInputs}/>
    </div>
    <div className="mb-3">
      <label htmlFor="pwd" className="form-label">Password</label>
      <input type="password" className="form-control" id="pwd" name="password" placeholder="Your password" value={user.password} onChange={handleInputs}/>
    </div>
    <div className="mb-3">
    <input className="btn btn-primary" type="submit" value="Login" onClick={PostData}/>
    </div>
    <NavLink to='/signup'>Need to signup!!</NavLink>
    </div>
    </form>
    </div>
  )
}

export default Login
