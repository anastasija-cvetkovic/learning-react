import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaBases: 100,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    pizza_order: (state) => {
      state.pizzaBases--;
    },
    customer_choice: (state, action) => {
      //state.pizzaBases=state.pizzaBases-action.payload;
      state.pizzaBases -= action.payload;
    },
  },
});

export default pizzaSlice.reducer;
export const { pizza_order, customer_choice } = pizzaSlice.actions;
