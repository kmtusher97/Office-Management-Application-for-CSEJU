import React, { Component } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

class CourseInputFormCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusName: this.props.match.params.syllabusName,
      courseTypeName: this.props.match.params.courseTypeName,
      courseInputForm: null
    };
  }

  componentDidMount() {
    /** Get Form Structure JSON */
    let url = `http://localhost:8081/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/get_form`;

    fetch(url)
      .then(res => res.json())
      .then(result =>
        this.setState({
          courseInputForm: result
        })
      );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Card>
              <div style={{ paddingTop: "5px" }}>
                <h6>Course Input Form for {this.state.courseTypeName}</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row style={{ paddingTop: "10px" }}>
          <Col md={12}>
            <Card></Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CourseInputFormCreator;
