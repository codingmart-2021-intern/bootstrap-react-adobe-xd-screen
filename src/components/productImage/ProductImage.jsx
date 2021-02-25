import React, { useState } from "react";
import './productImage.scss';

const ProductImage = ({ className,img, notFound }) => {
    const [error, setError] = useState(false)
    return (
        <div>
            <div className='productImage text-center'>
                <img src={img} className="position-relative d-flex justify-content-center align-items-center" alt="not" onError={(e)=>{
                    if(!error){
                    setError(true);
                    e.target.src=notFound;
                    }
                }}/>
                {(error)?<p className="font-weight-bold text-muted">No image found</p>:''}
            </div>
        </div>
    )
}

export default ProductImage