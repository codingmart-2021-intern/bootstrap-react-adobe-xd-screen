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

  SideBarToggel() {
    this.setState((preState) => {
      return { sideBarToggleState: !preState.sideBarToggleState };
    });
    console.log(this.state.sideBarToggleState);
  }

  render() {
    return (
      <div className="light-pink p-0 m-0">
        <div className="desktop-view-header">
          <div className="w-90 mx-auto">
            <HeaderTop />
          </div>
          <hr></hr>
          <div className="w-90 mx-auto">
            <Navbar />
          </div>
        </div>
        <div className="mobile-view-header">
          <MobileViewHeader
            sideBarToggle={this.SideBarToggel}
            sideBarToggleState={this.state.sideBarToggleState}
          />
        </div>
      </div>
    );
  }
}

export default Header;
