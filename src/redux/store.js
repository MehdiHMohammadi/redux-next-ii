// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice.js";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});

export default store;
