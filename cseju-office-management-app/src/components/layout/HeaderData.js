import jahangirnagar_university_logo from "../../assests/img/brand/Jahangirnagar_University_logo.png";

import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";

var headerData = {
  brandLogo: jahangirnagar_university_logo,
  brandLink: "/dashboard",
  menus: [
    {
      name: "Dashboard",
      link: "/dashboard",
      activeClassName: "acitve_header_menu"
    },
    {
      name: "Routine",
      link: "/routine",
      activeClassName: "acitve_header_menu"
    },
    {
      name: "Syllabus",
      link: "/syllabus",
      activeClassName: "acitve_header_menu"
    }
  ],
  rightSideMenus: [
    {
      name: "Notification",
      link: "/notification",
      icon: faBell
    },
    {
      name: "Mail",
      link: "/mail",
      icon: faEnvelope
    }
  ]
};

export default headerData;
