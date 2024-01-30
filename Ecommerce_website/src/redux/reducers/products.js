import ProductTypes from "../actions/types/products";

const initialState = {
  listProducts: [],
};
const listProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductTypes.LIST_PRODUCT:
      return Object.assign({}, state, {
        listProducts: action.payload,
      });

    default:
      return state;
  }
};
export default listProductsReducer;
