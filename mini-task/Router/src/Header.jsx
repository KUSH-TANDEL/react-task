import React from 'react'
import img from './Img.js' ;
import { Link } from 'react-router';


function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 " id="nav">
  <div className="container-fluid">
    <a className="navbar-brand"><img src={img.Hextilion} className="img-fluid w-auto px-5"/> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end px-5" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link text-black fw-bolder active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link text-black  px-lg-5" to="/about">About us</Link>
        <a className="nav-link  text-light " href="Contact.html"><span className="bggreen px-3 py-2 rounded-5 ">Contact Us<img src={img.vector} className="ms-2 pb-1"/> </span> </a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header