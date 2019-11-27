import React, { useContext } from 'react';
import { withAuthorization, AuthUserContext } from '../components/Session';

const Home = () => {
  const user = useContext(AuthUserContext);
  return (
    <div className="container">
      <h1 className="text-center my-4">Home</h1>
      <h2>welcome, {user.email}</h2>
    </div>
  );
};

//condition for authuser check to restrict routes. If user isn't authorized, home is off limits
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
