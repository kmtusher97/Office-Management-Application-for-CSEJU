import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import FormSectionMenu from "./FormSectionMenu";

import AppData from "../../AppData";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

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
    event.preventDefault();

    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/${this.state.table.tableId}/table/add_field`;

    Axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          table: data.courseInputFormSections[this.state.index].table
        });
      });
  };

  /** auto save changes */
  onBlurHandler = event => {
    let tmpCourseInputForm = this.state.courseInputForm;
    tmpCourseInputForm.courseInputFormSections[
      this.state.index
    ].table = this.state.table;

    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/auto_save`;

    Axios.post(url, tmpCourseInputForm);
  };

  /**Delete Field */
  deleteFieldFromTable = event => {
    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${
      this.state.syllabusName
    }/${this.state.courseTypeName}/${
      this.state.table.tableId
    }/table/delete_field/${parseInt(event.currentTarget.id, 10) + 1}`;

    Axios.delete(url, {})
      .then(response => response.data)
      .then(data => {
        this.setState({
          table: data.courseInputFormSections[this.state.index].table
        });
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
              className="content-title"
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
            <Table bordered>
              <tbody>
                <tr>
                  {this.state.table.fields.map((field, fieldIdx) => (
                    <td key={"field_" + fieldIdx}>
                      <div>
                        <input
                          id={this.state.table.tableId + "_" + fieldIdx}
                          type="text"
                          className="content-table-field-title"
                          value={field}
                          onChange={this.onChangeHandlerForFieldName}
                          onBlur={this.onBlurHandler}
                        />
                      </div>

                      <div style={{ padding: "0px", paddingTop: "8px" }}>
                        <Button
                          id={fieldIdx}
                          size="sm"
                          variant="outline-danger"
                          onClick={this.deleteFieldFromTable}
                          style={{
                            height: "22px",
                            width: "22px",
                            padding: "0px",
                            float: "right"
                          }}
                        >
                          <span>
                            <FontAwesomeIcon
                              id={fieldIdx}
                              icon={faTrashAlt}
                              size="sm"
                            />
                          </span>
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={this.state.table.fields.length}>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={this.addFieldIntoTable}
                      style={{
                        height: "25px",
                        padding: "0px",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        float: "left"
                      }}
                    >
                      <span>
                        <FontAwesomeIcon icon={faPlusSquare} />
                      </span>
                      <b>{" Add Field"}</b>
                    </Button>
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
