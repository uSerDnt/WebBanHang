import ProductTypes from "./types/products";

const ListProduct = (payload) => {
  return {
    type: ProductTypes.LIST_PRODUCT,
    payload: payload,
  };
};

export default {
  ListProduct,
};
