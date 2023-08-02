import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: ["pepperoni"],
  gluten: true,
  counteer: 50,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },
    addTopping: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
    addCounterRedux: (state, action) => {
      state.counteer = [...state.counteer, action.payload];
    },
  },
});

export const { toggleGluten, addTopping, addCounterRedux } = pizzaSlice.actions;
export default pizzaSlice.reducer;
