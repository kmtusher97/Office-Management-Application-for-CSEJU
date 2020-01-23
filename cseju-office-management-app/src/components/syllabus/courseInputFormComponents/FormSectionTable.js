import React, { Component } from "react";
import { Card } from "react-bootstrap";
import FormSectionMenu from "./FormSectionMenu";

class FormSectionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusName: this.props.tableData.syllabusName,
      courseTypeName: this.props.tableData.courseTypeName,
      table: this.props.tableData.table
    };
  }

  responseOnChangeInForm(event) {
    console.log(event.target);
  }

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
              onChange={this.responseOnChangeInForm.bind(this)}
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
