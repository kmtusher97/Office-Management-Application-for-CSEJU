import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const actionButtonStyle = {
  padding: "0px",
  height: "22px",
  width: "22px"
};

class YearMenus extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup style={{ float: "right" }}>
          <Button
            id={"year_" + this.props.yearData.yearId}
            size="sm"
            variant="outline-secondary"
            style={actionButtonStyle}
            onClick={this.props.addSemester}
          >
            <span>
              <FontAwesomeIcon
                id={"year_" + this.props.yearData.yearId}
                icon={faPlusSquare}
              />
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

export default YearMenus;
