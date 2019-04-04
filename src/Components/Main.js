import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Maps} from './Maps'
import {Rte} from './Rte'
import {Charts} from './Charts'

const Main = () => (
  <Switch>
    <Route exact path='/maps' component={Maps}/>
    <Route exact path='/rte' component={Rte}/>
    <Route exact path='/charts' component={Charts}/>
  </Switch>
)

export default Main
