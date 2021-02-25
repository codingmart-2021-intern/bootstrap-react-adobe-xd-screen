import {useState} from 'react'
import "./Notification.css"
const Notification = (props) => {
    console.log(props);
    const [show, setshow] = useState(true)
    return (
        <div className={" position-sticky top-0 z-index-10 " + `${show ? "" : "d-none"}`}>
            <div className={"d-flex  gap-3  border bg-white position-absolute top-0 end-0 m-2 w-20" }>
                <img className="w-4 h-4 object-cover" src={props.productData.slider_image[0].img} alt={props.productData.product_title}/>
                <div className="d-flex flex-column px-2 py-2 position-relative">
                    
                    <a className="text-skin_dark  fw-light"><span className="cursor-pointer inline-block fs-6 text-skin_dark">Add to Cart</span></a>
                    <span className="fs-7 fw-light">{props.productData.product_title}</span>
                </div>
                <div className="d-flex w-2 h-2 fs-5 rounded-circle  border text-skin_dark bg-white justify-content-center align-items-center position-absolute top-0 end-0 pointer-event" onClick={() => setshow(false)}>
                        <i className='bx bx-x'></i>
                </div>
            </div>
        </div> 
    )
}

export default Notification;