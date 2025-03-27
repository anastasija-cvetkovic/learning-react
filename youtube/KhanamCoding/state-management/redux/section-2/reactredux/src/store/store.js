import { createStore } from "redux";
import pizzaReducer from "../features/Pizza/PizzaReducer";

const store = createStore(pizzaReducer);
export default store;
