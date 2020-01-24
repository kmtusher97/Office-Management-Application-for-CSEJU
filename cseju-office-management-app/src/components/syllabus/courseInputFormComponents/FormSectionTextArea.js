import React, { Component } from "react";
import { Card } from "react-bootstrap";
import FormSectionMenu from "./FormSectionMenu";

import AppData from "../../AppData";

class FormSectionTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusName: this.props.textAreaData.syllabusName,
      courseTypeName: this.props.textAreaData.courseTypeName,
      courseInputForm: this.props.textAreaData.courseInputForm,
      textArea: this.props.textAreaData.textArea,
      index: this.props.textAreaData.index
    };
  }

  onChangeHandlerForTitle = event => {
    var tempTextArea = this.state.textArea;
    tempTextArea.title = event.target.value;
    this.setState({ textArea: tempTextArea });
  };

  /** auto save changes */
  onBlurHandlerForTitle = event => {
    var tmpCourseInputForm = this.state.courseInputForm;
    tmpCourseInputForm.courseInputFormSections[
      this.state.index
    ].textArea = this.state.textArea;

    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/auto_save`;

    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tmpCourseInputForm)
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
              onChange={this.onChangeHandlerForTitle}
              onBlur={this.onBlurHandlerForTitle}
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
