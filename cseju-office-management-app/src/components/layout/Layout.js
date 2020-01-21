import React, { Component } from "react";
import Routing from "../../route/Routing";
import Header from "./Header";
import { Row, Col } from "react-bootstrap";

const headerRowStyle = { padding: "5px" };

class Layout extends Component {
  render() {
    return (
      <div className="fluid">
        <Row style={headerRowStyle}>
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
