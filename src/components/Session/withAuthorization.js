import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import AuthUserContext from './context';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      // use firebase listener to execute when an authed user changes their state from signed in out signed out
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        // if auth fails send the user to the signin page
        if (!condition(authUser)) {
          // with history object of from react router
          this.props.history.push(ROUTES.SIGN_IN);
        }
      });
    }
    // avoid memory leaks
    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        // consume auth user from the context
        // avoid showing protected page before the redirect using a condition to render a component based on it.
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  // compose wraps all higher order components into one
  return compose(withRouter, withFirebase)(WithAuthorization);
};

export default withAuthorization;
