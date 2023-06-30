import React from 'react';
import { NavLink  } from 'react-router-dom';
import logo from '../images/NY.png';

const Navbar = (props) => {
  return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink  className="navbar-brand" to="#">
                <img src={logo} alt='logoHere'></img>
            </NavLink >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                {
                    props.auth && 
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                    </li>
                }

                {
                    !props.auth ? 
                    <div>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/signup">Registration</NavLink>
                    </li>
                    </div>
                     : 
                    
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
                    </li>
                    
                }         

                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                </li>
            
            </ul>
        
            </div>
        </div>
        </nav>
  )
}

export default Navbar
