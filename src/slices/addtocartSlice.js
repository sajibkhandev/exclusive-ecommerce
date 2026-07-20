import { createSlice } from '@reduxjs/toolkit'

export const addtocartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")) : null,
  },
  reducers: {
    addtocart: (state, action) => {

      let data = state.value.find(item => item.title == action.payload.title)
      if (data) {
        data.quantity += 1
      } else {
        state.value.push({ ...action.payload, quantity: 1 })
      }

      localStorage.setItem("cart",JSON.stringify(state.value))



    }
    ,
    increment: (state, action)=>{
      state.value.map(item=>{
        if(item.title==action.payload.title){
          item.quantity+=1
        }
      })
      
       localStorage.setItem("cart",JSON.stringify(state.value))
    },
    decrement: (state, action)=>{
      state.value.map(item=>{
        if(item.title==action.payload.title){
          if(item.quantity>1){
            item.quantity-=1
          }
        }
      })
       localStorage.setItem("cart",JSON.stringify(state.value))
      
      
    },
    removeitem: (state, action)=>{
      state.value.map((item,index)=>{
        if(item.title==action.payload.title){
          state.value.splice(index,1)
          
        }
      })
       localStorage.setItem("cart",JSON.stringify(state.value))
      
      
    },
  },
})
export const { addtocart,increment,decrement,removeitem } = addtocartSlice.actions

export default addtocartSlice.reducer