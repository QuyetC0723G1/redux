import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories} from "../services/CategoryService.jsx";

const initialState = {
    listCategories : [{
        id: '',
        name : ''
    }]
}

const categorySlice = createSlice({
    name : 'categories',
    initialState,
    extraReducers : builder =>  {
        builder.addCase(getAllCategories.fulfilled, (state,action) => {
            state.listCategories = action.payload;
        })
    }

})
export default categorySlice.reducer;