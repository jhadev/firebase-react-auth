import React from 'react';
import SignUpLink from '../components/SignUpLink';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Landing = props => {
  return (
    <div>
      <h1>This is the homepage</h1>
      <SignUpLink />
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>
  );
};

export default Landing;
