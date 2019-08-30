import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ChartFront from './components/ChartFront'
import ChartFrontDesk from './components/ChartFrontDesk'
import ChartCancelation from './components/ChartCancelation'
import ex from './components/ex'
import ChartRoomMissused from './components/ChartRoomMissused'


import Dashboard from './components/Dashboard';


import './custom.css'

class App extends Component{
  

render() {
  return (
    <div className="ui container">      
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" exact component={ChartFront} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/try" exact component={ChartRoomMissused} />
            <Route path="/ex" exact component={ex} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
