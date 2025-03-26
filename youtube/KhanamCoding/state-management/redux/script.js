//we can access it like this because redux package is already installed
const redux = require("redux");
const createStore = redux.createStore;

const ORDER_PIZZA = "ORDER_PIZZA";
//Action
// const action = {
//   //the string could be directly assigned to the type, but this is a convention that developers follow
//   type: ORDER_PIZZA,
//   shop_name: "Pizza Shop",
// };

//Action Creator
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza shop",
  };
}

//Reducer
const initialState = {
  pizzaBase: 100,
  toppings: ["cheese", "pepperoni"],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};

//STORE
//1- Store needs to hold application state
const store = createStore(reducer);
//2- It exposes a method called getState which gives your application access to the current state in the store.
console.log("Initial State", store.getState());
//3- Registers listeners via subscribe(listener)
store.subscribe(() => console.log("Updated State", store.getState()));
//4- Allows state to be updated via dispatch(action)
store.dispatch(orderPizza());
