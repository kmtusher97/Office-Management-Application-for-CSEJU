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
          <Col md={10} style={{ paddingLeft: "0px", paddingRight: "30px" }}>
            <main className="main ">
              <div className="workspace fluid shadow p-2 mb-1 bg-white rounded">
                <Routing />
              </div>
            </main>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Layout;
