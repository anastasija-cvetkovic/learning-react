const { pizzaActions } = require("../pizza/pizzaSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  burgerBuns: 100,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    burger_order: (state) => {
      state.burgerBuns--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pizzaActions.pizza_order, (state) => {
      state.burgerBuns--;
    });
  },
});
//reducers up here is a collection of reducers that gets combined and is down here just one - reducer
module.exports = burgerSlice.reducer;
module.exports.burgerActions = burgerSlice.actions;
