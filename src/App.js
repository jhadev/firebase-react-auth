import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import PasswordForget from './pages/PasswordForget';
import { withAuthentication } from './components/Session';
import * as ROUTES from './constants/routes';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
      </Fragment>
    </Router>
  );
};

export default withAuthentication(App);
