import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/maps'>Maps</Link></li>
        <li><Link to='/rte'>Rte</Link></li>
        <li><Link to='/charts'>Charts</Link></li>        
      </ul>
    </nav>
  </header>
)

export default Header
