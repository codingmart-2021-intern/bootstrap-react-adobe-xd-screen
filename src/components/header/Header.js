import React, { Component } from "react";
import "./Header.css";
import HeaderTop from "./header-top/HeaderTop";
import Navbar from "./navbar/Navbar";
import MobileViewHeader from "./mobileViewHeader/MobileViewHeader";

class Header extends Component {

  constructor(props) {

    super(props);
    this.state = {
      sideBarToggleState: false,
    };

    this.SideBarToggel = this.SideBarToggel.bind(this);
  }

  // Toggle function mobile view side bar
  SideBarToggel() {

    this.setState((preState) => {
      return { sideBarToggleState: !preState.sideBarToggleState };
    });
<<<<<<< HEAD

=======
>>>>>>> 52f76b2c10f471114d0583b99a90ec1cbb313029
  }

  render() {
    return (
      <div className="light-pink p-0 m-0">
        {/* ----- Start Header in Desktop view ----- */}
        <div className="desktop-view-header">
          <div className="w-90 mx-auto">
            <HeaderTop />
          </div>
          <hr className="hr-dark-pink" ></hr>
          <div className="w-90 mx-auto">
            <Navbar />
          </div>
        </div>
        {/* ----- End Header in Desktop view ----- */}
        {/* ----- Start Header in Mobile view ----- */}
        <div className="mobile-view-header">
          <MobileViewHeader
            sideBarToggle={this.SideBarToggel}
            sideBarToggleState={this.state.sideBarToggleState}
          />
        </div>
        {/* ----- End Header in Mobile view ----- */}
      </div>
    );
  }
}

export default Header;
