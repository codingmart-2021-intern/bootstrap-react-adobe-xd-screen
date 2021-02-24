import {useState} from 'react'
import "./Notification.css"
const Notification = () => {
    const [show, setshow] = useState(true)
    return (
        <div className={" position-sticky top-0 z-index-10 " + `${show ? "" : "d-none"}`}>
            <div className={"d-flex justify-content-between  border bg-white position-absolute top-0 end-0 m-2 w-20" }>
                <img className="w-4 " src="https://images.pexels.com/photos/5638193/pexels-photo-5638193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="flower"/>
                <div className="d-flex flex-column px-2 py-2 position-relative">
                    
                    <a className="text-skin_dark  fw-light"><span className="cursor-pointer inline-block fs-6">Add to Cart</span></a>
                    <span className="fs-7 fw-light">Pretty Pink Rose Basket Made from Bengal Bamboo</span>
                    <div className="d-flex w-2 h-2 fs-5 rounded-circle  border text-skin_dark bg-white justify-content-center align-items-center position-absolute top-0 end-0 pointer-event" onClick={() => setshow(false)}>
                        <i className='bx bx-x'></i>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Notification;