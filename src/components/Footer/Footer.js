import "./Footer.css"

const Footer = () => {
    return (
        <footer className="text-white text-start">
            <div className="bg-dark py-5">
                <div className="w-75 mx-auto">
                    <h1>LOGO</h1>
                    <div className="row">
                        <div className="col">
                            <h5>Policies</h5>
                            <ul className="list-unstyled text-small d-flex flex-column gap-2">
                                <li><a className="" href="#">Privacy</a></li>
                                <li><a className="" href="#">Disclaimer</a></li>
                                <li><a className="" href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>My Account</h5>
                            <ul className="list-unstyled text-small d-flex flex-column gap-2">
                                <li><a className="" href="#">Track order</a></li>
                                <li><a className="" href="#">Cancellation &amp; Refund</a></li>
                                <li><a className="" href="#">Shipping and Delivery</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>Company</h5>
                            <ul className="list-unstyled text-small d-flex flex-column gap-2">
                                <li><a className="" href="#">About us</a></li>
                                <li><a className="" href="#">Contact us</a></li>
                                <li><a className="" href="#">FAQ's</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>Contact</h5>
                            <ul className="list-unstyled text-small d-flex flex-column gap-2">
                                <li><a className="" href="#">Bangalore</a></li>
                                <li><a className="" href="#">7457475826</a></li>
                                <li><a className="" href="#">instamojo@gmail.in</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-danger py-2 d-flex justify-content-center align-items-center flex-column flex-sm-row">
                <span className="text-white mx-3">Follow us </span>
                <div className="d-flex justify-content-around align-items-center gap-3">
                    <div
                        className="w-2 h-2 p-3 bg-white rounded-circle d-flex justify-content-center align-items-center ">
                        <img className=" " src="/assets/_x30_1._Facebook.svg" alt="Facebook" />
                    </div>
                    <div
                        className="w-2 h-2 p-3 bg-white rounded-circle d-flex justify-content-center align-items-center">
                        <img className=" " src="/assets/_x30_2.YouTube_1_.svg" alt="Youtube" />
                    </div>
                    <div
                        className="w-2 h-2 p-3 bg-white rounded-circle d-flex justify-content-center align-items-center">
                        <img className=" " src="/assets/_x31_0.Linkedin.svg" alt="Linkedin" />
                    </div>
                    <div
                        className="w-2 h-2 p-3 bg-white rounded-circle d-flex justify-content-center align-items-center">
                        <img className=" " src="/assets/google-plus.svg" alt="GooglePlus" />
                    </div>
                    <div
                        className="w-2 h-2 p-3 bg-white rounded-circle d-flex justify-content-center align-items-center">
                        <img className=" " src="/assets/instagram.svg" alt="Instagram" />
                    </div>
                    <div
                        className="w-2 h-2 p-3 bg-white rounded-circle d-flex justify-content-center align-items-center">
                        <img className=" " src="/assets/pinterest.svg" alt="Pinterest" />
                    </div>
                    <div
                        className="w-2 h-2 p-3 bg-white rounded-circle d-flex justify-content-center align-items-center">
                        <img className=" " src="/assets/twitter.svg" alt="Twitter" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;