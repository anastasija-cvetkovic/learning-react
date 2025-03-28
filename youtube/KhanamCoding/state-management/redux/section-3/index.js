const store = require("./app/store");
const pizzaActions = require("./features/pizza/pizzaSlice").pizzaActions;

console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state:", store.getState());
});
store.dispatch(pizzaActions.pizza_order());
unsubscribe();
