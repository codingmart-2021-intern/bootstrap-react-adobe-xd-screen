import React from "react";
import "./home.css";

import Feature from "./featured_product/feature";




const Home = () => {




    return (
        <div style={{ fontFamily: "serif" }}>
            <div className="container-fluid ">
                <div className="row no-gutters  w-100">
                    <div className="col-lg col-sm-12 no-gutters  d-flex flex-column  justify-content-center px-5 py-5 home-top"style={{ marginLeft: '-15px' , marginRight:"-30px"}} >
                        <h2>Gift and more..</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga amet harum minima placeat aliquam repudiandae accusantium corporis culpa? Quia adip</p>
                        <div><button className="btn  text-uppercase px-4 rounded text-white" style={{ backgroundColor: "#E2886C" }}>shop now</button></div>
                    </div>
                    <div className="col-lg col-sm-12" style={{ marginRight: '-15px' ,marginLeft:"-15px"}}>
                        <img src="assets/home_1.jpg" className="img-fluid w-80 card-img-top" />
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <h2 className="text-center text-capitalize ">categories</h2>
                <div className="row">
                    <div className="col-12 col-sm  mt-2 ">
                        <img className="img-fluid " src="assets/home-2.jpeg" />
                        <div className="index position-relative">
                            <span className="text-capitalize text-white bg-dark text-center p-2 d-block opacity font-weight-bold"> jewellwery  </span>
                        </div>
                    </div>
                    <div className="col-12 col-sm mt-2 ">
                        <img className="img-fluid " src="assets/home-3.jpeg" />
                        <div className="index position-relative">
                            <span className="text-capitalize text-white bg-dark text-center p-2 d-block opacity font-weight-bold"> jewellwery  </span>
                        </div>
                    </div>
                    <div className="w-100 mt-1"></div>
                    <div className="col-12 col-sm mt-2 ">
                        <img className="img-fluid " src="assets/home-2.jpeg" />
                        <div className="index position-relative">
                            <span className="text-capitalize text-white bg-dark text-center p-2 d-block opacity font-weight-bold "> jewellwery  </span>
                        </div>

                    </div>
                    <div className="col-12 col-sm mt-2 ">
                        <img className="img-fluid " src="assets/home-3.jpeg" />
                        <div className="index position-relative">
                            <span className="text-capitalize text-white bg-dark text-center p-2 d-block opacity font-weight-bold"> jewellwery  </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-2 p-4 home-content">
                <h2 className="text-capitalize text-black text-center">Our Features</h2>
                <p className="mt-3">Lorem ipsum dolor sit amet cocommodi excepturi perspiciatis repellendus voluptatem minus ex rem labore aspernatur officiis. Quasi omnis, nihil iste incidunt libero one optio dolorum possimus numquam soluta vel est amet distinctio? Molestias voluptas possimus placeat. Nemo pariatur id ipsa. Suscipit harum dolores voluptatibus blanditiis est expedita quasi veritatis quaerat recusandae commodi, quisquam obcaecati ut quae quam laudantium ipsa inventore corrupti. At quam quas magni quaerat commodi quia ea consequatur. Quos rem et voluptatibus, quasi, quis fugit veniam libero, consequuntur amet molestias dolorem cupiditate dolore numquam enim accusamus officia repellendus ipsa ut aut. Sint, earum minima. Provident recusandae debitis molestiae?</p>
            </div>

            <div className="container">
                <h2 className="text-center mt-5">Testimonials</h2>

                <div className="row">
                    <div className="col-sm">
                        <div className=" text-center p-2">
                            <div className="p-4">
                                <img src="assets/user_1.jpeg" className="img-fluid w-50 rounded-circle" />
                                <h2 className="text-capitalize">Alexander Josheph</h2>
                                <p>Company name</p>
                            </div>
                            <p className="top">Lorem ipsum dolor sit aeniam incidunt doloremque labore praesentium explicabo iusto eos, animi nostrum deserunt neque. Libero!<span className="text-danger text-capitalize">read more</span></p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className=" text-center p-2">
                            <div className="p-4">
                                <img src="assets/user_1.jpeg" className="img-fluid w-50 rounded-circle" />
                                <h2 className="text-capitalize">Alexander Josheph</h2>
                                <p>Company name</p>
                            </div>
                            <p className="top">Lorem ipsum dolor sit aeniam incidunt doloremque labore praesentium explicabo iusto eos, animi nostrum deserunt neque. Libero!<span className="text-danger text-capitalize">read more</span></p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className=" text-center p-2">
                            <div className="p-4">
                                <img src="assets/user_1.jpeg" className="img-fluid w-50 rounded-circle" />
                                <h2 className="text-capitalize">Alexander Josheph</h2>
                                <p>Company name</p>
                            </div>
                            <p className="top">Lorem ipsum dolor sit aeniam incidunt doloremque labore praesentium explicabo iusto eos, animi nostrum deserunt neque. Libero!<span className="text-danger text-capitalize">read more</span></p>
                        </div>
                    </div>


                </div>


            </div>

            <Feature />
            <div className="mb-3"></div>
        </div>
    )
}

export default Home;