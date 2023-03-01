import { dispatch, getState } from "../store";
import { ADD_TO_CART, CHECKOUT } from "../actionTypes";

export const addToCart = (productId) => {
  if (
    getState().products.find((product) => product.id === productId).inventory >
    0
  ) {
    dispatch({ type: ADD_TO_CART, payload: productId });
  }
};


export const checkout = () => {
  dispatch({ type: CHECKOUT });
};
