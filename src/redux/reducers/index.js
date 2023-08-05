import { combineReducers } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice.js";
import todosReducer from "./todosSlice.js";
import categoryReducer from "./categorySlice.js";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  todos: todosReducer,
  category: categoryReducer,
});

export default rootReducer;
