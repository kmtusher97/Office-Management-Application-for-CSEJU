import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

const TopNavbarData = {
  brand: "CSE JU",
  logo: "logo512.png",
  menus: [
    {
      menuName: "Profile",
      menuLink: "/profile"
    }
  ]
};

class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">{TopNavbarData.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {TopNavbarData.menus.map(menu => (
              <Nav.Link href={menu.menuLink}>{menu.menuName}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
