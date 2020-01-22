import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from "@fortawesome/free-solid-svg-icons";

export default class CourseTypeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseTypeNames: [],
      selectedCourseTypeId: "0"
    };

    this.deleteCourseType = this.deleteCourseType.bind(this);
  }

  componentDidMount() {
    /** returns all the course type names */
    let url = `http://localhost:8081/syllabus/course_type/${this.props.syllabusName}/get/all`;

    fetch(url)
      .then(res => res.json())
      .then(result =>
        this.setState({
          courseTypeNames: result
        })
      );
  }

  deleteCourseType(event) {
    let url = `http://localhost:8081/syllabus/course_type/edit/${
      this.props.syllabusName
    }/delete/course_type/${this.state.courseTypeNames[event.target.id]}`;

    console.log(url);
    fetch(url, { method: "delete" }); /**method default GET */
    window.location.reload();
    event.preventDefault();
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
                <button id={idx}>
                  <FontAwesomeIcon icon={faPen} color="#3385ff" />
                </button>
              </td>
              <td>
                <button id={idx} onClick={this.deleteCourseType}>
                  <FontAwesomeIcon icon={faTrash} color="red" />
                </button>
              </td>
              <td>
                <button>
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
