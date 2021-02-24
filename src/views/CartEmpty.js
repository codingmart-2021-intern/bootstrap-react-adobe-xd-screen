import React from "react";
import Feature from "../components/home/Features/Features";



const CartEmpty = () => {
  return (

    <div>

      <div className="container">

        <div className="text-center border my-4" style={{ padding: "18%" }}>
          <img src="/assets/Group 19140-1.svg" />
          <h2 className="mt-3 text-capitalize">your cart is Empty</h2>
          <a className="text-danger text-capitalize" style={{ textDecoration: "underline", cursor: "pointer" }}>go to shop</a>
        </div>
      </div>

      <Feature />
    </div>
  );
}

export default CartEmpty;