import React, { Component } from "react";
import { Card } from "react-bootstrap";
import FormSectionMenu from "./FormSectionMenu";

class FormSectionTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusName: this.props.textAreaData.syllabusName,
      courseTypeName: this.props.textAreaData.courseTypeName,
      textArea: this.props.textAreaData.textArea
    };
  }

  changeHandlerForTitle = event => {
    this.setState({
      textArea: {
        title: event.target.value
      }
    });
  };

  render() {
    return (
      <Card key={this.props.textAreaData.textAreaId}>
        <form>
          <div
            style={{
              paddingTop: "5px",
              paddingLeft: "5px",
              paddingRight: "5px",
              paddingBottom: "0px"
            }}
          >
            <input
              type="text"
              className="form-control"
              value={this.state.textArea.title}
              onChange={this.changeHandlerForTitle}
            />
          </div>
          <div
            style={{
              padding: "5px",
              paddingBottom: "0px"
            }}
          >
            <textarea
              style={{ fontSize: "12px" }}
              type="text"
              className="form-control"
              value={this.state.textArea.textBody}
              disabled
            />
          </div>
          <FormSectionMenu
            menubarData={{
              syllabusName: this.state.syllabusName,
              courseTypeName: this.state.courseTypeName,
              contentId: this.state.textArea.textAreaId,
              selectedContent: "TextArea"
            }}
          />
        </form>
      </Card>
    );
  }
}
export default FormSectionTextArea;
