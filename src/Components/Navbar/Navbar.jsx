import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <h2>Logo</h2>
      <nav className='Main-Nav'>
        <a href="#home" id="home">Home</a>
        <a href="#about" id="about">About</a>
        <a href="#contact" id="contact">Contact Us</a>
        <a href="#articles" id="articles">Articles</a>
        <input type="button" id="but_login" value="Login"/>
      </nav>
    </div>

  )
}
export default Navbar