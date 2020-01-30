import React, { Component } from "react";

const headerData = {
  brandLogo: "logo512.png",
  brandLink: "/dashboard",
  menus: [
    {
      name: "Dashboard",
      link: "/dashboard"
    },
    {
      name: "Routine",
      link: "/routine"
    },
    {
      name: "Syllabus",
      link: "/syllabus"
    }
  ],
  rightSideMenus: [
    {
      name: "Notification",
      link: "/notification"
    },
    {
      name: "Mail",
      link: "/mail"
    }
  ]
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: window.location.pathname.match(
        window.location.pathname.split("/")[1]
      )[0]
    };
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand" href={headerData.brandLink}>
          <img src={headerData.brandLogo} width="30" height="30" alt="" />
        </a>

        <div className="mr-auto">
          <ul className="navbar-nav">
            {headerData.menus.map((menu, idxHeaderMenu) => (
              <li
                key={idxHeaderMenu}
                className={
                  "/" + this.state.activeLink === menu.link
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <a className="nav-link" href={menu.link} eventkey={menu.link}>
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Notification
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
