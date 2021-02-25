import { Link } from 'react-router-dom'
import "../../home/Features/Features.css"
import ProductImage from '../../productImage/ProductImage';
const LessProduct = () => { 
    return (
        <div className="w-75 mx-auto">
            <h1 className="text-center fw-bold fs-3 my-5">Less Product</h1>
            <div className="d-flex justify-content-center align-items-center position-relative">
                <div className="row">
                    <Link className="card-c col" to={ "/flowers/1" }>
                        <div className="d-flex flex-column w-10">
                            <div className="position-relative d-flex justify-content-center align-items-center ">
                                <ProductImage img='sfdf.png' notFound="/assets/Group 19140.svg" />
                            </div>
                            <div className="px-3 py-1 d-flex flex-column gap-2 bg-skin_light text-dark">
                                <span className="fw-bold fs-6">Pretty Pink Rose Basket Made from Bengal Bamboo</span>
                                <div className="d-flex gap-2">
                                    <span className="fs-7"> &#8377; 20000</span>
                                    <span className="fs-7 text-decoration-line-through"> &#8377; 30000</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LessProduct;