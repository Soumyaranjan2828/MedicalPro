import { useContext, useState } from "react";
import MedicineContext from "../Store/MedicineContext";
import Cart from "./Cart";

function NavBar(){
    const[name,setName]=useState("");
    const[description,setDescription]=useState("");
    const[price,setPrice]=useState(null);
    const[quantity,setQuantity]=useState(null);
    const ctx=useContext(MedicineContext);
    const submitHandler=(e)=>{
        e.preventDefault();
        const product={
            id:Math.random().toString(),
            name,
            description,
            price,
            quantity
        }
        ctx.addProduct(product);
    }
return (
    <>
    <Cart />
    <form onSubmit={submitHandler}>
        <label htmlFor="medname">medicinename</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <label htmlFor="desc">description</label>
        <input type="desc" onChange={(e)=>setDescription(e.target.description)}></input>
        <label htmlFor="pri">price</label>
        <input type="number" onChange={(e)=>setPrice(e.target.value)}></input>
        <label htmlFor="quan">Quantity Available</label>
        <input type="number" onChange={(e)=>setQuantity(e.target.value)}></input>
        <button>Add Product</button>
    </form>
    </>
)
}
export default NavBar;