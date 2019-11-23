import React from "react";

import { PasswordForgetForm } from "../PasswordForget/Index";
import PasswordChangeForm from "../PasswordChange/Index";
import withAuthorization from "../Session/withAuthorization";
import AuthUserContext from "../Session/context";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
