const HomeShowcase = () => {
    return (
        <div className="container-fluid ">
            <div className="row no-gutters  w-100">
                <div className="col-lg col-sm-12 no-gutters  d-flex flex-column  justify-content-center px-5 py-5 home-top"style={{ marginLeft: '-15px' , marginRight:"-30px"}} >
                    <h2>Gift and more..</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga amet harum minima placeat aliquam repudiandae accusantium corporis culpa? Quia adip</p>
                    <div><button className="btn  text-uppercase px-4 rounded text-white" style={{ backgroundColor: "#E2886C" }}>shop now</button></div>
                </div>
                <div className="col-lg col-sm-12" style={{ marginRight: '-15px' ,marginLeft:"-15px"}}>
                    <img src="assets/home_1.jpg" className="img-fluid w-80 card-img-top" />
                </div>
            </div>
        </div>
    )
}

export default HomeShowcase;