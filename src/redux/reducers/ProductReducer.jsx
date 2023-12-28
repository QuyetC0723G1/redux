import {createSlice} from "@reduxjs/toolkit";
import {add, getAll, getById, removeById, searchProduct, update} from "../services/ProductService.jsx";
const initialState = {
    list :[],
    newProduct : {
        name: "",
        description: "",
        image: "",
        price: 0,
        category: {
            id: 1
        }
    }
}

const productSlice = createSlice({
    name : 'products',
    initialState,
    extraReducers : builder => {
        builder.addCase(getAll.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
        builder.addCase(add.fulfilled, (state,{payload}) => {
            state.list.push(payload);
        })
        builder.addCase(getById.fulfilled, (state,{payload}) => {
            state.newProduct = (payload);
        })
        builder.addCase(removeById.fulfilled, (state,{payload}) => {
            state.list.splice(payload)
        })
        builder.addCase(update.fulfilled, (state,{payload}) => {
            state.list.push(payload)
        })
        builder.addCase(searchProduct.fulfilled,(state,{payload}) => {
            state.list = payload;
        })
    }
})
export default productSlice.reducer;