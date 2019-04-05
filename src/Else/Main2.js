import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {Line} from '../Components/Line'
import {Bar} from '../Components/Bar'
import {Pie} from '../Components/Pie'

const Main2 = () => (
  <div>
    <ul>
      <li><Link to='/charts/line'>Line</Link></li>
      <li><Link to='/charts/bar'>Bar</Link></li>
      <li><Link to='/charts/pie'>Pie</Link></li>
    </ul>
    <Switch>
      <Route exact path='/charts/line' component={Line}/>
      <Route exact path='/charts/bar' component={Bar}/>
      <Route exact path='/charts/pie' component={Pie}/>
    </Switch>
  </div>
)

export default Main2
