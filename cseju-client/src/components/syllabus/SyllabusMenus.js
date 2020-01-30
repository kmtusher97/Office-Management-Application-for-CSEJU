import React, { Component } from "react";

const syllabusMenus = {
  menus: [
    {
      name: "Search Syllabus",
      link: "/syllabus/search",
      userRole: "USER",
      icon: ""
    },
    {
      name: "Edit Course",
      link: "/syllabus/edit_course",
      userRole: "TEACHER",
      icon: ""
    },
    {
      name: "Edit Syllabus",
      link: "/syllabus/create",
      userRole: "SYLLABUS_COMMITTEE_CHAIRMAN",
      icon: ""
    },
    {
      name: "Course Types",
      link: "/syllabus/course_types",
      userRole: "SYLLABUS_COMMITTEE_CHAIRMAN",
      icon: ""
    }
  ]
};

class SyllabusMenus extends Component {
  render() {
    return (
      <div className="mr-auto">
        <ul className="navbar-nav">
          {syllabusMenus.menus.map((menu, idxHeaderMenu) => (
            <li key={idxHeaderMenu} className="nav-item">
              <a className="nav-link" href={menu.link} eventkey={menu.link}>
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SyllabusMenus;
