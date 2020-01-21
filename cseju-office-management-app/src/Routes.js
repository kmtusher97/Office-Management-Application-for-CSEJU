import React from "react";

const Dashboard = React.lazy(() => import("./components/views/Dashboard"));
const Syllabus = React.lazy(() => import("./components/views/Syllabus"));
const Routine = React.lazy(() => import("./components/views/Routine"));

const routes = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/dashboard", exact: false, name: "Dashboard", component: Dashboard },
  { path: "/syllabus", exact: true, name: "Dashboard", component: Syllabus },
  { path: "/routine", exact: true, name: "Dashboard", component: Routine }
];

export default routes;
