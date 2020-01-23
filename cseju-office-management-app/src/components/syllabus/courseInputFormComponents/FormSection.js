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
            textArea: this.props.formSectionData.formSection.textArea
          }}
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
            table: this.props.formSectionData.formSection.table
          }}
        />
      );
    }
    return resultComponent;
  }
}

export default FormSection;
