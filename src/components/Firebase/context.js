import React, { createContext } from 'react';

// we are using the context api to be able to pass down our firebase methods anywhere in our app without passing down props

// createContext is built into react and we are creating a variable to hold it that is called FirebaseContext
const FirebaseContext = createContext(null);

// this is a react pattern called a Higher Order Component. Read about it in the React documentation. Basically is allows us to wrap one component with another and take that functionality with it.
// HOCs are usually named like 'withFirebase' or 'withRouter' compared to hooks being written like 'useState' or 'useEffect'

export const withFirebase = Component => props => (
  // context api creates a provider and consumer. self explanatory. the provider provies the data we need, the consumer recieves it.
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default Firebase;
