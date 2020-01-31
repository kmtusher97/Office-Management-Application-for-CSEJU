import React, { Component } from "react";
import { Card } from "react-bootstrap";
import FormSectionMenu from "./FormSectionMenu";

import AppData from "../../AppData";
import { Table } from "react-bootstrap";

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
    let tempTable = this.state.table;
    tempTable.title = event.target.value;
    this.setState({ textArea: tempTable });
  };

  onChangeHandlerForFieldName = event => {
    let id = event.target.id.split("_")[1];
    let tempTable = this.state.table;
    tempTable.fields[id] = event.target.value;
    this.setState({
      table: tempTable
    });
  };

  addFieldIntoTable = event => {
    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/${this.state.table.tableId}/table/add_field`;

    fetch(url)
      .then(res => res.json())
      .then(result =>
        this.setState({
          table: result.courseInputFormSections[this.state.index].table
        })
      );

    event.preventDefault();
  };

  /** auto save changes */
  onBlurHandler = event => {
    let tmpCourseInputForm = this.state.courseInputForm;
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

  deleteFieldFromTable = event => {
    console.log(event.target);
    event.preventDefault();
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
              onBlur={this.onBlurHandler}
            />
          </div>
          <div
            style={{
              padding: "5px",
              paddingBottom: "0px"
            }}
          >
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  {this.state.table.fields.map((field, fieldIdx) => (
                    <td key={"field_" + fieldIdx}>
                      <div>
                        <input
                          id={this.state.table.tableId + "_" + fieldIdx}
                          type="text"
                          className="form-control"
                          value={field}
                          onChange={this.onChangeHandlerForFieldName}
                          onBlur={this.onBlurHandler}
                          style={{ fontSize: "11px" }}
                        />
                      </div>
                      <div>
                        <button
                          style={{
                            border: "none",
                            padding: 0,
                            background: "none"
                          }}
                        >
                          <span>
                            <i
                              id={fieldIdx}
                              onClick={this.deleteFieldFromTable}
                              className="fa fa-trash"
                              style={{ color: "red" }}
                            ></i>
                          </span>
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={this.state.table.fields.length}>
                    <div className="col-sm-2">
                      <button
                        onClick={this.addFieldIntoTable}
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "green"
                        }}
                      >
                        <span>
                          <i
                            className="fa fa-plus"
                            style={{ color: "white" }}
                          ></i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
          <FormSectionMenu
            menubarData={{
              syllabusName: this.state.syllabusName,
              courseTypeName: this.state.courseTypeName,
              contentId: this.state.table.tableId,
              selectedContent: "Table"
            }}
            deleteFormSectionHandler={this.props.deleteFormSectionHandler}
            handleSelector={this.props.handleSelector}
          />
        </form>
      </Card>
    );
  }
}

export default FormSectionTable;
