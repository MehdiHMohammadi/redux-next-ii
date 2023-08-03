import { combineReducers } from "redux";
import categoryReducer from "./categorySlice.js";
import pizzaReducer from "./pizzaSlice.js";
import todosReducer from "./todosSlice.js";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  todos: todosReducer,
  category: categoryReducer,
});

export default rootReducer;
