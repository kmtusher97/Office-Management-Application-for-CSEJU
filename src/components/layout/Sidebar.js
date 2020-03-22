import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import SidebarRouting from "../../route/SidebarRouting";

const sidebarStyle = {
  border: "2px solid #d1cfcb",
  borderRadius: "15px",
  fontSize: "11px",
  fontFamily: "Arial, Helvetica, sans-serif"
};

class Sidebar extends Component {
  render() {
    return (
      <Navbar
        className="shadow p-2 mb-1 bg-white rounded "
        style={sidebarStyle}
      >
        <SidebarRouting />
      </Navbar>
    );
  }
}

export default Sidebar;
