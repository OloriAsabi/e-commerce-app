import React from "react";
import { 
  BrowserRouter as
   Router, 
   Routes, 
   Route, 
Navigate } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Product } from "./pages/Product";
import Home from "./pages/Home"
import { ProductList }  from "./pages/ProductList";

const App = () => {
  const user = false
  return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route path="/products/:category" element={<ProductList/>} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>}/>
        </Routes>
      </Router>
    )
};

export default App