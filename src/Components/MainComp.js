import React, { useState } from "react";
import LeftMenu from "../Navigation/LeftMenu";
import Header from "../Navigation/Header/Header";
import Content from "./Content/Content";
import DialogCustom from "./UIComponents/Dialog";
import "./mainComp.css";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function MainComp() {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [orderReviewData, setOrderReviewData] = useState([
    {
      type: "google",
      reviewerName: "Mathew Johnson",
      reviewDate: "10-07-24",
      reviewContent: "The app is not working on liove etc etc",
      rating: "3",
      removalProbability: "99%",
      orderStatus: "Purchased",
      removalStatus: "Pending removal",
      remainingTime: "3hrs 20mins",
    },

    {
      type: "google",
      reviewerName: "Mathew Johnson",
      reviewDate: "10-07-24",
      reviewContent: "The app is not working on liove etc etc",
      rating: "3",
      removalProbability: "99%",
      orderStatus: "Purchased",
      removalStatus: "Online",
      remainingTime: "3hrs 20mins",
    },

    {
      type: "google",
      reviewerName: "Mathew Johnson",
      reviewDate: "10-07-24",
      reviewContent: "The app is not working on liove etc etc",
      rating: "3",
      removalProbability: "99%",
      orderStatus: "Not purchased",
      removalStatus: "Pending removal",
      remainingTime: "3hrs 20mins",
    },

    {
      type: "google",
      reviewerName: "Mathew Johnson",
      reviewDate: "10-07-24",
      reviewContent: "The app is not working on liove etc etc",
      rating: "3",
      removalProbability: "99%",
      orderStatus: "Purchased",
      removalStatus: "Offline",
      remainingTime: "3hrs 20mins",
    },
    {
      type: "google",
      reviewerName: "Mathew Johnson",
      reviewDate: "10-07-24",
      reviewContent: "The app is not working on liove etc etc",
      rating: "3",
      removalProbability: "99%",
      orderStatus: "Purchased",
      removalStatus: "Pending removal",
      remainingTime: "3hrs 20mins",
    },

    {
      type: "google",
      reviewerName: "Mathew Johnson",
      reviewDate: "10-07-24",
      reviewContent: "The app is not working on liove etc etc",
      rating: "3",
      removalProbability: "99%",
      orderStatus: "Purchased",
      removalStatus: "Online",
      remainingTime: "3hrs 20mins",
    },

    {
      type: "google",
      reviewerName: "Mathew Johnson",
      reviewDate: "10-07-24",
      reviewContent: "The app is not working on liove etc etc",
      rating: "3",
      removalProbability: "99%",
      orderStatus: "Not purchased",
      removalStatus: "Pending removal",
      remainingTime: "3hrs 20mins",
    },

    {
      type: "google",
      reviewerName: "Mathew Johnson",
      reviewDate: "10-07-24",
      reviewContent: "The app is not working on liove etc etc",
      rating: "3",
      removalProbability: "99%",
      orderStatus: "Purchased",
      removalStatus: "Offline",
      remainingTime: "3hrs 20mins",
    },
  ]);
  const [orderReviewCol, setOrderReviewCol] = useState([
    { name: "type", title: "Type", align: "center" },
    { name: "reviewerName", title: "Reviewer Name", align: "center" },
    { name: "reviewDate", title: "Review Date", align: "center" },
    { name: "reviewContent", title: "Review Content", align: "left" },
    { name: "rating", title: "Rating", align: "center" },
    { name: "removalProbability", title: "Probability", align: "left" },
    { name: "orderStatus", title: "Order Status", align: "left" },
    { name: "removalStatus", title: "Removal Status", align: "left" },
    { name: "remainingTime", title: "Remaining Time", align: "left" },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [checkout, setCheckout] = useState(false);

  const orderSummary = () => {
    return (
      <>
        <div id="summary-popup" className="row">
          <div className="col-6">
            <div id="first-name" className="order-summary-right-field">
              <span className="title-dialog-pitch">Full Name</span>
              <input
                type="text"
                className="input-dialog"
                placeholder="Enter firts name"
              />
            </div>

            <div id="first-name" className="order-summary-right-field">
              <span className="title-dialog-pitch">Email Address</span>
              <input
                type="text"
                className="input-dialog"
                placeholder="Enter email address"
              />
            </div>

            <div id="first-name" className="order-summary-right-field">
              <span className="title-dialog-pitch">Address</span>
              <input
                type="text"
                className="input-dialog"
                placeholder="Enter address"
              />
            </div>
          </div>

          <div className="col-6" style={{ backgroundColor: "#FBFBFB" }}>
            <div>
              <div className="order-summary-right-field-summary">
                <span className="item-field">Order ID</span>
                <span className="item-value">45687984</span>
              </div>

              <div className="order-summary-right-field-summary">
                <span className="item-field">Order Date</span>
                <span className="item-value">22/02/2023</span>
              </div>

              <div className="order-summary-right-field-summary">
                <span className="item-field">Service Type</span>
                <span className="item-value">Review Removal</span>
              </div>

              <div className="order-summary-right-field-summary">
                <span className="item-field">Review Platforms</span>
                <span className="item-value">Google, Yelp, Trip Adviser</span>
              </div>

              <div className="order-summary-right-field-summary">
                <span className="item-field">Total Reviews</span>
                <span className="item-value">000000</span>
              </div>

              <div className="order-summary-right-field-summary">
                <span className="item-field">Payment Method</span>
                <span className="item-value">Credit Card</span>
              </div>

              <div className="order-summary-right-field-summary">
                <span className="item-field">Billing Cycle</span>
                <span className="item-value">one-time payment</span>
              </div>
            </div>
            <div style={{ borderBottom: "2px solid #EEF0F4" }}></div>

            <div className="order-summary-right-field-summary">
              <span>Total</span>
              <span>$32.56</span>
            </div>

            <Button
              style={{
                backgroundColor: "#105C86",
                fontSize: "10px",
                color: "white",
                marginLeft: "auto",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              variant="contained"
              onClick={() => {
                setCheckout(true);
                setDialogTitle("");
                setDialogType("orderConfirmation");
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  const orderConfirmation = () => {
    return (
      <>
        <div style={{ display: "grid", textAlign: "center" }}>
          <CheckCircleIcon
            style={{
              color: "#00D881",
              fontSize: "50px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
          <span className="success">Success!</span>
          <span className="detail">
            Your order has been placed successfully!
          </span>
          <Button
            style={{
              backgroundColor: "#105C86",
              fontSize: "10px",
              color: "white",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "10px",
            }}
            variant="contained"
            onClick={() => {
              setCheckout(!checkout);
              setDialogTitle("");
              setDialogType("");
              setOpenDialog(false);
              setActiveModule("orders");
            }}
          >
            Done
          </Button>
        </div>
      </>
    );
  };

  return (
    <>
      <div id="main-ap">
        <div className="row" style={{ width: "100%" }}>
          <div>
            <LeftMenu
              activeModule={activeModule}
              setActiveModule={setActiveModule}
            />
          </div>

          <div style={{ marginLeft: "17%", width: "81%", paddingRight: "0px" }}>
            <Header activeModule={activeModule} />
            <Content
              activeModule={activeModule}
              setActiveModule={setActiveModule}
              orderReviewCol={orderReviewCol}
              orderReviewData={orderReviewData}
              setOpenDialog={setOpenDialog}
              setDialogType={setDialogType}
              setDialogTitle={setDialogTitle}
              checkout={checkout}
            />
          </div>
        </div>
        <DialogCustom
          open={openDialog}
          dialogType={dialogType}
          title={dialogTitle}
          dialogContent={
            dialogType == "orderSummary"
              ? orderSummary
              : dialogType == "orderConfirmation"
              ? orderConfirmation
              : () => console.log("content")
          }
          handleCloseDialog={() => {
            setOpenDialog(false);
            setDialogType("");
            setDialogTitle("");
          }}
        />
      </div>
    </>
  );
}

export default MainComp;
