import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import AppData from "../../AppData";

const contents = ["TextArea", "Table"];

class FormSectionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContentByUser: this.props.menubarData.selectedContent
    };
  }

  handleSelector = event => {
    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.props.menubarData.syllabusName}/${this.props.menubarData.courseTypeName}/${this.props.menubarData.contentId}/change_selected/${event.target.value}`;

    fetch(url);
    window.location.reload();
  };

  deleteFormSection = event => {
    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.props.menubarData.syllabusName}/${this.props.menubarData.courseTypeName}/delete_section/${this.props.menubarData.contentId}`;

    fetch(url, { method: "delete" });
    window.location.reload();
  };

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
            <button disabled>
              <i
                id={"formSectionDeleteButton"}
                className="fa fa-trash"
                style={{ color: "red" }}
                onClick={this.deleteFormSection}
              ></i>
            </button>
          </Col>
          <Col md={2} style={{ paddingLeft: "0px", paddingRight: "10px" }}>
            <select
              defaultValue={this.state.selectedContentByUser}
              onChange={this.handleSelector}
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
