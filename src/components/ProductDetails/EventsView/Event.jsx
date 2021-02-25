import { useLocation } from "react-router-dom"
import { allProductsList } from '../../../services/ProductDataList'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../ProductView/ProductView.css'

const Event = () => {

    // const location = useLocation().pathname.split("/")
    const category = 'event'
    const product_id = 1
    const productData = getProductData()
    function getProductData() {
        const productsList = allProductsList[category]
        let ans = productsList.filter((data, index) => data.product_id == product_id)
        return ans[0]
    }
    let Specifications = ""

    const [imageUrl, setImageUrl] = useState({img: '/assets/event.png', id: 1})
    const changeImage = (src, id) => {
        setImageUrl({ img: src, id: id })
    }

    const slideChange = (index) => {
        const currentIndex = imageUrl.id + index
        if (currentIndex < 0) {
            setImageUrl(productData.slider_image[productData.slider_image.length - 1])
        } else if (currentIndex > productData.slider_image.length - 1) {
            setImageUrl(productData.slider_image[0])
        } else {
            const currentImage = productData.slider_image[currentIndex]
            setImageUrl(currentImage)
        }
    }
    if (productData.stock == 0) {
        Specifications = <h1 className="fs-3 text-danger">OUT OF STOCK</h1>
    } else {
        Specifications = <div className="d-flex flex-column gap-3">
            <div className="fw-bold row">
                <h2 className="text-secondary fw-bold fs-6 col">Date</h2>
                <div className="d-flex col gap-2 f-12">
                27 June 2021 - 30 June 2021
                </div>
            </div>
            <div className="fw-bold row">
                <h2 className="text-secondary fw-bold fs-6 col">Venue</h2>
                <div className="d-flex  gap-2 col f-12">
                Wankhede Stadium, Mumbai Line 2 Address India
                </div>
            </div>
            <div className="h-2 f-12 d-flex w-100">
                <h2 className="text-secondary fw-bold f-12">Quantity</h2>
                <div className="d-flex justify-content-around  w-50">
                    <button className="w-75 py-1 rounded-3 border d-flex justify-content-around align-items-center">
                            <span className="text-skin_dark"> {"<"} </span>
                            <span className="">{productData.quantity[0]}</span>
                            <span className=" text-skin_dark"> {">"} </span>
                    </button>
                </div>
                <div className="w-50  f-12 text-uppercase text-center ticket d-flex align-items-center justify-content-center">10 tickets left</div>
            </div>
        </div>

    }

    return (
        <div className="w-90 mx-auto">
            <div className="d-flex gap-2">
                <span className=""><Link className=" hover:text-skin_dark " to="/">Home </Link> / <Link className=" hover:text-skin_dark " to={`/${category}`}> {category.toUpperCase()} </Link> / </span>
                <span className=""><Link className=" text-skin_dark " to={useLocation().pathname}>Flower Bouquet</Link></span>
            </div>
            <div className="d-flex flex-column flex-sm-row jusitfy-content-between align-items-start my-4">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <img className="h-28 w-24 object-cover" src={imageUrl.img} alt={productData.product_title} />
                    {productData.stock == 0 &&
                        <div className="w-100 h-100 bg-white-5 position-absolute top-0 d-flex justify-content-center align-items-center">
                            <button className="py-2 px-4 bg-footer_gray text-skin_dark">OUT OF STOCK</button>
                        </div>
                    }
                </div>
                <div className="pl-5 d-flex flex-column gap-3 w-3/4">
                    <h1 className="fw-bold fs-3">{productData.product_title}</h1>
                    <div className="d-flex gap-1 justify-content-start align-items-center">
                        <div className="d-flex gap-1 text-skin_dark">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                        <h1 className="text-black-50 fs-3">|</h1>
                        <a className="text-skin_dark" href="">12 Reviews</a>
                    </div>
                    <div className="d-flex gap-2">
                        <h1 className="fw-bold fs-3"> &#8377; {productData.current_price}</h1>
                        <h1 className="font-normal fs-3 text-muted text-decoration-line-through"> &#8377; {productData.actual_price}</h1>
                    </div>
                    {Specifications}
                    <div>
                        <p className="">{productData.description}</p>
                        <span><a className=" text-skin_dark" href="">Read More</a></span>
                        <span className="text-skin_dark"> {">"}</span>
                    </div>
                    {productData.stock > 0
                        && <div className="d-flex gap-2">
                            <button className="btn btn-outline-danger">ADD TO CART</button>
                            <button className="btn btn-danger">BUY NOW</button>
                        </div>
                    }
                </div>
            </div>
            <div className="w-24">
                <div className="position-relative">
                    <div className="z-index-10 pointer-event bg-skin_dark fs-1 d-flex justify-content-center align-iems-center rounded-circle text-white position-absolute top-50" onClick={() => slideChange(-1)}>
                        <i className='bx bxs-chevron-left fs-3' ></i>
                    </div>
                    <div className="d-flex">
                        {productData.slider_image.map((data) => {
                            return <img
                                key={data.id}
                                className={`mx-2 w-4 h-5 object-cover pointer-event ${imageUrl.id === data.id ? "opacity-10" : "opacity-5"} `} src={data.img}
                                alt=""
                                onClick={() => changeImage(data.img, data.id)} />
                        })}
                    </div>
                    <div className="z-index-10 pointer-event bg-skin_dark fs-1 d-flex justify-content-center align-iems-center rounded-circle text-white position-absolute top-50 start-100" onClick={() => slideChange(1)}>
                        <i className='bx bxs-chevron-right fs-3' ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;