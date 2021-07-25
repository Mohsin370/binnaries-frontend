import React, { useState } from "react";
import styles from "./dashboardTopNav.module.css";
import UserPlaceHolder from "../../assets/images/placeholder-user.png";
import DownArrow from "../../assets/icons/down-arrow.svg";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/actions";

function DashboardTopNav(props) {
  const [DropDownState, setDropDownState] = useState(false);
  const ToggleDropDown = () => {
    setDropDownState(!DropDownState);
  };

  //close the drop down while clicking on screen
  window.onclick = (event) => {
    if (DropDownState && event.target.id !== "dropDown") {
      setDropDownState(!DropDownState);
    }
  };

  const logout = () => {
    props.logout();
  };

  return (
    <div>
      <div className={styles.TopNavMain}>
        <div type="button">
          <div className={styles.hamburgerItem}></div>
          <div className={styles.hamburgerItem}></div>
          <div className={styles.hamburgerItem}></div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={UserPlaceHolder}
              className={styles.shortProfilePic}
              alt="profile"
            />
            <span type="button" id="dropDown" onClick={ToggleDropDown}>
              <span className="ml-2 pr-2" id="dropDown">
                Khawaja Mohsin{" "}
              </span>
              <img
                src={DownArrow}
                style={{ width: "12px" }}
                id="dropDown"
                alt="drop down"
              />
            </span>
          </div>

          {DropDownState ? (
            <div className={styles.dropdown}>
              <p>Profile</p>
              <hr></hr>
              <p type="button" onClick={logout}>
                Logout
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, logoutUser)(DashboardTopNav);
