import React from 'react';
import PasswordForgetForm from '../components/PasswordForgetForm';
import PasswordChangeForm from '../components/PasswordChangeForm';
import { withAuthorization, AuthUserContext } from '../components/Session';

const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1 className="my-4 text-center">Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

// condition for authuser check to restrict routes. If user isn't authorized, account page is off limits
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);
