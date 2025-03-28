import "./index";
import { FETCH_REQUEST, FETCH_ERROR, FETCH_SUCCESS } from "./ProductsTypes";

const initialState = {
  load: false,
  products: [],
  error: false,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        load: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        load: false,
        products: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        load: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
