import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginScreen from "../../LoginScreen/LoginScreen";
import TrackOrder from "../../TrackOrder/TrackOrder";
import "./HeaderTop.css";

const HeaderTop = () => {
  const [trackOrder, setTrackOrder] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <div>
      <Row className="pt-3">
        <Col className="align-self-center">
          <form className="">
            <div className="input-group">
              <input
                type="text"
                className="dark-pink w-100 h-2 border-0 shadow-none rounded-3  px-4 py-4 header-search"
                placeholder="Search anything"
              />
              <span
                className="input-group-append position-absolute"
                style={{ right: "1rem", top: "35%", cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search align-center"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
          </form>
        </Col>
        <Col className="align-self-center text-center">
          <h2>LOGO</h2>
        </Col>
        <Col className="">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="#">
              <button className="btn btn-lg  dark-pink shadow-none rounded-circle"
                onClick={()=>{
                  setLogin(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill align-baseline"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </button>
            </Link>
            <Link to="#">
              <button className="btn btn-lg dark-pink shadow-none rounded-circle"
                onClick={()=>{
                  setTrackOrder(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill align-baseline"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </button>
            </Link>
            <Link to="#">
              <button className="dark-pink btn btn-lg shadow-none rounded-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bag align-baseline"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </button>
            </Link>
          </div>
        </Col>
      </Row>
        {(login)?<LoginScreen showBlock={login} onClick={() => setLogin(false)}/>:''}
        {(trackOrder)?<TrackOrder showBlock={trackOrder} onClick={() => setTrackOrder(false)}/>:''}
    </div>
  );
};

export default HeaderTop;
