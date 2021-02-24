import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SideBar from "./sideBar/SideBar";
import HeaderBackDrop from "./header-back-drop/HeaderBackDrop";

class MobileViewHeader extends Component {

  render() {

    // Backdrop of sidebar
    let headerBackDrop;
    if (this.props.sideBarToggleState) {
      headerBackDrop = <HeaderBackDrop sideBarToggle={this.props.sideBarToggle} />;
    }

    return (
      // Mobile view side bar contents
      <div className="container p-4">
        {/* ----- Start Sidebar with nav items ----- */}
        <SideBar
          show={this.props.sideBarToggleState}
          sideBarToggle={this.props.sideBarToggle}
        />
        {/* ----- End Sidebar with nav items ----- */}
        {/* ----- Start Backdrop ----- */}
        {headerBackDrop}
        {/* ----- End Backdrop ----- */}
        <Row>
          <Col>
            {/* Toggle bar */}
            <button className="btn shadow-none">
              <img
                src="/assets/11008563111574330929.svg"
                onClick={this.props.sideBarToggle}
              />
            </button>
          </Col>
          <Col className="text-center align-baseline">
            {/* Logo */}
            <h2>LOGO</h2>
          </Col>
          <Col>
            {/* Cart icon */}
            <div className="d-flex justify-content-end">
              <Link to="#">
                <button className="dark-pink btn shadow-none rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag align-baseline mt-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </button>
              </Link>
            </div>
          </Col>
        </Row>
        {/* Search bar */}
        <Row>
          <Col className="pt-2">
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
        </Row>
      </div>
    );
  }
}

export default MobileViewHeader;
