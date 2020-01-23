import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";

import SidebarRouting from "../../route/SidebarRouting";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

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
        variant="tabs"
        defaultActiveKey={
          "/" +
          this.state.pathnameComponents[1] +
          "/" +
          this.state.pathnameComponents[2]
        }
        className="sidebar flex-column shadow p-2 mb-1 bg-white rounded "
      >
        <Row>
          <Col md={12}>
            <SidebarRouting />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <hr style={{ border: "1px solid gray", padding: "0px" }} />
          </Col>
        </Row>
      </Nav>
    );
  }
}

export default Sidebar;
