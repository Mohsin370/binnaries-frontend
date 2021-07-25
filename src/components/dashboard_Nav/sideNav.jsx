import React from "react";
import styles from "./sideNav.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
function sideNav() {
  let navlinkClass = "text-decoration-none  pt-3 pb-3 pl-4 row m-auto";
  let ManagementLinks = [
    { linkName: "Accounts", link: "/dashboard/accounts", icon: faHome },
    { linkName: "Analytics", link: "/dashboard/analytics", icon: faHome },
    { linkName: "Customers", link: "/dashboard/customers", icon: faHome },
    { linkName: "Orders", link: "/login", icon: faHome },
    { linkName: "Products", link: "/login", icon: faHome },
    { linkName: "Invoices", link: "/dashboard/invoices", icon: faHome },
  ];
  let Pages = [
    { linkName: "Analytics", link: "/login", icon: faHome },
    { linkName: "Customers", link: "/login", icon: faHome },
  ];
  return (
    <div className=" pt-3">
      <h4>
        <Link className={[navlinkClass, "text-white"].join(" ")} to="/">Binnaries</Link>
      </h4>
      <Link
        className={[
          window.location.pathname === "/dashboard" ? styles.activeLink : "",
          navlinkClass,
          styles.NavLinksParent,
        ].join(" ")}
        to="/dashboard"
      >
        <h6>
          <FontAwesomeIcon icon={faHome} />
          <span className="pl-3"> Dashboard </span>
        </h6>
      </Link>
      <Link
        className={[
          window.location.pathname === "/profile" ? styles.activeLink : "",
          navlinkClass,
          styles.NavLinksParent,
        ].join(" ")}
        to="/profile"
      >
        <h6>
          <FontAwesomeIcon icon={faHome} />
          <span className="pl-3"> Profile </span>
        </h6>
      </Link>
      {/* Management */}
      <div className="mt-3">
        <p className="text-light pl-4"> Management </p>
        {ManagementLinks.map((el) => {
          return (
            <Link
              className={[
                window.location.pathname === el.link ? styles.activeLink : "",
                navlinkClass,
                styles.NavLinksParent,
              ].join(" ")}
              to={el.link}
            >
              <h6>
                <FontAwesomeIcon icon={el.icon} />
                <span className="pl-3"> {el.linkName} </span>
              </h6>
            </Link>
          );
        })}
      </div>
      <div className="mt-3">
        <p className="text-light pl-4"> Pages </p>
        {Pages.map((el) => {
          return (
            <Link
              className={[navlinkClass, styles.NavLinksParent].join(" ")}
              to={el.link}
            >
              <h6>
                <FontAwesomeIcon icon={el.icon} />
                <span className="pl-3"> {el.linkName} </span>
              </h6>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default sideNav;
