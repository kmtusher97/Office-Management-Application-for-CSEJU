import React, { Component } from "react";

import Appdata from "../AppData";

class SyllabusCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      syllabusName: "syl1",
      syllabusXmlObj: "",
      effectiveFrom: 0,
      effectiveTo: 0,
      syllabusType: "",
      courseTypes: [],
      years: []
    };
  }

  getCourseTypes = () => {
    let courseTypesXML = this.state.syllabusXmlObj.getElementsByTagName(
      "courseType"
    );
    let tmpCourseTypes = [];
    for (let i = 0; i < courseTypesXML.length; i++) {
      tmpCourseTypes.push(courseTypesXML[i].getAttribute("name"));
    }
    this.setState({
      courseTypes: tmpCourseTypes
    });
  };

  getCourses = semesterXML => {
    let coursesXML = semesterXML.getElementsByTagName("course");
    let tmpCourses = [];
    for (let i = 0; i < coursesXML.length; i++) {
      let tmpCourse = {
        courseCode: "",
        courseTitle: "",
        courseCredit: ""
      };
      tmpCourse.courseCode = coursesXML[i].getAttribute("courseCode");
      tmpCourses.push(tmpCourse);
    }
    return tmpCourses;
  };

  getSemesters = yearXML => {
    let semestersXML = yearXML.getElementsByTagName("semester");
    let tmpSemesters = [];
    for (let i = 0; i < semestersXML.length; i++) {
      tmpSemesters.push({
        semesterId: i + 1,
        courses: this.getCourses(semestersXML[i])
      });
    }
    return tmpSemesters;
  };

  getYears = () => {
    let yearsXML = this.state.syllabusXmlObj.getElementsByTagName("year");
    let tmpYears = [];
    for (let i = 0; i < yearsXML.length; i++) {
      let tmpSemesters = this.getSemesters(yearsXML[i]);
      tmpYears.push(tmpSemesters);
    }
    this.setState({
      years: tmpYears
    });
  };

  getBasicInfo = () => {
    // this.setState({
    //   effectiveFrom: this.state.syllabusXmlObj.getElementsByTagName("")
    // });
  };

  componentDidMount() {
    let url = `${Appdata.restApiBaseUrl}/syllabus/get/${this.state.syllabusName}`;

    const parser = new DOMParser();
    fetch(url)
      .then(res => res.text())
      .then(xmlResult => {
        this.setState({
          syllabusXmlObj: parser.parseFromString(xmlResult, "text/xml")
        });

        this.getBasicInfo();
        this.getCourseTypes();
        this.getYears();
        console.log(this.state.years);
      });
  }

  /** Syllabus Table Functions */
  getNumberSuffix = num => {
    if (num % 10 === 1) return "st";
    if (num % 10 === 2) return "nd";
    if (num % 10 === 3) return "rd";
    return "th";
  };

  getSemesterRowSpan = (yearId, semesterId) => {
    return Math.max(1, this.state.years[yearId][semesterId].courses.length);
  };

  getYearRowSpan = yearId => {
    if (this.state.years[yearId].length === 0) return 1;
    let rowSpan = 0;
    for (let i = 0; i < this.state.years[yearId].length; i++) {
      rowSpan += this.getSemesterRowSpan(yearId, i);
    }
    return rowSpan;
  };

  render() {
    return (
      <div className="container">
        <h6>{"Edit Syllabus"}</h6>
        <div>
          <table className="table table-sm table-bordered ">
            <thead></thead>
            <tbody>
              {this.state.years.map((year, yearId) => {
                return (
                  <React.Fragment key={Math.floor(Math.random() * 1000)}>
                    <tr key={Math.floor(Math.random() * 1000)}>
                      <td rowSpan={this.getYearRowSpan(yearId)}>
                        {yearId +
                          1 +
                          this.getNumberSuffix(yearId + 1) +
                          " Year"}
                      </td>

                      {year.length > 0 ? (
                        <td rowSpan={this.getSemesterRowSpan(yearId, 0)}>
                          {1 + this.getNumberSuffix(1) + " Semester"}
                        </td>
                      ) : null}

                      {year.length > 0 && year[0].courses.length > 0 ? (
                        <React.Fragment key={Math.floor(Math.random() * 1000)}>
                          <td>{year[0].courses[0].courseCode}</td>
                          <td>
                            <span>
                              <i className="fa fa-pencil"></i>
                            </span>
                          </td>
                          <td>
                            <span>
                              <i
                                className="fa fa-trash"
                                style={{ color: "red" }}
                              ></i>
                            </span>
                          </td>
                        </React.Fragment>
                      ) : null}
                    </tr>

                    {year.length > 0 && year[0].courses.length > 1
                      ? year[0].courses.map((course, courseIdx) =>
                          courseIdx > 0 ? (
                            <tr key={Math.floor(Math.random() * 1000)}>
                              <td>{course.courseCode}</td>
                              <td>
                                <span>
                                  <i className="fa fa-pencil"></i>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <i
                                    className="fa fa-trash"
                                    style={{ color: "red" }}
                                  ></i>
                                </span>
                              </td>
                            </tr>
                          ) : null
                        )
                      : null}

                    {year.length > 1
                      ? year.map((semester, semesterIdx) =>
                          semesterIdx > 0 ? (
                            <React.Fragment
                              key={Math.floor(Math.random() * 1000)}
                            >
                              <tr key={Math.floor(Math.random() * 1000)}>
                                <td
                                  rowSpan={Math.max(1, semester.courses.length)}
                                >
                                  {semesterIdx +
                                    1 +
                                    this.getNumberSuffix(semesterIdx + 1) +
                                    " Semester"}
                                </td>
                                {semester.courses.length > 0 ? (
                                  <React.Fragment
                                    key={Math.floor(Math.random() * 1000)}
                                  >
                                    <td>{semester.courses[0].courseCode}</td>
                                    <td>
                                      <span>
                                        <i className="fa fa-pencil"></i>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <i
                                          className="fa fa-trash"
                                          style={{ color: "red" }}
                                        ></i>
                                      </span>
                                    </td>
                                  </React.Fragment>
                                ) : null}
                              </tr>
                              {semester.courses.length > 1
                                ? semester.courses.map((course, courseIdx) =>
                                    courseIdx > 0 ? (
                                      <tr
                                        key={Math.floor(Math.random() * 1000)}
                                      >
                                        <td>{course.courseCode}</td>
                                        <td>
                                          <span>
                                            <i className="fa fa-pencil"></i>
                                          </span>
                                        </td>
                                        <td>
                                          <span>
                                            <i
                                              className="fa fa-trash"
                                              style={{ color: "red" }}
                                            ></i>
                                          </span>
                                        </td>
                                      </tr>
                                    ) : null
                                  )
                                : null}
                            </React.Fragment>
                          ) : null
                        )
                      : null}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SyllabusCreator;
