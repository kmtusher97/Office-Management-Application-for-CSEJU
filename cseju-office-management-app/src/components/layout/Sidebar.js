import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";

import SidebarRouting from "../../route/SidebarRouting";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathnameComponents: window.location.pathname.split("/")
    };
  }
  render() {
    return (
      <Nav
        variant="pills"
        defaultActiveKey={
          "/" +
          this.state.pathnameComponents[1] +
          "/" +
          this.state.pathnameComponents[2]
        }
        className="sidebar flex-column shadow p-2 mb-1 bg-white rounded "
      >
        <SidebarRouting />
      </Nav>
    );
  }
}

export default Sidebar;
