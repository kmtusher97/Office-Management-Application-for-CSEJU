import React, { Component } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import FormSection from "./courseInputFormComponents/FormSection";
import SideMenusForForm from "./courseInputFormComponents/SideMenusForForm";

import AppData from "../AppData";
import Axios from "axios";

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

    Axios.get(url)
      .then(response => response.data)
      .then(data =>
        this.setState({
          courseInputForm: data
        })
      );
  }

  handleContentSelector = event => {
    let id = event.currentTarget.id.split("_")[1];
    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/${id}/change_selected/${event.target.value}`;

    Axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          courseInputForm: data
        });
      });
  };

  deleteFormSection = event => {
    event.preventDefault();

    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/delete_section/${event.currentTarget.id}`;

    Axios.delete(url, {})
      .then(response => response.data)
      .then(data => {
        this.setState({
          courseInputForm: data
        });
      });
  };

  addFormSection = event => {
    event.preventDefault();

    let url = `${AppData.restApiBaseUrl}/syllabus/create_form/${this.state.syllabusName}/${this.state.courseTypeName}/add_new_section`;

    Axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          courseInputForm: data
        });
      });
  };

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
        <Row>
          <Col md={12}>
            <SideMenusForForm addFormSection={this.addFormSection} />
          </Col>
        </Row>
        <Row style={{ overflowY: "scroll", height: "580px", width: "auto" }}>
          <Col md={12}>
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
        </Row>
      </Container>
    );
  }
}
export default CourseInputFormCreator;
