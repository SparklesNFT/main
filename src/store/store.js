import { createStore, combineReducers } from "redux";
//import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import Users from "../services/users/reducer";
import Counter from "../services/counterExample/reducer";

const reducerList = {
  Users,
  Counter,
};
export default () => {
  const store = createStore(combineReducers(reducerList));
  return store;
};
