import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

class SideMenusForForm extends Component {
  render() {
    return (
      <div style={{ padding: "5px" }}>
        <Button
          size="sm"
          variant="success"
          onClick={this.props.addFormSection}
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            float: "right"
          }}
        >
          <span>
            <FontAwesomeIcon icon={faPlusCircle} />
          </span>
          <b>{" Add Form Section"}</b>
        </Button>
      </div>
    );
  }
}

export default SideMenusForForm;
