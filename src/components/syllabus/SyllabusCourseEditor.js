import React, { Component } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

const toolbarButtonStyle = {
  width: "28px",
  height: "28px",
  padding: "3px 3px",
  paddingTop: "1px",
  fontSize: "16px"
};

const buttonDivider = {
  width: "10px",
  height: "auto"
};

class SyllabusCourseEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "<course></course>"
    };
  }

  /**
   * toolbar functions
   */
  /************************ */
  bold = event => {
    event.preventDefault();
    this.courseEditor.contentWindow.document.execCommand("bold", false, null);
  };

  italic = event => {
    console.log(this.courseEditor.contentDocument.designMode);
    event.preventDefault();
    this.courseEditor.contentWindow.document.execCommand("italic", false, null);
  };

  underline = event => {
    event.preventDefault();
    this.courseEditor.contentWindow.document.execCommand(
      "underline",
      false,
      null
    );
  };
  /************************ */

  componentDidMount = () => {};

  fnc = () => {};

  render() {
    return (
      <Container>
        <form>
          <Row id="course-editor-toolbar">
            <Col md={12}>
              <ButtonGroup>
                <button onClick={this.bold} style={toolbarButtonStyle}>
                  B
                </button>
                <div style={buttonDivider}></div>
                <button onClick={this.italic} style={toolbarButtonStyle}>
                  <i>I</i>
                </button>
                <div style={buttonDivider}></div>
                <button onClick={this.underline} style={toolbarButtonStyle}>
                  <u>U</u>
                </button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row id="course-editor-div" style={{ padding: "5px 5px" }}>
            <Col md={12}>
              <textarea
                id="courseEditorTextArea"
                value={this.state.course}
                onChange={this.fnc}
                style={{ display: "none" }}
              ></textarea>
              <div
                title="courseEditor"
                id="courseEditor"
                name="courseEditor"
                contentEditable="true"
                style={{
                  border: "1px solid gray",
                  width: "100%",
                  height: "500px"
                }}
              ></div>
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}

export default SyllabusCourseEditor;
