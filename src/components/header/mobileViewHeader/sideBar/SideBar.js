import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginScreen from "../../../LoginScreen/LoginScreen";
import TrackOrder from "../../../TrackOrder/TrackOrder";
import "./SideBar.css";

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: false,
      trackOrder: false
    };
  }
  render() {
    // Sidebar toggle className
    let sideBar = "side-bar";
    if (this.props.show) {
      sideBar = "side-bar open light-pink";
    }

    return (
      <div className={sideBar}>
        {/* ----- Start Sidebar Logo and cancel section ----- */}
        <div className="d-flex justify-content-between mb-4">
          <h2>LOGO</h2>
          <button
            onClick={this.props.sideBarToggle}
            className="btn shadow-none "
          >
            <img src="assets/cross-sign.svg" />
          </button>
        </div>
        {/* ----- End Sidebar Logo and cancel section ----- */}
        {/* ----- Start Sidebar Nav Links ----- */}
        <Link to="/" className="text-decoration-none" style={{ color: "black" }}>
          <div className="py-2">
            <h5 className="fw-bold">Home</h5>
          </div>
        </Link>
        {/* ----- Start Shopmenu Dropdown ----- */}
        <div className="mobile-shop-menu">
          <div className="d-flex justify-content-between py-2">
            <h5 className="fw-bold">Shop</h5>
            <button className="btn shadow-none ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down text-light-brown d-arrow"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </button>
          </div>
          {/* Nested Dropdown */}
          <div className="mobile-dropdown-shop-menu">
            <div className="mobile-nested-shop-menu">
              <div className="d-flex justify-content-between py-2">
                <h6>Flower</h6>
                <button className="btn shadow-none ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down text-light-brown n-arrow"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                </button>
              </div>
              <div className="mobile-nested-dropdown-shop-menu">
                <Link
                  to="/flowers"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  <div className="py-1">
                    <h6>Flower</h6>
                  </div>
                </Link>
                <Link
                  to="#"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  <div className="py-1">
                    <h6>Cakes</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mobile-nested-shop-menu">
              <div className="d-flex justify-content-between py-2">
                <h6>Cakes</h6>
                <button className="btn shadow-none ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down text-light-brown n-arrow"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                </button>
              </div>
              <div className="mobile-nested-dropdown-shop-menu">
                <Link
                  to="/flowers"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  <div className="py-1">
                    <h6>Flower</h6>
                  </div>
                </Link>
                <Link
                  to="#"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  <div className="py-1">
                    <h6>Cakes</h6>
                  </div>
                </Link>
              </div>
            </div>
            <Link className="text-decoration-none" style={{ color: "black" }}>
              <div className="py-2">
                <h6>Chocolates</h6>
              </div>
            </Link>
            <Link className="text-decoration-none" style={{ color: "black" }}>
              <div className="py-2">
                <h6>Teddy</h6>
              </div>
            </Link>
            <Link
              to="/flowers"
              className="text-decoration-none"
              style={{ color: "black" }}
            >
              <div className="py-2">
                <h6>Flower</h6>
              </div>
            </Link>
            <Link className="text-decoration-none" style={{ color: "black" }}>
              <div className="py-2">
                <h6>Cakes</h6>
              </div>
            </Link>
            <Link className="text-decoration-none" style={{ color: "black" }}>
              <div className="py-2">
                <h6>Chocolates</h6>
              </div>
            </Link>
            <Link className="text-decoration-none" style={{ color: "black" }}>
              <div className="py-2">
                <h6>Teddy</h6>
              </div>
            </Link>
          </div>
        </div>
        {/* ----- End Shopmenu Dropdown ----- */}
        {/* ----- Start Profile Dropdown ----- */}
        <div className="mobile-shop-menu">
          <div className="d-flex justify-content-between py-2">
            <h5 className="fw-bold">Profile</h5>
            <button className="btn shadow-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down text-light-brown d-arrow"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </button>
          </div>
          {/* Nested Dropdown */}
          <div className="mobile-dropdown-shop-menu">
            <div className="mobile-nested-shop-menu">
              <div className="d-flex justify-content-between py-2">
                <h6>Flower</h6>
                <button className="btn shadow-none ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down text-light-brown n-arrow"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                </button>
              </div>
              <div className="mobile-nested-dropdown-shop-menu">
                <div className="py-1">
                  <h6>Flower</h6>
                </div>
                <div className="py-1">
                  <h6>Cakes</h6>
                </div>
              </div>
            </div>
            <div className="mobile-nested-shop-menu">
              <div className="d-flex justify-content-between py-2">
                <h6>Cakes</h6>
                <button className="btn shadow-none ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down text-light-brown n-arrow"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                </button>
              </div>
              <div className="mobile-nested-dropdown-shop-menu">
                <div className="py-1">
                  <h6>Flower</h6>
                </div>
                <div className="py-1">
                  <h6>Cakes</h6>
                </div>
              </div>
            </div>
            <div className="py-2">
              <h6>Chocolates</h6>
            </div>
            <div className="py-2">
              <h6>Teddy</h6>
            </div>
            <div className="py-2">
              <h6>Flower</h6>
            </div>
            <div className="py-2">
              <h6>Cakes</h6>
            </div>
            <div className="py-2">
              <h6>Chocolates</h6>
            </div>
            <div className="py-2">
              <h6>Teddy</h6>
            </div>
          </div>
        </div>
        {/* ----- End Profile Dropdown ----- */}
        <Link
          to="/about"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <div className="py-2">
            <h5 className="fw-bold">About</h5>
          </div>
        </Link>
        <Link
          to="/contact"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <div className="py-2">
            <h5 className="fw-bold">Contact</h5>
          </div>
        </Link>
        <Link
          to="/privacy"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <div className="py-2">
            <h5 className="fw-bold">Privacy</h5>
          </div>
        </Link>
        <Link
          to="/event"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <div className="py-2">
            <h5 className="fw-bold">Event</h5>
          </div>
        </Link>
        <div className="py-2">
          <h5 className="fw-bold" 
          onClick={()=>{
            this.setState({
            trackOrder: true
            }
            )
          }}
          >
            Track order
          </h5>
        </div>
        <div className="py-2">
          <h5 className="fw-bold" 
          onClick={()=>{
            this.setState({
            login: true
            })
          }}>
            Log out
          </h5>
        </div>
        {(this.state.login)?<LoginScreen showBlock={this.state.login} onClick={() => this.setState({login: false})}/>:''}
        {(this.state.trackOrder)?<TrackOrder showBlock={this.state.trackOrder} onClick={() => this.setState({trackOrder: false})}/>:''}
      </div>
    );
  }
}

export default SideBar;
