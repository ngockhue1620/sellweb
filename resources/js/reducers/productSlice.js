import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../api/productApi';

 


export const getAll=createAsyncThunk('product/getAll',async(params,thunkAPI)=>{
    
    const listProducts=await productApi.getAll();
    
    return listProducts;
})


const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        showProductsByCategoryId: (state, action) => {
            // const newPhoto = action.payload;
            return [
                ...action.payload.product
            ]
          },
        
    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            
            
            return[
                ...action.payload
            ]
        }
    }
  });
  
  const { reducer:productReducer ,actions} = productSlice;
  export const { showProductsByCategoryId } = actions;
  export default productReducer;