import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //state here is the initial state, and action is action coming up from Dispatch
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

//This is all because CartSlice will be in the format -
// cartSlice = {
//   actions: {
//     addItem,
//     removeItem,
//     clearCart,
//   },
//   reducer: reducers,
// };
