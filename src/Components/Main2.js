import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Line} from './Line'
import {Bar} from './Bar'
import {Pie} from './Pie'

const Main2 = () => (
  <Switch>
    <Route exact path='/charts/line' component={Line}/>
    <Route exact path='/charts/bar' component={Bar}/>
    <Route exact path='/charts/pie' component={Pie}/>
  </Switch>
)

export default Main2
