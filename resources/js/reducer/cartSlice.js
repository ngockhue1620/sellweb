import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




const initialState=[
    {
        product:{
            "id": 1,
            "categoryId": 1,
            "productName": "Bộ Đồ Tập Quần Short + Ngắn Tay Butz",
            "imageAddress": "https://likefit.vn/wp-content/uploads/2020/07/snb2.jpg",
            "color": "Đen",
            "description": "Bộ đồ quần short + Ngắn tay Butz. Form ôm, vải co dãn 4 chiều, lên form tôn dáng thoải mái tập luyện",
            "quantity": 50,
            "price": 350000,
            "created_at": "2021-04-26T14:27:46.000000Z",
            "updated_at": "2021-04-26T14:27:46.000000Z"
        },
        quantity:1
    }
]
const cartSlice = createSlice({
    name: 'cartListProduct',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            
            let idx=state.findIndex((item)=>{
                
                return item.product.id==action.payload.id
                
            })
            if(idx>=0)
            {
                state[idx].quantity++;
            }
            else{
                
                state.push({
                    product:action.payload,
                    quantity:1
                }) 
            }
                       
          },
          addQuatity: (state, action) => {
            
            let addQuantityId=state.findIndex((item)=>{
                
                return item.product.id===action.payload
                
            })
            state[addQuantityId].quantity++
          },
          subQuatity: (state, action) => {
            
            let addQuantityId=state.findIndex((item)=>{
                
                return item.product.id===action.payload
                
            })
            state[addQuantityId].quantity--
          },
          removeProduct: (state, action) => {
            
            const removeId=action.payload
            return state.filter((item)=>item.product.id!==removeId)
          },
        
          
        
    },
    
  });
  
  const { reducer:cartReducer ,actions} = cartSlice;
  export const { addProduct,addQuatity,subQuatity,removeProduct } = actions;
  export default cartReducer;