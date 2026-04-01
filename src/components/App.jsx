import { useState } from "react";

import Navbar from "./Navbar";

import Banner from "./Banner";

import Stats from "./Stats";

import Products from "./Products";

import Cart from "./Cart";

import Pricing from "./Pricing";

import CTA from "./CTA";

import Steps from "./Steps";

import Footer from "./Footer";

import productsData from "../data/products.json";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.info("Product removed from cart");
  };

  const checkout = () => {
    setCartItems([]);
    toast.success("Checkout successful!");
  };

  return (
    <div className="font-sans">
      {/* Navbar receives the count for the very top link if needed */}
      <Navbar cartCount={cartItems.length} />
      
      <Banner />
      <Stats />

      {/* FIXED: Removed the manual <div className="flex..."> buttons from here */}

      {/* PASSING cartCount={cartItems.length} ensures the toggle updates dynamically */}
      {view === "products" ? (
        <Products 
          products={productsData} 
          addToCart={addToCart} 
          view={view} 
          setView={setView} 
          cartCount={cartItems.length} 
        />
      ) : (
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart} 
          checkout={checkout} 
          setView={setView} 
        />
      )}

      <Steps />
      <Pricing />
      <CTA />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar/>
    </div>
  );
}

export default App;