import React, { useState } from 'react';
import '../LoginScreen/loginScreen.scss';
import Track from './Track/Track';

const TrackOrder = ({ onClick }) => {
    // const [showBlock, setShowBlock] = useState(true);
    return (
        <div className="screen fixed-top h-100 zindex-modal">
            <div className="inner-block bg-white ">
                <div className="d-flex justify-content-center w-100">
                    <div  className="close-btn">
                        <span className="btn font-weight-bold" onClick={
                            onClick
                        }>
                            &#10005;
                        </span>
                    </div>
                    <div className=" position-absolute mt-4 w-100 pl-3">
                        <nav className="d-flex space-x-5 font-lora font-weight-bold mb-3">
                            <p>Track your order</p>
                        </nav>
                        <Track />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder
