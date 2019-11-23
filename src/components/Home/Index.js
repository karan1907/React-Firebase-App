import React from "react";
import withAuthorization from "../Session/withAuthorization";

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <p>The Homepage is accessible by every signed in user.</p>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
