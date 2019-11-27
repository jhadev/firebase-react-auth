import React from 'react';
import SignInForm from '../components/SignInForm';
import PasswordForgetLink from '../components/PasswordForgetLink';
import SignUpLink from '../components/SignUpLink';

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  );
};

export default SignIn;
