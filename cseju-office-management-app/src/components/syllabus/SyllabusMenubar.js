import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";

import syllabusMenus from "./SyllabusMenus";

class SyllabusMenubar extends Component {
  render() {
    return syllabusMenus.menus.map((menu, idx) => (
      <NavItem key={idx}>
        <Nav.Link href={menu.link} eventKey={menu.link}>
          {menu.name}
        </Nav.Link>
      </NavItem>
    ));
  }
}

export default SyllabusMenubar;
