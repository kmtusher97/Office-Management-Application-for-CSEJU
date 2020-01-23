import React, { Component } from "react";
import { Col } from "react-bootstrap";

class SideMenusForForm extends Component {
  addFormSection = event => {
    let url = `http://localhost:8081/syllabus/create_form/${this.props.formSideMenuData.syllabusName}/${this.props.formSideMenuData.courseTypeName}/add_new_section`;

    fetch(url);
    window.location.reload();
  };

  render() {
    return (
      <Col md={1}>
        <div
          style={{
            height: "150px",
            width: "30px"
          }}
        >
          <div style={{ paddingTop: "2px" }}>
            <button>
              <i
                className="fa fa-plus"
                onClick={this.addFormSection}
                style={{ color: "green" }}
              ></i>
            </button>
          </div>
        </div>
      </Col>
    );
  }
}

export default SideMenusForForm;
