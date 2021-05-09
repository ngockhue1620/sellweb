import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    cartProducts: cartReducer,
    user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});
// store.subscribe(() => {
//     console.log(store.getState())
// })

export const persistor = persistStore(store);

export default store;
