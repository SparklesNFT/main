// import * as counter from "./actions";

const INITIAL_STATE = {
  id: "0001",
  account: "x01asdsdsdsdsd2es3ds",
  balance: 1,
  coin: "spark",
};
const counterReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, balance: state.balance + action.incrementBy };
    case "DECREMENT":
      return { ...state, balance: state.balance - 1 };
    case "RESET":
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
export default counterReducer;
