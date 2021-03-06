import { useLocation } from "react-router-dom";
import { allProductsList } from '../../services/ProductDataList'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Notification from "../Notification/Notification"

import "./ProductList.css"

const ProductList = () => {
    const category = useLocation().pathname.split("/")[1]

    const [productList, setProductList] = useState(allProductsList[category])
    const [inputValue, setInputValue] = useState("")
    const handleFilter = (e) => {
        const input = e.target.value.toLowerCase()
        const filterData = []
        productList.forEach(function (item) {
            if (item.product_title.toLowerCase().indexOf(input) != -1) {
                filterData.push(item)
            }
        })
        setInputValue(input)
        setProductList(filterData)
    }
    return (
        <div>
            <Notification productData={productList[0]} />
            <div className="w-75 mx-auto products-container">
            
            {/* <div className="d-flex justify-content-between my-5">
                <button className="btn btn-outline-secondary">Filters</button>
                <input
                    onKeyUp={(e) => handleFilter(e)}
                    type="text"
                    name="product_search"
                    id="product_search"
                    placeholder="Search Products"
                    className=" px-2 bg-skin_thin"
                />
                <div className="d-flex align-items-center">
                    <span>Sort By:</span>
                    <div className="dropdown">
                        <button className="btn " type="button" id="filterBy" data-bs-toggle="dropdown" aria-expanded="false">
                            Featured Items
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="filterBy">
                            <li><a className="dropdown-item" href="#">Categoris</a></li>
                            <li><a className="dropdown-item" href="#">Size</a></li>
                            <li><a className="dropdown-item" href="#">Colors</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* <div className="text-center my-5">
                <h5>Search Results for "<span className="text-skin_dark fw-bold">{`${inputValue}`}</span>"</h5>
            </div> */}
            <div className="row gap-5 text-dark my-4">
                {
                    productList.map(productData => (
                        <Link className="col d-flex flex-column justify-content-center align-items-center" to={`/${category}/${productData.product_id}`}>
                            <div className="w-15" key={productData.product_id}>
                                <div className="position-relative">
                                    <img className="w-15 h-15 object-cover" src={productData.slider_image[0].img} alt={productData.product_title} />
                                    {productData.stock == 0 &&
                                        <div className="w-100 h-100 bg-white-5 position-absolute top-0 d-flex justify-content-center align-items-center">
                                            <button className="py-2 px-4 bg-footer_gray text-skin_dark">OUT OF STOCK</button>
                                        </div>
                                    }
                                </div>
                                <div className="p-2 d-flex flex-column text-dark fw-bold bg-skin_thin">
                                    <span>{productData.product_title}</span>
                                    <div className="d-flex gap-2">
                                        <span className="font-normal fs-6"> &#8377; {productData.current_price}</span>
                                        <span className="font-normal fs-6 text-muted text-decoration-line-through"> &#8377; {productData.actual_price}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default ProductList;