import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./resources/Styles/scss/main.scss";

import "./index.scss";
// import "resources/scss/grid.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
