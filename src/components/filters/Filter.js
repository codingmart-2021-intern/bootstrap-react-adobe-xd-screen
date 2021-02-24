import React, { Component } from "react";
import "./Filter.css";
import FilterPopup from "./filter-popup/FilterPopup";
import FilterBackDrop from "./filter-back-drop/FilterBackDrop";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterToggleState: false,
    };

    this.FilterToggel = this.FilterToggel.bind(this);
  }

  //Filter toggle function
  FilterToggel() {
    this.setState((preState) => {
      return { filterToggleState: !preState.filterToggleState };
    });
  }
  render() {
    // Filter Backdrop
    let filterBackDrop;
    if (this.state.filterToggleState) {
      filterBackDrop = <FilterBackDrop filterToggle={this.FilterToggel} />;
    }

    return (
      <div className="w-75 mx-auto pt-2 pb-4">
        {/* ----- Start Filter Popup ----- */}
        <FilterPopup
          filterToggle={this.FilterToggel}
          filterToggleState={this.state.filterToggleState}
        />
        {/* ----- End Filter Popup ----- */}
        {/* ----- Start Backdrop ----- */}
        {filterBackDrop}
        {/* ----- End Backdrop ----- */}
        {/* ----- Start Filter Buttons ----- */}
        <div className="d-flex justify-content-between">
          {/* ----- Start Left Toggle Filter */}
          <button
            onClick={this.FilterToggel}
            className="btn shadow-none bg-white btn-primary"
            style={{ borderColor: "black", color: "black" }}
          >
            Filter
          </button>
          {/* ----- End Left Toggle Filter */}
          {/* ----- Start Right Dropdown Filter */}
          <div className="filter-menu position-relative bg-white">
            <button
              className="btn shadow-none bg-white btn-primary mb-1"
              style={{ borderColor: "black", color: "black" }}
            >
              Sort By: <strong>Featured Items</strong>{" "}
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
            </button>
            <div className="filter-dropdown p-2">
              <div>
                <h5>Featured Items</h5>
              </div>
              <div>
                <h5>Popular Items</h5>
              </div>
              <div>
                <h5>Price: Low to High</h5>
              </div>
              <div>
                <h5>Price: High to Low</h5>
              </div>
            </div>
          </div>
          {/* ----- End Right Dropdown Filter */}
        </div>
        {/* ----- End Filter Buttons ----- */}
      </div>
    );
  }
}

export default Filter;
