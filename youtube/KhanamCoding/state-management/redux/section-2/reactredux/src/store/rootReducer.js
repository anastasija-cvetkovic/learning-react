import { combineReducers } from "redux";
import pizzaReducer from "../features/Pizza/PizzaReducer";
import burgerReducer from "../features/burger/BurgerReducer";
import productsReducer from "../features/products/ProductsReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
  products: productsReducer,
});
export default rootReducer;
