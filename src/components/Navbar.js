import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${props.mode}`}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <h2><Link className="navbar-brand"  to="/">{props.title}</Link></h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          {/* <li> <Link to="/">HOME</Link></li> */}
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className='d-flex'>
        <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode ('primary')}} style={{height:'30px ',width:'30px',cursor:'pointer'}} ></div>
        <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode ('danger')}} style={{height:'30px ',width:'30px',cursor:'pointer'}} ></div>
        <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode ('warning')}} style={{height:'30px ',width:'30px',cursor:'pointer'}} ></div>
        <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode ('success')}} style={{height:'30px ',width:'30px',cursor:'pointer'}} ></div>
        <div className='bg-light rounded mx-2' onClick={()=>{props.toggleMode ('light')}} style={{height:'30px ',width:'30px',cursor:'pointer'}} ></div>
        <div className='bg-dark rounded mx-2' onClick={()=>{props.toggleMode ('dark')}} style={{height:'30px ',width:'30px',cursor:'pointer'}} ></div>
      </div>
      {/* <div className="form-check form-switch">
  <input className="form-check-input" onClick={()=>{props.toggleMode (null)}}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
</div> */}

    </div>
  </div>
</nav>
    
    {/* <nav className={`${props.mode}`}>
      <ul>
        <h2> <Link to="/">{props.title}</Link></h2>
        <li> <Link to="/">HOME</Link></li>
        <li> <Link to="/about">AboutIn</Link></li>
        <li>OUR SERVICES</li>
        <li>{props.abouText}</li>
        <li>CONTACT</li>
        <div className="form-check form-switch">
  <input className="form-check-input" onClick={props
  .toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
      </ul>
      
    </nav> */}
    </>
  ) 
}


Navbar.propTypes = {
  title:PropTypes.string.isRequired, 
  abouText:PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title:'set title here', 
  abouText:'About text here'
}


