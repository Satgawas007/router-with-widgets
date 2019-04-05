import React from 'react'
import { Link } from 'react-router-dom'

const Header2 = () => (
  <ul>
    <li><Link to='/charts/line'>Line</Link></li>
    <li><Link to='/charts/bar'>Bar</Link></li>
    <li><Link to='/charts/pie'>Pie</Link></li>
  </ul>
)

export default Header2
