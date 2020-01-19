import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

var SideNavbarData = {
  menuList: [
    {
      menuName: "Routine",
      menuLink: "routine"
    },
    {
      menuName: "Results",
      menuLink: "routine"
    },
    {
      menuName: "Syllabus",
      menuLink: "routine"
    }
  ]
};

var NavItemStyle = {
  "font-weight": "500",
  color: "#333"
};

var SideNavbarStyle = {
  sidebar: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "100",
    padding: "0",
    boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.1)"
  },
  sidebar_sticky: {
    position: "sticky",
    top: "48px",
    height: "calc(100vh - 48px)",
    paddingTop: "0.5rem",
    overflowX: "hidden",
    overflowY: "auto"
  }
};

class SideNavbar extends Component {
  render() {
    return (
      <Navbar
        style={SideNavbarStyle}
        bg="light"
        variant="light"
        className="col-sm-2 d-none d-md-block bg-light sidebar"
      >
        <Nav className="flex-column">
          {SideNavbarData.menuList.map(menu => (
            <Nav.Item>
              <Link style={NavItemStyle} to={menu.menuLink}>
                {menu.menuName}
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar>
    );
  }
}

export default SideNavbar;
