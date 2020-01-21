import React from "react";

const Dashboard = React.lazy(() => import("../components/views/Dashboard"));
const Syllabus = React.lazy(() => import("../components/views/Syllabus"));
const Routine = React.lazy(() => import("../components/views/Routine"));
const Notification = React.lazy(() =>
  import("../components/views/Notification")
);

/** Syllabus Components */
const SyllabusCreator = React.lazy(() =>
  import("../components/views/SyllabusCreator")
);
const SyllabusCourseTypeCreator = React.lazy(() =>
  import("../components/views/SyllabusCourseTypeCreator")
);
const SyllabusCourseEditor = React.lazy(() =>
  import("../components/views/SyllabusCourseEditor")
);
const SyllabusViewer = React.lazy(() =>
  import("../components/views/SyllabusViewer")
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
    exact: false,
    name: "Dashboard",
    component: Dashboard
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
    path: "/syllabus",
    exact: true,
    name: "Syllabus",
    component: Syllabus
  },

  {
    path: "/syllabus/create",
    exact: false,
    name: "SyllabusCreator",
    component: SyllabusCreator
  },
  {
    path: "/syllabus/course/types",
    exact: false,
    name: "SyllabusCourseTypeCreator",
    component: SyllabusCourseTypeCreator
  },
  {
    path: "/syllabus/edit/course",
    exact: false,
    name: "SyllabusCourseEditor",
    component: SyllabusCourseEditor
  },
  {
    path: "/syllabus/view",
    exact: false,
    name: "SyllabusViewer",
    component: SyllabusViewer
  }
];

export default routes;
