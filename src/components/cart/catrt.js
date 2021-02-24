import React, { Component } from "react";
import CartDetails from "./cart-details/cart-details";
import OrderSummary from "./order-summary/order-summary";
import "./cart.css"
import CartEmpty from "../../views/CartEmpty";

// import cartProduct from '../ProductDetails/ProductView/ProductView';






class Cart extends Component {


    state = {
        products: [
            {
                id: 1,
                title: "Pretty Pink Rose Basket made from Bamboo",
                qty: 100,
                price: 30000,
                img: "/assets/rose_bucket.jpeg"
            },
            {
                id: 2,
                title: "Pretty Pink Rose Basket made from Bamboo",
                qty: 100,
                price: 20000,
                img: "/assets/rose_bucket.jpeg"
            }
        ]
    }


    onAddQty = (id) => {
        let newArr = [...this.state.products];
        for (let key in newArr) {
            if (newArr[key].id === id) {
                newArr[key].qty += 1;
            }
        }
        this.setState({ products: newArr })
    }

    onReduceQty = (id) => {
        let newArr = [...this.state.products];
        for (let key in newArr) {
            if (newArr[key].id === id) {
                newArr[key].qty -= 1;
            }
        }
        this.setState({ products: newArr })
    }

    onDeleteData = (id) => {
        let newArr = [...this.state.products];
        newArr = newArr.filter(item => item.id !== id);
        this.setState({ products: newArr })
    }

    totalSum = () => {
        let sum = 0;
        this.state.products.forEach((data) => sum += data.price);
        return sum;
    }




    render() {


        // console.log(cartProduct)

        return (
            <div className="container">
                <div className="my-4">Home / Flowers / <span style={{color:"#E2886C"}} > Pretty Pink Rose Basket made from Bengal Bamboo</span> </div>
                {this.state.products.length <= 0 ? <CartEmpty />
                    : <div className="row">
                        <div className="col-md-8 col-sm-12 mt-3 sticky" >
                            <CartDetails
                                products={this.state.products}
                                add={this.onAddQty}
                                reduce={this.onReduceQty}
                                delete={this.onDeleteData}
                            />
                        </div>
                        <div className="col-md-4 col-sm-12 mt-3 animate">
                            <div className=" m-auto pb-1 dash"></div>
                            <div className="mt-5 space"></div>
                            <OrderSummary total={this.totalSum()} />
                        </div>
                    </div>
                }


                <div className="mb-5"></div>
            </div>

        )
    }
}

export default Cart;

