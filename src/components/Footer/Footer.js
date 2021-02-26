import "./Footer.css"

import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer text-white text-start">
            <div className="bg-footer_gray py-5">
                <div className="w-75 mx-auto">
                    <h1>LOGO</h1>
                    <div className="row">
                        <div className="col">
                            <h5>Policies</h5>
                            <ul className="list-unstyled text-small d-flex flex-column gap-2">
                                <li><Link to="/privacy">Privacy</Link></li>
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
                                <li><Link to="/about" >About us</Link></li>
                                <li><Link to="/contact">Contact us</Link></li>
                                <li><Link to="/faq">FAQ's</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>Contact</h5>
                            <ul className="list-unstyled text-small d-flex flex-column gap-2">
                                <li>
                                    <a className="d-flex gap-1" href="#">
                                        <div className="w-1 h-1 bg-skin_dark rounded-circle d-flex justify-content-center align-items-center">
                                            <i className="fs-6 bx bx-location-plus"></i>
                                        </div>
                                        <span>Bangalore</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex gap-2" href="#">
                                        <div className="w-1 h-1 bg-skin_dark rounded-circle d-flex justify-content-center align-items-center">
                                        <i className="text-lg bx bx-phone"></i>
                                        </div>
                                        <span>8576475837</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex gap-1" href="#">
                                        <div className="w-1 h-1 bg-skin_dark rounded-circle d-flex justify-content-center align-items-center">
                                            <i className="text-lg bx bx-mail-send"></i>
                                        </div>
                                        <span>instamojo@g.co</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-skin_dark py-2 d-flex justify-content-center align-items-center flex-column flex-sm-row">
                <span className="text-white mx-3 d-none d-sm-block">Follow us </span>
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