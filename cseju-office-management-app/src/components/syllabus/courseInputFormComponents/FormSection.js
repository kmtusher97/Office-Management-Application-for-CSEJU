import React, { Component } from "react";
import FormSectionTextArea from "./FormSectionTextArea";
import FormSectionTable from "./FormSectionTable";

class FormSection extends Component {
  render() {
    var resultComponent = null;
    if (this.props.formSectionData.formSection.selectedContent === "TextArea") {
      resultComponent = (
        <FormSectionTextArea
          textAreaData={{
            syllabusName: this.props.formSectionData.syllabusName,
            courseTypeName: this.props.formSectionData.courseTypeName,
            courseInputForm: this.props.formSectionData.courseInputForm,
            textArea: this.props.formSectionData.formSection.textArea,
            index: this.props.formSectionData
          }}
          deleteFormSectionHandler={this.props.deleteFormSectionHandler}
          handleSelector={this.props.handleSelector}
        />
      );
    } else if (
      this.props.formSectionData.formSection.selectedContent === "Table"
    ) {
      resultComponent = (
        <FormSectionTable
          tableData={{
            syllabusName: this.props.formSectionData.syllabusName,
            courseTypeName: this.props.formSectionData.courseTypeName,
            courseInputForm: this.props.formSectionData.courseInputForm,
            table: this.props.formSectionData.formSection.table,
            index: this.props.formSectionData.index
          }}
          deleteFormSectionHandler={this.props.deleteFormSectionHandler}
          handleSelector={this.props.handleSelector}
        />
      );
    }
    return resultComponent;
  }
}

export default FormSection;
