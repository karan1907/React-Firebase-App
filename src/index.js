import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App/Index";
import Firebase, { FirebaseContext } from "./components/Firebase/Index";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
