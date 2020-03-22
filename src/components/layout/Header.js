import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Image } from "react-bootstrap";

import headerData from "./HeaderData";

const headerStyle = {
  border: "2px solid #d1cfcb",
  borderRadius: "15px",
  fontSize: "11px",
  fontFamily: "Arial, Helvetica, sans-serif"
};

class Header extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="shadow p-2 mb-1 bg-white rounded"
        style={headerStyle}
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

        <Navbar.Collapse id="responsive-navbar-nav">
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
              <Nav.Link
                key={idxHeaderMenu}
                href={menu.link}
                eventKey={menu.link}
                style={{ fontSize: "12px" }}
              >
                {menu.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            {headerData.rightSideMenus.map((menu, idxRgtHeaderMenus) => (
              <Nav.Link
                key={idxRgtHeaderMenus}
                href={menu.link}
                style={{ paddingRight: "50px" }}
              >
                <FontAwesomeIcon icon={menu.icon} size="lg" />
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
