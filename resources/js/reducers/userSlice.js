import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/userApi";

export const login = createAsyncThunk(
    "user/login",
    async (data, params, thunkAPI) => {
        const user = await userApi.login(data);
        if (user.length > 0) {
            console.log("user", user);
            return user[0];
        }
        return null;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            // const newPhoto = action.payload;
            return action.payload;
        },
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            return action.payload;
        },
    },
});

const { reducer: userReducer, actions } = userSlice;
export const { setUser } = actions;
export default userReducer;
