import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./header.css";

function Header(props) {
  return (
    <>
      <div id="main-header">
        <div id="dividers" className="d-flex" style={{ width: "100%" }}>
          <div id="selected-module">
            {props.activeModule.charAt(0).toUpperCase() +
              props.activeModule.slice(1)}
          </div>

          <div id="icons" className="d-flex">
            <NotificationsNoneIcon
              color="#B2B5B8"
              style={{ height: "20px", marginRight: "5px" }}
            />
            <SettingsIcon
              color="#B2B5B8"
              style={{ height: "20px", marginRight: "5px" }}
            />

            <div id="avatar" className="d-flex">
              <AccountCircleIcon
                color="#B2B5B8"
                style={{
                  height: "20px",
                  marginRight: "5px",
                  color: "#FBDFB1",
                }}
              />
              <span style={{ fontSize: "12px" }}>KFC</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
