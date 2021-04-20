import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Dashboard from '../pages/dashboard/dashboard';
function Routes() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact> <Home></Home> </Route>
        <Route path="/dashboard" exact> <Dashboard></Dashboard> </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
