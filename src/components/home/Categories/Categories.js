import { Link } from "react-router-dom"

const Categoris = () => {
    return (
        <div className="container mt-3">
            <h2 className="text-center text-capitalize ">categories</h2>
            <div className="row">
                <Link className="col-6" to="/flowers">
                        <img className="img-fluid " src="https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <div className="index position-relative">
                            <span className="text-capitalize text-white bg-dark text-center p-2 d-block opacity font-weight-bold"> Flowers  </span>
                        </div>
                </Link>
                <Link className="col-6" to="/cakes">
                        <img className="img-fluid " src="https://images.pexels.com/photos/1169790/pexels-photo-1169790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <div className="index position-relative">
                            <span className="text-capitalize text-white bg-dark text-center p-2 d-block opacity font-weight-bold"> Cakes  </span>
                        </div>
                </Link>
                <Link className="col-6" to="/chocolates">
                        <img className="img-fluid " src="https://images.pexels.com/photos/3851093/pexels-photo-3851093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <div className="index position-relative">
                            <span className="text-capitalize text-white bg-dark text-center p-2 d-block opacity font-weight-bold "> Chocolates  </span>
                        </div>
                </Link>
                <Link className="col-6" to="/teddies">
                        <img className="img-fluid " src="https://images.pexels.com/photos/264917/pexels-photo-264917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <div className="index position-relative">
                            <span className="text-capitalize text-white bg-dark text-center p-2 d-block opacity font-weight-bold"> Teddy  </span>
                        </div>
                </Link>
            </div>
        </div>

    )
}

export default Categoris;