import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";

const actionButtonStyle = {
  padding: "0px",
  height: "22px",
  width: "22px"
};

class CourseMenus extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup style={{ float: "right" }}>
          <Button
            size="sm"
            variant="outline-secondary"
            style={actionButtonStyle}
          >
            <span>
              <FontAwesomeIcon icon={faPen} />
            </span>
          </Button>

          <Button size="sm" variant="outline-danger" style={actionButtonStyle}>
            <span>
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </Button>
        </ButtonGroup>
      </React.Fragment>
    );
  }
}

export default CourseMenus;
