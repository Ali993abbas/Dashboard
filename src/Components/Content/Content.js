import React, { useState } from "react";
import "./content.css";
import TabsMenu from "./TabsMenu/TabsMenu";
import Box from "@mui/material/Box";
import TabsContent from "./TabsContent/TabsContent";
import Orders from "./ContentPages/Orders";
import waveIcon from "../../resources/Icons/wave.png";
import ProfileScreen from "../../Navigation/Profile/ProfileScreen";

function Content(props) {
  const [activeTabValue, setActiveTabValue] = useState(0);
  const [activeProfileTabValue, setActiveProfileTabValue] = useState(0);
  const tabsMenuList = [
    { title: "GMB 1 Profile" },
    { title: "GMB 2 Profile" },
    { title: "GMB 3 Profile" },
    { title: "GMB 4 Profile" },
    { title: "GMB 5 Profile" },
    { title: "GMB 6 Profile" },
  ];
  const profileTabs = [
    { title: "Personal Profile" },
    { title: "Password & Security" },
    { title: "Payment & Billing" },
  ];
  const handleTabChange = (event, newValue) => {
    setActiveTabValue(newValue);
  };

  return (
    <div id="main-content">
      {props.activeModule == "dashboard" ? (
        <>
          <div style={{ margin: "10px 0px" }}>
            <span id="welcome-text">Welcome, KFC</span>
            <img src={waveIcon} className="wave-icon" />
          </div>
          <div id="watch-demo">
            <div
              style={{
                margin: "10px 0px",
                height: "150px",
                backgroundColor: "#146998",
                borderRadius: "5px",
              }}
            ></div>
            <span id="watch-demo-text">Watch Demo</span>
          </div>

          <div id="tabs-menu">
            <Box sx={{ width: "100%" }}>
              <TabsMenu
                value={activeTabValue}
                handleChange={handleTabChange}
                tabsMenuList={tabsMenuList}
              />
              <TabsContent
                value={activeTabValue}
                setOpenDialog={props.setOpenDialog}
                setDialogType={props.setDialogType}
                setDialogTitle={props.setDialogTitle}
                checkout={props.checkout}
              />
            </Box>
          </div>
        </>
      ) : props.activeModule == "orders" ? (
        <Orders
          orderReviewCol={props.orderReviewCol}
          orderReviewData={props.orderReviewData}
        />
      ) : props.activeModule == "profile" ? (
        <ProfileScreen
          profileTabs={profileTabs}
          activeProfileTabValue={activeProfileTabValue}
          setActiveProfileTabValue={setActiveProfileTabValue}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Content;
