import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Layout.css";
import Routing from "../../route/Routing";
import Header from "./Header";
import Sidebar from "./Sidebar";

class Layout extends Component {
  render() {
    return (
      <div className="fluid">
        <Row className="header_container">
          <Col md={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Container className="sidebar_container">
              <Sidebar />
            </Container>
          </Col>
          <Col md={10}>
            <main className="main">
              <Routing />
            </main>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Layout;
