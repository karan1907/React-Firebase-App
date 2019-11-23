import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut/Index";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import AuthUserContext from "../Session/context";

const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (
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
    {authUser.roles.includes(ROLES.ADMIN) && (
      <li>
        <Link to={ROUTES.ADMIN}>ADMIN</Link>
      </li>
    )}
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
