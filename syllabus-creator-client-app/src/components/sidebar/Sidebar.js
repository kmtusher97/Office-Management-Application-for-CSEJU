import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Nav, Navbar } from "react-bootstrap";
import MenuDashboard from "./MenuDashboard";
import MenuProfile from "./MenuProfile";
import MenuSyllabus from "./MenuSyllabus";
import MenuRoutine from "./MenuRoutine";
import MenuResults from "./MenuResults";
import MenuTasks from "./MenuTasks";
import "./Sidebar.css";
import { withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { router, params, location, routes } = this.props;
    return (
      <Navbar
        bg="light"
        variant="light"
        className="col-md-2 d-none d-md-block bg-light sidebar"
      >
        <Nav accessKey={location.pathname}>
          <div className="sidebar-sticky">
            <Nav.Item className="nav-item">
              <MenuDashboard />
            </Nav.Item>
            <Nav.Item className="nav-item">
              <MenuProfile />
            </Nav.Item>
            <Nav.Item className="nav-item">
              <MenuRoutine />
            </Nav.Item>
            <Nav.Item className="nav-item">
              <MenuSyllabus />
            </Nav.Item>
            <Nav.Item className="nav-item">
              <MenuResults />
            </Nav.Item>
            <Nav.Item className="nav-item">
              <MenuTasks />
            </Nav.Item>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Top Notifications .</span>
              <a
                className="d-flex align-items-center text-muted"
                href="https://localhost:3000/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </a>
            </h6>
            <Divider />
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="https://localhost:3000/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Exam Routines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://localhost:3000/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Last quarter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://localhost:3000/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Social engagement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://localhost:3000/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Year-end sale
                </a>
              </li>
            </ul>
          </div>
        </Nav>
      </Navbar>
    );
  }
}
export default withRouter(Sidebar);
