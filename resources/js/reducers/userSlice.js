import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/userApi";

export const login = createAsyncThunk(
    "user/login",
    async (data, params, thunkAPI) => {
        const {email,password}=data
        if(email==="ngockhuentca2k@gmail.com"&&password==="123")
        return {
            id: 1,
            customerName: "Đào Ngọc Khuê",
            phone: "0123456789",
            email: "ngockhuentca2k@gmail.com",
            password: "123",
            created_at: "2021-04-29T05:35:58.000000Z",
            updated_at: "2021-04-29T05:35:58.000000Z",
            get_in_cart: [
                {
                    id: 1,
                    customer_id: 1,
                    productId: 1,
                    created_at: "2021-04-29T05:35:58.000000Z",
                    updated_at: "2021-04-29T05:35:58.000000Z",
                },
            ],
        };
        return null
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            return action.payload;
        },
    },
});

const { reducer: userReducer, actions } = userSlice;
// export const {

// } = actions;
export default userReducer;
