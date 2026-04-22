import { useContext } from "react";
import MedicineContext from "../Store/MedicineContext";

function CartItem(){
    const ctx=useContext(MedicineContext);
    return(
        <div className="card p-3 shadow">
           <ul>
            {ctx.items.map((item)=>(
                <li key={item.id}>
                    {item.name}-${item.description}-{item.price}-{item.quantity}
                    <button className="btn btn-primary" onClick={()=>ctx.addCart(item.id)}>Add to Cart</button>
                </li>
            ))}
           </ul>
        </div>
    )
}
export default CartItem;