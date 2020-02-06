import React, { Component } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
        <Row style={{ paddingTop: "0px" }}>
          <Col md={12} style={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <hr
              style={{
                border: "1px solid gray",
                width: "100%",
                paddingTop: "0px",
                paddingBottom: "0px"
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col md={8}></Col>
          <Col md={2}>
            <Button
              id={this.props.menubarData.contentId}
              size="sm"
              variant="danger"
              onClick={this.props.deleteFormSectionHandler}
              style={{ height: "22px", width: "22px", padding: "0px" }}
            >
              <span>
                <FontAwesomeIcon
                  id={this.props.menubarData.contentId}
                  icon={faTrash}
                />
              </span>
            </Button>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Control
                as="select"
                size="sm"
                id={"contentSelector_" + this.props.menubarData.contentId}
                defaultValue={this.state.selectedContentByUser}
                onChange={this.props.handleSelector}
                style={{
                  height: "22px",
                  width: "60px",
                  padding: "0px",
                  fontSize: "12px"
                }}
              >
                {contents.map((content, idx) => (
                  <option key={idx} value={content}>
                    {content}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormSectionMenu;
