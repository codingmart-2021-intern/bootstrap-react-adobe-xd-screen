import React, { Component } from 'react';
import "./orderSummary.css";

class OrderSummary extends Component {

    state = {
        code: "",
        error: false,
        success:false
    }

    couponCodeCheck = () => {
        if (this.state.code === "CODE2021") {
            this.setState({ error: false ,success:true});
        }
        else {
            this.setState({ error: true,success:false });
        }
    }

    onChangeEvent = (event) => {

        this.setState({ code: event.target.value ,error:false,success:false})
    }

    render() {

        let code_msg = null

        if (this.state.code === "") {
            code_msg=null
        }
        else {
            if (this.state.error) {
                code_msg = <span className="text-danger text-capitalize coupon-code position-relative">code wrong  <i class="fa fa-exclamation-triangle text-danger ml-1" aria-hidden="true"></i></span>
            }
            else if(this.state.success) {
                code_msg = <span className="text-success text-capitalize coupon-code position-relative">code applied !!</span>

            }
        }
        return (
            <div style={{ fontFamily: "serif" }}>
                <h2 className="h2 mb-4">Order Summary</h2>

                <div className="row mt-4 ">
                    <p className="col-5 col-sm-6 text-black-50 text-capitalize coupon-text">lorem ipsum sit amet consentatrt</p>
                    <div className="col-4 col-sm-6">  <p className=" px-2  py-2 text-center coupon  font-weight-bold">CODE2021</p></div>
                </div>

                <div className="row mt-3">
                    <p className="col-5  col-sm-6  text-black-50 text-capitalize coupon-text">lorem ipsum sit amet consentatrt</p>
                    <div className="col-4 col-sm-6 ">  <p className=" py-2 px-2 text-center coupon  font-weight-bold">CODE2021</p></div>
                </div>

                <div className="row p-3">
                {code_msg}

                    <input
                        className="col-6 col-sm-7 col-md-8 border border-muted mx-2 rounded focus"
                        type="text" placeholder="Enter the Code"
                        value={this.state.code}
                        onChange={this.onChangeEvent} />
                    <button className=" col-2 col-sm-4 col-md-3 btn btn-danger btn-sm text-uppercase" onClick={this.couponCodeCheck}>apply</button>
                </div>

                <div className="border p-4" style={{ fontFamily: "sans-serif" }}>
                    <div className="d-flex justify-content-between mb-3">
                        <span className="text-capitalize text-dark">sub total</span>
                        <span> &#8377; {this.props.total}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3 ">
                        <span className="text-capitalize text-dark">shipping</span>
                        <span> &#8377; 50</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span className="text-capitalize text-dark">discount</span>
                        <span>- &#8377; 300</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3 pt-1 px-2" style={{ backgroundColor: "gray" }}>
                        <span className="text-capitalize text-dark">total</span>
                        <span> &#8377;{this.props.total-300}</span>
                    </div>
                    <button className="btn btn-danger btn-block">checkout</button>
                </div>
            </div>
        )
    }
}

export default OrderSummary;