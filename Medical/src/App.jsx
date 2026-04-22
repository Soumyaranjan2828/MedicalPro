import React from "react";
import MedicineProvider from '../Store/MedicineProvider'
import './App.css'
// import Cart from './Cart'
import CartItem from './CartItem'
import NavBar from './NavBar'

function App() {

  return (  
  <>
  <MedicineProvider>
    <NavBar />
    <CartItem />
  </MedicineProvider>
  </>
  )
}

export default App
