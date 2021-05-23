import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/home';
import Dashboard from '../pages/dashboardPages/dashboard/dashboard';
import Signup from '../pages/signup/signup';
import Login from '../pages/login/login';
import Analytics from '../pages/dashboardPages/analytics/analytics';
import Customers from '../pages/dashboardPages/customers/customers';
import Accounts from '../pages/dashboardPages/accounts/accounts';
import { connect } from 'react-redux';

function Routes(props) {
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <Router>
      {token ?
        <Switch> 
          {/* private Routes */}
          <Route path="/dashboard" exact> <Dashboard></Dashboard>  </Route>
          <Route path="/dashboard/Analytics" exact> <Analytics></Analytics> </Route>
          <Route path="/dashboard/Customers" exact> <Customers></Customers> </Route>
          <Route path="/dashboard/Accounts" exact> <Accounts></Accounts> </Route>
          <Route render={() => <Redirect to="/dashboard" />} />
        </Switch>
        :
        <Switch>
          {/* public Routes */}
          <Route path="/" exact> <Home></Home> </Route>
          <Route path="/signup" exact> <Signup></Signup> </Route>
          <Route path="/login" exact> <Login></Login> </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>}
    </Router>
  );
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Routes);
