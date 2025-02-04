import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  selectedItems: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState: initial_state,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = action.payload;
    },
    cartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    quantityHandler: (state, action) => {
      state.cartItems = state.cartItems.map((val) => {
        if (val.id == action.payload.id) {
          if (action.payload.type == "increment") {
            return {
              ...val,
              quantity: val.quantity + action.payload.quantity,
            };
          } else if (action.payload.type == "decrement") {
            return {
              ...val,
              quantity: val.quantity - action.payload.quantity,
            };
          }
        } else {
          return val;
        }
      });
    },
    removefromCart: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      state.cartCount = state.cartCount - 1;
    },
    totalCart: (state, action) => {
      state.totalPrice = action.payload;
    },
    selectedItems: (state, action) => {
      state.selectedItems = action.payload;
    },
  },
});

export const {
  addToCart,
  cartCount,
  totalCart,
  quantityHandler,
  removefromCart,
  selectedItems,
} = cartReducer.actions;
export default cartReducer.reducer;
