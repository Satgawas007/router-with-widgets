import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import {Maps} from './Maps'
import {Rte} from './Rte'
import { Line } from './Line';
import { Bar } from './Bar';
import { Pie } from './Pie';

export const HomeView = () => <div>Home</div>;

export const MapsView = () => {
  
  return (
    <div>
         <Route exact path="/maps" component={Maps}/>
    </div>
  )
}

export const RteView = () => {  
  return (
    <div>
       <Route exact path="/rte" component={Rte}/>
    </div>
  )
}

const Sep = () => <span> | </span>;

export const ChartsView = () => {
  return (
    <div>      
      <Link to="/charts/line">Line </Link>  <Sep />
      <Link to="/charts/bar">Bar </Link>  <Sep />
      <Link to="/charts/pie">Pie </Link>  <Sep />
      <Switch>
        <Route exact path="/charts/line" component={Line}/>
        <Route exact path="/charts/bar" component={Bar}/>
        <Route exact path="/charts/pie" component={Pie}/>
      </Switch>      
    </div>
  )
};
