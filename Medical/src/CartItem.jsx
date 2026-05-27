import { useContext } from "react";
import MedicineContext from "../Store/MedicineContext";

function CartItem(){
    const ctx=useContext(MedicineContext);
    console.log(ctx);
    return(
        <div>
            {ctx.items.map((item)=>(
                <div key={item.id}
                className="card p-3 mb-2 shadow">
                    <div className="d-flex justify-content-between">
                    <div>
                        {item.name}<br></br>
                        <small>{item.description}</small>
                    </div>
                    <div>₹{item.price}</div>
                    <div>{item.quantity}</div>
                    <button className="btn btn-secondary" onClick={()=>ctx.addCart(item)}>Add to Cart</button>
                </div>
                </div>
            ))}
        </div>
    )
}
export default CartItem;