import React from "react";

const Contact = () => {
    return (
        <div>
            <div className="bg-skin_thin">
                <div className="d-flex flex-column justify-content-center align-items-center p-5  w-100 w-md-75  mx-auto gap-3">
                    <h1 className="fw-bold">Contact us</h1>
                    <p className=" mb-8 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nobis incidunt rerum reiciendis architecto. Accusamus sit laudantium, corrupti necessitatibus.</p>
                    <div className="d-flex flex-column gap-3 bg-white px-4 py-5">
                        <div className=""> <i className="fa fa-phone p-3 text-white bg-danger rounded-circle mx-2 "></i>   +91 912345674</div>
                        <div className=""> <i className="fa fa-envelope p-3 text-white bg-danger rounded-circle  mx-2"></i> test@gmail.com</div>
                        <div className=""> <i className="fas fa-map-marker p-3 text-white bg-danger rounded-circle  mx-2"></i> Test Address test street test cbe-545678 </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column gap-4 w-75 w-sm-50 mx-auto my-3">
                <h3 className="text-center fw-bold">Drop us a line</h3>
                <form className="d-flex flex-column gap-4">
                    <input placeholder="Full Name *" className="form-control" />
                    <input placeholder="Email *" className="form-control" />
                    <textarea className="form-control" rows="5"> Message</textarea>
                    <button className="btn btn-danger align-self-start">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Contact;