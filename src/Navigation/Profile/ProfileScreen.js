import React from "react";
import TabsMenu from "../../Components/Content/TabsMenu/TabsMenu";
import { Avatar, Box, Button, Divider } from "@mui/material";
import { CustomTabPanel } from "../../Components/Content/TabsContent/TabsContent";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function ProfileScreen(props) {
  return (
    <>
      <div id="tabs-menu">
        <Box sx={{ width: "100%" }}>
          <TabsMenu
            value={props.activeProfileTabValue}
            handleChange={(event, newValue) => {
              props.setActiveProfileTabValue(newValue);
            }}
            tabsMenuList={props.profileTabs}
          />
          <TabsContentProfile value={props.activeProfileTabValue} />
        </Box>
      </div>
    </>
  );
}

function TabsContentProfile(props) {
  return (
    <>
      <CustomTabPanel value={props.value} index={0} cutomsHeight="100%">
        <ProfileSection />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={1} cutomsHeight="100%">
        <PasswordSection />
      </CustomTabPanel>
    </>
  );
}

const ProfileSection = (props) => {
  const inputstyles = {
    fontSize: "11px",
    padding: "8px",
    border: "1px solid #E6E6E6",
  };
  const spanstyle = {
    marginBottom: "5px",
    fontSize: "12px",
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Avatar
          alt={"Alaa Muhammad"}
          src="/static/images/avatar/1.jpg"
          sx={{ width: 50, height: 50 }}
          style={{
            marginLeft: "10px",
            // marginRight: "5px",
            marginTop: "10px",
            // marginBottom: "auto",
          }}
        />
        <div style={{ display: "grid", alignSelf: "end", marginLeft: "10px" }}>
          <span style={{ margin: "1px 0px", fontWeight: "600" }}>
            {"Alaa Muhammad"}
          </span>
          <span style={{ fontSize: "11px", margin: "1px 0px" }}>
            {"Business analyst"}
          </span>
        </div>
        <Button
          style={{
            backgroundColor: "#1370A4",
            fontSize: "10px",
            color: "white",
            marginLeft: "auto",
            height: "fit-content",
            alignSelf: "center",
            textTransform: "none",
          }}
          variant="contained"
        >
          Save Changes
        </Button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <span
          style={{
            color: "#000000",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          Contact Details
        </span>
        <Divider
          color="#E2E4E9"
          style={{
            marginTop: "5px",
            height: "2px",
            opacity: "1",
            marginBottom: "20px",
          }}
        />
        <div className="row" style={{ marginBottom: "10px" }}>
          <div className="col-6">
            <div id="first-name" className="order-summary-right-field">
              <span style={spanstyle} className="title-dialog-pitch">
                Full Name
              </span>
              <input
                type="text"
                className="input-dialog"
                placeholder="Enter your first name"
                style={inputstyles}
              />
            </div>
          </div>
          <div className="col-6">
            <div id="first-name" className="order-summary-right-field">
              <span style={spanstyle} className="title-dialog-pitch">
                Last Name
              </span>
              <input
                type="text"
                className="input-dialog"
                placeholder="Enter your last name"
                style={inputstyles}
              />
            </div>
          </div>
        </div>

        <div className="row" style={{ marginBottom: "10px" }}>
          <div className="col-6">
            <div id="email-address" className="order-summary-right-field">
              <span style={spanstyle} className="title-dialog-pitch">
                Email Address
              </span>
              <input
                type="text"
                className="input-dialog"
                placeholder="Enter your email address"
                style={inputstyles}
              />
            </div>
          </div>
          <div className="col-6">
            <div id="phone-number" className="order-summary-right-field">
              <span style={spanstyle} className="title-dialog-pitch">
                Phone Number
              </span>
              <input
                type="text"
                className="input-dialog"
                placeholder="Enter your phone number"
                style={inputstyles}
              />
            </div>
          </div>
        </div>

        <div id="postasl-address" className="order-summary-right-field">
          <span style={spanstyle} className="title-dialog-pitch">
            Postal Address
          </span>
          <input
            type="text"
            className="input-dialog"
            placeholder="Enter your postal address"
            style={inputstyles}
          />
        </div>
      </div>
    </>
  );
};

const PasswordSection = (props) => {
  const inputstyles = {
    fontSize: "11px",
    padding: "8px",
    border: "1px solid #E6E6E6",
  };
  const spanstyle = {
    marginBottom: "5px",
    fontSize: "12px",
  };

  return (
    <>
      <div
        id="current-password"
        className="order-summary-right-field"
        style={{ marginTop: "10px" }}
      >
        <span style={spanstyle} className="title-dialog-pitch">
          Current Password
        </span>
        <input
          type="text"
          className="input-dialog"
          placeholder="Enter your current password"
          style={inputstyles}
        />
      </div>

      <div
        id="new-password"
        className="order-summary-right-field"
        style={{ marginTop: "20px" }}
      >
        <span style={spanstyle} className="title-dialog-pitch">
          New Password
        </span>
        <input
          type="text"
          className="input-dialog"
          placeholder="Enter your new password"
          style={inputstyles}
        />
      </div>

      <div
        id="new-password"
        className="order-summary-right-field"
        style={{ marginTop: "20px" }}
      >
        <span style={spanstyle} className="title-dialog-pitch">
          Confirm New Password
        </span>
        <input
          type="text"
          className="input-dialog"
          placeholder="Enter your new password"
          style={inputstyles}
        />
      </div>

      <div style={{ display: "flex", marginTop: "20px" }}>
        <FormControlLabel
          control={<Switch defaultChecked size="small" />}
          label="Two-step verification"
          style={{ fontSize: "11px !important" }}
        />
      </div>

      <Button
        style={{
          backgroundColor: "#1370A4",
          fontSize: "10px",
          color: "white",
          textTransform: "none",
          marginTop: "20px",
        }}
        variant="contained"
      >
        Save Changes
      </Button>
    </>
  );
};
export default ProfileScreen;
