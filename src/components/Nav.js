import { useState } from 'react'
import logo from '../images/Logo .svg'
import { Link } from 'react-router-dom'

function Nav() {
  const [menuOpen, setMenuOpen]=useState(false)

  const toggleMenu= ()=>{
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`navbar ${menuOpen ? "open": ""}`}>
      <a href='/' className='logo'>
        <img src={logo} alt="little lemon logo"/>
      </a>

      <div className='menu-icon' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "visible":""}`}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/'>Services</Link>
        </li>
        <li>
          <Link to='/'>Menu</Link>
        </li>
        <li>
          <Link to='/booking'>Reservation</Link>
        </li>
        <li>
          <Link to='/'>Order Online</Link>
        </li>
        <li>
          <Link to='/'>login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav