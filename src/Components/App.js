import React from 'react'
import { Route, Link} from 'react-router-dom'

import { HomeView,  MapsView, RteView, ChartsView } from './Views'


const Sep = () => <span> | </span>;

const App = () => (
  <div>
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/maps">Maps</Link> <Sep />
      <Link to="/rte">Rte</Link> <Sep />
      <Link to="/charts">Charts</Link>  
      <hr/>
    </div>
    <Route exact path="/" component={HomeView} />
    <Route path="/maps" component={MapsView} />
    <Route path="/rte" component={RteView} />
    <Route path="/charts" component={ChartsView} />      
  </div>
)
export default App;


