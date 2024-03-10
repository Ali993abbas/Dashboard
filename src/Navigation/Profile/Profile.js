import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Profile(props) {
  return (
    <div
      style={{
        display: "flex",
        padding: props.activeModule == "profile" ? "16px" : "5px",
        cursor: "pointer",
      }}
      className={props.activeModule == "profile" ? "active" : ""}
      onClick={() => props.setActiveModule("profile")}
    >
      <AccountCircleIcon color="1370A4" className="menu-page-list-icon" />

      <span className="page-list-item">Profile Management</span>
    </div>
  );
}

export default Profile;
