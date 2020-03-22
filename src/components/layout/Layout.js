import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Routing from "../../route/Routing";
import Header from "./Header";
import Sidebar from "./Sidebar";

const footerStyle = {
  border: "2px solid #d1cfcb",
  borderRadius: "15px",
  fontSize: "11px",
  fontFamily: "Arial, Helvetica, sans-serif"
};

const mainDivStyle = {
  border: "2px solid #d1cfcb",
  borderRadius: "15px",
  height: "700px",
  fontSize: "11px",
  fontFamily: "Arial, Helvetica, sans-serif"
};

class Layout extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Row>
              <Col md={12}>
                <Sidebar />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <hr style={{ border: "1px solid gray", padding: "0px" }} />
              </Col>
            </Row>
          </Col>
          <Col md={10}>
            <div
              className="fluid shadow p-2 mb-1 bg-white rounded"
              style={mainDivStyle}
            >
              <Routing />
            </div>
          </Col>
        </Row>
        <Container
          className="fluid shadow p-2 mb-1 bg-white rounded"
          style={footerStyle}
        >
          <p>Footer</p>
        </Container>
      </Container>
    );
  }
}

export default Layout;
