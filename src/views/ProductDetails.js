import ProductView from "../components/ProductDetails/ProductView/ProductView"
import Review from "../components/ProductDetails/Review/Review"
import {Link} from "react-router-dom"

const ProductDetail = () => {
    return (
        <div className="mx-auto my-5">
            <ProductView />
            {/*
            <!-- Like it --> */}
            <div className="d-flex flex-column  flex-sm-row border border-black py-4 justify-content-center align-items-center my-5 gap-3 w-75 mx-auto">
                <span >Like it? Share it!</span>
                <div className="d-flex gap-1 gap-sm-3">
                    <img src="/assets/Group 18975.svg" alt="" srcSet="" />
                    <img src="/assets/Group 18976.svg" alt="" srcSet="" />
                    <img src="/assets/Group 18977.svg" alt="" srcSet="" />
                    <img src="/assets/Group 18978.svg" alt="" srcSet="" />
                    <img src="/assets/Group 18979.svg" alt="" srcSet="" />
                    <img src="/assets/Group 18980.svg" alt="" srcSet="" />
                    <img src="/assets/Group 18981.svg" alt="" srcSet="" />
                </div>
            </div>
            {/*
            <!-- Reviews --> */}
            <div className=" w-75 mx-auto d-flex justify-content-between align-items-center my-10">
                <div>

                </div>
                <div className="fw-bold fs-5">
                    Reviews (12)
                </div>
                <div className="text-decoration-underline text-skin_dark">
                    Write a Review
                </div>
            </div>
            
            <Review />

        </div>
    )
}

export default ProductDetail