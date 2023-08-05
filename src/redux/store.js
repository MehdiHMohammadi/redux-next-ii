import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import pizzaReducer from "./reducers/pizzaSlice.js";
import todosReducer from "./reducers/todosSlice.js";
import categoryReducer from "./reducers/categorySlice.js";

const a = 12;
const rootReducer = combineReducers({
  pizza: pizzaReducer,
  todos: todosReducer,
  category: categoryReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
