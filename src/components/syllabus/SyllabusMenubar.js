import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import syllabusMenus from "./SyllabusMenus";

class SyllabusMenubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathnameComponents: window.location.pathname.split("/")
    };
  }

  render() {
    return (
      <Nav
        className="flex-column"
        variant="tabs"
        defaultActiveKey={
          "/" +
          this.state.pathnameComponents[1] +
          "/" +
          this.state.pathnameComponents[2]
        }
      >
        {syllabusMenus.menus.map((menu, idx) => (
          <Nav.Link key={idx} href={menu.link} eventKey={menu.link}>
            {menu.name}
          </Nav.Link>
        ))}
      </Nav>
    );
  }
}

export default SyllabusMenubar;
