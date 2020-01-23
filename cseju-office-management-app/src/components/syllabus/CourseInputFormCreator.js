import React, { Component } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import FormSection from "./courseInputFormComponents/FormSection";

class CourseInputFormCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusName: this.props.match.params.syllabusName,
      courseTypeName: this.props.match.params.courseTypeName,
      courseInputForm: { courseInputFormSections: [] }
    };
  }

  componentDidMount() {
    /** Get Form Structure JSON */
    let url = `http://localhost:8081/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/get_form`;
    console.log(url);
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
          <Col md={1}></Col>
          <Col md={10}>
            <Card>
              <div style={{ paddingTop: "5px" }}>
                <h6>Course Input Form for {this.state.courseTypeName}</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row style={{ paddingTop: "10px" }}>
          <Col md={1}></Col>
          <Col
            md={10}
            style={{ overflowY: "scroll", height: "580px", width: "auto" }}
          >
            {this.state.courseInputForm.courseInputFormSections.map(
              (formSection, idx) => (
                <div key={idx} style={{ paddingTop: "10px" }}>
                  <FormSection
                    formSectionData={{
                      syllabusName: this.state.syllabusName,
                      courseTypeName: this.state.courseTypeName,
                      formSection: formSection
                    }}
                  />
                </div>
              )
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CourseInputFormCreator;
