
const TrackStatus=()=>{
    return(
        <div className="py-5 w-100 ">
            <div className="position-relative  d-flex">
                <div className="progress-track-block ">
                    <div className="progress-track"></div>
                </div>   
                <div id="step1" className="progress-step is-complete">
                    <span className="text-black">Order <br/>Confirmed</span>
                </div>
                <div id="step2" className="progress-step is-active">
                    <span className="text-black">Order <br/>Shipped</span>
                </div>
                <div id="step3" className="progress-step">
                    {/* <span>Order <br/>Dispached</span> */}
                </div>
                <div id="step4" className="progress-step">
                    {/* <span>Order <br /> Delivered</span> */}
                </div>
            </div>
        </div>
    )
}

export default TrackStatus