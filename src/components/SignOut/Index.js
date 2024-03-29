import React from "react";
import { withFirebase } from "../Firebase/context";
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    SignOut
  </button>
);

export default withFirebase(SignOutButton);
