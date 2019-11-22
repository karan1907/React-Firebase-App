import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut/Index";
import * as ROUTES from "../../constants/routes";
import AuthUserContext from "../Session/context";

const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>LANDING</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>HOME</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>ACCOUNT</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
