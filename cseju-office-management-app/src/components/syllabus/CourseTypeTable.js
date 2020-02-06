import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import AppData from "../AppData";
import Axios from "axios";

const actionButtonStyle = {
  paddingTop: "0px",
  height: "23px",
  width: "30px"
};

export default class CourseTypeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseTypeNames: []
    };

    this.deleteCourseType = this.deleteCourseType.bind(this);
  }

  componentDidMount() {
    /** returns all the course type names */
    let url = `${AppData.restApiBaseUrl}/syllabus/course_type/${this.props.syllabusName}/get/all`;

    Axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          courseTypeNames: data
        });
      });
  }

  deleteCourseType(event) {
    event.preventDefault();
    let url = `${AppData.restApiBaseUrl}/syllabus/course_type/edit/${
      this.props.syllabusName
    }/delete/course_type/${this.state.courseTypeNames[event.currentTarget.id]}`;

    Axios.delete(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          courseTypeNames: data
        });
      });
  }

  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Type</th>

            <th>Edit</th>
            <th className="text-danger">Delete</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {this.state.courseTypeNames.map((courseTypeName, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{courseTypeName}</td>
              <td>
                <Link
                  id={idx}
                  to={
                    "/syllabus/course_types/design_form/" +
                    this.props.syllabusName +
                    "/" +
                    courseTypeName
                  }
                >
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    style={actionButtonStyle}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  id={idx}
                  size="sm"
                  variant="danger"
                  style={actionButtonStyle}
                  onClick={this.deleteCourseType}
                >
                  <FontAwesomeIcon id={idx} icon={faTrashAlt} />
                </Button>
              </td>
              <td>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  style={{ paddingTop: "0px", height: "23px", width: "33px" }}
                >
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
