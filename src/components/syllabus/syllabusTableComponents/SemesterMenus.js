import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const actionButtonStyle = {
  padding: "0px",
  height: "22px",
  width: "22px"
};

class SemesterMenus extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup style={{ float: "right" }}>
          <Button
            size="sm"
            variant="outline-secondary"
            style={actionButtonStyle}
            onClick={this.props.addCourse.bind(
              this,
              this.props.semesterData.yearId,
              this.props.semesterData.semesterId
            )}
          >
            <span>
              <FontAwesomeIcon icon={faPlusSquare} />
            </span>
          </Button>

          <Button
            id={
              "year_" +
              this.props.semesterData.yearId +
              "_semester_" +
              this.props.semesterData.semesterId
            }
            size="sm"
            variant="outline-danger"
            style={actionButtonStyle}
            onClick={this.props.deleteSemester}
          >
            <span>
              <FontAwesomeIcon
                icon={faTrashAlt}
                id={
                  "year_" +
                  this.props.semesterData.yearId +
                  "_semester_" +
                  this.props.semesterData.semesterId
                }
              />
            </span>
          </Button>
        </ButtonGroup>
      </React.Fragment>
    );
  }
}

export default SemesterMenus;
