import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavDropdown, NavItem, Image } from "react-bootstrap";

import headerData from "./HeaderData";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="lg" variant="light">
        <Navbar.Brand href={headerData.brandLink}>
          <Image
            src={headerData.brandLogo}
            style={{
              width: 40,
              height: 40,
              alt: "Jahangirnagar University Logo"
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
          <Nav
            className="mr-auto"
            variant="tabs"
            defaultActiveKey={window.location.pathname}
          >
            {headerData.menus.map((menu, idxHeaderMenu) => (
              <NavItem key={idxHeaderMenu}>
                <Nav.Link
                  href={menu.link}
                  eventKey={menu.link}
                  style={{ fontColor: "blue" }}
                >
                  {menu.name}
                </Nav.Link>
              </NavItem>
            ))}
          </Nav>
          <Nav>
            {headerData.rightSideMenus.map((menu, idxRgtHeaderMenus) => (
              <NavItem key={idxRgtHeaderMenus}>
                <Nav.Link to={menu.link} style={{ paddingRight: "50px" }}>
                  <FontAwesomeIcon icon={menu.icon} size="lg" />
                </Nav.Link>
              </NavItem>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
