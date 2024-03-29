import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ChartCancellationReason from './components/ChartCancellationReason'


import Dashboard from './components/Dashboard';
import FrontDash from './components/FrontDash';

import './custom.css'

class App extends Component{
  

render() {
  return (
    /*<div className="ui container">*/
    <div className="">
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" exact component={FrontDash} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/try" exact component={ChartCancellationReason} />            
            <Route path="/front" exact component={FrontDash} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
