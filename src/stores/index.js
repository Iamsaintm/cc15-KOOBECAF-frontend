import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";
import categorySlice from "./slices/categorySlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice,
        category: categorySlice,
        chat: chatSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
