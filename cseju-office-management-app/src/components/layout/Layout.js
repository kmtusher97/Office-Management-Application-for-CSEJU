import React, { Component } from "react";
import "./Layout.css";
import Routing from "../../route/Routing";
import Header from "./Header";
import { Row, Col } from "react-bootstrap";

class Layout extends Component {
  render() {
    return (
      <div className="fluid">
        <Row className="header_container">
          <Col md="12">
            <Header />
          </Col>
        </Row>
        <main className="main">
          <Routing />
        </main>
      </div>
    );
  }
}

export default Layout;
