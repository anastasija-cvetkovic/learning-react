import { ORDER_PIZZA } from "./PizzaTypes";

const initialState = {
  pizzaBases: 100,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBases: state.pizzaBases - 1,
      };
    default:
      return state;
  }
};
export default pizzaReducer;
