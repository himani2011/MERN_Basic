import React, { useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const navigateTo = useNavigate();

  const [user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
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
    const {name,email,phone,work,password,cpassword} = user;

    const res= await fetch("/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      //because server doesn't understand json, it has to be string
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });

    //parses the text as json, which was string earlier as we just saw
    const data=await res.json();
    console.log("Data:", data);

    if(data.status === 422 || !data){
      window.alert("Invalid registraion!!");
      console.log("Invalud registration!!");
    }else{
      window.alert("valid registraion!!");
      console.log("valud registration!!");
      localStorage.setItem("TOKEN",data.token);
      props.setAuth(data.token);

      navigateTo("/");
    }
  }

  return (
    <div className='container mt-2'>
      <form method='POST' className='register-form' id='register-form'>
        <div className='form-group'>

    <div className="mb-3">
      <label htmlFor="name" className="form-label"><i className="zmdi zmdi-account"></i></label>
      {/* this i is from material design iconic font website */}
      <input type="text" className="form-control" id="name" placeholder="Your name" name='name' value={user.name} onChange={handleInputs}/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="email" className="form-label"><i className="zmdi zmdi-email"></i></label>
      <input type="email" className="form-control" id="email" placeholder="Your email" name='email' value={user.email} onChange={handleInputs}/>
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">Mobile number</label>
      <input type="tel" className="form-control" id="phone" placeholder="Your mobile number" name='phone' value={user.phone} onChange={handleInputs}/>
    </div>
    <div className="mb-3">
      <label htmlFor="work" className="form-label">Profession</label>
      <input type="text" className="form-control" id="work" placeholder="Your profession" name='work' value={user.work} onChange={handleInputs}/>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Your password" name='password' value={user.password} onChange={handleInputs}/>
    </div>
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
      <input type="password" className="form-control" id="cpassword" placeholder="Confirm password" name='cpassword' value={user.cpassword} onChange={handleInputs}/>
    </div>
    <div className="mb-3">
    <input className="btn btn-primary" type="submit" value="Register" onClick={PostData}/>
    </div>
    <NavLink to='/login'>I am already registered!!</NavLink>
    </div>
    </form>
    </div>
  )
}

export default Signup


//Vihar
// const PostData = async (e)=> {
//   const {name,email,phone,work,password,cpassword} = user;

//   try{
//     const res= await fetch('/signup',{
//       //mode: 'cors',
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json",
//       },
//       body:JSON.stringify({
//         name,email,phone,work,password,cpassword
//       })
      
//     }); //passes the request to server

//     const data= await res.json(); // awaits the response from server

//     if(res.status===201){
//       alert("Signup success");
//     }
//     else{
//       alert("Not success");
//     }

//   }catch(err){
//     console.log(err);
//   }
// }
