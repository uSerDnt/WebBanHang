import { combineReducers } from "redux";
import authReducer from "./auth";
import listProductsReducer from "./products";

export default combineReducers({
  auth: authReducer,
  listProducts: listProductsReducer,
});
