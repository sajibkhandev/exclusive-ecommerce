import { createSlice } from '@reduxjs/toolkit'

export const addtocartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state,action) => {

   let data= state.value.find(item=>item.title==action.payload.title)
   if(data){
    data.quantity+=1
   }else{
    state.value.push({...action.payload,quantity:1})
   }

    }
  },
})
export const { addtocart} = addtocartSlice.actions

export default addtocartSlice.reducer