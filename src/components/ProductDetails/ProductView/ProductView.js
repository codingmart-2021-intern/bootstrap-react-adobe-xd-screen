import { useLocation } from "react-router-dom"
import { allProductsList } from '../../../services/ProductDataList'
import {useState} from 'react'
import {Link} from 'react-router-dom'

import './ProductView.css'
const ProductView = () => {
    
    const pathname = useLocation().pathname.split("/")[2]
    const productData = getProductData()
    function getProductData() {
        let ans =  allProductsList.filter((data, index) => data.product_id == pathname)
        return ans[0]
    }
    let Specifications = ""   

    const [imageUrl, setImageUrl] = useState(productData.slider_image[0])
    const changeImage = (src, id) => {
        setImageUrl({img:src,id:id})
    }

    const slideChange = (index) => {
        const currentIndex = imageUrl.id + index
        if( currentIndex < 0 ) {
            setImageUrl(productData.slider_image[productData.slider_image.length - 1])
        }else if (currentIndex > productData.slider_image.length-1) {
            setImageUrl(productData.slider_image[0])
        }else {
            const currentImage = productData.slider_image[currentIndex]
            setImageUrl(currentImage)
        }
    }
    if(productData.stock == 0){
        Specifications = <h1 className="fs-3 text-danger">OUT OF STOCK</h1>
    }else {
        Specifications = <div className="d-flex flex-column gap-3">
                            <div className="row">
                                <h2 className="fw-bold fs-5 col">Color</h2>
                                <div className="d-flex col gap-2">
                                    {
                                        productData.colors.map((data, index) => {
                                            if(index == 0){
                                                return (<button className="btn btn-primary bg-skin_thin text-uppercase" key={index}>{data}</button>)
                                            }else {
                                                return (<button className="btn btn-outline-secondary text-uppercase" key={index}>{data}</button>)
                                            }
                                        })
                                    }
                                </div> 
                            </div>
                            <div className="row">
                                <h2 className="fw-bold fs-5 col">Size</h2>
                                <div className="d-flex gap-2 col">
                                    {
                                        productData.sizes.map( (data, index) => {
                                            if( index ==0 ) {
                                                return (<button className="btn btn-primary bg-skin_thin text-uppercase" key={index}>{data}</button>)
                                            }else {
                                                return (<button className="btn btn-outline-secondary border text-uppercase" key={index}>{data}</button>)
                                            }
                                        } )
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <h2 className="fw-bold fs-5 col">Quantity</h2>
                                <div className="d-flex gap-2 self-start col">
                                    <button
                                        className="px-6 py-2 border d-flex justify-content-center align-items-center gap-2"><span
                                            className="font-medium text-skin_dark">
                                            {"<"} </span>
                                            <h1 className="fs-5">{productData.quantity[0]}</h1> <span className="font-medium text-skin_dark"> {">"} </span>
                                    </button>
                                </div>
                            </div>
                        </div>
        
    }

    return (
        <div className="w-90 mx-auto">
            <div className="d-flex gap-2">
                <span className=""><Link className=" hover:text-skin_dark " to="/">Home </Link> / <Link className=" hover:text-skin_dark " to="/flowers"> Flowers </Link> / </span>
                <span className=""><Link className=" text-skin_dark " to={useLocation().pathname}>{productData.product_title}</Link></span>
            </div>
            <div className="d-flex flex-column flex-sm-row jusitfy-content-between align-items-start my-4">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <img  className="h-28 w-24 " src={imageUrl.img} alt={productData.product_title} />
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
                        &&  <div className="d-flex gap-2">
                                <button className="btn btn-outline-secondary">ADD TO CART</button>
                                <button className="btn btn-primary">BUY NOW</button>
                            </div>
                    }
                </div>
            </div>
            <div className="w-24">
                <div className="position-relative">
                    <div className="z-index-10 pointer-event bg-skin_dark fs-1 d-flex justify-content-center align-iems-center rounded-circle text-white position-absolute top-50" onClick={()=>slideChange(-1)}>
                            <i className='bx bxs-chevron-left fs-3' ></i>
                    </div>
                    <div className="d-flex">
                        {productData.slider_image.map((data) => {
                            return <img
                            key={data.id}
                            className={`mx-2 w-4 h-5 object-cover pointer-event ${imageUrl.id === data.id ? "opacity-10" : "opacity-5"} `} src={data.img}
                            alt=""
                            onClick={()=>changeImage(data.img, data.id)} />
                        })}
                    </div>
                    <div className="z-index-10 pointer-event bg-skin_dark fs-1 d-flex justify-content-center align-iems-center rounded-circle text-white position-absolute top-50 start-100" onClick={()=>slideChange(1)}>
                            <i className='bx bxs-chevron-right fs-3' ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView;