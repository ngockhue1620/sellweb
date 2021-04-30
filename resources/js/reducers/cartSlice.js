import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartListProduct",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            let idx = state.findIndex((item) => {
                return item.product.id == action.payload.id;
            });
            if (idx >= 0) {
                state[idx].quantity++;
            } else {
                state.push({
                    product: action.payload,
                    quantity: 1,
                });
            }
        },

        removeProduct: (state, action) => {
            const removeId = action.payload;
            return state.filter((item) => item.product.id !== removeId);
        },
        setQuantity: (state, action) => {
            const { payload } = action;
            const { id, quantity } = payload;
            const quantityNumber = parseInt(quantity);
            if (quantityNumber < 1) {
                return state;
            }
            let setQuantityId = state.findIndex((item) => {
                return item.product.id === id;
            });
            state[setQuantityId].quantity = quantityNumber;
        },
        removeAll: (state,action) => {
            
            
            return [];
        },
    },
});

const { reducer: cartReducer, actions } = cartSlice;
export const {
    addProduct,
    addQuatity,
    subQuatity,
    removeProduct,
    setQuantity,
    removeAll,
} = actions;
export default cartReducer;
