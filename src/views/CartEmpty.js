import React from "react";
import { Link } from "react-router-dom";


const CartEmpty = () => {
  return (

    <div>

      <div className="container">

        <div className="text-center border my-4" style={{ padding: "18%" }}>
          <img src="/assets/Group 19140-1.svg" />
          <h2 className="mt-3 text-capitalize">your cart is Empty</h2>
          <Link to="/"> <a className="text-danger text-capitalize" style={{ textDecoration: "underline", cursor: "pointer" }}>go to shop</a> </Link>
        </div>
      </div>

      <h2 className="text-uppercase my-4 text-center h3">related products</h2>
      <div className="row">

        <div className="col-sm-6 col-md-6 col-lg-3 mt-2 ">
          <div className="card rounded" >
            {/* <span className="text-uppercase text-white bg-dark px-4 py-2 opacity font-weight-bold view ml-5"> quick view  </span> */}
            <img className="card-img-top img-fluid w-95" src="assets/rose_bucket.jpeg" />

            <div className="card-body">
              <p className="card-text">Pretty Pink Rose Basket made from Bamboo</p>
              <p className="card-text">&#8377; 30000  <span className="text-muted ml-4 through">&#8377; 30000</span></p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-3 mt-2 ">
          <div className="card rounded" >
            {/* <span className="text-uppercase text-white bg-dark px-4 py-2 opacity font-weight-bold view ml-5"> quick view  </span> */}
            <img className="card-img-top img-fluid w-95" src="assets/rose_bucket.jpeg" />

            <div className="card-body">
              <p className="card-text">Pretty Pink Rose Basket made from Bamboo</p>
              <p className="card-text">&#8377; 30000  <span className="text-muted ml-4 through">&#8377; 30000</span></p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-3 mt-2 ">
          <div className="card rounded" >
            {/* <span className="text-uppercase text-white bg-dark px-4 py-2 opacity font-weight-bold view ml-5"> quick view  </span> */}
            <img className="card-img-top img-fluid w-95" src="assets/rose_bucket.jpeg" />

            <div className="card-body">
              <p className="card-text">Pretty Pink Rose Basket made from Bamboo</p>
              <p className="card-text">&#8377; 30000  <span className="text-muted ml-4 through">&#8377; 30000</span></p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-3 mt-2 ">
          <div className="card rounded" >
            {/* <span className="text-uppercase text-white bg-dark px-4 py-2 opacity font-weight-bold view ml-5"> quick view  </span> */}
            <img className="card-img-top img-fluid w-95" src="assets/rose_bucket.jpeg" />

            <div className="card-body">
              <p className="card-text">Pretty Pink Rose Basket made from Bamboo</p>
              <p className="card-text">&#8377; 30000  <span className="text-muted ml-4 through">&#8377; 30000</span></p>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default CartEmpty;

{/* <Feature /> */ }
