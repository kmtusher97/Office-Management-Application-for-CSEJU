import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Table
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faPen,
  faTrashAlt,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import Appdata from "../AppData";
import Axios from "axios";
import { Link } from "react-router-dom";

const actionButtonStyle = {
  paddingTop: "0px",
  height: "23px",
  width: "30px"
};

class SyllabusCourseTypeCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusName: "syl1",
      courseTypeNames: [],
      newCourseTypeName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteCourseType = this.deleteCourseType.bind(this);
  }

  componentDidMount() {
    /** returns all the course type names */
    let url = `${Appdata.restApiBaseUrl}/syllabus/course_type/${this.state.syllabusName}/get/all`;

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
    let url = `${Appdata.restApiBaseUrl}/syllabus/course_type/edit/${
      this.state.syllabusName
    }/delete/course_type/${this.state.courseTypeNames[event.currentTarget.id]}`;

    Axios.delete(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          courseTypeNames: data
        });
      });
  }

  handleChange(event) {
    this.setState({ newCourseTypeName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = `${Appdata.restApiBaseUrl}/syllabus/course_type/edit/${this.state.syllabusName}/add/course_type/${this.state.newCourseTypeName}`;

    Axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          courseTypeNames: data,
          newCourseTypeName: ""
        });
      });
  }

  render() {
    return (
      <Container style={{ paddingTop: "15px" }}>
        <Row>
          <Col md={12}>
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
                          this.state.syllabusName +
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
                        style={{
                          paddingTop: "0px",
                          height: "23px",
                          width: "33px"
                        }}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row style={{ paddingTop: "30px" }}>
          <Col md={2}></Col>
          <Col md={7}>
            <Card>
              <Form style={{ padding: "10px" }} onSubmit={this.handleSubmit}>
                <Form.Group size="sm">
                  <Form.Label>
                    <b>Add New Course Type</b>
                  </Form.Label>
                  <Form.Control
                    key={"newCourseTypeNameInput"}
                    size="sm"
                    type="text"
                    placeholder="New Course Type"
                    required
                    style={{ fontSize: "12px" }}
                    value={this.state.newCourseTypeName}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button
                  size="sm"
                  variant="success"
                  type="submit"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  <FontAwesomeIcon icon={faPlusCircle} /> Course Type
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SyllabusCourseTypeCreator;
