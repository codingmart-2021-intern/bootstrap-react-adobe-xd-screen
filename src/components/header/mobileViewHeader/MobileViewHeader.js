import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SideBar from "./sideBar/SideBar";

class MobileViewHeader extends Component {
  render() {
    return (
      <div className="container p-4">
        <SideBar
          show={this.props.sideBarToggleState}
          sideBarToggle={this.props.sideBarToggle}
        />
        <Row>
          <Col>
            <button className="btn shadow-none">
              <img
                src="/assets/11008563111574330929.svg"
                onClick={this.props.sideBarToggle}
              />
            </button>
          </Col>
          <Col className="text-center align-baseline">
            <h2>LOGO</h2>
          </Col>
          <Col>
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
      </div>
    );
  }
}

export default MobileViewHeader;
