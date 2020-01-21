import React from "react";

const SyllabusMenubar = React.lazy(() =>
  import("../components/syllabus/SyllabusMenubar")
);

const routes = {
  sidebarRoutes: [
    {
      path: "/syllabus",
      exact: true,
      name: "SyllabusMenubar",
      component: SyllabusMenubar
    }
  ]
};

export default routes;
