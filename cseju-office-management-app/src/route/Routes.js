import React from "react";

const Dashboard = React.lazy(() => import("../components/views/Dashboard"));
const Syllabus = React.lazy(() =>
  import("../components/syllabus/SyllabusViewer")
);
const Routine = React.lazy(() => import("../components/views/Routine"));
const Notification = React.lazy(() =>
  import("../components/views/Notification")
);

/** Syllabus Components */
const SyllabusCreator = React.lazy(() =>
  import("../components/syllabus/SyllabusCreator")
);
const SyllabusCourseTypeCreator = React.lazy(() =>
  import("../components/syllabus/SyllabusCourseTypeCreator")
);
const SyllabusCourseEditor = React.lazy(() =>
  import("../components/syllabus/SyllabusCourseEditor")
);
const SyllabusViewer = React.lazy(() =>
  import("../components/syllabus/SyllabusViewer")
);

const CourseInputFormCreator = React.lazy(() =>
  import("../components/syllabus/CourseInputFormCreator")
);

const routes = [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/syllabus",
    exact: true,
    name: "Syllabus",
    component: Syllabus
  },
  {
    path: "/routine",
    exact: true,
    name: "Routine",
    component: Routine
  },
  {
    path: "/notification",
    exact: true,
    name: "Notification",
    component: Notification
  },
  {
    path: "/syllabus/create",
    exact: true,
    name: "SyllabusCreator",
    component: SyllabusCreator
  },
  {
    path: "/syllabus/course_types",
    exact: true,
    name: "SyllabusCourseTypeCreator",
    component: SyllabusCourseTypeCreator
  },
  {
    path: "/syllabus/edit_course",
    exact: true,
    name: "SyllabusCourseEditor",
    component: SyllabusCourseEditor
  },
  {
    path: "/syllabus/view",
    exact: true,
    name: "SyllabusViewer",
    component: SyllabusViewer
  },
  {
    path: "/syllabus/course_types/design_form/:syllabusName/:courseTypeName",
    exact: true,
    name: "CourseInputFormCreator",
    component: CourseInputFormCreator
  }
];

export default routes;
