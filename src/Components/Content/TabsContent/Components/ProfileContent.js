import React, { useState } from "react";
import "./profileContent.css";
import { Button } from "@mui/material";
import ReviewAccordian from "./ReviewAccordian/ReviewAccordian";
function ProfileContent(props) {
  return (
    <div id="profile-content">
      <div style={{ display: "flex" }}>
        <div>
          <span id="text-review">{"You have "}</span>{" "}
          <span id="text-review-bold">769</span>{" "}
          <span id="text-review">{" total bad reviews!"}</span>
        </div>
        <Button
          disabled={
            props.reviewsSelected?.length <= 0 &&
            props.subReviewsSelected.length <= 0
          }
          style={{
            backgroundColor:
              props.reviewsSelected?.length > 0 ||
              props.subReviewsSelected.length > 0
                ? "#105C86"
                : "#D2D2D2",
            fontSize: "10px",
            color: "white",
            marginLeft: "auto",
          }}
          variant="contained"
          onClick={() => {
            props.setOpenDialog(true);
            props.setDialogType("orderSummary");
            props.setDialogTitle("Order Summary");
          }}
        >
          Remove Now
        </Button>
      </div>

      <div id="review-accordian">
        {props.profileData.map((data) => {
          return (
            <>
              <ReviewAccordian
                id={data.id}
                title={data.title}
                count={data.count}
                detail={`Removal Probability: ${data.removalProbability}`}
                reviewsSelected={props.reviewsSelected}
                setReviewsSelected={props.setReviewsSelected}
                data={data.data || []}
                subReviewsSelected={props.subReviewsSelected}
                setSubReviewsSelected={props.setSubReviewsSelected}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileContent;
