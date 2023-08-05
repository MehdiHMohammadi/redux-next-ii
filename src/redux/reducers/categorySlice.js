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
  message: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryGetAll: (state, action) => {
      // state.items = { ...state, items: state.items };
      // state.items = state.items;
      state.items = action.payload;
    },
    categoryGetById: (state, action) => {
      state.items = {
        ...state,
        items: state.items.find((q) => q.id == action.payload),
      };
    },
    categoryAdd: (state, action) => {
      // state.items = { ...state, items: state.items.concat([action.payload]) };
      const newItem = action.payload; // اطلاعات آیتم جدید برای اضافه کردن
      state.items.push(newItem);
    },
    categoryRemove: (state, action) => {
      // state.items = {
      //   ...state,
      //   items: state.items.filter((q) => q.id != action.payload),
      // };
      // delete state.entities[action.payload];
      const itemId = action.payload; // شناسه آیتم برای حذف
      state.items = state.items.filter((item) => item.id !== itemId);
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
  categoryAdd,
  categoryRemove,
  categoryUpdate,
} = categorySlice.actions;
export default categorySlice.reducer;
