import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/home';
import Dashboard from '../pages/dashboardPages/dashboard/dashboard';
import Signup from '../pages/signup/signup';
import Login from '../pages/login/login';
import Analytics from '../pages/dashboardPages/analytics/analytics';
import Customers from '../pages/dashboardPages/customers/customers'
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact> <Home></Home> </Route>
        <Route path="/signup" exact> <Signup></Signup> </Route>
        <Route path="/login" exact> <Login></Login> </Route>
        <Route path="/dashboard" exact> <Dashboard></Dashboard>  </Route>
        <Route path="/dashboard/Analytics" exact> <Analytics></Analytics> </Route>
        <Route path="/dashboard/Customers" exact> <Customers></Customers> </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}

export default Routes;
