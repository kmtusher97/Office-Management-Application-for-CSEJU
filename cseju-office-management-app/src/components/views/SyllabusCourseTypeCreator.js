import React, { Component } from "react";
import CourseTypeTable from "../syllabus/CourseTypeTable";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class SyllabusCourseTypeCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusName: "syl1",
      newCourseTypeName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ newCourseTypeName: event.target.value });
  }

  handleSubmit(event) {
    let url = `http://localhost:8081/syllabus/course_type/edit/${this.state.syllabusName}/add/course_type/${this.state.newCourseTypeName}`;

    fetch(url);
    window.location.reload();
    event.preventDefault();
  }

  render() {
    return (
      <Container style={{ paddingTop: "15px" }}>
        <Row>
          <Col md={8}>
            <CourseTypeTable syllabusName={this.state.syllabusName} />
          </Col>
        </Row>

        <Row style={{ paddingTop: "30px" }}>
          <Col md={4}>
            <Card>
              <Form style={{ padding: "10px" }} onSubmit={this.handleSubmit}>
                <Form.Group size="sm">
                  <Form.Label>
                    <b>Add New Course Type</b>
                  </Form.Label>
                  <Form.Control
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
                  <FontAwesomeIcon icon={faPlus} /> Course Type
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
