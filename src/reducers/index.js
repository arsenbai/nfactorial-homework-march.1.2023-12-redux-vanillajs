import products from "../api/products.json";

const initialState = { products };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: state.products.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              inventory: item.inventory - 1,
              inCart: item.inCart + 1
            }
          } else return item;
      }) };
    case "CHECKOUT":
      return {
        ...state,
        products: state.products.map(item => {
          return {
            ...item,
            inCart: 0
          }
        })
      }
    default:
      return state;
  }
};
