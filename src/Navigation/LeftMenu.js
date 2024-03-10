import React from "react";
import Slide from "@mui/material/Slide";
import "./leftNav.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
import PagesList from "./Pages/PagesList";
import Profile from "./Profile/Profile";

function LeftMenu(props) {
  return (
    <>
      <Slide direction="right" in={true} className="tabs-menu-slider">
        <div>
          <div id="logo-and-name">
            {/* <img
              src={
                "https://cdn.siter.io/assets/ast_4VmuuQnd6rWuZbXjrHpBvuuLS/88489aa6-c05f-4a13-9cb8-c8bd279b51fe.webp"
              }
            /> */}
            <span>Bewertungsreiniger</span>
          </div>

          <div
            id="Dashboard"
            className={props.activeModule == "dashboard" ? "active" : ""}
          >
            <div
              style={{ display: "flex", justifyContent: "start" }}
              onClick={() => props.setActiveModule("dashboard")}
            >
              <DashboardIcon
                color="1370A4"
                style={{ width: "15px", marginRight: "5px" }}
              />
              <span className="page-list-item">Dashboard</span>
            </div>
          </div>
          <div id="pages">
            <span>PAGES</span>
            <Divider
              color="white"
              style={{ marginTop: "5px", height: "2px", opacity: "1" }}
            />

            <PagesList
              activeModule={props.activeModule}
              setActiveModule={props.setActiveModule}
            />
          </div>

          <div id="profile-managment">
            <Divider
              color="white"
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                height: "2px",
                color: "white",
                opacity: "1",
              }}
            />

            <Profile
              setActiveModule={props.setActiveModule}
              activeModule={props.activeModule}
            />
            <Divider
              color="white"
              style={{ marginTop: "5px", height: "2px", opacity: "1" }}
            />
          </div>
        </div>
      </Slide>
    </>
  );
}

export default LeftMenu;
