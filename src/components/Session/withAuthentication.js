import React from 'react';
import { withFirebase } from '../Firebase';
import AuthUserContext from './context';

// higher order component to handle authentication. firebase includes a listener that handles state changes and we can use that to setState ourselves.
const withAuthentication = Component => {
  class IsAuthenticated extends React.Component {
    state = { authUser: null };

    // set up the listener on mount and setState accordingly
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({ authUser });
        } else {
          this.setState({ authUser: null });
        }
      });
    }

    // unsubscribe from listener on unmount
    componentWillUnmount() {
      this.listener();
    }

    // below we pass in the authUser response we get from firebase which will either be the user data or null depending on if they are authed or not, to the context provider. Any component can now access this data as a consumer of the context value.

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(IsAuthenticated);
};

export default withAuthentication;
