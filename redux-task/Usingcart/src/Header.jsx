import React from 'react'
import AddToCart from './AddToCart'
import { Link } from 'react-router'

function Header() {
  return (
    <>
    <nav className="navbar">
    <div className="logo">MySite</div>

    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">☰</label>

    <ul className="nav-links">
      <li><Link to='/'>Home</Link></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <Link to='/cart' ><AddToCart /></Link>
  </nav>

    </>
  )
}

export default Header