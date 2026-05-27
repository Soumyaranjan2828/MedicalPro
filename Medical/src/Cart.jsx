import { useContext, useState } from "react";
import MedicineContext from "../Store/MedicineContext";
import "./Cart.css";

function Cart(){
    const[showCart,setShowCart]=useState(false);
    const ctx=useContext(MedicineContext);
    console.log(ctx)
    const {cartItems}=ctx;
    return(
        <>
        <button  className=" btn btn-outline-secondary cart-btn position-relative"onClick={()=>setShowCart(true)}>{cartItems.length}Cart</button>
        {showCart &&
        <>
        <div className="backdrop"
        onClick={()=>setShowCart(false)}></div>
        <div className="overLay">
                <h2>Your Cart</h2>
                {ctx.cartItems.length===0?(
                    <p>No items Added</p>
                ):(
                    <div>
                        {ctx.cartItems.map((item)=>(
                            <div key={item.id}>
                                <div>
                                    <h3 className="mb-1">{item.name}</h3>
                                <small className="text-muted">{item.description}</small>
                                </div>
                                <div className="fw-bold text-success">₹{item.price}</div>
                                <hr></hr>
                                </div>
                        ))}
                </div>
                
                )
                
}
      <button className="btn-close"onClick={()=>setShowCart(false)}></button>
            </div>
            </>
            }
        </>
    )
}
export default Cart;