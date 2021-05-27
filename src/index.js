import React from "react";
import ReactDOM from "react-dom";
import Store from "./store/store";
import App from "./App";
import "./resources/Styles/scss/main.scss";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

const store = Store();

store.subscribe(() => {
  console.log(store.getState());
});
//this will not bbe here just an example
store.dispatch({ type: "INCREMENT", incrementBy: 22 });

store.dispatch({ type: "RESET" });

store.dispatch({ type: "DECREMENT" });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
