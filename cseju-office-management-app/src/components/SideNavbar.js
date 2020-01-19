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
