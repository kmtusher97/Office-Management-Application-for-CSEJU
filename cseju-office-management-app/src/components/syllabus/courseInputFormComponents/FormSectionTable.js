import React, { Component } from "react";
import { Card } from "react-bootstrap";
import FormSectionMenu from "./FormSectionMenu";

import AppData from "../../AppData";

class FormSectionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusName: this.props.tableData.syllabusName,
      courseTypeName: this.props.tableData.courseTypeName,
      courseInputForm: this.props.tableData.courseInputForm,
      table: this.props.tableData.table,
      index: this.props.tableData.index
    };
  }

  onChangeHandlerForTitle = event => {
    var tempTable = this.state.table;
    tempTable.title = event.target.value;
    this.setState({ textArea: tempTable });
  };

  /** auto save changes */
  onBlurHandlerForTitle = event => {
    var tmpCourseInputForm = this.state.courseInputForm;
    tmpCourseInputForm.courseInputFormSections[
      this.state.index
    ].table = this.state.table;

    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/auto_save`;

    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tmpCourseInputForm)
    });
  };

  render() {
    return (
      <Card key={this.props.tableData.tableId}>
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
              value={this.state.table.title}
              onChange={this.onChangeHandlerForTitle}
              onBlur={this.onBlurHandlerForTitle}
            />
          </div>
          <div
            style={{
              padding: "5px",
              paddingBottom: "0px"
            }}
          ></div>
          <FormSectionMenu
            menubarData={{
              syllabusName: this.state.syllabusName,
              courseTypeName: this.state.courseTypeName,
              contentId: this.state.table.tableId,
              selectedContent: "Table"
            }}
          />
        </form>
      </Card>
    );
  }
}

export default FormSectionTable;
