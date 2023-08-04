import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, plan: "Start", speed: "5 Mb/s", storage: "15 GB", price: "free" },
    { id: 2, plan: "Pro", speed: "25 Mb/s", storage: "25 GB", price: "$24" },
    { id: 3, plan: "Bus", speed: "36 Mb/s", storage: "40 GB", price: "$50" },
    { id: 4, plan: "Exc", speed: "48 Mb/s", storage: "99 GB", price: "$72" },
    { id: 5, plan: "Vas", speed: "62 Mb/s", storage: "95 GB", price: "$86" },
  ],
  isLoading: true,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryGetAll: (state) => {
      state.items = { ...state, items: state.items };
      // state.items = state.items;
    },
    categoryGetById: (state, action) => {
      state.items = {
        ...state,
        items: state.items.find((q) => q.id == action.payload),
      };
    },
    categoryAdd: (state, action) => {
      state.items = { ...state, items: state.items.concat([action.payload]) };
    },
    categoryRemove: (state, action) => {
      state.items = {
        ...state,
        items: state.items.filter((q) => q.id != action.payload),
      };
    },
    categoryUpdate: (state, action) => {
      state.items = {
        ...state,
        items: state.items.findIndex((q) => q.id != action.payload),
      };
    },
  },
});

export const {
  categoryGetAll,
  categoryGetById,
  addcategoryAddStorge,
  categoryRemove,
  categoryUpdate,
} = categorySlice.actions;
export default categorySlice.reducer;
