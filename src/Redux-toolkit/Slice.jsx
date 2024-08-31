


import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.push({
                    id: action.payload.id,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity: 1,
                    title: action.payload.title,
                });
            }
        },

        quantityAdd(state,action){
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = action.payload.quantity;
            } else {
                // state.push({
                //     id: action.payload.id,
                //     image: action.payload.image,
                //     price: action.payload.price,
                //     quantity: 1,
                //     title: action.payload.title,
                // });
            }
        },

        quantityDelete(state,action){
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = action.payload.quantity;
            } else {
                // state.push({
                //     id: action.payload.id,
                //     image: action.payload.image,
                //     price: action.payload.price,
                //     quantity: 1,
                //     title: action.payload.title,
                // });
            }
        },


        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        increase(state, action) {
            const item = state.find(val => val.id === action.payload.id);
            if (item) {
                item.quantity++;
            }
        },
        decrease(state, action) {
            const item = state.find(val => val.id === action.payload.id);
            if (item) {
                item.quantity--;
            }
        }
    }
});

export const { add, remove, increase, decrease,quantityAdd,quantityDelete } = cartSlice.actions;
export default cartSlice.reducer;
