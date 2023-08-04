import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers/index.js";
import todosReducer from "./reducers/todosSlice.js";
import pizzaReducer from "./reducers/pizzaSlice.js";
import categoryReducer from "./reducers/categorySlice.js";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    todos: todosReducer,
    category: categoryReducer,
  },
});

export default store;
