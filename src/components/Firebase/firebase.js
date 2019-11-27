import app from 'firebase/app';
import 'firebase/auth';

// this will be an object that will pass down any firebase method you declare anywhere in your app.

// create env file in the root of the project and use the data you recieve from them in the config file to create these keys
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // built in firebase methods from auth modules
  doCreateUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOutUser = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
