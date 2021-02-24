import { Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    // Nav link section
    <Row className="px-0 pt-2 justify-content-md-center nav-row">
      <Col className="d-flex flex-column justify-content-center p-0 m-0">
        <Link to="#" className="d-flex w-100 text-decoration-none">
          <div
            className="mx-auto align-items-center"
            style={{ color: "black" }}
          >
            Home
            <div className="dark-pink border-pink w-100 mt-3"></div>
          </div>
        </Link>
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
                  fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
                                fill-rule="evenodd"
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
          to="#"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <a>Flowers</a>
        </Link>
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="#"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <a>Cakes</a>
        </Link>
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="#"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <a>Chocolates</a>
        </Link>
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="#"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <a>Teddy</a>
        </Link>
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="#"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <a>Occassions</a>
        </Link>
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="#"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <a>Relations</a>
        </Link>
      </Col>
      <Col className="text-center  p-0 m-0">
        <Link
          to="#"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          <a>Combos</a>
        </Link>
      </Col>
    </Row>
  );
};

export default Navbar;