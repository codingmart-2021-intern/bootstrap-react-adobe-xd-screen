import React, { useState } from 'react';
import TrackStatus from '../TrackStatus/TrackStatus';

const Track=()=>{
    const [track, setTrack] = useState(false);
    return(
        <div className="my-10">
            <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="position-relative">
                        <input className="p-1 rounded-3 border" type="email" name="mail" id="mail" placeholder=' '/>
                        <label className="position-relative input-label px-3" htmlFor="email">Email<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="relative">
                        <input className="p-1 rounded-3 border" type="text" name="orderId" id="orderId" placeholder=' '/>
                        <label className="position-relative input-label px-3" htmlFor="orderId">Order ID<sup className="text-danger">*</sup></label>
                    </div>
                        <button className="text-uppercase  sub-btn border-0 font-weight-bold text-white" onClick={()=>setTrack(!track)}>track order</button>
                </form>
                {
                    track?<TrackStatus />:" "
                }
            </div>
        </div>
    )
}


export default Track
