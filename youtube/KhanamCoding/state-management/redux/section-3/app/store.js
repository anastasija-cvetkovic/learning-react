const configureStore = require("@reduxjs/toolkit").configureStore;
const pizzaReducer = require("../features/pizza/pizzaSlice");
const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    // burger: burgerReducer,
  },
});
module.exports = store;
