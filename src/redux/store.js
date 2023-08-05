import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import RootReducer from "./reducers";

const rootReducer = RootReducer;
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
