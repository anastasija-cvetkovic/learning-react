const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  pizzaBases: 1000,
};

const pizzaSlice = createSlice({
  name: "pizza",
  // initialState:initialState,
  initialState,
  reducers: {
    pizza_order: (state) => {
      state.pizzaBases--;
    },
  },
});

module.exports = pizzaSlice.reducer; //default export of reducer
module.exports.pizzaActions = pizzaSlice.actions; //name export of action creators
