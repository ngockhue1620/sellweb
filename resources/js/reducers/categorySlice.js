import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

 
import categoryApi from '../api/categoryApi';

export const getAll=createAsyncThunk('category/getAll',async(params,thunkAPI)=>{
    const listCategories=await categoryApi.getAll();
    
    return listCategories;
})


const categorySlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        
        
    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            
            
            return[
                ...action.payload
            ]
        }
    }
  });
  
  const { reducer:catergoryReducer } = categorySlice;
  
  export default catergoryReducer;