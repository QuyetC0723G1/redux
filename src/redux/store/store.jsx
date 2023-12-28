import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductReducer.jsx";
import categoryReducer from "../reducers/CategoryReducer.jsx";

export const store = configureStore({
    reducer: {
        products : productReducer,
        categories :categoryReducer
        }

})