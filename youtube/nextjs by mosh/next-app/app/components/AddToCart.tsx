"use client";
//this directive turns this compontent into a client side component
import React from "react";

const AddToCart = () => {
  return <button onClick={() => console.log("clicked")}>Add to Cart</button>;
};

export default AddToCart;
