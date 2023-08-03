// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice.js";
import todosReducer from "./todosSlice.js";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    todos: todosReducer,
  },
});

export default store;
