import React, { Component } from "react";
import "./FilterPopup.css";

class FilterPopup extends Component {
  render() {
    // Filter sidebar toggle className
    let filter = "filter-side-bar";
    if (this.props.filterToggleState) {
      filter = "filter-side-bar open";
    }

    return (
      // Filter content
      <div className={filter}>
          {/* Filter Nudge */}
        <div className="topnudge"></div>
        {/* ----- Start Filter Heading ----- */}
        <div className="d-flex px-3 pt-4 justify-content-between">
          <h3 className="font-weight-bold">Filter</h3>
          <button
            onClick={this.props.filterToggle}
            className="btn shadow-none "
          >
            <img src="assets/cross-sign.svg" />
          </button>
        </div>
        {/* ----- End Filter Heading ----- */}
        <hr className="hr-dark-pink"></hr>
        {/* ----- Start Filter Items ----- */}
        <div className=" px-3 pt-2 ">
          <div className="w-100">
            <p
              className="inline-block p-2 mr-2"
              style={{
                display: "inline-block",
                backgroundColor: "#F2F2F2",
                borderRadius: "5px",
              }}
            >
              $1001 - $1500{" "}
              <button className="btn p-0 m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </p>
            <p
              className="inline-block p-2 mr-1"
              style={{
                display: "inline-block",
                backgroundColor: "#F2F2F2",
                borderRadius: "5px",
              }}
            >
              $1001 - $1500{" "}
              <button className="btn p-0 m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </p>
          </div>

          <p
            className="inline-block p-1 my-3 mx-0"
            style={{ display: "inline-block", textDecoration: "underline" }}
          >
            Clear All
          </p>
          <div className="w-100 my-3">
            <h5>
              <strong>Price</strong>
            </h5>
            <label class="lable-container">
              $0 - $500
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $501 - $1000
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $1001 - $1500
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $1501 - $2000
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $2000 {">"}
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="w-100 my-3">
            <h5>
              <strong>Price</strong>
            </h5>
            <label class="lable-container">
              $0 - $500
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $501 - $1000
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $1001 - $1500
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $1501 - $2000
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $2000 {">"}
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="w-100 my-3">
            <h5>
              <strong>Price</strong>
            </h5>
            <label class="lable-container">
              $0 - $500
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $501 - $1000
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $1001 - $1500
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $1501 - $2000
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="lable-container">
              $2000 {">"}
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="w-100 my-5">
            <button
              style={{
                float: "left",
                color: "#E2886C",
                border: "1px solid #E2886C",
                padding: "5px 15px",
                borderRadius: "5px",
              }}
            >
              CLEAR ALL
            </button>
            <button
              style={{
                float: "right",
                backgroundColor: "#E2886C",
                border: "1px solid #E2886C",
                padding: "5px 15px",
                borderRadius: "5px",
              }}
            >
              APPLY FILTER
            </button>
          </div>
        </div>
        {/* ----- End Filter Items ----- */}
      </div>
    );
  }
}

export default FilterPopup;
