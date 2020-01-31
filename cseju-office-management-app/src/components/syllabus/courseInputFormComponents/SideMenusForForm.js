import React, { Component } from "react";
import { Col } from "react-bootstrap";

class SideMenusForForm extends Component {
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
            <button
              className="btn"
              style={{ border: "none", padding: 0, background: "none" }}
            >
              <span>
                <i
                  className="fa fa-plus"
                  onClick={this.props.addFormSection}
                  style={{ color: "green" }}
                ></i>
              </span>
            </button>
          </div>
        </div>
      </Col>
    );
  }
}

export default SideMenusForForm;
