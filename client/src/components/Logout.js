import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {

    const NavigateTo = useNavigate();

    const aFunction = () => {
        localStorage.removeItem("TOKEN");
        props.setAuth(null);
        NavigateTo('/login');
    }
    
    useEffect (()=>{
        aFunction();
      },[]);
    
}

export default Logout
