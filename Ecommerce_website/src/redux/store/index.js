import { thunk } from "redux-thunk";
import reducers from "../reducers/index";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [applyMiddleware(thunk)];
let store;

store = createStore(reducers, composeWithDevTools(...middlewares));

export default store;
