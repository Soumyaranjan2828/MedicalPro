import { useState } from "react";
import MedicineContext from "./MedicineContext";

const MedicineProvider=({children})=>{
    const[items,setItems]=useState([]);
    const[cartItems,setCartItems]=useState([]);
    const addProductHandler=(product)=>{
        setItems((pre)=>[...pre,product])
    }
    const AddToCart=(id)=>{
        const product=items.find((value)=>value.id===id);
        setCartItems((prev)=>{
            const exist=prev.find((item)=>item.id===id);
            if(exist){
                return prev.map((item)=>(
                   item.id===id?
                   {...item, quantity: item.quantity + 1}:
                   item
                ))
            }
            return[...prev,{...product,quantity:1}]
    })
        
      }

    return(
        <MedicineContext.Provider
        value={{
            items,
            addProduct:addProductHandler,
            addCart:AddToCart,
            cartItems
        }}
        >
            {children}
        </MedicineContext.Provider>

    )

}
export default MedicineProvider;