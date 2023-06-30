import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="row">
  <div className="col-sm-3 mb-3 mb-sm-0 ml-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Phone</h5>
        <p className="card-text">Phone will be displayed</p>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Email</h5>
        <p className="card-text">Email will be displayed</p>
      </div>
    </div>
  </div>
  <div className="col-sm-3 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Address</h5>
        <p className="card-text">Address will be displayed</p>
      </div>
    </div>
  </div>

  <div className='container mt-5'>
      <form className='register-form' id='register-form'>
        <h1>Reach us</h1>
        <div className='form-group'>
          <div className='row'>
    <div className="col-sm-3 mb-3 mb-sm-0 ml-3">
      <input type="text" className="form-control" id="name" placeholder="Your name"/>
    </div>
    <div className="col-sm-3">
      <input type="email" className="form-control" id="email" placeholder="Your email"/>
    </div>
    <div className="col-sm-3 mb-3 mb-sm-0">
      <input type="tel" className="form-control" id="phone" placeholder="Your mobile number"/>
    </div>
    <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
      <textarea className='form-control' id='msg' placeholder='Type your message here'/>
    </div>
    <div className="mb-3 mt-3">
    <input className="btn btn-primary" type="submit" value="Send message"/>
    </div>
    </div>
    </div>
    </form>
    </div>
</div>
    </div>
  )
}

export default Contact
