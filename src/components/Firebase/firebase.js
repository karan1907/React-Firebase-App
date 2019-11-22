import app from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCiw1izaDFx5DLTB0JuoS-yB71nAKzVGNU",
  authDomain: "react-firebase-30b53.firebaseapp.com",
  databaseURL: "https://react-firebase-30b53.firebaseio.com",
  projectId: "react-firebase-30b53",
  storageBucket: "react-firebase-30b53.appspot.com",
  messagingSenderId: "56321414463",
  appId: "1:56321414463:web:338ff29dcd91bb1b1f2f8a",
  measurementId: "G-9N3JFR049K"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  // ***** AUTH API *****

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
