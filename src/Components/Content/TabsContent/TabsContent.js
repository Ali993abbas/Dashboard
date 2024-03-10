import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProfileContent from "./Components/ProfileContent";

export const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        height: props.cutomsHeight ? props.cutomsHeight : "346px",
        overflowY: "auto",
      }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabsContent(props) {
  const [profileData, setProfileData] = useState([
    {
      id: 0,
      title: "1-Star Reviews",
      count: "231",
      removalProbability: "99%",
      data: [
        {
          id: 0,
          name: "Cody Fisher",
          summary:
            "Lorem Espum Lorem Espum Lorem Espum Lorem EspumLorem EspumLorem Espum Lorem Espum",
          stars: 1,
        },
        {
          id: 1,
          name: "Cody Fisher",
          summary:
            "Lorem Espum Lorem Espum Lorem Espum Lorem EspumLorem EspumLorem Espum Lorem Espum",
          stars: 2,
        },
        {
          id: 2,
          name: "Cody Fisher",
          summary:
            "Lorem Espum Lorem Espum Lorem Espum Lorem EspumLorem EspumLorem Espum Lorem Espum",
          stars: 1,
        },
      ],
    },
    {
      id: 1,
      title: "2-Star Reviews",
      count: "368",
      removalProbability: "99%",
      data: [
        {
          id: 0,
          name: "Cody Fisher",
          summary:
            "Lorem Espum Lorem Espum Lorem Espum Lorem EspumLorem EspumLorem Espum Lorem Espum",
          stars: 1,
        },
        {
          id: 1,
          name: "Cody Fisher",
          summary:
            "Lorem Espum Lorem Espum Lorem Espum Lorem EspumLorem EspumLorem Espum Lorem Espum",
          stars: 2,
        },
        {
          id: 2,
          name: "Cody Fisher",
          summary:
            "Lorem Espum Lorem Espum Lorem Espum Lorem EspumLorem EspumLorem Espum Lorem Espum",
          stars: 1,
        },
      ],
    },
    {
      id: 3,
      title: "3-Star Reviews",
      count: "77",
      removalProbability: "99%",
      data: [
        {
          id: 0,
          name: "Cody Fisher",
          summary:
            "Lorem Espum Lorem Espum Lorem Espum Lorem EspumLorem EspumLorem Espum Lorem Espum",
          stars: 1,
        },
        {
          id: 1,
          name: "Cody Fisher",
          summary:
            "Lorem Espum Lorem Espum Lorem Espum Lorem EspumLorem EspumLorem Espum Lorem Espum",
          stars: 2,
        },
        {
          id: 2,
          name: "Cody Fisher",
          summary:
            "Lorem Espum Lorem Espum Lorem Espum Lorem EspumLorem EspumLorem Espum Lorem Espum",
          stars: 1,
        },
      ],
    },
  ]);
  const [enableRemoveNow, setenableRemoveNow] = useState(false);
  const [reviewsSelected, setReviewsSelected] = useState([]);
  const [subReviewsSelected, setSubReviewsSelected] = useState([]);

  useEffect(() => {
    let filteredProfileData = profileData?.filter(
      (profile) => !reviewsSelected?.includes(profile.id)
    );

    subReviewsSelected?.forEach((reviewSel) => {
      filteredProfileData?.forEach((profile) => {
        if (reviewSel.parent == profile.id) {
          let filteredSubData = profile.data.filter(
            (ele) => ele.id != reviewSel.child
          );
          profile.data = filteredSubData;
        }
      });
    });
    setProfileData(filteredProfileData);
    setReviewsSelected([]);
    setSubReviewsSelected([]);
  }, [props.checkout]);

  return (
    <>
      <CustomTabPanel value={props.value} index={0}>
        <ProfileContent
          profileData={profileData}
          enableRemoveNow={enableRemoveNow}
          setenableRemoveNow={setenableRemoveNow}
          reviewsSelected={reviewsSelected}
          setReviewsSelected={setReviewsSelected}
          setProfileData={setProfileData}
          subReviewsSelected={subReviewsSelected}
          setSubReviewsSelected={setSubReviewsSelected}
          setOpenDialog={props.setOpenDialog}
          setDialogType={props.setDialogType}
          setDialogTitle={props.setDialogTitle}
        />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={1}>
        <ProfileContent
          profileData={profileData}
          enableRemoveNow={enableRemoveNow}
          setenableRemoveNow={setenableRemoveNow}
          reviewsSelected={reviewsSelected}
          setReviewsSelected={setReviewsSelected}
          setProfileData={setProfileData}
          subReviewsSelected={subReviewsSelected}
          setSubReviewsSelected={setSubReviewsSelected}
          setOpenDialog={props.setOpenDialog}
          setDialogType={props.setDialogType}
          setDialogTitle={props.setDialogTitle}
        />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={2}>
        <ProfileContent
          profileData={profileData}
          enableRemoveNow={enableRemoveNow}
          setenableRemoveNow={setenableRemoveNow}
          reviewsSelected={reviewsSelected}
          setReviewsSelected={setReviewsSelected}
          setProfileData={setProfileData}
          subReviewsSelected={subReviewsSelected}
          setSubReviewsSelected={setSubReviewsSelected}
          setOpenDialog={props.setOpenDialog}
          setDialogType={props.setDialogType}
          setDialogTitle={props.setDialogTitle}
        />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={3}>
        <ProfileContent
          profileData={profileData}
          enableRemoveNow={enableRemoveNow}
          setenableRemoveNow={setenableRemoveNow}
          reviewsSelected={reviewsSelected}
          setReviewsSelected={setReviewsSelected}
          setProfileData={setProfileData}
          subReviewsSelected={subReviewsSelected}
          setSubReviewsSelected={setSubReviewsSelected}
          setOpenDialog={props.setOpenDialog}
          setDialogType={props.setDialogType}
          setDialogTitle={props.setDialogTitle}
        />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={4}>
        <ProfileContent
          profileData={profileData}
          enableRemoveNow={enableRemoveNow}
          setenableRemoveNow={setenableRemoveNow}
          reviewsSelected={reviewsSelected}
          setReviewsSelected={setReviewsSelected}
          setProfileData={setProfileData}
          subReviewsSelected={subReviewsSelected}
          setSubReviewsSelected={setSubReviewsSelected}
          setOpenDialog={props.setOpenDialog}
          setDialogType={props.setDialogType}
          setDialogTitle={props.setDialogTitle}
        />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={5}>
        <ProfileContent
          profileData={profileData}
          enableRemoveNow={enableRemoveNow}
          setenableRemoveNow={setenableRemoveNow}
          reviewsSelected={reviewsSelected}
          setReviewsSelected={setReviewsSelected}
          setProfileData={setProfileData}
          subReviewsSelected={subReviewsSelected}
          setSubReviewsSelected={setSubReviewsSelected}
          setOpenDialog={props.setOpenDialog}
          setDialogType={props.setDialogType}
          setDialogTitle={props.setDialogTitle}
        />
      </CustomTabPanel>
    </>
  );
}

export default TabsContent;
