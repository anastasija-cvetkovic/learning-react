import { combineReducers } from "redux";
import pizzaReducer from "../features/Pizza/PizzaReducer";
import burgerReducer from "../features/burger/BurgerReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
});
export default rootReducer;
