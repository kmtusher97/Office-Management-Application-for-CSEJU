import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";

import headerData from "./HeaderData";

class Header extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        className="shadow p-2 mb-1 bg-white rounded header"
      >
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
            className="mr-auto "
            variant="tabs"
            defaultActiveKey={
              "/" +
              window.location.pathname.match(
                window.location.pathname.split("/")[1]
              )[0]
            }
          >
            {headerData.menus.map((menu, idxHeaderMenu) => (
              <NavItem key={idxHeaderMenu} className="left_nav">
                <Nav.Link href={menu.link} eventKey={menu.link}>
                  {menu.name}
                </Nav.Link>
              </NavItem>
            ))}
          </Nav>
          <Nav>
            {headerData.rightSideMenus.map((menu, idxRgtHeaderMenus) => (
              <NavItem key={idxRgtHeaderMenus}>
                <Nav.Link href={menu.link} style={{ paddingRight: "50px" }}>
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
