import React, { Component } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import FormSection from "./courseInputFormComponents/FormSection";
import SideMenusForForm from "./courseInputFormComponents/SideMenusForForm";

import AppData from "../AppData";

class CourseInputFormCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusName: this.props.match.params.syllabusName,
      courseTypeName: this.props.match.params.courseTypeName,
      courseInputForm: { courseInputFormSections: [] }
    };

    this.addFormSection = this.addFormSection.bind(this);
    this.deleteFormSection = this.deleteFormSection.bind(this);
    this.handleContentSelector = this.handleContentSelector.bind(this);
  }

  componentDidMount() {
    /** Get Form Structure JSON */
    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/get_form`;

    fetch(url)
      .then(res => res.json())
      .then(result =>
        this.setState({
          courseInputForm: result
        })
      );
  }

  deleteFormSection = event => {
    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/delete_section/${event.target.id}`;

    fetch(url, { method: "delete" })
      .then(res => res.json())
      .then(result =>
        this.setState({
          courseInputForm: result
        })
      );

    window.location.reload();
  };

  handleContentSelector = event => {
    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/${event.target.id}/change_selected/${event.target.value}`;

    fetch(url)
      .then(res => res.json())
      .then(result =>
        this.setState({
          courseInputForm: result
        })
      );
  };

  addFormSection = event => {
    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/add_new_section`;

    fetch(url)
      .then(res => res.json())
      .then(result =>
        this.setState({
          courseInputForm: result
        })
      );

    event.preventDefault();
  };

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
                      formSection: formSection,
                      courseInputForm: this.state.courseInputForm,
                      index: idx
                    }}
                    deleteFormSectionHandler={this.deleteFormSection}
                    handleSelector={this.handleContentSelector}
                  />
                </div>
              )
            )}
          </Col>
          <SideMenusForForm addFormSection={this.addFormSection} />
        </Row>
      </Container>
    );
  }
}
export default CourseInputFormCreator;
