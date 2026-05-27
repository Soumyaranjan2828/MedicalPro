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
         setDescription("")
        setName("");
        setPrice("");
        setQuantity("");
        const product={
            id:Date.now().toString() + Math.random().toString(),
            name,
            description,
            price,
            quantity
        }
        ctx.addProduct(product);
         setDescription("")
        setName("");
        setPrice("");
        setQuantity("");
    }
       
    //  
return (
    <>
    <Cart />
    <div className="container d-flex justify-content-center align-items-center">
        <div className="card shadow-lg p-4"  style={{width:"40%"}}>
            <h4 className="text-center mb-4"></h4>
    <form onSubmit={submitHandler}>
        <div className="mb-3">
        <label className="form-label">MedicineName:</label>
        <input type="text"  className="form-control"onChange={(e)=>setName(e.target.value)} value={name}></input>
        </div>
        <div className="mb-3">
        <label className="form-label">Description</label>
        <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description}></input>
        </div>
        <div className="mb-3">
        <label className="form-label">price</label>
        <input type="number"  className="form-control" onChange={(e)=>setPrice(e.target.value)} value={price}></input>
        </div>
        <label className="form-label">Quantity Available</label>
        <input type="number"  className="form-control"onChange={(e)=>setQuantity(e.target.value)} value={quantity}></input>
        <br></br>
        <button type="submit">Add Product</button>
    </form>
    </div>

    </div>
    </>
)
}
export default NavBar;