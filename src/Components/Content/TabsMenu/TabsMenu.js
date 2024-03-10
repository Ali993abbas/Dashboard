import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `simple-tab`,
    "aria-controls": `simple-tabpanel-${index}`,
    // class: "simple-tab",
  };
}

function TabsMenu(props) {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          //   indicatorColor="#125D87"
        >
          {props.tabsMenuList.map((tabmenu, i) => {
            return <Tab label={tabmenu.title} {...a11yProps(i)} />;
          })}
        </Tabs>
      </Box>
    </>
  );
}

export default TabsMenu;
