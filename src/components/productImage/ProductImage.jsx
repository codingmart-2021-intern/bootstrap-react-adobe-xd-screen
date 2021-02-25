import React, { useState } from "react";
import './productImage.scss';

const ProductImage = ({img, notFound}) => {
    const [error, setError] = useState(true)
    return (
        <div>
            <div className='productImage flex justify-center flex-wrap'>
                <img src={img} className="w-screen p-10" alt="not" onError={(e)=>{
                    if(error){
                    setError(false);
                    e.target.src=notFound;
                    }
                }}/>
                {(!error)?<p className="font-weight-bold text-muted">No image found</p>:''}
            </div>
        </div>
    )
}

export default ProductImage