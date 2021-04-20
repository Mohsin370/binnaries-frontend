import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Dashboard from '../pages/dashboard/dashboard';
import Navbar from '../components/navbar'
function Routes() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact> <Home></Home> </Route>
        <Route path="/dashboard" exact> <Dashboard></Dashboard> </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
