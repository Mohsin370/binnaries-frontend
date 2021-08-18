import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/home';
import Signup from '../pages/signup/signup';
import Login from '../pages/login/login';
import Profile from '../pages/profile/profile';
import Dashboard from '../pages/dashboardPages/dashboard/dashboard';
import Analytics from '../pages/dashboardPages/analytics/analytics';
import Customers from '../pages/dashboardPages/customers/customers';
import Accounts from '../pages/dashboardPages/accounts/accounts';
import { connect } from 'react-redux';
import { GetProfileDetails } from '../api/api';
import { updateUserDetails } from '../redux/actions/actions';

function Routes(props) {


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      GetProfileDetails({ token: userData.token, uuid: userData.uuid }).then(
        (res) => {
          props.updateUserDetails(res.data)
        }
      );
    }

  }, [])

  return (
    <Router>
      {props.AuthReducer.isLoggedIn ?
        <Switch>
          {/* private Routes */}
          <Route path="/dashboard" exact> <Dashboard></Dashboard>  </Route>
          <Route path="/profile" exact> <Profile></Profile>  </Route>
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


export default connect(mapStateToProps, updateUserDetails)(Routes);
