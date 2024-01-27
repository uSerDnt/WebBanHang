import { thunk } from "redux-thunk";
import reducers from "../reducers/index";
import { createStore, applyMiddleware, compose } from "redux";

const middlewares = [thunk];
let store = createStore(reducers, compose(applyMiddleware(...middlewares)));

export default store;
