import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react-dom"
import "./Navbar.css";

const Navbar = () => {
    const routePath = useLocation().pathname.split("/")[1]
    console.log(routePath);
  return (
    // Nav link section
    <Row className="px-0 pt-2 justify-content-md-center nav-row">
      <Col className="d-flex text-center flex-column p-0 m-0">
        <Link
          to="/"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          Home
        </Link>
        {routePath == "" && <div class="border-pink bg-skin_dark w-100 mt-3"></div>}
      </Col>
      <Col className="text-center p-0 m-0">
        <Link
          to="#"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <div className="shop-menu">
            <a>
              Shop{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down text-light-brown"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
            {/* ----- Start Shop mega menu drop down ----- */}
            <div className="dropdown-shop-menu container-fluid text-left light-pink">
              <Row>
                {/* ----- Start Mega List Column ----- */}
                <Col>
                  {/* ----- Start Mega Row 1 ----- */}
                  <Row>
                    <Col>
                      <div className="p-2">
                        <h4 className="fw-bold">Flowers</h4>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Hurricane{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Lanters</a>
                        </div>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Decorative Vases{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Bookends</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Garden Planters</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Ornament Stands</a>
                        </div>
                        <hr></hr>
                      </div>
                    </Col>
                    <Col>
                      <div className="p-2">
                        <h4 className="fw-bold">Flowers</h4>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Hurricane{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Lanters</a>
                        </div>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Decorative Vases{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Bookends</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Garden Planters</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Ornament Stands</a>
                        </div>
                        <hr></hr>
                      </div>
                    </Col>
                    <Col>
                      <div className="p-2">
                        <h4 className="fw-bold">Flowers</h4>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Hurricane{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Lanters</a>
                        </div>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Decorative Vases{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Bookends</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Garden Planters</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Ornament Stands</a>
                        </div>
                        <hr></hr>
                      </div>
                    </Col>
                    <Col>
                      <div className="p-2">
                        <h4 className="fw-bold">Flowers</h4>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Hurricane{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Lanters</a>
                        </div>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Decorative Vases{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Bookends</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Garden Planters</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Ornament Stands</a>
                        </div>
                        <hr></hr>
                      </div>
                    </Col>
                  </Row>
                  {/* ----- End Mega Row 1 ----- */}
                  {/* ----- Start Mega Row 2 ----- */}
                  <Row>
                    <Col>
                      <div className="p-2">
                        <h4 className="fw-bold">Flowers</h4>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Hurricane{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Lanters</a>
                        </div>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Decorative Vases{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Bookends</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Garden Planters</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Ornament Stands</a>
                        </div>
                        <hr></hr>
                      </div>
                    </Col>
                    <Col>
                      <div className="p-2">
                        <h4 className="fw-bold">Flowers</h4>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Hurricane{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Lanters</a>
                        </div>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Decorative Vases{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Bookends</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Garden Planters</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Ornament Stands</a>
                        </div>
                        <hr></hr>
                      </div>
                    </Col>
                    <Col>
                      <div className="p-2">
                        <h4 className="fw-bold">Flowers</h4>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Hurricane{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Lanters</a>
                        </div>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Decorative Vases{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Bookends</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Garden Planters</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Ornament Stands</a>
                        </div>
                        <hr></hr>
                      </div>
                    </Col>
                    <Col>
                      <div className="p-2">
                        <h4 className="fw-bold">Flowers</h4>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Hurricane{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Lanters</a>
                        </div>
                        {/* Nested Dropdown */}
                        <div className="py-2 dropdown-list-item">
                          <a>
                            Decorative Vases{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down text-light-brown"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                          <div className="nested-dropdown">
                            <div className="py-2 dropdown-list-item">
                              <a>Lanters</a>
                            </div>
                            <div className="py-2 dropdown-list-item">
                              <a>Bookends</a>
                            </div>
                          </div>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Bookends</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Garden Planters</a>
                        </div>
                        <div className="py-2 dropdown-list-item">
                          <a>Ornament Stands</a>
                        </div>
                        <hr></hr>
                      </div>
                    </Col>
                  </Row>
                  {/* ----- End Mega Row 2 ----- */}
                </Col>
                {/* ----- End Mega List Column ----- */}
                {/* ----- Start Mega Images Column ----- */}
                <Col md="auto">
                  <Row className="p-1">
                    <Col>
                      <img src="assets/Mask_Group.png" />
                    </Col>
                  </Row>
                  <Row className="p-1">
                    <Col>
                      <img src="assets/Mask_Group.png" />
                    </Col>
                  </Row>
                </Col>
                {/* ----- End Mega Images Column ----- */}
              </Row>
            </div>
            {/* ----- End Shop mega menu drop down ----- */}
          </div>
        </Link>
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="/flowers"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          Flowers
        </Link>
        {routePath == "flowers" && <div class="border-pink bg-skin_dark w-100 mt-3"></div>}
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="/cakes"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          Cakes
        </Link>
        {routePath == "cakes" && <div class="border-pink bg-skin_dark w-100 mt-3"></div>}
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="chocolates"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          Chocolates
        </Link>
        {routePath == "chocolates" && <div class="border-pink bg-skin_dark w-100 mt-3"></div>}
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="teddies"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          Teddy
        </Link>
        {routePath == "teddies" && <div class="border-pink bg-skin_dark w-100 mt-3"></div>}
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="/about"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          About
        </Link>
        {routePath == "about" && <div class="border-pink bg-skin_dark w-100 mt-3"></div>}
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="/privacy"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          Privacy
        </Link>
        {routePath == "privacy" && <div class="border-pink bg-skin_dark w-100 mt-3"></div>}
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="/contact"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          Contact
        </Link>
        {routePath == "contact" && <div class="border-pink bg-skin_dark  w-100 mt-3"></div>}
      </Col>
    </Row>
  );
};

export default Navbar;
