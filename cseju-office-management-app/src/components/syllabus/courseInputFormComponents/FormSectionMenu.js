import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

const contents = ["TextArea", "Table"];

class FormSectionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContentByUser: this.props.menubarData.selectedContent
    };
  }

  render() {
    return (
      <Container>
        <Row
          style={{
            paddingTop: "0px",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingBottom: "0px"
          }}
        >
          <Col md={12}>
            <hr style={{ border: "1px solid gray", padding: "0px" }} />
          </Col>
        </Row>

        <Row style={{ paddingBottom: "5px", alignContent: "right" }}>
          <Col md={8}></Col>
          <Col md={2}>
            <button
              className="btn btn-md"
              style={{ border: "none", padding: 0, background: "none" }}
            >
              <span>
                <i
                  id={this.props.menubarData.contentId}
                  className="fa fa-trash"
                  style={{ color: "red" }}
                  onClick={this.props.deleteFormSectionHandler}
                ></i>
              </span>
            </button>
          </Col>
          <Col md={2} style={{ paddingLeft: "0px", paddingRight: "10px" }}>
            <select
              id={this.props.menubarData.contentId}
              defaultValue={this.state.selectedContentByUser}
              onChange={this.props.handleSelector}
              style={{ position: "relative" }}
            >
              {contents.map((content, idx) => (
                <option key={idx} value={content}>
                  {content}
                </option>
              ))}
            </select>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormSectionMenu;
