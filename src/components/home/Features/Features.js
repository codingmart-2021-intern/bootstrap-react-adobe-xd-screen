import { Link } from 'react-router-dom'
import {allProductsList} from '../../../services/ProductDataList'
import {useState} from 'react'
import "./Features.css"
const Features = () => { 
    const [slideRange, setSlideRange] = useState({start:3,end:6})
    const [productDataList, setProductDataList] = useState(allProductsList.slice(0,4))
    const changeSlide = (index) => {
        let currentRange = {}
        if(slideRange.start < 0 || slideRange.end > allProductsList.length) {
            currentRange = {start:3,end:6}
        }else {
            if(index == 1){
                console.log(slideRange);
                currentRange = {
                    start: slideRange.start + 1,
                    end: slideRange.end + 1
                }
            }else {
                currentRange = {
                    start: slideRange.start - 1,
                    end: slideRange.end - 1
                }
            }
        }
        console.log("-",currentRange);
        setSlideRange(currentRange)
        let currentData = allProductsList.slice(currentRange.start, currentRange.end+1)
        setProductDataList(currentData)
        
    }
    return (
        <div className="w-75 mx-auto">
            <h1 className="text-center fw-bold fs-3 my-5">Featured Product</h1>
            <div className="d-flex justify-content-center align-items-center position-relative">
                <div onClick={() => changeSlide(-1)} className="z-10 h-2 w-2 bg-skin_dark fs-3 rounded-circle d-flex justify-content-center align-items-center pointer-event text-white position-absolute top-50 start-0">
                    <i className='bx bxs-chevron-left' ></i>
                </div>
                <div className="row">
                    {
                        productDataList.map(productData => (
                            <Link className="card-c col" to={ "/flowers/" + productData.product_id }>
                                <div className="d-flex flex-column gap-2 w-10" key={productData.product_id}>
                                    <div className="position-relative d-flex justify-content-center align-items-center ">
                                        <img className="w-10 h-12 object-cover" src={productData.slider_image[0].img} alt={productData.product_title} />
                                        {   productData.stock == 0 && 
                                            <div className="w-100 h-100 bg-white-5 position-absolute d-flex justify-content-center align-items-center">
                                                <button className="py-2 px-3 bg-footer_gray text-skin_dark">OUT OF STOCK</button>
                                            </div>
                                        }
                                    </div>
                                    <div className="px-3 py-1 d-flex flex-column gap-2 bg-skin_light text-dark">
                                        <span className="fw-bold fs-6">{productData.product_title}</span>
                                        <div className="d-flex gap-2">
                                            <span className="fs-7"> &#8377; {productData.current_price}</span>
                                            <span className="fs-7 text-decoration-line-through"> &#8377; {productData.actual_price}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div onClick={() => changeSlide(1)} className="z-10 h-2 w-2 bg-skin_dark fs-3 rounded-circle d-flex justify-content-center align-items-center pointer-event text-white position-absolute top-50 end-0">
                    <i className='bx bxs-chevron-right' ></i>
                </div>
            </div>
        </div>
    )
}

export default Features;