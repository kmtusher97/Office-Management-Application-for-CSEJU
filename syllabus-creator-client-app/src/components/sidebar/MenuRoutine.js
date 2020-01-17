import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuRoutine extends Component {
  render() {
    return (
      <Link className="nav-link" to={"/routine"}>
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
          className="feather feather-calendar"
        >
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        </svg>
        Routines
      </Link>
    );
  }
}
