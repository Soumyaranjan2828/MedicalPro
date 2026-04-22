import { useContext } from "react";
import MedicineContext from "../Store/MedicineContext";

function Cart(){
    const ctx=useContext(MedicineContext);
    console.log(ctx)
    const {cartItems}=ctx;
    return(
        <>
        <button>{cartItems.length}Cart</button>
        </>
    )
}
export default Cart;