import React from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import {Maps} from '../Components/Maps'
import {Rte} from '../Components/Rte'
import {Charts} from '../Components/Charts'

const Main = () => (
  <div>
    <ul>
      <li><Link to='/maps'>Maps</Link></li>
      <li><Link to='/rte'>Rte</Link></li>
      <li><Link to='/charts'>Charts</Link></li>        
    </ul>   
    <Switch>
      <Route exact path='/maps' component={Maps}/>
      <Route exact path='/rte' component={Rte}/>
      <Route exact path='/charts' component={Charts}/>
    </Switch>
  </div>
)

export default Main
