import React from "react";
import "../components/home/Home.css";

import Categoris from "../components/home/Categories/Categories"
import Features from "../components/home/Features/Features"
import HomeShowcase from "../components/home/HomeShowcase/HomeShowcase"
import Testimonials from "../components/home/Testimonials/Testimonials"

const Home = () => {
    return (
        <div style={{ fontFamily: "serif" }}>
            <HomeShowcase />
            <Categoris />
            <div className="container mt-2 p-4 home-content">
                <h2 className="text-capitalize text-black text-center">Our Features</h2>
                <p className="mt-3">Lorem ipsum dolor sit amet cocommodi excepturi perspiciatis repellendus voluptatem minus ex rem labore aspernatur officiis. Quasi omnis, nihil iste incidunt libero one optio dolorum possimus numquam soluta vel est amet distinctio? Molestias voluptas possimus placeat. Nemo pariatur id ipsa. Suscipit harum dolores voluptatibus blanditiis est expedita quasi veritatis quaerat recusandae commodi, quisquam obcaecati ut quae quam laudantium ipsa inventore corrupti. At quam quas magni quaerat commodi quia ea consequatur. Quos rem et voluptatibus, quasi, quis fugit veniam libero, consequuntur amet molestias dolorem cupiditate dolore numquam enim accusamus officia repellendus ipsa ut aut. Sint, earum minima. Provident recusandae debitis molestiae?</p>
            </div>
            <Features />
            <Testimonials />
            <div className="mb-3"></div>
        </div>
    )
}

export default Home;