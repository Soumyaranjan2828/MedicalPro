import { useReducer, useState } from "react";
import MedicineContext from "./MedicineContext";
const initialState={
    items:[],
    cartItems:[]
}
const reducer=(state,action)=>{
    console.log(state,action);
    switch(action.type){
        case "ADD_PRODUCT":
            return{
                ...state,
                items:[...state.items,action.payload]
            };
        case "ADD_CART":
            let existing=state.cartItems.find(
                item=>item.id===action.payload.id
            );
            if(existing){
            return {
                ...state,
                cartItems:state.cartItems.map(item=>
                    item.id===action.payload.id
                    ?{...item,quantity:item.quantity+1}
                    :item
                )
            }
        }
        return{
            ...state,
            cartItems:[
                ...state.cartItems,
                {...action.payload,quantity:1}
            ]
        }
            default:
            return state
    }

}


const MedicineProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState);
    // const[items,setItems]=useState([]);
    // const[cartItems,setCartItems]=useState([]);
    const addProductHandler=(product)=>{
       dispatch({
        payload:product,
        type:"ADD_PRODUCT"
       })
    };
    const AddToCart=(product)=>{
        console.log(product);
      dispatch({
        payload:product,
        type:"ADD_CART"
      })
    }
    console.log(state);
    return(
        <MedicineContext.Provider
        value={{
            items:state.items,
            addProduct:addProductHandler,
            addCart:AddToCart,
            cartItems:state.cartItems
        }}
        >
            {children}
        </MedicineContext.Provider>

    )
}
export default MedicineProvider;