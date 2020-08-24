
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  loading: false,
  list: [],
  page: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return Object.assign({}, state, {
        loading: action.value,
      });

    case "SET_LIST":
      return Object.assign({}, state, {
        loading: false,
        list: action.value,
        page: action.page,

      });

    default:
      return state;
  }
};

export default createStore(reducer, initialState, applyMiddleware(thunk));
