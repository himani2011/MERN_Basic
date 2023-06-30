import React from 'react';
import profilepic from '../images/manhattan.png';

const About = () => {
  return (
    <div> 
    {/* or <> </> */}
      <div className='col-md-4'>
        {/* {} for javascript variable */}
        <img src={profilepic} alt='profile'></img>
      </div>
      <div className="mb-3">
      <label htmlFor="uid" className="form-label">User ID</label>
      <input type="text" className="form-control" id="uid"/>
    </div>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name"/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="text" className="form-control" id="email"/>
    </div>
    <div className="mb-3">
      <label htmlFor="pno" className="form-label">Phone number</label>
      <input type="text" className="form-control" id="pno"/>
    </div>
    <div className="mb-3">
      <label htmlFor="profession" className="form-label">profession</label>
      <input type="text" className="form-control" id="profession"/>
    </div>
    <div className="mb-3">
    <input className="btn btn-primary" type="submit" value="Update profile"/>
    </div>
    </div>
  )
}

export default About
