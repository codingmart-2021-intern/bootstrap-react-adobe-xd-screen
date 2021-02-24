import React, { Component } from "react";
import "./Features.css";
import { allProductsList } from "../../../services/ProductDataList";

//image_path
//assets/rose_bucket.jpeg

class Features extends Component {

    state = {
        products: [],
        leftIndex: 0,
        rightIndex: 4
    }

    componentDidMount() {
        this.setState({ products: allProductsList })
    }

    leftScroll = () => {

        if (this.state.leftIndex === 0 || this.state.rightIndex === 0) {
            this.setState({
                leftIndex: 4,
                rightIndex: 8
            })
        }
        else {
            this.setState({
                leftIndex: this.state.leftIndex - 1,
                rightIndex: this.state.rightIndex - 1
            })
        }
    }


    rightScroll = () => {

        if (this.state.leftIndex > this.state.products.length - 1 || this.state.rightIndex > this.state.products.length - 1) {
            this.setState({
                leftIndex: 8,
                rightIndex: 12
            })
        }
        else {
            this.setState({
                leftIndex: this.state.leftIndex + 1,
                rightIndex: this.state.rightIndex + 1
            })
        }
    }

    render() {

        let productData = this.state.products.slice(this.state.leftIndex, this.state.rightIndex);

        return (
            <div className="container" >
                <h2 className="text-center">Featured Product</h2>

                <div className="block">
                    <button className="btn rounded-circle left-arrow" onClick={this.leftScroll} style={{ backgroundColor: "#E2886C" }}>
                        <i className="fas fa-angle-left text-white"></i>
                    </button>
                </div>

                <div className="row">
                    {productData.map((item, i) => {

                        return (
                            <div key={i} className="col-sm-6 col-md-6 col-lg-3 mt-2 ">
                                <div className="card rounded" >
                                    {/* <span className="text-uppercase text-white bg-dark px-4 py-2 opacity font-weight-bold view ml-5"> quick view  </span> */}
                                    <img className="card-img-top img-fluid w-95" src="assets/rose_bucket.jpeg" />

                                    <div className="card-body">
                                        <p className="card-text">{item.product_title}</p>
                                        <p className="card-text">&#8377; {item.current_price}  <span className="text-muted ml-4 through">&#8377; {item.actual_price}</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="block">
                    <button className="btn rounded-circle right-arrow" onClick={this.rightScroll} style={{ backgroundColor: "#E2886C" }}>
                        <i className="fas fa-angle-right  text-white " ></i>
                    </button>
                </div>
            </div>

        )
    }
}


export default Features;