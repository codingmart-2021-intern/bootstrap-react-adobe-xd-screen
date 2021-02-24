import React from 'react'
import "./cartDetails.css"

const CartDetails = (props) => {

    return (
        <div style={{ fontFamily: "serif" }}>
            <h2 className="h2 mb-4">Your Cart ({props.products.length}) </h2>

            {   props.products.map((item, i) => {

                return <div key={i} className="row border px-1 py-4 cart-item rounded mb-4">
                    <div className="col-2 col-sm-2 col-md-2">
                        <img width="90px" className="img-fluid" src={item.img} />
                    </div>
                    <div className="col-10 col-sm-10">
                        <div className="row">

                            <div className="col-9 col-sm-12 col-md-6 left">
                                <h2 className="heading text-monospace text-black" > {item.title} </h2>
                                <p className="text-dark  ">&#8377; {item.price} <span className="text-muted through m-3">&#8377; {item.price}</span> </p>
                            </div>

                            <div className="col col-md-3 col-sm-3 center" >
                                <div className="btn btn-light border rounded  px-3">
                                    <div className="d-flex align-items-center justify-content-between">

                                        <i className="fas fa-angle-left text-danger left-arrow" onClick={() => props.reduce(item.id)} ></i>
                                        <span className="px-2"> {item.qty} </span>
                                        <i className="fas fa-angle-right text-danger right-arrow" onClick={() => props.add(item.id)}></i>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-md-3 col-sm-3 text-end end">
                                <p className="underscore text-muted" style={{ cursor: "pointer" }} onClick={() => props.delete(item.id)}>Remove</p>
                            </div>

                        </div>
                    </div>

                </div>

            })}

        </div>
    )

}

export default CartDetails;
